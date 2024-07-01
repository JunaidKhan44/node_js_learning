// console.log("node project started");
const mailer = require('nodemailer')

let transport = mailer.createTransport({
    service:'gmail',
    auth:{
        user:'abc@gmail.com',
        pass:'abc123'
    }
})

let messageOb ={
   
    from:'abc@gmail.com',
    to:'abc@gmail.com',
    subject:'Application',
    text:'This is dummy application email'
}

transport.sendMail(messageOb,(error,info)=>{

    if(error){
        console.log(error);
    }else{
        console.log("email sent successfully");
        console.log(info.response);
    }
})
