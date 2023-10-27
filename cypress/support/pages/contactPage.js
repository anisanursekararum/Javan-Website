const data = require('../../fixtures/data.json')

class ContactPage {

  menuContact = '.pr-8 > .text-base'
  fullName = '#in_name'
  nickName = '#in_nickname'
  email = '#in_email'
  phoneWA = '#in_phone'
  company = '#in_institution'
  subject = '#in_subject'
  messages = '#in_message'
  captcha = '//*[@id="recaptcha-anchor-label"]/span'
  buttonSend = ':nth-child(10) > .card-btn-primary'
  
  clickMenuContact(){
    cy.button(this.menuContact)
  }

  inputFormContact(fullName, nickName, email, phoneWA, company, messages){
    cy.input(this.fullName, fullName)
    cy.input(this.nickName, nickName)
    cy.input(this.email, email)
    cy.input(this.phoneWA, phoneWA)
    cy.input(this.company, company)
    cy.get(this.subject).select(data.subject)
    cy.input(this.messages, messages)
    // cy.get(this.captcha).click()
    cy.button(this.buttonSend)
  }
}

export default new ContactPage()