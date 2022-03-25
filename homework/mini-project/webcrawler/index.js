import axios from "axios";
import cheerio from "cheerio";


export async function getOg(user){
    let data= new Object()
    const targetURL = user.prefer
    const aaa=await axios.get(targetURL)
    const $= cheerio.load(aaa.data)
    $("meta").each((_,el,)=>{
        if($(el).attr('property')){
        const key=$(el).attr('property').split(":")[1]       // map이나 filter같이
        const value=$(el).attr('content')    
        data[key]=value
        } 
    })
    console.log(data)
    return data
}