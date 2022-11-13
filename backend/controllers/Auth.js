import User from '../models/UserModel.js';
import argon2 from 'argon2';

export const Login = async (req, res) => {
    const user = await User.findOne({        
        where: {
            email: req.body.email
        }
    });

    if(!user) return res.status(404).json({msg: "User not found or not registered..."});

    const match = await argon2.verify(user.password, req.body.password);

    if(!match) {
        return res.status(400).json({msg: 'Wrong Password'})
    };

    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const first_name = user.first_name;
    const family_name = user.family_name;
    const date_of_birth = user.date_of_birth;
    const email = user.email;
    const role = user.role;

    res.status(200).json({uuid, first_name, family_name, date_of_birth, email, role});
}

export const Me = async (req, res) => {
    if(!req.session.userId){
        return res.status(401).json({msg: 'Please, Log In!'});
    }

    const user = await User.findOne({
        attributes:['uuid', 'first_name', 'family_name', 'date_of_birth', 'email', 'role'],     
        where: {
            uuid: req.session.userId
        }
    });

    if(!user) return res.status(404).json({msg: "User not found or not registered..."});
    res.status(200).json(user);
}

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.status(400).json({msg: 'You could not log out..'});

        res.status(200).json({msg: 'Log out success...'});
    });
}