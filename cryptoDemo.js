import { createHash, randomBytes } from "crypto";
//createHash()
const hash = createHash("sha256");
hash.update("password123");
console.log(hash.digest("hex"));
//randomBytes()
randomBytes(16, (err, buf) => {
    if (err) throw err;
    console.log(buf.toString("hex"));
});

//createCipheriv & createDecipheriv

