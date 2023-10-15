--express cmd
npm install express
npm init
email_sender (project name)
 node app.js
 or add into script package .json
 "start" : "node app.js"
 npm start
 npm install express
 npm uninstall express
 npm install nodemailer
 npm install nodemon

 replace 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  }

  with 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  }