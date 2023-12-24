const userModel = require("../../Models/userSchema");

const checkUserExist = async(username, password)=>{
    try{
        const user = await userModel.findOne({username: username});
        if(user){
            if(password === user.password){
                return user;
            }else{
                console.error("Password mismatch")
                return null
            }
        }
        return null;
    }catch(err){
        console.error(err);
    }
    
}

module.exports = checkUserExist