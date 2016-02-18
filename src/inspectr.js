#!/usr/bin/env node

const es2015 = require('babel-preset-es2015');
const react = require('babel-preset-react');
const stage0 = require('babel-preset-stage-0');
const decorators = require('babel-plugin-transform-decorators');
const classProperties = require('babel-plugin-transform-class-properties');

require('babel-register')({
    presets: [es2015, react, stage0],
    plugins: [decorators, classProperties]
});
import program from 'commander';
import pjson from '../package.json';
import path from 'path';
import findRoot from 'find-root';

import {componentFromExport,getComponentInfo} from './utils';


// get our inputs
let component, module;
program
    .version(pjson.version)
    .arguments('<module> [component...]', 'Inspect the component in the specified module')
    .option('-f, --file', 'Use the file system, not a node_module')
    .action(( _module, _component ) => {
        component = _component;
        module = _module;
    });
program.parse(process.argv);

if ( typeof module === 'undefined' ) {
    program.help();
    process.exit(1);
}


// build the import statement
let mod;
try {

    if ( program.file ) {
        mod = require(`${process.cwd()}/${module}`);
    } else {
        const root = findRoot(process.cwd());
        mod = require(path.join(root,'node_modules',`${module}`));
    }

} catch ( e ) {
    console.log('Failed to import file');
    console.log(e.message);
    process.exit(1);
}

// get the component
const componentInstance = componentFromExport(mod, component);

if (!componentInstance) {
    console.log('Failed to find instance of React Component or Statless Function');
    process.exit(1);
}

// log the info
console.log(getComponentInfo(componentInstance));
// exit
process.exit(0);