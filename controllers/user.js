import { User } from "../models/user.js";

export const getAllUsers= async (req, res) => {

    const USERS = await User.find({})
    const keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users: USERS
    })
}


export const register= async (req, res) => {
    const { name, email, password } = req.body

    await User.create({
        name, email, password
    })
    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Registered Sucessfully"
    })
}


export  const specialFunc =(req,res)=>{
    res.json({
        success: true,
        message: "just joking "
       
    });
}

export const getUserDetails = async (req, res) => {
    const { id } = req.params;
       const UsEr= await User.findById(id)
   
    res.json({
        success: true,
        user: UsEr
       
    });
}