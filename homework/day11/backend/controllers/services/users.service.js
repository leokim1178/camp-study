import { User } from "../../models/user.model.js";



export class UsersService {

    findUsers = async()=>{
        return await User.find()
    }

}