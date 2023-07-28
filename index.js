require('dotenv').config()
const puppeteer = require('puppeteer');

async function stRobot() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const stUrl = 'https://sociotorcedor.com.br/';
    await page.goto(stUrl);
    const [a] = await page.$x("//a[contains(., 'LOGIN')]");
    if (a) {
        await a.click();
    }
    await page.type("[type='password']", process.env.ST_PASSWORD)
    await page.type("[type='text']", process.env.ST_LOGIN)
    await page.click("[type='submit']")
    await page.close()


}

stRobot();
