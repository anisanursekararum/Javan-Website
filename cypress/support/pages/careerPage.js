const data = require('../../fixtures/data.json')

class CareerPage {
  
  menuCareer = ':nth-child(7) > .text-base'
  searchBox = '.w-60'
  searchButton = '.pt-16 > .space-y-6 > .flex > .w-44'
  applyButton = ':nth-child(1) > .flex > .card-btn-primary'
  applyNowButton = '#career-btn-apply-internal'
  fullName = '#in_full_name'
  email = '#in_email'
  phone = '#in_phone'
  company = '#in_current_company'
  calendarIcon = '.mb-5 > .relative > .right-0'
  calendarYear = '[name="yearChange"]'
  calendarMonth = '[name="monthChange"]'
  calendarDate = '[x-text="date"]'
  birthPlace = '#in_birth_place'
  gender = '#in_male'
  education = '#in_latest_education'
  univ = '#in_university'
  joinDate = '#in_join_date'
  working = '#in_working'
  address = '#in_race'
  about = '#in_additional_information'
  porto = '#in_portfolio_url'
  linkedin = '#in_linkedin_profile'
  source = '#in_sumber_lamaran'
  smoke = '#in_is_smoker'
  upload = 'input[type="file"]'
  buttonApplyJob = '.justify-end > .card-btn-primary'
  succcessSubmit = '#swal2-content'
  
  clickMenuCareer(){
    cy.button(this.menuCareer)
  }
  
  searchJob(){
    cy.input(this.searchBox, data.job)
  }
  
  clickSearchButton(){
    cy.button(this.searchButton)
  }
  
  clickApplyButton(){
    cy.button(this.applyButton)
  }
  
  clickApplyNowButton(){
    cy.button(this.applyNowButton)
  }
  
  inputFullName(){
    cy.input(this.fullName, data.nameValid)
  }
  
  inputEmail(){
    cy.input(this.email, data.email)
  }
  
  inputPhone(){
    cy.input(this.phone, data.phoneValid)
  }
  
  inputCompany(){
    cy.input(this.company, data.company)
  }
  
  clickBirthDay(){
    cy.get(this.calendarIcon).click()
    cy.get(this.calendarYear).select(data.calendarYear)
    cy.get(this.calendarMonth).select(data.calendarMonth)
    cy.get(this.calendarDate).contains("4").click()
  }
  
  inputBirthPlace(){
    cy.input(this.birthPlace, data.birthPlace)
  }
  
  selectGender(){
    cy.get(this.gender).select(data.genderMale)
  }
  
  selectEducation(){
    cy.get(this.education).select(data.eduS1)
  }
  
  inputUniv(){
    cy.input(this.univ, data.univ)
  }
  
  selectJoinDate(){
    cy.get(this.joinDate).select(data.join)
  }
  
  selectWorking(){
    cy.get(this.working).select(data.working)
  }
  
  inputCurrentAddress(){
    cy.input(this.address, data.address)
  }
  
  inputAbout(){
    cy.input(this.about, data.about)
  }
  
  inputPorto(){
    cy.input(this.porto, data.porto)
  }
  
  inputLinkedin(){
    cy.input(this.linkedin, data.linkedin)
  }
  
  selectSource(){
    cy.get(this.source).select(data.source)
  }
  
  selectSmoke(){
    cy.get(this.smoke).select(data.smoke)
  }
  
  uploadFile9MB() {
    cy.get(this.upload).selectFile('cypress/fixtures/9mb.pdf', { force: true })
  }
  
  uploadFile5MB() {
    cy.get(this.upload).selectFile('cypress/fixtures/2mb.pdf', { force: true })
  }

  uploadFile2MB() {
    cy.get(this.upload).selectFile('cypress/fixtures/2mb.pdf', { force: true })
  }
  
  clickButtonApplyJob(){
    cy.button(this.buttonApplyJob)
  }

  verifySuccessSubmit(){
    cy.get(this.succcessSubmit).should('have.contain', 'ID Tracking')
  }
}

export default new CareerPage()