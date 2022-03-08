const fs = require("fs");

const createFile = (base = 5) => {
  let salida = "";
  console.log("Table create here", base);
  while (base <= 10) {
    salida += `5 x ${base} = ${5 * base} \n `;
    console.log(salida);
    base += 1;
  }

  fs.writeFileSync(`table-${base}.txt`, salida);

  console.log(`table-${base} created `);
};

module.exports = {
  createFile,
};
