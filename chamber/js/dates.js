const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;

//This will get the year.
const year = document.querySelector("#year")
year.innerHTML = new Date().getFullYear();

const datefield = document.querySelector("time");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<strong>${fulldate}</strong>`;