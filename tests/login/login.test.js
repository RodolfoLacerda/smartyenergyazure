

module.exports = {
    'ACESSO AO SISTEMA SMARTYENERGY CADASTRO 01': function (browser) {
        var userInfo = '.user .info span'
        browser
        .resizeWindow(1920, 1080)
            .url('https://smartenergy-qa.memt.com.br/')
            .waitForElementVisible('.MuiIconButton-edgeStart', 3000)
            .click('.MuiIconButton-colorSecondary')
            .useXpath()
            .waitForElementVisible('//span[contains(.,"Contratos")]', 3000)
            .click('//span[contains(.,"Contratos")]')
            .useXpath()
            .waitForElementVisible('.//div/div/div/a/button/span', 3000)
            .click('.//div/div/div/a/button/span')
            .useXpath()
            .waitForElementVisible('#id_usagecontract"]', 3000)
            .click('#id_usagecontract')
            .useXpath()
            .waitForElementVisible('//li[contains(.,"Distribuição")]', 3000)
            .click('//li[contains(.,"Distribuição")]')
            .keys(browser.Keys.TAB)
            .useXpath()
            .waitForElementVisible('//div[@id="select-company.id_company"]', 5000)
            .keys(browser.Keys.ENTER)
            .useXpath()
            .waitForElementVisible('//li[contains(.,"Itabira")]', 2000)
            .click('//li[contains(.,"Itabira")]')
            .keys(browser.Keys.TAB)
            .useXpath()
            .waitForElementVisible('//div[@id="select-energy_dealer.id_company"]', 2000)
            .click('//div[@id="select-energy_dealer.id_company"]')
            
            .end();
    }
}