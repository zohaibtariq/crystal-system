const SUFFIX = process.argv.indexOf('--env') === -1 ? '' : `${process.argv[process.argv.indexOf('--env') + 1]}`;
let NODE_ENV = '';
let APP_NAME = '';
let PORT = 0;
let CWD = '';
let MAX_MEMORY = '2048M';
let INSTANCES = 1;
const SCRIPT = 'src/index.js';
const AUTO_RESTART = true;
let WATCH = false;
if (SUFFIX === 'development') {
  NODE_ENV = 'development';
  APP_NAME = 'Crystal System';
  PORT = 3000;
  CWD = '.';
  // CWD = '/usr/src/node-app';
  MAX_MEMORY = '2048M';
  INSTANCES = 1;
  WATCH = true;
}
console.log(`SUFFIX : ${SUFFIX}`);
console.log(`APP NAME : ${APP_NAME}`);
console.log(`PORT : ${PORT}`);
console.log(`CWD : ${CWD}`);
console.log(`NODE_ENV : ${NODE_ENV}`);
console.log(`MAX_MEMORY : ${MAX_MEMORY}`);
console.log(`INSTANCES : ${INSTANCES}`);
console.log(`SCRIPT : ${SCRIPT}`);
console.log(`AUTO_RESTART : ${AUTO_RESTART}`);
console.log(`WATCH : ${WATCH}`);
module.exports = {
  apps: [
    {
      name: APP_NAME,
      cwd: CWD,
      script: SCRIPT,
      instances: INSTANCES,
      autorestart: AUTO_RESTART,
      watch: WATCH,
      max_memory_restart: MAX_MEMORY,
      env: {
        NODE_ENV,
        PORT,
      },
    },
  ],
};
