const input = require('readline');

const reader = input.createInterface
({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n) 
{
    if (n < 2) 
    {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function Sequence()
{
    reader.question('Enter a number: ', (number) => 
    {
        console.log('The fibonacci sequence is: ', fibonacci(number));
        Menu();
    });
}

Sequence();
