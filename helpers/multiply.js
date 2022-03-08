const fs = require("fs");
// Here I'm converting my regular function to return a promise and a better way to catch the error
const createFile = async (base = 5, listar = false) => {
  try {
    if (listar) {
      console.log("=================Printing=====================");
    }
    let salida = "";
    console.log("Table create here", base);
    while (base <= 10) {
      salida += `5 x ${base} = ${5 * base} \n `;
      console.log(salida);
      base += 1;
    }

    fs.writeFileSync(`table-${base}.txt`, salida);

    return `table-${base} created `;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createFile,
};
