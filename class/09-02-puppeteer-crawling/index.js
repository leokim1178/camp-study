
import puppeteer from "puppeteer";

async function startCrawling(){  //전부 await 필요
    const browser = await puppeteer.launch({headless : false})
    const page = await browser.newPage()
    await page.setViewport({width:1280,height:720})
    await page.goto("https://www.goodchoice.kr/product/search/2")

    const stage=await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span", (el)=>el.textContent ) 
    await page.waitForTimeout(1000)

    const location=await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)", (el)=>el.textContent)
    await page.waitForTimeout(1000)

    const price = await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",(el)=>el.textContent)
    await page.waitForTimeout(1000)

    await console.log(stage,location,price)
}
startCrawling()