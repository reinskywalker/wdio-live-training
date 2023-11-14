/* write your page object script */

import Page from "../page";

class LoginPage extends Page {

    get username () { return $("input[name=username]")}
    get password () { return $("input[name=password]")}
    get btn () { return $("button[type=submit")}

    async ValidatePage() {
        await this.username.waitForDisplayed()
        await this.password.waitForDisplayed()
        await this.btn.waitForDisplayed()
    }

    async Login(username, password) {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.btn.click()
    }

}

export default new LoginPage()