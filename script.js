
let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let diceArray = []

let conatiner = document.getElementById('die-container');

class Die {
    constructor() {
        this.die = document.createElement('div');
        this.render()
        diceArray.push(this)
        this.die.addEventListener('click', () => this.reRoll())
        this.die.addEventListener('dblclick', () => this.destroy())
    }
    render() {
        this.die.classList.add('roll');
        this.die.style.backgroundColor = randomColor;
        this.value = document.createTextNode(`${randomVal(1, 7)}`);
        this.die.appendChild(this.value);
        conatiner.appendChild(this.die);
    }
    reRoll() {
        this.value = document.createTextNode(`${randomVal(1, 7)}`);
        this.die.replaceChild(this.value, this.die.childNodes[0])
    }
    destroy() {
        this.die.remove();
        let i = diceArray.indexOf(this);
        diceArray.splice(i, 1)
    }
};

let rollAll = document.getElementById('re-roll-btn');
rollAll.addEventListener('click', () => diceArray.forEach((oneDie) => oneDie.reRoll()))

let newRoll = document.getElementById('generate-die-btn');
newRoll.addEventListener('click', insertDie);

function insertDie() {
    let newDie = new Die();
}

let sumDice = document.getElementById('sum-die-btn');
sumDice.addEventListener('click', function () {
    let sum = 0;
    diceArray.forEach(oneDie => sum += Number(oneDie.value.data));
    alert(sum);
})
