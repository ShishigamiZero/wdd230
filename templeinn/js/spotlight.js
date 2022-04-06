const requestURL = "https://shishigamizero.github.io/wdd230/templeinn/data/temples.json";
const spots = document.querySelector('.spots');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let templeid = document.querySelector('.temple');
    let dayOfWeek = new Date().getDay();
    let templeArray = [];

    const temples = jsonObject["temple"];
    // directories.forEach(displayDirectories);    

  if (dayOfWeek == 0) {
    templeid = temples.find(
      (temple) => temple.tid == '0'
    );    
  } else if (dayOfWeek == 1) {
    templeid = temples.find(
        (temple) => temple.tid == '1'
      );    
  } else if (dayOfWeek == 2) {
    templeid = temples.find(
        (temple) => temple.tid == '2'
      );    
  } else if (dayOfWeek == 3) {
    templeid = temples.find(
        (temple) => temple.tid == '3'
      );    
  } else if (dayOfWeek == 4) {
    templeid = temples.find(
        (temple) => temple.tid == '0'
      );    
  } else if (dayOfWeek == 5) {
    templeid = temples.find(
        (temple) => temple.tid == '1'
      );    
  } else if (dayOfWeek == 6) {
    templeid = temples.find(
        (temple) => temple.tid == '2'
      );    
  } else {
    newsheader = 'We apologize, there was an unknown error.'
    }
  
  templeArray.push(templeid);


  console.log(templeArray);
  templeArray.forEach(displayTemples);

  });

  function displayTemples(temple) {
    // Create elements to add to the document
    let section = document.createElement('section');
    let spots = document.createElement('section');
    let spot = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p1");
    let p2 = document.createElement("p2");
    let p3 = document.createElement("p3");
    let p4 = document.createElement("p4");
    let p5 = document.createElement("p5");
    let p6 = document.createElement("p6");
    let portrait = document.createElement("img");
  
    // Change the textContent property of the h2 element to contain the business's full name
    h2.textContent = temple.name;
    p1.innerHTML = `<br>${temple.streetaddress} <br>`;
    p2.innerHTML = `${temple.city}, ${temple.state} ${temple.zipcode} <br>`;
    p3.innerHTML = `${temple.country} <br>`;
    p4.innerHTML = `${temple.phone} <br>`;
    p5.innerHTML = `<strong>President:</strong> ${temple.president} <br>`
    p6.innerHTML = `<strong>Dedication:</strong> ${temple.dedication} `

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.imageurl);
    portrait.setAttribute("alt",`The ${temple.name}`);
    portrait.setAttribute('loading', 'lazy');

    // Add classes to HTML elements created
    section.classList.add('contentbox');
    spots.classList.add('spots');
    
    // Add/append the section(card) with the h2 element
    spot.appendChild(h2);
    spot.appendChild(portrait);
    spot.appendChild(p1);
    spot.appendChild(p2);
    spot.appendChild(p3);
    spot.appendChild(p4);
    spot.appendChild(p5);
    spot.appendChild(p6);
    spots.appendChild(spot);
    section.appendChild(spots);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector(".spotdiv").appendChild(section);
  }