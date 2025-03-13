
function doSum()
{
    const x = Number(document.getElementById('value_x_sum').value );
    const y = Number(document.getElementById('value_y_sum').value );
    const result = x + y;
    document.getElementById('result_value').innerHTML = result
}

function doSub()
{
    const x = Number(document.getElementById('value_x_sub').value );
    const y = Number(document.getElementById('value_y_sub').value );
    const result = x - y;
    document.getElementById('result_value').innerHTML = result
}

function doMult()
{
    const x = Number(document.getElementById('value_x_mult').value );
    const y = Number(document.getElementById('value_y_mult').value );
    const result = x * y;
    document.getElementById('result_value').innerHTML = result
}

function doDiv()
{
    const x = Number(document.getElementById('value_x_div').value );
    const y = Number(document.getElementById('value_y_div').value );
    const result = x / y;
    document.getElementById('result_value').innerHTML = result
}