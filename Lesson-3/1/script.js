var a = prompt ("Кто вы?");
if (a == "Админ") {
    var с = prompt ("Пароль?");
    if (с == "Черный властелин") {
    alert ("Добро пожаловать!");
    }

    else if (с == null){
    alert ("Вход отменен");
    }
    else {
    alert ("Пароль неверен");
    }
}
else if (a == null) {
alert ("Вход отменен"); 
}
else {
alert ("Я вас не знаю");
}