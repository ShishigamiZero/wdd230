function cardView(){
	document.getElementById('cardview').classList.toggle('show');
	document.getElementById('listview').classList.toggle('show');
    console.log("working");
}

const y = document.getElementById('cardview');
y.onclick = toggleMenu;

const z = document.getElementById('listview');
z.onclick = toggleMenu;