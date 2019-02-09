function listAll(start, end) {
  let napis = "";
  for (i = start; i <= end; i++) {
      console.log(i);
      napis += i + " ";
  }
  return napis;
}

function wypisz() {
  // parseInt (zmienia ciąg znaków na liczbę)
    var liczba1 = parseInt(document.getElementById("pole1").value);
    var liczba2 = parseInt(document.getElementById("pole2").value);
    var napis;
    if (liczba1 <= liczba2) {
      napis = listAll(liczba1, liczba2);
    } else {
      napis = listAll(liczba2, liczba1);
    }
    document.getElementById("wynik2").innerHTML = napis;
}
