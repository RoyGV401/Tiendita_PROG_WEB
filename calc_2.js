
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

function enterValue(value)
{
    document.getElementById('result_value').innerHTML =  document.getElementById('result_value').innerHTML + value

}

function doEnter() {

    try
    {
        const operation = document.getElementById('result_value').innerHTML;
        const result = eval(operation);
        if (isNaN(result))
        {
            document.getElementById('result_value').innerHTML = "MATH ERROR";
            setTimeout(
            function(){
                document.getElementById('result_value').innerHTML = "";

            },400)
        }
        else
        document.getElementById('result_value').innerHTML = result;
    }
    catch
    {
        document.getElementById('result_value').innerHTML = "SYNTAX ERROR";
        setTimeout(
        function(){
            document.getElementById('result_value').innerHTML = "";

        },400)
    }
   
    
}

function doDelete()
{
    document.getElementById('result_value').innerHTML = "";
}

function enterPar1() 
{    
    document.getElementById('result_value').innerHTML =  document.getElementById('result_value').innerHTML + "("
}

function enterPar2() 
{    
    document.getElementById('result_value').innerHTML =  document.getElementById('result_value').innerHTML + ")"
}