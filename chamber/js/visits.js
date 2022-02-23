
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

// I have some pseudocode that another student thought was helpful in a previous semester. Let me know if this clears up anything or not:

// If localStorage getItem sessionTime is not null <- i.e. you stored the current session last time
//      localStorage setItem 'lastSessionTime' to sessionTime <- move the stored 'current' session from last time into the previous session before you update everything (it was current at the end of the last session, it no longer is, which is why we are moving it)
 
// (otherwise this is their first visit and you don't need to do anything )
 
// localStorage setItem 'sessionTime' to current time   <-update sessionTime to the current time now that you had a chance to save the timestamp from the previous visit into the other key (lastSessionTime)
 
// if localStorage getItem lastSessionTime is not null
//      do the comparison and add it to the DOM
// else you can add a message about welcome on their first visit, but this is not required.
 
// So, on every new load, you can throw away (overwrite) lastS


//Jessica's Code
// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();
