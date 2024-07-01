// cypress/e2e/testes.cy.js

import desafio from './desafio';

describe('Desafio QA Back-End', () => {

  afterEach(() => {
    
    cy.screenshot();
  });

  it('CT001 - Metodo Requisição GET Sucesso', () => {
    desafio.metodoGetSucesso();
  });

  it('CT002 - Metodo Requisição GET Falha', () => {
    desafio.metodoGetFalha();
  });

  it('CT003 - Metodo Requisição POST Sucesso', () => {
    desafio.metodoPostSucesso();
  });

  it('CT004 - Metodo Requisição POST Falha', () => {
    desafio.metodoPostFalha();
  });

  it('CT005 - Metodo Requisição PUT Sucesso', () => {
    desafio.metodoPutSucesso();
  });

  it('CT006 - Metodo Requisição PUT Falha', () => {
    desafio.metodoPutFalha();
  });

  it('CT007 - Metodo Requisição PATCH Sucesso', () => {
    desafio.metodoPatchSucesso();
  });

  it('CT008 - Metodo Requisição PATCH Falha', () => {
    desafio.metodoPatchFalha();
  });

  it('CT009 - Metodo Requisição DELETE Sucesso', () => {
    desafio.metodoDeleteSucesso();
  });

  it('CT010 - Metodo Requisição DELETE Falha', () => {
    desafio.metodoDeleteFalha();
  });

});
