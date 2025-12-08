const mongoose= require('mongoose');
const jobSchema=new mongoose.Schema({
    jobTitle:{
        type:String,
        required:true
    }, 
      location:{
        type:String,
        required:true
    },
       jobType:{
        type:String,
        required:true
    },
       salary:{
        type:Number,
        required:true
    },
       qualification:{
        type:String,
        required:true
    },
       experience:{
        type:Number,
        required:true
    },
       description:{
        type:String,
        required:true
    }

})
module.exports=mongoose.model("Job",jobSchema)