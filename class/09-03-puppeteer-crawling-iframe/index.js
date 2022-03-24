
import puppeteer from "puppeteer";

async function startCrawling(){  //전부 await 필요
    const browser = await puppeteer.launch({headless : false})
    const page = await browser.newPage()
    await page.setViewport({width:1280,height:720})
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930")
    await page.waitForTimeout(1000)
    const framePage = await page.frames().find(el=>el.url().includes("/item/sise_day.naver?code=005930"))
    
    for(let i=3; i<7;i++){
        await page.waitForTimeout(500)
        const price = await framePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,(el)=>el.textContent)
        const date = await framePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`,(el)=>el.textContent)
    console.log(price, date)
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