// cypress/e2e/desafio.js

class Desafio {

    acessarPagina() {
        cy.visit('https://www.grocerycrud.com/v1.x/demo/bootstrap_theme')
    }

    adicionarCustomer() {
        cy.get('.floatL.t5 > .btn').click()

    }

    informarName() {
        cy.get('#field-customerName').type('Name')

    }

    mudarVersao() {
        cy.get('#switch-version-select').select('/v1.x/demo/bootstrap_theme_v4');

    }

    informarLastName() {
        cy.get('#field-contactLastName').type('Last Name')
    }

    informarcontactFirsName() {
        cy.get('#field-contactFirstName').type('Contact Last Name')
    }

    informarPhone() {
        cy.get('#field-phone').type('9999999999')

    }

    informarAdressLine1() {
        cy.get('#field-addressLine1').type('Adress Line 1')

    }

    informarAdressLine2() {
        cy.get('#field-addressLine2').type('Adress Line 2')

    }

    informarCity() {
        cy.get('#field-city').type('City')

    }

    informarState() {
        cy.get('#field-state').type('State')

    }

    informarPostalCode() {
        cy.get('#field-postalCode').type('08300-000')

    }

    informarCountry() {
        cy.get('#field-country').type('Country')

    }

    selecionarFromEmployeer() {
        cy.get('.salesRepEmployeeNumber_form_group .chosen-single').click();
        cy.get('.chosen-results .active-result').contains('Castillo').click();
        

 

    }

    informarCreditLimit() {
        cy.get('#field-creditLimit').type('100.000,00')

    }

    informarDeleted() {
        cy.get('#field-deleted').type('Deleted')

    }

    clicarEmSave() {
        cy.get('#form-button-save').click()

    }

    validarMensagemSucesso() {
        cy.contains('Your data has been successfully stored into the database. ').should('be.visible')   
 
    }

    buscarClienteCriado() {
        cy.get(':nth-child(3) > .form-control').type('Name{enter}')    

    }

    selecionaClienteCriado() {
        cy.get(':nth-child(1) > :nth-child(1) > .select-row').click()  
 
    }

    clicarEmDelete() {
        cy.get('.no-border-left > .floatL > .btn').click()    
         
 
    }

    validarMensagemDelete(){
        cy.contains('Are you sure that you want to delete this 1 item?').should('be.visible')

    }

    deletarClienteCriado(){
        cy.get('.delete-multiple-confirmation > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click()

    }

    mensagemDeletadoComSucesso(){
        cy.contains('Your data has been successfully deleted from the database.').should('be.visible')

    }
        


}



export default new Desafio();