const { createFile } = require("./helpers/multiply");

// let base = 4;

// createFile(base)
//   .then((nameFile) => console.log(nameFile, "created"))
//   .catch((err) => {
//     console.log(err);
//   });

const [, , arg3] = process.argv;
const [, base] = arg3.split("=");
console.log(base);
