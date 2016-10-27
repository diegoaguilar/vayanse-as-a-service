'use strict';

const expect = require('chai').expect;
const parser = require('../lib/parser');

const filosofia = '/vayanse a #filosofia';
const mentions = '/vayanse a #maestria-de-mike @mike @poguez';
const flags = '/vayanse #comida-bebida-alcohol -giphy:noodles';
const flagsAndMentions = '/vayanse a #transgenicos @hugo --welcome'

let parsingResult;

describe('Parsing tests suite', () => {
  it(`Parse ${filosofia}`, () => {
    parsingResult = parser.getTokens(filosofia);
    
  });

  it(`Parse ${mentions}`, () => {
    parsingResult = parser.getTokens(mentions);
  });

  it(`Parse ${flags}`, () => {
    parsingResult = parser.getTokens(flags);
  });

  it(`Parse ${flagsAndMentions}`, () => {
    parsingResult = parser.getTokens(flagsAndMentions);
  });
});
