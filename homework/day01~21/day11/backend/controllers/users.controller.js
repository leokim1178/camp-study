
import { UsersService } from "./services/users.service.js";



export class UsersController{
    getUsers= async(req, res) => {
      const usersController = new UsersService()
      const result = await usersController.findUsers()
      res.send(result);
    }
}