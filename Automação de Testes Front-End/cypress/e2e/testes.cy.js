// cypress/e2e/testes.cy.js

import desafio from './desafio';



describe("Desafio QA Front-End", () => {
  afterEach(() => {
    cy.screenshot(); 
    cy.window().then((win) => {
      win.close();
    });
  });


  it("CT001 - Adicionar cliente", () => {
    desafio.acessarPagina();
    desafio.mudarVersao();
    desafio.adicionarCustomer();
    desafio.informarName();
    desafio.informarLastName();
    desafio.informarcontactFirsName();
    desafio.informarPhone();
    desafio.informarAdressLine1();
    desafio.informarAdressLine2();
    desafio.informarCity();
    desafio.informarState();
    desafio.informarPostalCode();
    desafio.informarCountry();
    desafio.selecionarFromEmployeer();
    desafio.informarCreditLimit();
    desafio.informarDeleted();
    desafio.clicarEmSave();
    desafio.validarMensagemSucesso();
   

  });

  it("CT002 - Deletar cliente Criado", () => {
    desafio.acessarPagina();
    desafio.mudarVersao();
    desafio.buscarClienteCriado();
    desafio.selecionaClienteCriado();
    desafio.clicarEmDelete();
    desafio.validarMensagemDelete();
    desafio.deletarClienteCriado();
    desafio.mensagemDeletadoComSucesso();
    

  });



});
