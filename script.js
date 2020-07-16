// Task 1

let greeting = 'Приветствую, о незнакомец(ка). Каково твоё благородное имя?';
let questionWhatsUp = 'Всё ли благополучно в твоих землях';
let questionMeal = 'Что ты вкушал(а) на обед';
let answerPositive = 'Сколь велико удовольствие от встречи с собратом';
let answerNegative = 'К моему огорчению, не могу разделить удовольствие от совместной трапезы, ибо я робот и человеческие вкусы мне не близки. Прощай!';

let dialogAll = `a. — ${greeting}`;
let userName = prompt(greeting);
dialogAll += '\n' + 'b. — ' + userName;

let dialogPhrase = `${questionWhatsUp}, ${userName}?`;
dialogAll += '\n' + 'c. — ' + dialogPhrase;
let userMood = prompt(dialogPhrase);
dialogAll += '\n' + 'd. — ' + userMood;

dialogPhrase = `${questionMeal}, ${userName}?`;
dialogAll += '\n' + 'e. — ' + dialogPhrase;
let userDinner = prompt(dialogPhrase);
dialogAll += '\n' + 'f. — ' + userDinner;

let userGoodbye;

if (userDinner.toLowerCase().indexOf('электричество') != -1 || userDinner.toLowerCase().indexOf('моторное масло') != -1) {
    dialogPhrase = `${answerPositive}, о ${userName}!`;
    dialogAll += '\n' + 'g. — ' +  dialogPhrase;
    userGoodbye = prompt (dialogPhrase);
} else {
    dialogAll += '\n' + 'g. — ' +  answerNegative;
    userGoodbye = prompt(answerNegative);
}
dialogAll += '\n' + 'h. — ' + userGoodbye; 

console.log(dialogAll);

// Task 2

let firstUserNumber = +prompt('Enter first number, please');
let secondUserNumber = +prompt('Enter second number, please');

while (firstUserNumber >= secondUserNumber) {
    secondUserNumber = +prompt('Wrong format. The second number should be greater than the first number. Please enter other second number');
}

for (let i = firstUserNumber; i <= secondUserNumber; i++) {
    if (i % 2 === 0 || i % 5 === 0) {
        console.log(i);
    }
}    



