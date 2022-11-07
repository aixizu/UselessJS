const fs = require('fs');

function generateRandomNumbers()
{
    var array = [];
    for(var i = 0; i < 100000; i++)
    {
        if(i % 50 == 0)
        {
            console.log("Generated " + i + " numbers");
        }
        array.push(Math.floor(Math.random() * 10000));
    }
    return array;
}

function CreateJSON()
{
    console.clear();

    console.info("Generating random numbers...");
    var array = generateRandomNumbers();
    var json = JSON.stringify(array);

    console.log("Checking if file exists...");
    if(fs.existsSync('data.json'))
    {
        // Delete file
        console.log("File exists.\ndeleting...");
        fs.unlinkSync('data.json');
    }

    console.info("Creating file...");
    fs.writeFileSync('data.json', json);
}

CreateJSON();