const FRUITS = [
    {
        img:"Cerezas.webp",
        name:"Cerezas",
        amount: 80,
        initialStock:80,
        price: 10,
    },
    {
        img:"platano.webp",
        name:"Platano",
        amount: 43,
        initialStock:43,
        price: 15,
    },
    {
        img:"",
        name:"Manzana",
        amount: 60,
        initialStock:60,
        price: 12,
    },
    {
        img:"",
        name:"Guayaba",
        amount: 43,
        initialStock:43,
        price: 5,
    },
    {
        img:"",
        name:"Uvas",
        amount: 200,
        initialStock:200,
        price: 2,
    }
]

function reloadAll()
{
    for (let index = 0; index < FRUITS.length; index++) {
        const aF = `fruitAmount${index+1}`
        const pF = `fruitPrice${index+1}`
        const iF = `fruitImage${index+1}`
        const fruitd = document.getElementById(aF);
        fruitd.innerHTML=FRUITS[index].amount
        const fruitdd = document.getElementById(pF);
        fruitdd.innerHTML=FRUITS[index].price
        const fruitddd = document.getElementById(iF);
        fruitddd.src=FRUITS[index].img;
    }
}

function decrementStack(fruit,amountToDecrement)
{
    if (fruit.amount - amountToDecrement < 0)
    {
        FRUITS.forEach(f => {
            if (f.name == fruit.name)
            {
                f.amount = fruit.amount - amountToDecrement;
            }
        });
    }
}

function resetStack(fruit)
{
    
    FRUITS.forEach(f => {
        if (f.name == fruit.name)
        {
             f.amount = fruit.initialStock;
        }
    });
}

function confirmPurchase()
{
    let total = 0;
    let amounts = []
    for (let index = 0; index < FRUITS.length; index++) {
        const aF = `input${index+1}`;
        try{
            const amnt = document.getElementById(aF).value;
            amounts.push({
                amount:amnt, index:index
            });
        }
        catch{

        }
    }
    let noMistakes = true;
    for (let index = 0; index < FRUITS.length; index++) {
        try
        {
            const current = FRUITS[index];
            const amount = amounts[index];
            if (amount.amount > FRUITS[index].amount)
            {
                alert("La cantidad de frutas excede el inventario!");
                noMistakes = false;
                reloadAll();
                return;
            }
            else
            {
                total += amount.amount * current.price;
                FRUITS[index].amount += - amount.amount
                reloadAll();

            }
        }
        catch{}
    }
    if (noMistakes) alert("Total: "+total)
    
}