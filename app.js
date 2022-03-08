const { createFile } = require("./helpers/multiply");
const argv = require("yargs").argv;

// let base = 4;

// const [, , arg3] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

// createFile(base)
//   .then((nameFile) => console.log(nameFile, "created"))
//   .catch((err) => {
//     console.log(err);
//   });

console.log(process.argv);
console.log(argv);
console.log("base: yargs", argv.base);
