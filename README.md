Tsixom Gemini Assistant

Firmware installation page:https://tsixom.github.io/M5StickC-Plus-2-Gemini-Assistant/

https://github.com/user-attachments/assets/2ec7fe54-fc65-4a01-b48d-056ae3cf4465



Features


Hold down Button C to open Clock Mode(for stealth) 

In Clock Mode, hold Button B to manually change the time and date.

Press Button A to start, pause, and stop the stopwatch.

Hold Buttons A + C simultaneously to enter AI Mode.

AI Mode Setup Instructions
On first start, the device will create a Wi-Fi portal named Tsixom Gemini Assistant.

Connect to this Wi-Fi portal.

You will enter the Wi-Fi Manager automatically. If not, open your browser and go to http://192.168.4.1 manually.

Select Configure Wi-Fi.

Choose your Wi-Fi network and enter your password.

Below the Wi-Fi credentials, enter your Gemini API key and the Speech-to-Text (STT) server URL.(follow the steps below to get stt url and gemini api) 

Click Save to start the AI Mode.

After saving, follow the on-screen instructions to use the AI features.

How to Obtain STT Server URL and Gemini API Key

https://github.com/user-attachments/assets/cff9d603-adcd-4a68-b347-6ee1ee7f0d13

Step 1: Create an AssemblyAI Account
Go to AssemblyAI and make a free account.

You will receive $50 in credits, which should be sufficient for usage.

Step 2: Get Your AssemblyAI API Key
Copy the API key from your AssemblyAI account dashboard.

Step 3: Prepare Your Deployment Files
Download the Files.zip from this repository.

Extract the contents.

Open index.js with a text editor.

Locate the placeholder APIKEYHERE and replace it with your AssemblyAI API key.

Save the file.

Step 4: Upload Files to GitHub
Create a GitHub account if you do not have one.

Create a new repository.

Upload both extracted files into the repository.

Important: Set the repository to Private to keep your API key confidential.

Step 5: Deploy to Render.com
Create an account on Render.com using your GitHub account.

In the Render dashboard, click New and select Web Service.

Connect your GitHub repository.

Choose the free plan.

Add an environment variable named ASSEMBLYAI_API_KEY with your API key as the value.

Deploy the service.

Step 6: Obtain Your STT Server URL
Once deployment completes, go to the primary URL provided by Render.com.

Verify that it is working correctly.

Use this URL with /stt appended as your STT server URL in the Wi-Fi manager.

Example: https://your-render-url.onrender.com/stt
