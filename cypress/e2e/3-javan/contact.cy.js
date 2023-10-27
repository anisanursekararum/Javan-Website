import contactPage from "../../support/pages/contactPage"
const data = require("../../fixtures/data.json")

describe('Contact', () => {
  beforeEach(() => {
    cy.visit('')
    cy.url().should('contain', 'javan')
  })
  
  it('JVN-001 Send request contact fullname invalid', () => {
    contactPage.clickMenuContact()
    cy.url().should('contain', 'contact')
    contactPage.inputFormContact(data.nameInvalid, data.nameValid, data.email, data.phoneValid, data.company, data.messages)
  })
  
  it('JVN-002 Send request contact nickname invalid', () => {
    contactPage.clickMenuContact()
    cy.url().should('contain', 'contact')
    contactPage.inputFormContact(data.nameValid, data.nameInvalid, data.email, data.phoneValid, data.company, data.messages)
  })
  
  it('JVN-003 Send request contact phone invalid', () => {
    contactPage.clickMenuContact()
    cy.url().should('contain', 'contact')
    contactPage.inputFormContact(data.nameInvalid, data.nameValid, data.email, data.phoneInvalid, data.company, data.messages)
  })
  
})