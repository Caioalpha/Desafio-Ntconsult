const { defineConfig } = require('cypress');
const treeKill = require('tree-kill');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chrome') {
          launchOptions.args.push('--no-sandbox');
          return launchOptions;
        }
      });

     
      let browserProcess = null;

      
      on('after:browser:launch', (browser) => {
        browserProcess = browser ? browser.pid : null;
      });

      
      on('after:run', (results) => {
        console.log('after:run event fired');
        console.log(`Total de testes com falha: ${results.totalFailed}`);

       
        if (results.totalFailed === 0 && browserProcess) {
          console.log('Nenhum teste falhou');

          
          console.log('Fechando o navegador');
          treeKill(browserProcess, 'SIGKILL', (err) => {
            if (err) {
              console.error(`Erro ao fechar o navegador: ${err}`);
            } else {
              console.log('Navegador fechado');
            }
          });
        }
      });
    },
    specPattern: 'cypress/e2e/testes.cy.js', 
  },
  reporter: 'mochawesome', 
  reporterOptions: {
    reportDir: 'cypress/reports', 
    overwrite: false, 
    html: true, 
    json: true, 
    screenshotsFolder: 'cypress/screenshots/testes.cy.js', 
    screenshotsOnlyOnFailure: false
  }
});
