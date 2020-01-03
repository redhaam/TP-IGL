const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:4200");

    await driver
      .findElement(
        By.xpath(
          "/html/body/app-root/app-login/div/div/form/div[1]/div[3]/label"
        )
      )
      .click();

    await driver
      .findElement(By.xpath('//*[@id="email"]'))
      .sendKeys("hm_kadri@esi.dz");

    await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys("1234");
    await driver
      .findElement(By.xpath("/html/body/app-root/app-login/div/div/form/input"))
      .click();

    await driver
      .findElement(
        By.xpath(
          "/html/body/app-root/app-ui-admin/div/div/div[2]/div/div[2]/div/a"
        )
      )
      .click();
    await driver
      .findElement(By.xpath('//*[@id="email"]'))
      .sendKeys("amirouche@esi.dz");

    await driver.findElement(By.xpath('//*[@id="nom"]')).sendKeys("Redha");
    await driver
      .findElement(By.xpath('//*[@id="prenom"]'))
      .sendKeys("amirouche");
    await driver.findElement(By.xpath('//*[@id="niveau"]')).sendKeys("3");
    await driver
      .findElement(
        By.xpath("/html/body/app-root/app-student-form/div/form/input")
      )
      .click();
    await driver.findElement(By.xpath('//*[@id="""navbarDropdown"]')).click(); // clique sue déconnexion

    // le login a nouveau par un compte etudiant qu'on vient de créer
    await driver
      .findElement(
        By.xpath(
          "/html/body/app-root/app-login/div/div/form/div[1]/div[3]/label"
        )
      )
      .click();

    await driver
      .findElement(By.xpath('//*[@id="email"]'))
      .sendKeys("amirouche@esi.dz");

    await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys("12546"); // le password est par défault 12546 lors de l'ajout d'etudiant
    await driver
      .findElement(By.xpath("/html/body/app-root/app-login/div/div/form/input"))
      .click();
    await driver
      .findElement(
        By.xpath("/html/body/app-root/app-ui-etudiant/div/div/div/div[3]/div/a")
      ) // clique sur la button ajouter feedback
      .click();

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
    /* try {
      await driver.quit();
    } catch (error) {
      console.log(`error quitting selenium`);
    }*/
  }
})();
