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

function fibonacciSquare(n) 
{
    return fibonacci(n) * fibonacci(n);
}

function Square()
{
    reader.question('Enter a number: ', (number) => 
    {
        console.log('The square of the fibonacci number is: ', fibonacciSquare(number));
    });
}

function Sequence()
{
    reader.question('Enter a number: ', (number) => 
    {
        console.log('The fibonacci sequence is: ', fibonacci(number));
    });
}

function Menu()
{
    console.log('1. Fibonacci Sequence');
    console.log('2. Fibonacci Square');
    console.log('3. Exit');
    reader.question('Enter a number: ', (number) => 
    {
        switch (number)
        {
            case '1':
                Sequence();
                break;
            case '2':
                Square();
                break;
            case '3':
                reader.close();
                break;
            default:
                console.log('Invalid input');
                Menu();
                break;
        }
    });
}

Menu();
