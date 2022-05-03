# Library Test

The purpose of the project is to create a website to provide the users with the books available to them by fitering the results through their entered titles.

>How to Open Project

To open the project, Go to the project repository on the GitHub site and edit the link to be in the exact way or simply copy and paste the following link to access the poject.

    https://gitpod.io/#github.com/shaikarfath/Library
    
 The project will be opened on the GitPod. 
 
 >What to Install

Once you are on the GitPod, there will be a terminal that is opened in the bottom. On the terminal, to install "express" type in the following command
  
    npm install express
    
Note: If there is an error saying "axios" is not found, install "axios" using the following command 

    npm install axios
    
Once everything is installed sucessfully, it is now time to run the application using the following command

    node index.js
    
Note: If there is an error showing up, then navigate to the "package.json" file and remove the following depenency from the file

    "node-bin-darwin-arm64": "^17.7.1",

There will be a pop up box saying The website runs on port, and on that, click on "open in new browser"    

Now, stop the program using the command, `ctr+c` on terminal.

## Testing

For the testing part, we are using two different types of testing for the front-end and the back-end.

>>Front-end testing

For the front-end testing, we are using `Protractor`

>>>How to Install

### For WINDOWS

- The basic step is to go to the repository and download the Zip file
    - The downloaded file will be saved under downloades on your pc
    - Unzip/ extract the file 
    - On a command prompt, the project needs to be pulled up and the commands will be as follows 
        - `cd downloads`
        - `cd Library-test`
        - `cd Library-test`
    - And since the packages are not installed to run the program, the next steps will be to install the necessary packages
- First step is to install Node JS on Windows
    - On a browser, navigate to https://nodejs.org/en/download/ and download the desired version for your Windows
    - Verify the installation by opening a command prompt on windows and type the following command `node -v`
- Second step is to install Express package for the project to run
    - On a new command prompt, install express by using the following command `npm install express`
- Third step is to install Axios package for the project
    - On a new command prompt, install axios by using the following command `npm install axios`

- Installing Protractor
    - On a new command prompt, and type `npm install –g protractor` to install it globally
    - Once it's installed, then on the same command prompt, type `webdriver-manager update`
    - And the next command is `webdriver-manager start` to start web driver 
    
    Note: Once the web driver is started, if it doesn't run on port 4444, then there is something wrong in the setup. Quit following the next steps and reinstall protractor again.
