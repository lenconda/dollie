// import { Context } from '@dollie/core';
import commands from './commands';
import commander from 'commander';
import _ from 'lodash';

const program = new commander.Command();

for (const commandKey of Object.keys(commands)) {
  const commandGenerator = commands[commandKey];
  if (_.isFunction(commandGenerator)) {
    program.addCommand(commandGenerator());
  }
}

program.parse(process.argv);
