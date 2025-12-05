const jobs =require('../models/jobModel')

exports.addJob = async (req, res) => { 
    console.log("Inside Add Book"); 
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