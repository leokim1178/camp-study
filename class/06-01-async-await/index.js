
import axios from 'axios'
function fetchPost(){
    const result= axios.get("https://koreanjson.com/posts/1")
    console.log('======================')
    console.log(result) //Promise {[pending]}
    console.log('=======================')

}
fetchPost()


async function fetchPost2(){
    const result= await axios.get("https://koreanjson.com/posts/1") 
    console.log("=======================")
    console.log(result) //Promise {[pending]}
    console.log(result.data.title)
    console.log('========================')

    
}
fetchPost2()