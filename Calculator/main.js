let display = document.querySelector('.display input');
let buttons = document.querySelectorAll('.calculator form input[type="button"]');
let buttonArray = Array.from(buttons);
let string = '';

buttonArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.value == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;

        } else if (e.target.value == 'AC') {
            string = '';
            display.value = string;
        } else if (e.target.value == '=') {
            string = eval(string);
            display.value = string;
        } else {
            string += e.target.value;
            display.value = string;
        }
    });
});