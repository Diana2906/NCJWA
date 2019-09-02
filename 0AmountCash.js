// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('0 Amount Cash', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('0 Amount Cash', async function() {
    
    await driver.sleep(7000)
    await driver.get("https://ncjwavic--dev.lightning.force.com/lightning/n/Bulk_Donations")
    await driver.sleep(7000)
    await driver.findElement(By.xpath("//td[2]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.xpath("//td[2]/div/div/div[2]/div/input")).sendKeys("mr selen")
    await driver.findElement(By.css(".slds-lookup__list:nth-child(2) .slds-media")).click()
    await driver.findElement(By.xpath("//td[3]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.xpath("//td[3]/div/div/div[4]/ul/li/span/div/span")).click()
    await driver.findElement(By.xpath("//lightning-input/div/input")).click()
    await driver.findElement(By.xpath("//lightning-input/div/input")).sendKeys("0")
    await driver.findElement(By.xpath("//td[6]/div/div/div/select")).click()
    {
      const dropdown = await driver.findElement(By.xpath("//td[6]/div/div/div/select"))
      await dropdown.findElement(By.css("*:nth-child(1)")).click()
    }
    await driver.findElement(By.xpath("//button[contains(.,\'Save\')]")).click()
    await driver.wait(until.elementLocated(By.css(".slds-theme--error")), 10000)
  })
})
