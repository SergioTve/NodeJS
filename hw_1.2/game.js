#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const min = 0;
const max = 100;
const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;


console.log(`Загадано число в диапазоне от ${min} до ${max}`);


rl.on('line', (input) => {
  
  const userNumber = parseInt(input);
  if (isNaN(userNumber)) {
    console.log('Введите корректное число');
    return;
  }

  if (userNumber < secretNumber) {
    console.log('Больше');
  } else if (userNumber > secretNumber) {
    console.log('Меньше');
  } else {
    console.log(`Отгадано число ${secretNumber}`);
    rl.close(); 
  }
});

rl.on('close', () => {
  process.exit(0); 
});