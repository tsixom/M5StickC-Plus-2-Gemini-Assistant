Holding down button C will open Clock mode
Clock mode- Holding Button B will let u manually change the time and date
Pressing Button A will start,pause and stop the stopwatch
By holding Button A + C you can enter the AI mode
on first start itll start a wifi portal with name "Tsixom Gemini Assistant"
after connecting to it , youll enter the wifi manager(if u cant, enter 192.168.4.1 manually)
select "Configure wifi" there then select your wifi and enter ur password. below that enter ur gemini api and stt server url then hit "save"
itll no start the ai mode. read the instructions there

https://tsixom.github.io/M5StickC-Plus-2-Gemini-Assistant/


tutorial on how to get the stt url and gemini api key

https://github.com/user-attachments/assets/cff9d603-adcd-4a68-b347-6ee1ee7f0d13

1.Make a AssemblyAi account (for free). You'll get $50 credits which is more than enough. 
2.Copy the API key from AssemblyAi. 
3.Download Files.zip from this page and extract it. 
4.Open index.js via notepad or any texteditor and paste your API key where it's written APIKEYHERE
5.Save it and then make a GitHub account. 
6.Make a new repository and upload both the files there 
7.CAREFUL:select private and not public while uploading the files since it has your API key
8.Now go to Render.com and make an account with GitHub (the same account) 
9.Go to dashboard then click on new on the top. 
select web and connect git provider with ur repository
10.Select free plan and at the bottom in Environment Variables write ASSEMBLYAI_API_KEY and click on deply
11.Wait a bit for it to deploy. Now click on the primary URL to check everything's working fine. 
12.That primary url will be ur stt url but add /stt at the end. 
for eg. https:test-xyz.onrender.com/stt
 make this look more professional for me to upload it on GitHub as readme.md

# Tsixom Gemini Assistant

## Features

- Hold down Button C to open **Clock Mode**.
- In Clock Mode, hold Button B to manually change the time and date.
- Press Button A to start, pause, and stop the stopwatch.
- Hold Buttons A + C simultaneously to enter **AI Mode**.

## AI Mode Setup Instructions

1. On first start, the device will create a Wi-Fi portal named `Tsixom Gemini Assistant`.
2. Connect to this Wi-Fi portal.
3. You will enter the Wi-Fi Manager automatically. If not, open your browser and go to `http://192.168.4.1` manually.
4. Select **Configure Wi-Fi**.
5. Choose your Wi-Fi network and enter your password.
6. Below the Wi-Fi credentials, enter your Gemini API key and the Speech-to-Text (STT) server URL.
7. Click **Save** to start the AI Mode.

*After saving, follow the on-screen instructions to use the AI features.*

## How to Obtain STT Server URL and Gemini API Key

### Step 1: Create an AssemblyAI Account

- Go to [AssemblyAI](https://www.assemblyai.com/) and make a free account.
- You will receive $50 in credits, which should be sufficient for usage.

### Step 2: Get Your AssemblyAI API Key

- Copy the API key from your AssemblyAI account dashboard.

### Step 3: Prepare Your Deployment Files

- Download the `Files.zip` from this repository.
- Extract the contents.
- Open `index.js` with a text editor.
- Locate the placeholder `APIKEYHERE` and replace it with your AssemblyAI API key.
- Save the file.

### Step 4: Upload Files to GitHub

- Create a GitHub account if you do not have one.
- Create a new repository.
- Upload both extracted files into the repository.
- **Important:** Set the repository to **Private** to keep your API key confidential.

### Step 5: Deploy to Render.com

- Create an account on [Render.com](https://render.com/) using your GitHub account.
- In the Render dashboard, click **New** and select **Web Service**.
- Connect your GitHub repository.
- Choose the free plan.
- Add an environment variable named `ASSEMBLYAI_API_KEY` with your API key as the value.
- Deploy the service.

### Step 6: Obtain Your STT Server URL

- Once deployment completes, go to the primary URL provided by Render.com.
- Verify that it is working correctly.
- Use this URL with `/stt` appended as your **STT server URL** in the Wi-Fi manager.
  - Example: `https://your-render-url.onrender.com/stt`

***

*For any issues or further instructions, please refer to the device interface after setup.*

