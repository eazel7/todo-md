
// Local
var todo = require("../lib/todo.js");

module.exports = function (program) {

	program
	   .command('undo <index>')
	   .description('Marks task as not done')
	   .option('-i, --input [file]')
	   .option('-o, --output [file]')
	   .action(function(index, opts) {
	   		opts = todo.getDefaultOptions(opts);

			todo
				.load(opts.input)
				.undo(index);

			if (opts.output)
				todo.write(opts.output);

			
			todo.list(program.lineNumbers);
	   });
	
};