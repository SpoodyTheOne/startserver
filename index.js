const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;
const puppeteer = require("puppeteer");

app.get("/",(req,res) => {
    res.send(`
    <form action="/" method="POST">

    <button type="submit">Start the nigger server</button>

    </form>
    `)
})

app.post("/",async (req,res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://aternos.org/go/');
   
    // Get the "viewport" of the page, as reported by the page.
    await page.evaluate(() => {
        document.getElementById("user").value = "nyboder"
        document.getElementById("password").value = "hulk_dabs"
        document.getElementById("login").click()
    });

    await new Promise(resolve => setTimeout(resolve,5000));

    await page.evaluate(() => {document.getElementById("start").click()});

    await page.evaluate(() => {

        while(document.getElementById("confirm").style.display == "")
        {

        }

        document.getElementById("confirm").click();

    });

    await browser.close();
})

app.listen(PORT,() => {
    console.log("Listening on port " + PORT);
})