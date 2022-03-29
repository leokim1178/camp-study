import { Starbucks } from "../../models/starbucks.model.js";




export class StarbucksService{

    findStarbucks=async()=>{
        await Starbucks.find();
    }
}