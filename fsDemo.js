import fs from "fs/promises";

const writeFile = async () => {
    try {
        await fs.appendFile(
            "./test.txt",
            "Hello, I am writing to this file bla bla bla"
        );
        console.log("File written to ....");
    } catch (err) {
        console.log(err)
    }
};

writeFile();