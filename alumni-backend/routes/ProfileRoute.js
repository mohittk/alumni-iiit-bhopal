const express = require('express');
const router = express.Router();
const StudentSchema = require("../models/studentProfile");

router.post('/add-profile', async(req, res) => {
    try {
        const {name, email, batch, branch} = req.body;

        const checkEmail = await StudentSchema.findOne({email});
        if(checkEmail){
            return res.json({"message" : "Student Email already Exists"});
        }
    
        const profile = new StudentSchema({
            name, email, batch, branch
        });
    
        await profile.save();
        return res.json({"Message" : "Student Profile added succesfully", profile});
    
    } catch (err) {
        console.error(err.message);
        return res.json({"Error" : err.message});
    }
  
});

router.get('/get-all-profiles', async(req, res) => {
    try {
        const profiles = await StudentSchema.find();
        console.log(profiles);
        return res.json({"Message" : profiles});
    } catch(err){
        return res.json({"Error" : err});
    }
});


router.get('/get-by-year', async(req, res) => {
    try {
        const getProfiles = await StudentSchema.find();
        var uniqueYear = new Set();

        // console.log(getProfiles[0].batch);
        for(var i=0;i<getProfiles.length;i++){
            // yearArray.push(getProfiles[i].batch);
            uniqueYear.add(getProfiles[i].batch);
        }
        const yearArray = Array.from(uniqueYear);
        console.log(yearArray);

        var getNewProfiles;
        const newArr = []; 

        for(var i=0; i<yearArray.length;i++){
            getNewProfiles = await StudentSchema.find({batch: yearArray[i]});
            newArr.push([yearArray[i], getNewProfiles]);
            console.log(yearArray[i]);
            console.log(getNewProfiles);
        }                   
        


        return res.json({"Message": newArr});
    } catch(err){
        return res.json({"Error" : err});
    }
})



module.exports = router;