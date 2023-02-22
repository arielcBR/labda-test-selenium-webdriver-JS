const { Builder, By, Key } = require('selenium-webdriver');
require('geckodriver');

async function example() {
    // Launch the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // Navigate to our application
    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    //add a todo
    await driver.findElement(By.id('sampletodotext')).sendKeys('Learning Selenium', Key.RETURN);

    // close the browser
    await driver.quit();
}

example();