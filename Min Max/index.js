var fs = require('fs');

var data = fs.readFileSync('data.json');
var test = JSON.parse(data);

function Min(array)
{
    // get miliseconds
    var start = new Date().getTime();

    var min = array[0];
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] < min)
        {
            min = array[i];
        }
    }


    var end = new Date().getTime();
    var time = end - start;
    console.log("Min took: " + time + "ms");

    return min;
}

function Max(array)
{
    var start = new Date().getTime();

    var max = array[0];
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] > max)
        {
            max = array[i];
        }
    }

    var end = new Date().getTime();
    var time = end - start;
    console.log("Max took: " + time + "ms");

    return max;
}

// Fast Min
function FastMin(array)
{
    var start = new Date().getTime();

    var min = Math.min.apply(null, array);

    var end = new Date().getTime();
    var time = end - start;
    console.log("FastMin took: " + time + "ms");

    return min;
}

// Fast Max
function FastMax(array)
{
    var start = new Date().getTime();

    var max = Math.max.apply(null, array);

    var end = new Date().getTime();
    var time = end - start;
    console.log("FastMax took: " + time + "ms");

    return max;
}

console.log(Min(test));
console.log(Max(test));
console.log(FastMin(test));
console.log(FastMax(test));

