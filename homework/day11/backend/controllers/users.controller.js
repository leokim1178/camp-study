import { User } from "../models/user.model.js";



export class UsersController{
    getUsers= async(req, res) => {
        const result = await User.find();
        res.send(result);
      }
}