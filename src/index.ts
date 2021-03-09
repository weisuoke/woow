import { program } from 'commander';

program
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  .version(`${require('../package.json').version}`, '-V --version')
  .usage('<command> [options]');

program.parse(process.argv);
