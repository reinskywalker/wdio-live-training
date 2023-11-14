/* write your jasmine TDD */
import hrmPage from "../pageobjects/hrm/login.page"

describe("Orange-HRM", () => {

    it("I want to open web page", async() => {
        await hrmPage.open(browser.options.baseUrl)
    })

    it("I want to input username and password", async() => {
        await hrmPage.Login("Admin", "admin123")
        await browser.pause(5000)
    })

})
