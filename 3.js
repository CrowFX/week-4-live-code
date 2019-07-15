/*
  ////////////
  richestGroup
  ////////////

  Function richestGroup akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
    - kelompok yang ada HANYA terdiri dari A dan B. tapi tidak harus selalu ada.
  Function ini akan mengembalikkan nilai string.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B'],
      ['A', 'A']
    ]

  [PROCESS]
  Pada array ['A', 'B'] tidak ada yang unggul.
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1

  [OUTPUT]
    Group A win...

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['A', 'A'],
      ['B']
    ]

  [PROCESS]
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1.
  Pada array ['B'] B unggul, maka nilai group B ditambah 1.
  
  [NOTES]
  Apabila ada yang seri atau tidak ada yang unggul maka tampilkan Tidak ada pemenangnya...

  [OUTPUT]
    Tidak ada pemenangnya...

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/


function richestGroup(groups) {
  let countAh = 0;
  let countBi = 0;
  for (let i = 0; i < groups.length; i++) {
    if (groups[i][0] === 'A' && groups[i][1] !== 'B') {
      countAh++;
    }
    if (groups[i][0] === 'B' && groups[i][1] !== 'A') {
      countBi++;
    }
  }
  if (countAh - countBi < 0) {return 'Group B win...'} else if (countAh - countBi > 0) {
    return 'Group A win...'
  } else {
    return 'Tidak ada pemenangnya...'
  }

}

console.log(richestGroup([
  ['A', 'B'],
  ['A', 'A']
]))
// Group A win...

console.log(richestGroup([
  ['A', 'A'],
  ['B']
]))
// Tidak ada pemenangnya...

console.log(richestGroup([
  ['B']
]))
// Group B win...

console.log(richestGroup([]))
// Tidak ada pemenangnya...