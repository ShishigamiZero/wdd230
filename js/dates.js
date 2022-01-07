const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Modified: ${document.lastModified}`;

//This will get the year.
document.querySelector("year").innerHTML = new Date().getFullYear();