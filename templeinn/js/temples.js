const requestURL = "https://shishigamizero.github.io/wdd230/templeinn/data/temples.json";
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
      
    const temples = jsonObject["temple"];
    temples.forEach(displayTemples);
  });

  function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p1");
    let p2 = document.createElement("p2");
    let p3 = document.createElement("p3");
    let p4 = document.createElement("p4");
    let p5 = document.createElement("p5");
    let p6 = document.createElement("p6");
    let p7 = document.createElement("p7");
    let p8 = document.createElement("p8");
    let p9 = document.createElement("p9");
    let p10 = document.createElement("p10");
    let portrait = document.createElement("img");
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = temple.name;
    p1.innerHTML = `${temple.streetaddress} ${temple.city}, ${temple.state} ${temple.zipcode}, ${temple.country}<br>`;
    p2.innerHTML = `${temple.phone} <br>`;
    p3.innerHTML = `<a href="${temple.website}" target="_blank">${temple.name} Webpage</a> <br>`;
    p4.innerHTML = `<strong>Ordinance Schedule:</strong> ${temple.ordschedule} <br>`;
    p5.innerHTML = `<strong>Session Schedule:</strong> ${temple.sesschedule} <br>`;
    p6.innerHTML = `<strong>President:</strong> ${temple.president} <br>`;
    p7.innerHTML = `<strong>Announcement:</strong> ${temple.announcement} <br>`;
    p8.innerHTML = `<strong>Groundbreaking:</strong> ${temple.groundbreaking} <br>`;
    p9.innerHTML = `<strong>Dedication:</strong> ${temple.dedication} <br>`;
    p10.innerHTML = `<strong>Temple Closure Dates:</strong> ${temple.closchedule} <br>`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.imageurl);
    portrait.setAttribute("alt",`The ${temple.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.appendChild(p8);
    card.appendChild(p9);
    card.appendChild(p10);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("div.cards").appendChild(card);
  }