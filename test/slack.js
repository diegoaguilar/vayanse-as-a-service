'use strict';

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
