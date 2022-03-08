const fs = require("fs");

let base = 1;
console.clear();
let salida = "";
while (base <= 15) {
  salida += `5 x ${base} = ${5 * base} \n `;
  console.log(salida);
  base += 1;
}

fs.writeFile(`table-${base}.txt`, salida, (err) => {
  if (err) throw err;
  console.log(`Table-${base} created here`);
});
