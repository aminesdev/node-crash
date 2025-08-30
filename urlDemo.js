import url, { fileURLToPath } from "url";

const urlString = "https://ww.google.com/search?q=hello+world";

//URL Object
const urlObj = new URL(urlString);

// format()
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

// fileURLToPath()
console.log(fileURLToPath(import.meta.url));

// URLSearchParams()
const params = new URLSearchParams(urlObj.search);
params.append('limit','5')
console.log(params.get('q'));
