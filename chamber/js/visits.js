
//current code does not work, seeking additional help - IF 2/18/2022 4:15pm MST
const lastvisit = window.localStorage.getItem('lastvisit');
    if(lastvisit === undefined){
        lastvisit = new Date(Date.now());
        document.getElementById('visits').textContent = "0";
    }

const nextvisit = date.parse(lastvisit);
const daytime = 1000 * 60 * 60 * 24;

let daysbetween = Date.now() - lastvisit;
let days = daysbetween / daytime;

window.localStorage.setItem('lastvisit', new Date(Date.now()));

const visits = Math.floor(days);
document.getElementById('visits').textContent = visits;