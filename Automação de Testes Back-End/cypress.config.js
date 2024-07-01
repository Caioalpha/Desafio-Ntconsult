const { defineConfig } = require('cypress');
const { exec } = require('child_process');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
      require('cypress-terminal-report/src/installLogsPrinter')(on);

      
      on('after:run', (results) => {
        console.log('after:run event fired');
        console.log(`Total failed tests: ${results.totalFailed}`);

        if (results.totalFailed === 0) {
          console.log('No failed tests');
          
          if (config.isTextTerminal || Cypress.browser.isHeaded) {
            console.log('Running in terminal mode or headed mode, closing process');
            setTimeout(() => {
              exec('taskkill /F /IM chrome.exe', (err, stdout, stderr) => {
                if (err) {
                  console.error(`Error killing chrome: ${stderr}`);
                } else {
                  console.log(`Chrome closed: ${stdout}`);
                  process.exit(0);
                }
              });
            }, 1000);
          }
        }
      });
    },
    specPattern: 'cypress/e2e/testes.cy.js', 
  },
  reporter: 'mochawesome', 
  reporterOptions: {
    reporterEnable: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    reportDir: 'cypress/reports', 
    overwrite: false, 
    html: true, 
    json: true, 
    screenshots: {
      enabled: true, 
      path: "cypress/reports/screenshots" 
    }
  }
});
