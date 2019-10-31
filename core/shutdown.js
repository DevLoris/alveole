module.exports = function(callback) {

    // attach user callback to the process event emitter
    // if no callback, it will still exit gracefully on Ctrl-C
    callback = callback || function () { };
    //process.on('cleanup',callback);

    // do app specific cleaning before exiting
    process.on('exit', function () {
        process.emit('cleanup');
    });

    // catch ctrl+c event and exit normally
    process.on('SIGINT', function () {
        console.log("\x1b[31m",'[SERVER STATUS] Shutdown will occur in 3 seconds:', "\x1b[0m");
        callback();
        setTimeout(function () {
            process.exit(2);
        }, 2000);
    });

    //catch uncaught exceptions, trace, then exit normally
    process.on('uncaughtException', function(e) {
        console.log("\x1b[31m",'[SERVER STATUS] Uncaught Exception', "\x1b[0m");
        console.log(e.stack);
        callback();
        setTimeout(function () {
            process.exit(99);
        }, 2000);
    });
};