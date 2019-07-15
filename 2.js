/*
  /////////////////
  americanGotTalent
  /////////////////

  Function americanGotTalent akan menentukkan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];

  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.

  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];

  [PROCESS]
    tidak terdapat yang terbanyak.

  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function americanGotTalent(votes) {
  let temp = [];
  let count = 0;
  let highest;
  let oldHighest;
  for (let i = 0; i < votes.length; i++) {
    for (let j = 0; j < votes.length; j++) {
      if (i !== j && votes[i] === votes[j]) {
        count++
        if (count >= oldHighest) {
          highest = oldHighest;
          temp.push(votes[j]);
        } else {
          oldHighest = count;
        }
      }
    }
  }
  if (temp.length > 1) {return 'Mohon maaf juara tidak bisa ditentukan dalam minggu ini'} else {
  return 'Selemat juaranya adalah ' + temp[0] + ' , dengan total votes yang diterima ' + (highest + 1);
  }
}
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']));
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2
