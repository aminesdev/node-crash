const crypto = require("crypto");

// Algorithm + Key + IV
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32); // 32 bytes for AES-256
const iv = crypto.randomBytes(16); // 16 bytes for CBC mode

// Encrypt function
function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

// Decrypt function
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}

// Usage
const message = "Hello, secure world!";
const encrypted = encrypt(message);
const decrypted = decrypt(encrypted);

console.log("Original:", message);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);
