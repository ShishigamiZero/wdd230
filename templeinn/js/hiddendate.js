// Use to add a date to the Join Form Page.
const current_date = new Date();
let date = document.getElementById("current_date").innerHTML = Date();
document.querySelector('#current_date').value = date;

// $("#StartDate, #EndDate").datepicker();

// $("#EndDate").change(function () {
//     var startDate = document.getElementById("StartDate").value;
//     var endDate = document.getElementById("EndDate").value;
 
//     if ((Date.parse(endDate) <= Date.parse(startDate))) {
//         alert("End date should be greater than Start date");
//         document.getElementById("EndDate").value = "";
//     }
// });
let btnCheck = document.querySelector('resBtn');

 let startDate = document.getElementById("StartDate").value;
 let endDate = document.getElementById("EndDate").value;

// function compareDates(startDate, endDate) {
//   if ((Date.parse(endDate) <= Date.parse(startDate))) {
//     alert("End date should be greater than Start date");
//     document.getElementById("EndDate").value = "";
//    }
//  }

 btnCheck.addEventListener('click', () =>  {
     let start = startDate.getTime();
     let end = endDate.getTime();

     if(end <= start){
         alert("Start date should be before the end date.")
     }
 });
// startDate.addEventListener('input', compareDates);
// endDate.addEventListener('input', compareDates);