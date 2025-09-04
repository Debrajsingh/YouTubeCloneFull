const Video = require('../Modals/video');


exports.uploadVideo = async (req,res)=>{
    try{
        const { title, description, videoLink, videoType,thumbnail }  = req.body;
        
        const videoUpload = new Video({ user: req.user._id, title, description, videoLink, videoType, thumbnail });
        await videoUpload.save();
        
        res.status(201).json({ sucess: "true", videoUpload });

    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}