const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:4200/ajout-etudiant");

    await driver
      .findElement(By.xpath('//*[@id="email"]'))
      .sendKeys("reda@gmail.com");
    await driver.findElement(By.xpath('//*[@id="nom"]')).sendKeys("reda");
    await driver
      .findElement(By.xpath('//*[@id="prenom"]'))
      .sendKeys("amirouche");
    await driver.findElement(By.xpath('//*[@id="niveau"]')).sendKeys("3");
    await driver
      .findElement(
        By.xpath("/html/body/app-root/app-student-form/div/form/input")
      )
      .click();
    await driver.get("http://localhost:4200/feedback");
    await driver.findElement(By.xpath('//*[@id="module"]')).sendKeys("THP");
    await driver.findElement(By.xpath('//*[@id="niveau"]')).sendKeys("1CS");
    await driver
      .findElement(By.xpath('//*[@id="feedback"]'))
      .sendKeys("Ce module est tres interessant");
    await driver
      .findElement(
        By.xpath("/html/body/app-root/app-ui-feedback/div/div/form/input")
      )
      .click();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Success");
    try {
      await driver.quit();
    } catch (error) {
      console.log(`error quitting selenium`);
    }
  }
})();
