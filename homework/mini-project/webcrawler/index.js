
import puppeteer from "puppeteer";
import mongoose from "mongoose"
import {Starbucks} from './models/starbucks.model.js'

mongoose.connect("mongodb://localhost:27017/0tae") //name resolution : 각각 포트포워딩할 필요없이 네이밍해서 해결


async function startCrawling(){  //전부 await 필요
    const browser = await puppeteer.launch({headless : false})
    const page = await browser.newPage()
    await page.setViewport({width:1280,height:720})
    await page.goto("https://www.starbucks.co.kr/menu/drink_list.do")
    await page.waitForTimeout(1000)
    const framePage = await page.frames().find(el=>el.url().includes("/menu/drink_list.do"))
    
    for(let i=1; i<=10;i++){
        await page.waitForTimeout(500)
        const menuName = await framePage.$eval(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dd`,(el)=>el.textContent)
        const menuImage = await framePage.$eval(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dt > a > img`,(el)=>el.src)
        console.log(`이름 : ${menuName}, 이미지 : ${menuImage}`)
        const stock=new Starbucks({
        name: menuName,
        img: menuImage
        })
        await stock.save()

    }
    

    await browser.close()

    // const stage=await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span", (el)=>el.textContent ) 
    // await page.waitForTimeout(1000)

    // const location=await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)", (el)=>el.textContent)
    // await page.waitForTimeout(1000)

    // const price = await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",(el)=>el.textContent)
    // await page.waitForTimeout(1000)

    // await console.log(stage,location,price)
}
startCrawling()