var fs = require("fs");
var yargs = require("yargs");
var chalk = require("chalk");
var list = require("./list.json");
var functions = require("./functions")
var error = chalk.bold.red;
var warning = chalk.bold.keyword('orange');

yargs.command({
    command: 'add',
    describe: 'Add',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true, 
            type: 'string'     
        },
        body: {  
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
  
    handler: function(argv){
        functions.addNote(argv.title,argv.body);		
    }
});
yargs.command({
    command: 'remove',
    describe: 'Remove',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true, 
            type: 'string'     
        }
    },
  
    handler: function(argv){
        functions.removeNote(argv.title);		
    }
});

yargs.command({
    command: 'read',
    describe: 'Read',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true, 
            type: 'string'     
        }
    },
  
    handler: function(argv){
        functions.readNote(argv.title);		
    }
});

yargs.command({
    command: 'list',
    describe: 'List',
    handler(argv) {
        functions.listNote();
    }
});

yargs.parse();