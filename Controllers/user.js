const User = require('../Modals/user');
const bcrypt = require('bcryptjs');

exports.signUp = async(req,res)=>{
    console.log("In signup")
     try{
        const { channelName, userName, about, profilePic, password } = req.body;
        const isExist = await User.findOne({ userName });
        console.log(isExist)
        if(isExist){
            res.status(400).json({ error:"Username Already Exists  Please try with other username"});
        }else{
            let updatedPass = await bcrypt.hash(password,10)
            const user = new User({ channelName,userName, about, profilePic, password: updatedPass});
            await user.save();
            res.status(201).json({ message: 'User registered successfully', success: "yes",data:user });
        }
       
        
    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}