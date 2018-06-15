'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = function() {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta'),
    getChannelURL('canary'),
  ]).then((urls) => {
    return {
      scenarios: [
        {
          name: 'Ember data 3.1.1',
          npm: {
            devDependencies: {
              'ember-source': '3.2.0',
              'ember-data': '3.1.1'
            }
          }
        },
        {
          name: 'Ember data 3.2.0-beta.4',
          npm: {
            devDependencies: {
              'ember-source': '3.2.0',
              'ember-data': '3.2.0-beta.4'
            }
          }
        },
      ]
    };
  });
};
