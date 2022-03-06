const requestURL = "https://shishigamizero.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
      
    const directories = jsonObject["directory"];
    directories.forEach(displayDirectories);
  });

  function displayDirectories(directory) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let portrait = document.createElement("img");
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${directory.name}`;
    p.innerHTML = `<strong>Address:</strong> ${directory.streetaddress} <br/>
    <strong>City:</strong> ${directory.city} <br/>
    <strong>State:</strong> ${directory.state} <br/>
    <strong>Zip Code:</strong> ${directory.zipcode} <br/>
    <strong>Website:</strong> ${directory.website} <br/>
    <strong>Type:</strong> ${directory.businesstype} <br/>
    <strong>Year Opened:</strong> ${directory.yearopened} <br/>
    <strong>Founder:</strong> ${directory.founder} <br/>`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', directory.imageurl);
    portrait.setAttribute("alt",`Logo for ${directory.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("div.cards").appendChild(card);
  }