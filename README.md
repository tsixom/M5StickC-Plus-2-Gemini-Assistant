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
