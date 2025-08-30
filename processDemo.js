// argv
// console.log(process.argv);
// console.log(process.argv[3]);

// process.env
// console.log(process.env.LOGNAME);

//pid
// console.log(process.cwd());

//title
// console.log(process.title);

// memoryUsage
// console.log(process.memoryUsage());

//uptime()
// console.log(process.uptime());

process.on('exit', (code) => {
    console.log("about to exite with code 0")
})

//exit()
process.exit(0);
console.log("hello from after exite()")
