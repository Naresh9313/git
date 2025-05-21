const User =  require('../model/user');


module.exports.Register = async(req,res) => {
    try{
    const {name,email,password} = req.body;

    const user = new User({name,email,password});
    await user.save();
            res.status(201).json({ message: "User registered successfully."});


    }
    catch(error){
 console.error(error);
        res.status(500).json({ message: "Server error." });

    }

    
}


module.exports.GetUser = async(req,res) => {
    try{
        const user = await User.find();

        return res.status(200).json({
            message:"user data find successfully",
            data:user
        })

    }catch(error){
        console.log('get find error!!')
        return res.status(500).json({
            error:"error!"
        })
    }
}





module.exports.updateUser = async(req,res) => {
    try{
    const {id} = req.query;
    const updateData = req.body;

const updateuser = await User.findByIdAndUpdate(id,updateData,{new:true});

return  res.status(200).json({
    message:"update find ",
    data:updateuser
})

}catch(error){
    console.log('err');
    

}
}




module.exports.deleteUser = async (req,res) => {
    try{
    const {id} = req.query;
    const deleteUser = await User.findByIdAndDelete(id);

 return  res.status(200).json({
    message:"delete find ",
    data:deleteUser
})

}catch(error){
    console.log('err');
    

}
}