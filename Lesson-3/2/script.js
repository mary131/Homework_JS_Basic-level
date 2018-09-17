var login = prompt ("Введите логин");
var message = (login == "Вася") ? alert ("Привет!") : 
(login == "Директор") ? alert ("Здравствуйте") :
(login == "") ? alert ("Нет логина") : alert ("неверный логин");