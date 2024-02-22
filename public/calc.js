function getSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    fetch('http://localhost:3000/' + num1 + '/' + num2, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' } 
    })
    .then(async response => {
        result = await response.json()
        sum = result.sum
        document.getElementById('result').innerText = `${sum}`
    })
    .catch(error => {
        console.log(error)
    })
}