const { createFile } = require("./helpers/multiply");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "The base have to be a Number";
    }
    return true;
  }).argv;

// let base = 4;

// const [, , arg3] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

console.log(process.argv);
console.log(argv);
console.log("base: yargs", argv.base);

createFile(argv.base, argv.listar)
  .then((nameFile) => console.log(nameFile, "created"))
  .catch((err) => {
    console.log(err);
  });
