import axios from "axios";
import cheerio from "cheerio";


async function createBoardAPI(mydata){

    const targetURL =mydata.contents.split(" ").filter((el)=> el.startsWith("http"))[0]
    let data ={}
    const aaa=await axios.get("https://naver.com")
    const $= cheerio.load(aaa.data)
    $("meta").each((_,el,)=>{
        if($(el).attr('property')){
        const key=$(el).attr('property').split(":")[1]       // map이나 filter같이
        const value=$(el).attr('content')  
        data[key]=value
        
    }})
console.log(data)
// map이나 filter같이
}
const frontendData={
    title: "안녕하세요!~",
    contents:"여기 정말 좋은거 같아요! 한번 꼭 놀러오세요!! 여기가 어디냐면 https://naver.com이에요"
}
createBoardAPI(frontendData)