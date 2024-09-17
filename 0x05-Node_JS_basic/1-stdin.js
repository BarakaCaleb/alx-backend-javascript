const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
rl.question('', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Close the interface to end the process
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
