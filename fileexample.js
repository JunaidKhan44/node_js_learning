const fs=require('fs')
//read file

// fs.readFile("./abc.txt",(error,data)=>{

//     if(error){
//         console.log("error");
//         console.log(error);
//     }else{

//         console.log(data.toString());

//     }

// });

// console.log("terminated");

//write file
// let content = "wow this is dynamic content";
// fs.writeFile("./new_File.txt",content,(err) =>{

//     if(err){
//         console.log(err);
//     }else{
//         console.log("saved");
//     }

// });

//append 

// fs.appendFile("./abc.txt","new content",(err)=>{

//     if(err){
//         console.log("error "+err)
//     }else{
//         console.log("saved")
//     }

// });

//delete
 

fs.unlink("./new_File.txt",(err) =>{

    if(err){

        console.log(err);
    }else{

        console.log("deleted");
    }

});
