import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { executablePath } from 'puppeteer';

puppeteer.use(StealthPlugin());

const getData = async (url) => {
  try {
    const browser = await puppeteer.launch({ executablePath: executablePath(), headless: false });
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      'upgrade-insecure-requests': '1',
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,en;q=0.8',
    });
    await page.setViewport({ width: 1280, height: 720 });
    console.log('url of get data', url);
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 0,
    });
    if (response.status() !== 200) {
      return {
        status: 'Error',
        Error: 'an error has occured',
      };
    }
    return true;
  } catch (err) {
    return false;
  }
};

export default getData;
