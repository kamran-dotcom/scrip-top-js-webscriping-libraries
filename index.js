const request = require("request");

const cheerio = require("cheerio");

request("https://www.webscrapingapi.com/java-script-web-scraping-libraries/#:~:text=Discover%20the%205%20most%20popular,%2C%20Cheerio%2C%20Puppeteer%2C%20Selenium.",callBack);

function callBack(error,response,html)
{
    if(error)
    {
        console.log("error",error);
    }
    else
    {
        handleHtml(html);
    }
}

function handleHtml(html)
{
    const sellTool = cheerio.load(html);

    let contentArr = sellTool(".content h3");

    console.warn("Top web scriping JS Libraries");
    for(let i=0; i < contentArr.length; i++)
    {
        console.log(sellTool(contentArr[i]).text());
    }
}