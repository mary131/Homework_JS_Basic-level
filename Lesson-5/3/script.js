var vocаls = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я", "А", "О", "И", "Е", "Ё", "Э", "Ы", "У", "Ю", "Я"];

function numVocals(str) {
  var n = str.length;
  var numVocals = 0;
  for (var i = 0; i < n; i++) {
    var symbol = str[i];
    if (vocаls.indexOf(symbol) >= 0) {
      numVocals++;
    }
  }
  alert("Количество гласных: " + numVocals);
}
while (true) {
  var str = prompt("Введите строку");
  if (str) {
    numVocals(str);
  } else {
    break;
  }
}