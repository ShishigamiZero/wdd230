const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Modified: ${document.lastModified}`;

//This will get the year.
document.getElementById("year").innerHTML = new Date().getFullYear();