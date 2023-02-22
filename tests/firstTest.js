const { Builder, By, Key } = require('selenium-webdriver');
const should = require('chai').should();
require('chromedriver');

async function example() {
    // Launch the browser
    let driver = await new Builder().forBrowser('chrome').build();

    // Navigate to our application
    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    //add a todo
    await driver.findElement(By.id('sampletodotext')).sendKeys('Learning Selenium', Key.RETURN);

    // assert using node assertion
    let todoText = await driver.findElement(By.xpath('//li[last()]')).getText();
    //assert.strictEqual(todoText, 'Learning Selenium');

    // assert using chai should
    todoText.should.equal('Learning Java');

    // close the browser
    await driver.quit();
}

example();