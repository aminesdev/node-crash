import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("path:", __dirname);
console.log("file:", __filename);

const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

//resolve

const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3);