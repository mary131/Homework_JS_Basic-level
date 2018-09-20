function checkPalidrom(str) {
  var n = str.length - 1;
  var isPalindrom = true;
  for (i = 0; i < str.length / 2; i++) {
    if (str[i] != str[n - i]) {
      isPalindrom = false;
      break;
    }
  }

  if (isPalindrom) {
    alert("Строка - палиндром");
  } else {
    alert("Строка - не палиндром");
  }
}
var string = prompt("Введите строку");
  if(string){
    checkPalidrom(string);
  }
