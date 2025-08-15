const express = require('express');
const axios = require('axios');
const getRawBody = require('raw-body');

const app = express();
const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY || 'YOUR_API_KEY_HERE';
const ASSEMBLYAI_BASE = 'https://api.assemblyai.com/v2';

const headers = {
  'Authorization': ASSEMBLYAI_API_KEY,
  'Content-Type': 'application/json'
};

app.post('/stt', async (req, res) => {
  try {
    // Check content type
    if ((req.get('content-type') || '').toLowerCase() !== 'audio/wav') {
      return res.status(400).json({ error: 'Content-Type must be audio/wav' });
    }

    // Get raw audio data
    const audioBuffer = await getRawBody(req, { length: req.headers['content-length'] });
    
    // Step 1: Upload audio to AssemblyAI
    const uploadResponse = await axios.post(`${ASSEMBLYAI_BASE}/upload`, audioBuffer, {
      headers: {
        'Authorization': ASSEMBLYAI_API_KEY,
        'Content-Type': 'application/octet-stream'
      }
    });
    
    const audioUrl = uploadResponse.data.upload_url;

    // Step 2: Submit transcription job
    const transcriptResponse = await axios.post(`${ASSEMBLYAI_BASE}/transcript`, {
      audio_url: audioUrl,
      language_code: 'en_us' // Change as needed
    }, { headers });

    const transcriptId = transcriptResponse.data.id;

    // Step 3: Poll for completion
    let transcript = null;
    let attempts = 0;
    const maxAttempts = 30; // 30 seconds timeout

    while (!transcript && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      
      const statusResponse = await axios.get(`${ASSEMBLYAI_BASE}/transcript/${transcriptId}`, { headers });
      const status = statusResponse.data.status;
      
      if (status === 'completed') {
        transcript = statusResponse.data.text || '';
        break;
      } else if (status === 'error') {
        throw new Error('Transcription failed');
      }
      
      attempts++;
    }

    if (!transcript) {
      throw new Error('Transcription timeout');
    }

    return res.json({ text: transcript });

  } catch (error) {
    console.error('STT Error:', error.message);
    return res.status(500).json({ 
      error: 'stt_failed', 
      detail: error.message 
    });
  }
});

app.get('/', (req, res) => res.send('AssemblyAI STT Proxy OK'));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
