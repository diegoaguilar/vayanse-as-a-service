'use strict';

const VAYANSE = '\/vayanse';
const OPTIONAL_A = '(?:a )?';
const CHANNEL_NAME = '(#[a-z-]+)';
const MENTIONS_OR_FLAGS = '((?: @[a-z]+)+)?((?: -{1,2}[a-z:]+)+)?';
const COMMAND_REGEX = RegExp(`^${VAYANSE} ${OPTIONAL_A}${CHANNEL_NAME}${MENTIONS_OR_FLAGS}$`);
const LETTER_SIGN = '[a-z]';
const CHANNEL_NAME_PATTERN = /^[a-z0-9][0-9a-z-]*[^-_]$/i

const errors = require('./errors');

const getTokens = (slackCommand) => {
  // Remove multiple spaces
  slackCommand = slackCommand.replace(/\s{2,}/g, ' ');
  slackCommand = slackCommand.trim();
  let exec = COMMAND_REGEX.exec(slackCommand);
  if (exec === null) {
    return errors.InvalidCommand;
  }
  else {
    let channel = exec[1];
    let mentions = exec[2];
    let flags = exec[3];
    if (mentions) {
      mentions = mentions.trim().split(' ');
    }
    if (flags) {
      flags = flags.trim().replace(/-{1,2}/, '').split(' ');
    }

    return {channel, mentions, flags};
  }
};

const isValidChannelName = (channelName) => {
  channelName = channelName.trim();
  channelName = channelName.startsWith('#') ? channelName.slice(1) : channelName;

  return CHANNEL_NAME_PATTERN.test(channelName);
};

module.exports = {
  getTokens,
  isValidChannelName
};
