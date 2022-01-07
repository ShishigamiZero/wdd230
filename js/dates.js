const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Modified: ${document.lastModified}`;

//This will get the year.
const year = document.querySelector("#year")
year.innerHTML = new Date().getFullYear();