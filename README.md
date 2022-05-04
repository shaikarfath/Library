# Library Test

The purpose of the project is to create a website to provide the users with the books available to them by fitering the results through their entered titles.

>How to Open Project

To open the project, Go to the project repository on the GitHub site and edit the link to be in the exact way or simply copy and paste the following link to access the poject.

    https://gitpod.io/#github.com/shaikarfath/Library
    
 The project will be opened on the GitPod. 
 
 >What to Install

Once you are on the GitPod, there will be a terminal that is opened in the bottom. On the terminal, to install "express" type in the following command
  
    npm install express
    
Note: If there is an error showing up, then navigate to the "package.json" file and remove the following depenency from the file

    "node-bin-darwin-arm64": "^17.7.1",

    
Note: If there is an error saying "axios" is not found, install "axios" using the following command 

    npm install axios
    
Once everything is installed sucessfully, it is now time to run the application using the following command

    node index.js
    
There will be a pop up box saying The website runs on port 3000, and on that, click on "open in new browser"    

Now, stop the program using the command, `ctr+c` on terminal.

## Testing

For the testing part, we are using two different types of testing for the front-end and the back-end.

>>Front-end testing

For the front-end testing, we are using `Protractor`

Note: Since Git Version Control doesn't support Protractor, the testing needs to be done manually on your system. Make sure your sysytem have Chrome and Java installed on it and are up-to-date.

>>>How to Install

### For WINDOWS

- The basic step is to go to the repository and download the Zip file
    - The downloaded file will be saved under downloads on your pc
    - Unzip/ extract the file 
    - And since the packages are not installed to run the program, the next steps will be to install the necessary packages
- First step is to install Node JS on Windows
    - On a browser, navigate to https://nodejs.org/en/download/ and download the desired version for your Windows
    - Verify the installation by opening a command prompt on windows and type the following command `node -v`
- Second step is to install Express package for the project to run
    - On the same command prompt, install express by using the following command `npm install express`
- Third step is to install Axios package for the project
    - On the same command prompt, install axios by using the following command `npm install axios`
- Run the program on command prompt using the following commands 
    - On the samecommand prompt, the project needs to be pulled up and the commands will be as follows 
     `cd downloads`
     `cd Library-test`
     `cd Library-test`

Note: If when the downloaded and extracted file doesn't have a "library-test" file in the actual file, then only use one `cd Library-test` command to run the program command

- Once you are in the Library-test directory, use the command `node index.js` to run the program and it will give you a message saying the "App is running on Port 3000!". Leave the command prompt running in the background

- Installing Protractor
    - On a new command prompt, and type `npm install –g protractor` to install it globally
    - Once it's installed, then on the same command prompt, type `webdriver-manager update`
    - And the next command is `webdriver-manager start` to start web driver 
    
    Note: Once the web driver is started, if it doesn't run on port 4444, then there is something wrong in the setup. Quit following the next steps and reinstall protractor again.

>>How to Run Tests

On a new command prompt, navigate to the directory Library-test using the same commands 

    - cd downloads
    - cd Library-test
    - cd Library-test
    - protractor protractor.conf.js

Then there will be a pop-up that asks you to set/ pick a browser of your choice to run the tests (Chrome is best browser) and the tests will be running on the browser and after all the entered tests are performed, the command prompt will give you a message that mentions all the passed tests and the total tests along with the failed tests. 

### FOR MAC
Note: For Mac M1 please navigate to the "package.json" file and add the following depenency from the file. Remeber this arm64 version should match with your node version.

    "node-bin-darwin-arm64": "^17.7.1",
    
- The basic step is to go to the repository and download the Zip file
    - The downloaded file will be saved under downloads on your pc
    - Unzip/ extract the file 
    - And since the packages are not installed to run the program, the next steps will be to install the necessary packages
- First step is to install Node JS on Windows
    - On a browser, navigate to https://nodejs.org/en/download/ and download the desired version for your Windows
    - Verify the installation by opening a terminal and type the following command `node -v`
- Second step is to install Express package for the project to run
    - On the same terminal, install express by using the following command `npm install express`
- Third step is to install Axios package for the project
    - On the same terminal, install axios by using the following command `npm install axios`
- Run the program on command prompt using the following commands 
    - On the same command prompt, the project needs to be pulled up and the commands will be as follows 
     `cd downloads`
     `cd Library-test`
     `cd Library-test`

Note: If when the downloaded and extracted file doesn't have a "library-test" file in the actual file, then only use one `cd Library-test` command to run the program command

- Once you are in the Library-test directory, use the command `node index.js` to run the program and it will give you a message saying the "App is running on Port 3000!". Leave the command prompt running in the background

- Installing Protractor
    - On a new terminal, and type `npm install –g protractor` to install it globally
    - Once it's installed, then on the same command prompt, type `webdriver-manager update`
    - And the next command is `webdriver-manager start` to start web driver 
    
    Note: Once the web driver is started, if it doesn't run on port 4444, then there is something wrong in the setup. Quit following the next steps and reinstall protractor again.

>>How to Run Tests

On a new terminal, navigate to the directory Library-test using the same commands 

    - cd downloads
    - cd Library-test
    - cd Library-test
    - protractor protractor.conf.js

Then the selected browser pops up with the website and the tests are run one by one. Once the tests are done, terminal receives a message with how many specs passed or failed and total specs. 

Note: You can select the browser in the protractor.conf.js file.

>>Back-end Testing

For back-end testing, we are using JestJS. Unlike protractor, Git Version control supports Jest. So you can go to the gitpod and run the following steps.

>>>How to run tests

 On a terminal in the gitpod, type the following command to run jest test cases
 
        npm run test
        
The command helps run the tests in the background, and the terminal will give you a message saying how many tests passed, failed and the total number of tests included. 
