            // Первое задание

// let year = prompt('Какое «официальное» название JavaScript?', '');

// if( year == 'ECMAScript') {
//     alert( 'Верно');
// } else if (year != 'ECMAScript') {
//     alert( 'Не знаете? ECMAScript!' );
// }



            // Второе задание
            // 2.1

// let result = prompt('Сколько будет a + b?', '4');


// if ( result < 4) {
//     alert( 'Мало');
// } 
// else if (result > 4) {
//     alert( 'Много' );
// }

            // 2.2

// let login =  prompt('Ваша должность?',);
// message = 'Привет';
// message = 'Здравствуйте';
// message = 'Нет логина';

// if (login == 'Сотрудник') {
//     alert('Привет');
// }
// else if (login == 'Директор') {
//     alert('Здравствуйте');
// }
//  else {
//     alert('Нет логина');
// }

           // Третье задание

// let age = prompt('Введите любое число от 14 до 90 включительно');

// let cond = age < 91 && age > 13;
// if (cond) {
//     alert('Правильно');
// } else {
//     alert('Не правильно');
// }



            // Четвёртое задание
            // 4.1

// let age = prompt('Введите любое число вне диапазона от 14 до 90 включительно');

// if (age > 89 || age < 15 ) {
//     alert('Правильно');
// } else {
//     alert('Не правильно');
// }



            // 4.2

// let age = prompt('Введите любое число вне диапазона от 14 до 90 включительно');

// let cond = age < 15 || age > 89;

// if (!(age >= 15 && age <= 89)) {
//     alert('Правильно');
// } else {
//     alert('Не правильно');
// }



            // Пятое задание

let login = prompt('Введите ваш логин');
message = 'Админ'

// Password = prompt('Введите ваш пароль');
// messagePassword = 'Я главный';
// message = 'Нет логина';

if (login == 'Админ') {
    Password = prompt('Введите ваш пароль');
}
else if (login != 'Админ') {
    alert('Я вас не знаю');
}
if (!login)  {
        alert('Отменено');
    }


// else if (Password == 'Я главный') {
//     alert('Здравствуйте!');
// }
// else if (Password != 'Я главный') {
//     alert('Неверный пароль');
// }

//  else {
//     alert('Нет логина');
// }