const input = require('readline');

const reader = input.createInterface
({
    input: process.stdin,
    output: process.stdout
});

function factorial(n)
{
    if (n < 2)
    {
        return n;
    }

    return n * factorial(n - 1);
}

function Read()
{
    reader.question('Enter a number: ', (number) =>
    {
        console.log('The factorial is: ', factorial(number));
        reader.close();
    });
}

Read();
