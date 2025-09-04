const Comment = require('../Modals/comment');



exports.addComment = async(req,res)=>{
    try{
        let {video, message} = req.body;
        const comment = new Comment({user:req.user._id,video,message});
        await comment.save();

        res.status(201).json({
            essage:"Success",
            comment
        });

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


