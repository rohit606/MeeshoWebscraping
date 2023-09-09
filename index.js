const { load } = require("cheerio");
const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.meesho.com/");
  await page.waitForTimeout(5000)
  await page.type(
    "#__next > div.DesktopHeader__HeaderStyled-sc-r0p6o1-0.bRUKyL > div:nth-child(1) > div > div.DesktopSearchStyled-sc-ap5mq9-0.eaJJtr.search-component > div.sc-hZNxer.iibxuc > input",
    "saree"
  );
  await page.keyboard.press("Enter");
  await page.waitForTimeout(10000);

  const content = await page.content();
  const $ = load(content);

  $(
    "#__next > div.sc-ftTHYK.cRaSHh > div > div:nth-child(3) > div.sc-dkrFOg.ggMaSF > div.sc-bcXHqe.ProductList__PLPContainer-sc-8lnc8o-1.cppHWG.hSZegP > div > div a h5"
  ).each((_, el) => {
    console.log(el)
  });

    // await browser.close();
};

main();
