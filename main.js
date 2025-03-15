const FRUITS = [
    {
        img:"resources/Cerezas.png",
        name:"Cereza",
        amount: 80,
        initialStock:80,
        price: 10,
    },
    {
        img:"resources/platano.png",
        name:"Platano",
        amount: 43,
        initialStock:43,
        price: 15,
    },
    {
        img:"resources/manzana.webp",
        name:"Manzana",
        amount: 60,
        initialStock:60,
        price: 12,
    },
    {
        img:"resources/guayaba.webp",
        name:"Guayaba",
        amount: 43,
        initialStock:43,
        price: 5,
    },
    {
        img:"resources/uvas.png",
        name:"Uvas",
        amount: 200,
        initialStock:200,
        price: 2,
    },
    {
        img:"resources/melon.webp",
        name:"Melon",
        amount: 40,
        initialStock:200,
        price: 16,
    }
]

function reloadAll()
{    
    for (let index = 0; index < FRUITS.length; index++) {
        const aF = `fruitAmount${index+1}`
        const pF = `fruitPrice${index+1}`
        const iF = `fruitImage${index+1}`
        const ipF = `input${index+1}`
        const fruitd = document.getElementById(aF);
        fruitd.innerHTML=FRUITS[index].amount
        const fruitdd = document.getElementById(pF);
        fruitdd.innerHTML=FRUITS[index].price
        const fruitddd = document.getElementById(iF);
        fruitddd.src=FRUITS[index].img;
        const fruitdddd = document.getElementById(ipF);
        fruitdddd.value="";
    }
}

function addAll()
{
    const table = document.getElementById('calc_table');

    for (let index = 0; index < FRUITS.length; index++) {
        const fruitRow = document.createElement('tr');
        fruitRow.innerHTML = `  
                 
            <td><img src="${FRUITS[index].img}" alt="${FRUITS[index].name}" class="fruit_image" id="fruitImage${index+1}"></td>
            <td id="fruitAmount${index+1}"></td>
            <td id="fruitPrice${index+1}"></td>
            <td><input type="number" id="input${index+1}" /></td>
                      
        `;
        table.appendChild(fruitRow);
    }
    const buttonRow = document.createElement('tr');
    buttonRow.innerHTML = `
                    <tr>
                    <th></th> <th></th> <th></th>
                    <th><button class="button-5" id="Confirm"  onclick="confirmPurchase()">Confirmar</button></th>
                  </tr>
    `;
    table.appendChild(buttonRow);
    reloadAll();
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
    let amounts = [];
    let resultString = "";

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
            const amount = amounts[index];
            if (amount.amount > FRUITS[index].amount)
            {
                alert(`La cantidad de ${FRUITS[index].name} excede el inventario`);
                noMistakes = false;
                reloadAll();
                return;
            }
        }
        catch{}
    }

    if (noMistakes)
    for (let index = 0; index < FRUITS.length; index++) {
        try
        {
            const current = FRUITS[index];
            const amount = amounts[index];

            
            total += amount.amount * current.price;

            if (amount.amount > 0)
            {
                resultString+=`Producto: ${current.name} || Precio: ${current.price} || Cantidad: ${amount.amount} || Total: ${current.price*amount.amount}\n`
            }

            FRUITS[index].amount += - amount.amount
            reloadAll();
        }
        catch{}
    }

    resultString += `Total: ${total}`;

    if (noMistakes && total != 0) alert(resultString);
    
}

