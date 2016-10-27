'use strict';

//xoxp-4509576999-4509577001-88085346528-4d48d7b76d0282d09e0cfc64a4994265

const expect = require('chai').expect;
const slack = require('../lib/slack');

let parsingResult;

describe('Parsing tests suite', () => {
  it(`Create a channel`, (done) => {
    if (! process.env.SLACK_API_TOKEN) {
      return done();
    }
    
    slack.createChannel('#jose-alfredo-jimenez', (err, result) => {
      console.log(err);
      console.log(result);
      done(err);
    });
  });
});
