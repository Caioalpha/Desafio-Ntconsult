// cypress/plugins/index.js

module.exports = (on, config) => {
    require('@cypress/code-coverage/task')(on, config);
    require('cypress-xpath');  
    return config;
  };
  