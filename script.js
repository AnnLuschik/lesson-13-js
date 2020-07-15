// Task 1

let userName = prompt('Приветствую, о незнакомец(ка). Каково твоё благородное имя?');

prompt(`Всё ли благополучно в твоих землях, ${userName}?`);

let userDinner = prompt(`Что ты вкушал(а) на обед, о ${userName}?`);

if (userDinner.indexOf('Электричество') != -1 || userDinner.indexOf('электричество') != -1 || userDinner.indexOf('Моторное масло') != -1 || userDinner.indexOf('моторное масло') != -1){
    prompt (`Сколь велико удовольствие от встречи с собратом, о ${userName}!`);
} else {
    prompt('К моему огорчению, не могу разделить удовольствие от совместной трапезы, ибо я робот и человеческие вкусы мне не близки. Прощай!');
}

// Task 2

let firstUserNumber = +prompt('Enter first number, please');
let secondUserNumber = +prompt('Enter second number, please');

for (let i = firstUserNumber; i <= secondUserNumber; i++) {
    if (i % 2 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

for (let i = firstUserNumber; i >= secondUserNumber; i--) {
    if (i % 2 === 0 || i % 5 === 0) {
        console.log(i);
    }
}