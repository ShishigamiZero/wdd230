function createDays(){

    let lastvisit;
        if(lastvisit === undefined){
            document.getElementById('visits').innerText = "0";
        }
        lastvisit = window.localStorage.getItem('lastvisit');

    const nextvisit = Date.now();
    const daytime = 1000 * 60 * 60 * 24;

    let daysbetween = nextvisit - Date.parse(lastvisit);
    let days = daysbetween / daytime;

    window.localStorage.setItem('lastvisit', new Date(Date.now()));

    const visits = Math.floor(days);
    document.getElementById('visits').textContent = visits;
}
createDays();