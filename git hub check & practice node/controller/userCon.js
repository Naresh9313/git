const User = require('../model/user');


module.exports.Register = async (req,res) => {
    try{
    const {name,email,password} = req.body;


    const user = new User({name,email,password})

    await user.save();

    return res.status(200).json({
        message:"Register successfully!!"
    });
    }catch(error){
        console.log('register errorr!!');

        return res.status(500).json({
            error:"An file occuring in register error!!"

        })
    }

}


module.exports.get  = async(req,res) => {
    try{
        const user = await User.find();

    return res.status(200).json({
        message:"get successfully!!",
        data:user,
    });
    }catch(error){
        console.log('get errorr!!');

        return res.status(500).json({
            error:"An file occuring in get error!!"

        })
    }
}


module.exports.update = async(req,res) => {
    try{
    const {id} = req.query ;
    const updateData = req.body;

    const updateUser = await User.findByIdAndUpdate(id,updateData,{new:true});

   return res.status(200).json({
        message:"update successfully!!",
        data:updateUser,
    });
    }catch(error){
        console.log('update errorr!!');

        return res.status(500).json({
            error:"An file occuring in update error!!"

        })
    }

}




module.exports.delete = async(req,res) => {
    try{
        const {id} = req.query;

        const deleteUser = await User.findByIdAndDelete(id);
        

     return res.status(200).json({
        message:"delete successfully!!",
        data:deleteUser,
    });
    }catch(error){
        console.log('delete errorr!!');

        return res.status(500).json({
            error:"An file occuring in delete error!!"

        })
    }
}