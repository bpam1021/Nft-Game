/* eslint-disable no-useless-escape */
// Generated by Selenium IDE
const {Builder, By, Key, until} = require('selenium-webdriver');
const {describe, beforeEach, afterEach, it} = require('mocha');
const assert = require('assert');
const SeleniumDriver = require('../drivers/slenium');

const timeout = 30 * 1000;
const xpath = "//div[@id=\'app\']/div/div[5]/header[2]/div/div/div[2]/span[2]";

describe('Character tab', function() {
  this.timeout(0);
  let driver;
  let vars;
  beforeEach(async function() {
    driver = new SeleniumDriver();
    vars = {};
  });

  it('Character tab', async function() {
    await driver.findElement(By.xpath(xpath)).click();
    await driver.findElement(By.id('app')).click();
  });
});
