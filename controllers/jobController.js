const jobs =require('../models/jobModel')

exports.addJob = async (req, res) => { 
    console.log("Inside Add Job"); 
    const {jobTitle,location,jobType,salary,qualification,experience,description} = req.body
   
   
    console.log(jobTitle,location,jobType,salary,qualification,experience,description);
    try{
        const existingJob = await jobs.findOne({jobTitle,location})
        console.log(existingJob);
        
        if(existingJob){
            res.status(401).json("You have already added the job")
            
            
        }else{
            
            const newJob = new jobs({
                jobTitle,location,jobType,salary,qualification,experience,description
            })
            console.log(newJob);
            
            await newJob.save()
            res.status(200).json({messge:"Job Added",newJob})
        }
    }catch(err){
        res.status(500).json(err)
    }
    
}

exports.getJobs = async(req,res)=>{
    try {
        const allJobs = await Jobs.find()
        res.status(200).json(allJobs)
    } catch (error) {
        res.status(500).json("err"+error)
    }
}



exports.deleteJob=async(req,res)=>{
    console.log(req.params);

    const {id} = req.params

    try{
        const deletedJob = await Jobs.findByIdAndDelete({_id:id})
        console.log(deletedJob);

        res.status(200).json({message:"Job Deleted",deletedJob})
        
    }catch(err){
        res.status(500).json("Err"+err)
    }
    
}