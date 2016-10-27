'use strict';

const Client = require('@slack/client').WebClient;
const token = process.env.SLACK_API_TOKEN;
const slack = new Client(token);

const createChannel = (name, cb) => {
  name = name.trim();
  name = name.startsWith('#') ? name : '#' + name;
  slack.channels.create(name, cb);
};

module.exports.createChannel = createChannel;
