import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log("hello " + name);
}

function goodbyHandler(name) {
    console.log("Goodbye " + name);
}

// Register event liteners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyHandler);

myEmitter.emit("greet", "amine");
myEmitter.emit("goodbye", "amine");
