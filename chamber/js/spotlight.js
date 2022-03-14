const requestURL = "https://shishigamizero.github.io/wdd230/chamber/data/data.json";
const spots = document.querySelector('.spots');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
      
    const directories = jsonObject["directory"];
    console.log(directories.forEach(displayDirectories));
  });

  function displayDirectories(directory) {
    // Create elements to add to the document
    let spot = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p1");
    let p2 = document.createElement("p2");
    let p3 = document.createElement("p3");
    let portrait = document.createElement("img");
  
    // Change the textContent property of the h2 element to contain the business's full name
    h2.textContent = directory.name;
    p1.innerHTML = `${directory.website} <br>`;
    p2.innerHTML = `${directory.phone} <br>`;
    p3.innerHTML = `<strong>Founder:</strong> ${directory.founder} <br>`

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', directory.imageurl);
    portrait.setAttribute("alt",`Logo for ${directory.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    spot.appendChild(h2);
    spot.appendChild(portrait);
    spot.appendChild(p1);
    spot.appendChild(p2);
    spot.appendChild(p3);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("div.spots").appendChild(spot);
    console.log(directory);
 
 let dayOfWeek;
dayOfWeek = now.getDay();
if (dayOfWeek == 0) {
  goldview = directory.memberlevel("gold1");
  silverview = directory.id("silver1");
  bronzeview = directory.id("bronze1")
} else if (dayOfWeek == 1) {
    goldview = directory.memberlevel("gold1");
    silverview = directory.id("silver1");
    bronzeview = directory.id("bronze2")
} else if (dayOfWeek == 2) {
    goldview = directory.id("gold2");
    silverview = directory.id("silver2");
    bronzeview = directory.id("bronze3")
} else if (dayOfWeek == 3) {
    goldview = directory.id("gold2");
    silverview = directory.id("silver2");
    bronzeview = directory.id("bronze4")
} else if (dayOfWeek == 4) {
    goldview = directory.id("gold3");
    silverview = directory.id("silver3");
    bronzeview = directory.id("bronze5")
} else if (dayOfWeek == 5) {
    goldview = directory.id("gold3");
    silverview = directory.id("silver3");
    bronzeview = directory.id("bronze1")
} else if (dayOfWeek == 6) {
    goldview = directory.id("gold4");
    silverview = directory.id("silver4");
    bronzeview = directory.id("bronze2")
} else {
  newsheader = 'We apologize, there was an unknown error.'
  }

document.querySelector('.goldview').textContent = goldview;
document.querySelector(".silverview").textContent = silverview;
document.querySelector(".bronzeview").textContent = bronzeview;    
  }

