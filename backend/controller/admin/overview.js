const Users = require('../../model/Users');

const adminSignUp = async(req, res) => {
    const {
        email,
        firstName,
        lastName,
        password,
    } = req.body;
    const oldUser = await Users.find({email: email});
    if(oldUser && oldUser.length > 0){
        return res.send({
            status: 'already Exist',
            oldUser: oldUser
        })
    }

    const newAdmin = new Users({
        email,
        firstName,
        lastName,
        password,
        type: 3
    })

    const savedAdmin = await newAdmin.save();

    return res.send({
        status: 'ok',
        admin: savedAdmin
    });
}

const adminSignIn = async (req, res) => {
    const {
        email,
        password,
    } = req.body;
    const users = await Users.find({email: email});
    const user = users[0];
    if(user){
        if(password === user.password){
            return res.send({
                status: 'ok',
                admin: user
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

module.exports = {
    adminSignUp,
    adminSignIn,
};
  
