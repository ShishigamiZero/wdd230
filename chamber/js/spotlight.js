const requestURL = "https://shishigamizero.github.io/wdd230/chamber/data/data.json";
const spots = document.querySelector('.spots');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let goldview;
    let silverview;
    let bronzeview;
    let dayOfWeek = new Date().getDay();
    let directoryArray = [];

    const directories = jsonObject["directory"];
    // directories.forEach(displayDirectories);    

  if (dayOfWeek == 0) {
    goldview = directories.find(
      (directory) => directory.memberlevel == 'gold1'
    );    
    silverview = directories.find(
      (directory) => directory.memberlevel == 'silver1'
    );
    bronzeview = directories.find(
      (directory) => directory.memberlevel == 'bronze1'
    );
  } else if (dayOfWeek == 1) {
    goldview = directories.find(
      (directory) => directory.memberlevel == 'gold1'
    );    
    silverview = directories.find(
      (directory) => directory.memberlevel == 'silver1'
    );
    bronzeview = directories.find(
      (directory) => directory.memberlevel == 'bronze2'
    );
  } else if (dayOfWeek == 2) {
    goldview = directories.find(
      (directory) => directory.memberlevel == 'gold2'
    );    
    silverview = directories.find(
      (directory) => directory.memberlevel == 'silver2'
    );
    bronzeview = directories.find(
      (directory) => directory.memberlevel == 'bronze3'
    );
  } else if (dayOfWeek == 3) {
    goldview = directories.find(
      (directory) => directory.memberlevel == 'gold2'
    );    
    silverview = directories.find(
      (directory) => directory.memberlevel == 'silver2'
    );
    bronzeview = directories.find(
      (directory) => directory.memberlevel == 'bronze4'
    );
  } else if (dayOfWeek == 4) {
    goldview = directories.find(
      (directory) => directory.memberlevel == 'gold3'
    );    
    silverview = directories.find(
      (directory) => directory.memberlevel == 'silver3'
    );
    bronzeview = directories.find(
      (directory) => directory.memberlevel == 'bronze5'
    );
  } else if (dayOfWeek == 5) {
    goldview = directories.find(
      (directory) => directory.memberlevel == 'gold3'
    );    
    silverview = directories.find(
      (directory) => directory.memberlevel == 'silver3'
    );
    bronzeview = directories.find(
      (directory) => directory.memberlevel == 'bronze1'
    );
  } else if (dayOfWeek == 6) {
    goldview = directories.find(
      (directory) => directory.memberlevel == 'gold4'
    );    
    silverview = directories.find(
      (directory) => directory.memberlevel == 'silver4'
    );
    bronzeview = directories.find(
      (directory) => directory.memberlevel == 'bronze2'
    );
  } else {
    newsheader = 'We apologize, there was an unknown error.'
    }
  
  directoryArray.push(goldview);
  directoryArray.push(silverview);
  directoryArray.push(bronzeview); 

  console.log(directoryArray);
  directoryArray.forEach(displayDirectories);

  });

  function displayDirectories(directory) {
    // Create elements to add to the document
    let section = document.createElement('section');
    let spots = document.createElement('section');
    let spot = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p1");
    let p2 = document.createElement("p2");
    let p3 = document.createElement("p3");
    let p4 = document.createElement("p4");
    let portrait = document.createElement("img");
  
    // Change the textContent property of the h2 element to contain the business's full name
    h2.textContent = directory.name;
    p1.innerHTML = `${directory.website} <br>`;
    p2.innerHTML = `${directory.phone} <br>`;
    p3.innerHTML = `<strong>Founder:</strong> ${directory.founder} <br>`
    p4.innerHTML = `<strong>"${directory.motto}"<strong>`

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', directory.imageurl);
    portrait.setAttribute("alt",`Logo for ${directory.name}`);
    portrait.setAttribute('loading', 'lazy');

    // Add classes to HTML elements created
    section.classList.add('contentbox');
    spots.classList.add('spots');
    
    // Add/append the section(card) with the h2 element
    spot.appendChild(h2);
    spot.appendChild(portrait);
    spot.appendChild(p4);
    spot.appendChild(p1);
    spot.appendChild(p2);
    spot.appendChild(p3);
    spots.appendChild(spot);
    section.appendChild(spots);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector(".spotdiv").appendChild(section);
  }