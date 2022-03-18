const Users = require('../model/Users');
const multer = require('multer');
const path = require('path');
let fs = require('fs-extra');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        console.log(__dirname);
        fs.mkdirsSync(__dirname + '/uploads/images');
        cb(null, 'uploads/images');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


const getUserInfoById = async (req, res) => {
    const { id } = req.query;
    const user = await Users.find({_id: id});
    if(user){
        return res.send({
            user: user,
        });
    }else{
        return res.send({
            status: 'error',
            user: [],
        });
    }

}

const uploadAvatar = async (req, res) => {
    let upload = multer({ storage: storage}).single('Users_pic');
    try{
        upload(req, res, function(err) {
            const file = req?.files?.image;
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
            
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            }
            else if (!file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }
            const filePath = '/uploads/avatars/' + Date.now() + file.name;
            file.mv('./public' + filePath);
    
            res.send({
                status: 'ok',
                filePath: filePath
            });
        });
    }catch(error){
        return res.send(error);
    }
    
}

const signUpWithEmail = async (req, res) => {
    const {
        userEmail,
        password,
    } = req.body;
    const oldUser = await Users.find({email: userEmail});
    if(oldUser && oldUser.length > 0){
        return res.send({
            status: 'already Exist',
            oldUser: oldUser
        })
    }

    const newUsers = new Users({
        email: userEmail,
        password: password,
    })

    const savedUser = await newUsers.save();

    return res.send({
        status: 'ok',
        data: JSON.stringify(savedUser)
    });
}

const signInWithEmail = async (req, res) => {
    const {
        userEmail,
        password,
    } = req.body;
    const users = await Users.find({email: userEmail});
    const user = users[0];
    if(user){
        if(password === user.password){
            return res.send({
                status: 'ok',
                userInfo: user
            })
        }else{
            return res.send({
                status: 'error',
                message: 'passwrod not matched'
            })
        }
    }else{
        
        return res.send({
            status: 'error',
            message: 'User is not existed'
        });
    }
}



const upDateProfile = async (req, res) => {
    const { id } = req.params;
    const {
        avatarPath: avatarPath, 
        userName: userName,
        location: location,
        shortBio: shortBio,
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.avatarPath = avatarPath;
    user.userName = userName;
    user.location = location;
    user.shortBio = shortBio;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

const upDateAccountSetting = async (req, res) => {
    const { id } = req.params;
    const {
        userName: userName,
        userEmail: userEmail,
        password: password,
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    if(user.password !== password){
        return res.send({
            status: 'error',
            error: 'password incorrect'
        })
    }

    user.updatedAt = Date.now();
    user.userName = userName;
    user.email = userEmail;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

const upDatePassword = async (req, res) => {
    const { id } = req.params;
    const {
        oldPassword: oldPassword,
        newPassword: newPassword,
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    if(user.password !== oldPassword){
        return res.send({
            status: 'error',
            error: 'password incorrect'
        })
    }

    user.updatedAt = Date.now();
    user.password = newPassword;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

const upDateSocialProfile = async (req, res) => {
    const { id } = req.params;
    const {
        twitter: twitter, 
        instagram: instagram, 
        dribbble: dribbble, 
        behance: behance,
        isGoogle: isGoogle,
        isFacebook: isFacebook
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.twitter = twitter;
    user.instagram = instagram;
    user.dribbble = dribbble;
    user.behance = behance;
    user.isGoogle = isGoogle;
    user.isFacebook = isFacebook;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

const upDateEmailNotification = async (req, res) => {
    const { id } = req.params;
    const {
        emailNotification: emailNotification, 
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.emailNotification = emailNotification;

    const saveduser = await user.save();
    return res.send({
        status: 'ok',
        user: saveduser,
    });
}

module.exports = {
    getUserInfoById,
    uploadAvatar,
    signUpWithEmail,
    signInWithEmail,
    upDateProfile,
    upDateAccountSetting,
    upDatePassword,
    upDateSocialProfile,
    upDateEmailNotification
};
  