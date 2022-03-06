function cardView(){
	document.getElementById('cardview').classList.toggle('open');
	document.getElementById('listview').classList.toggle('open');
    console.log("working");
}

const y = document.getElementById('cardview');
y.onclick = toggleMenu;

const z = document.getElementById('listview');
z.onclick = toggleMenu;