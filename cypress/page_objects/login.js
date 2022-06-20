class LoginPage{
    get emailInput(){
        return cy.get('.el-input').eq(0)
    }

    get passwordInput(){
        return cy.get('.el-input').eq(1)
    }

    get loginButton(){
        return cy.get('.vs-u-text--left')
    }
    get navigatorBar(){
        return cy.get('.vs-l-project__nav')
    }
    get navigatorTitle(){
        return cy.get('.vs-u-text--uppercase')
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.loginButton.click()
    }
}
export const loginPage = new LoginPage()