/*Chamber weekly meet and greet banner code*/
const greet = now.getDay()

switch (greet) {
  case 0:
    document.querySelector("#banner").style.display = "none";
    console.log("Sunday")
    break;
  case 1:
    document.querySelector("#banner").style.display = "block";
    console.log("Monday")
    break;
  case 2:
    document.querySelector("#banner").style.display = "block";
    console.log("Tuesday")
    break;
  case 3:
    document.querySelector("#banner").style.display = "none";
    console.log("Wednesday")
    break;
  case 4:
    document.querySelector("#banner").style.display = "none";
    console.log("Thursday")
    break;
  case 5:
    document.querySelector("#banner").style.display = "none";
    console.log("Friday")
    break;
  case 6:
    document.querySelector("#banner").style.display = "none";
    console.log("Saturday");
}
