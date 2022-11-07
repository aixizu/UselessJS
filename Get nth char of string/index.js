const input = require('readline');

const reader = input.createInterface
({
    input: process.stdin,
    output: process.stdout
});

let a = "abcdedf";

function GetCharAt(str, index)
{
    // Convert index to human readable index
    if(index < 0)
    {
        index = 0;
        return str[index];
    }
    else
    {
        index = index - 1;
        return str[index];
    }
}

function Read()
{
    reader.question('Enter a number: ', (number) =>
    {
        console.log('The char is: ', GetCharAt(a, number));
        reader.close();
    });
}

Read();
