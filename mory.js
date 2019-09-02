function IMT(event){
    event.preventDefault();
    

    var form = event.target;

    var weight = form.querySelector('[name="weight"]');
    var growth = form.querySelector('[name="growth"]');
    var answer = form.querySelector('#answer');
    console.log(weight, growth, answer);

    var value = weight.value / Math.pow(growth.value / 100, 2);
    answer.textContent = Math.round(value) + " ИМТ";
}

function IMTIdeal(event){
	event.preventDefault();
    

    var form = event.target;

    var gender = form.querySelector('[name="gender"]');
    var growth = form.querySelector('[name="growth"]');
    var answer = form.querySelector('#answer');
    console.log(gender, growth, answer);

    var value = 0;
    if (gender.value === "0") {
    	value = 45.5 + 2.3 * (0.394 * growth.value - 60);
 	} else if (gender.value === "1") {
 		value = 50 + 2.3 * (0.394 * growth.value - 60);
 	} else {
 		value = "Ваш котик идеален в любом весе!";
 	}
    answer.textContent = typeof value === "string" ? value : Math.round(value) + " кг";
}

function cal(event) {
    event.preventDefault();
    

    var form = event.target;

    var calories = form.querySelector('[name="calories"]');
    var gramm = form.querySelector('[name="gramm"]');
    var answer = form.querySelector('#answer');
    console.log(calories, gramm, answer);

    var value = calories.value / 100 * gramm.value;
    answer.textContent = Math.round(value) + " ккал";
}

function maxcal(event) {
    event.preventDefault();
    

    var form = event.target;

    var growth = form.querySelector('[name="growth"]');
    var weight = form.querySelector('[name="weight"]');
    var age = form.querySelector('[name="age"]');
    var answer = form.querySelector('#answer');
    console.log(growth, weight, age, answer);

    var value = (655.1 + 9.563 * weight.value + 1.85 * growth.value - 4.676 * age.value) * 1.2;
    answer.textContent = Math.round(value) + " ккал";
}

var food = `<div> Скушано сегодня
            <select name="calories">
            </select>
            <div class="inline-block">
              <label> вес (гр) </label>
              <input type="number" name="gramm" required min="1" max="999">
            </div>
            <div class="inline-block">
              <button class="js-plus"> + </button>
            </div>
          </div>`

var products = Array.from([
    {
        name: "Гречка",
        calories: 343
    },
    {   
        name: "Рис",
        calories:  343
    },
    {   
        name: "Творог 9%",
        calories:  159
    }
]);

function jsPlus(event) {
    event.preventDefault();

    products.map(function(el){
        var op = document.createElement("option");
        op.textContent = el.name;
        op.setAttribute("value", op.calories);
        return op;
    });
}

var formIMT = document.querySelector("#IMT");
var formIMTIdeal = document.querySelector("#IMTIdeal");
var formcal = document.querySelector("#product");
var formmaxcal = document.querySelector("#maxcal");
formcal.addEventListener("submit", cal);
formIMT.addEventListener("submit", IMT);
formIMTIdeal.addEventListener("submit", IMTIdeal);
formmaxcal.addEventListener("submit", maxcal);

