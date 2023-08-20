function inflationCalculator () {
    let infaltionRate = document.querySelector('#inflationRate');
    infaltionRate = parseFloat(infaltionRate.value);
    console.log(infaltionRate)

    //parseFloat sluzi za pretvaranje stringa u broj s zarezom 
    //Parseint je cjeli brojevi

    let money = document.querySelector('#money')
    money = parseFloat(money.value);
    console.log(money)

    let year = document.querySelector('#years').value
    year = parseFloat(year)
    console.log(year)

    //formula for inflatio
    let worth = money + (money * (infaltionRate /100));
    console.log(worth)


    //formula for another years
    for (let i = 1; i < year; i++) {
        worth += worth * (infaltionRate / 100);
    }

    console.log(worth)


    worth = worth.toFixed(2)
    //how to create dom new element
    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `danasnjih ${money}$ is valid the same as ${worth}$ for ${year} years.`;

    document.querySelector('.container').appendChild(newElement);
}