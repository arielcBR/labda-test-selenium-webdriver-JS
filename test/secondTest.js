const { after } = require('mocha');
const { Builder, By, Key } = require('selenium-webdriver');
const should = require('chai').should();
require('chromedriver');

describe('add another todo tests', () => {
    
    it('Succesfully adds another todo to application', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        driver.manage().setTimeouts({ implicit: 50000 });
        
        // Navigate to our application
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        //add a todo
        await driver
            .findElement(By.id('sampletodotext'))
            .sendKeys('Learning Selenium', Key.RETURN);

        // assert using node assertion
        let todoText = await driver
            .findElement(By.xpath('//li[last()]'))
            .getText();

        // assert using chai should
        todoText.should.equal('Learning Selenium');

        // close the browser
        await driver.quit();
    });

    it('Adding a new test for reporting', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        driver.manage().setTimeouts({ implicit: 50000 });

        // Navigate to our application
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        //add a todo
        await driver
            .findElement(By.id('sampletodotext'))
            .sendKeys('Learning Selenium', Key.RETURN);

        // assert using node assertion
        let todoText = await driver
            .findElement(By.xpath('//li[last()]'))
            .getText();

        // assert using chai should
        todoText.should.equal('Learning Javascript');

        // close the browser
        await driver.quit();
    });
});