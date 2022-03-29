import { StarbucksService } from "./services/starbucks.service.js";


export class StarbucksController{
    getStarbucks=async (req, res) => {
        const starbucksService= new StarbucksService()
        const result = await starbucksService.findStarbucks();
        res.send(result);
      }

}