const input = require('readline');

const reader = input.createInterface
({
    input: process.stdin,
    output: process.stdout
});

let order = [], total, ordering, name, first = false;

const menu =
{
    'Baked Beans': 0.99,
    'Bangers and Mash': 1.99,
    'Black Pudding': 2.99,
    'Bread and Butter': 0.50,
    'Bubble and Squeak': 1.99,
    'Cabbage': 0.99,
    'Cauliflower Cheese': 1.99,
    'Cheese': 0.99,
    'Chips': 0.99,
    'Crisps': 0.99,
    'Eggs': 1.99,
    'Fish Fingers': 1.99,
    'Gravy': 0.99,
    'Ham': 1.99,
    'Ketchup': 0.99,
    'Lamb': 2.99,
    'Lentils': 0.99,
    'Mashed Potatoes': 0.99,
    'Mushy Peas': 0.99
};

function Menu()
{
    if (!first)
    {
        console.clear();
        console.log('Welcome to the Breakfast Bar!');
        first = true;
    }

    console.log('1. View Menu');
    console.log('2. Order');
    console.log('3. Checkout');
    console.log('4. Total');
    console.log('5. Exit');

    reader.question('Enter your option: ', (number) =>
    {
        switch (number)
        {
            case '1':
                ViewMenu();
                break;

            case '2':
                Order();
                break;

            case '3':
                Checkout();
                break;

            case '4':
                console.log('Your current order is $' + total + ' for ' + order.length + ' items!');
                Menu();
                break;

            case '5':
                reader.close();
                break;

            default:
                console.log('Invalid input');
                Menu();
        }
    });
}

function Checkout()
{
    if (!name)
    {
        if(order.length > 0)
        {
            console.log('Thank you for ordering! ', name);
            console.log('Your order is: ', order);
            console.log('For a Total of: ', total);
            reader.close();
        }
        else
        {
            console.log('You have not ordered anything!');
            Menu();
        }
    }
    else
    {
        reader.question('What is your name? ', (input) =>
        {
            name = input;
            Checkout();
        });
    }
}

function ViewMenu()
{
    console.log('Menu');
    for (var item in menu)
    {
        console.log(item, menu[item]);
    }
    Menu();
}

function Order()
{
    let question;

    if(ordering)
    {
        question = 'Anything else? (if not type "done"): ';
    }
    else
    {
        question = 'What would you like? (if not type "done"): ';
    }
    
    reader.question(question, (item) =>
    {
        if (item === 'done')
        {
            console.log('Your order is: ', order);
            console.log('Total: ', total);
            Menu();
        }
        else
        {
            order.push(item);
            total += menu[item];
            Order();
        }
    });
}

Menu();
