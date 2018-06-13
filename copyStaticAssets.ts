import * as shell from 'shelljs';

// Copy over top level configs
shell.cp('./config*.json', 'dist-server/');

// Copy over ticket app configs and schema.json
shell.cp('apps/ticket/*.json', 'dist-server/apps/ticket/');

// Copy over static assets from ticket app
shell.cp('-R', 'apps/ticket/public/inc', 'dist-server/apps/ticket/public/');
shell.cp('-R', 'apps/ticket/public/img', 'dist-server/apps/ticket/public/');
shell.cp('-R', 'apps/ticket/public/fonts', 'dist-server/apps/ticket/public/');
shell.cp('-R', 'apps/ticket/public/css', 'dist-server/apps/ticket/public/');
shell.cp('apps/ticket/public/*.html', 'dist-server/apps/ticket/public/');

// Copy over batch app configs and schema.json
shell.cp('apps/batch/*.json', 'dist-server/apps/batch/');
