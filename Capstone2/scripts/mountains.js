document.addEventListener("DOMContentLoaded", (e) => {
	mountainsArray.forEach((mountain) => {
		const option = document.createElement("option");
		option.innerHTML = mountain.name;
		list.appendChild(option);
	});

	list.addEventListener("change", (event) => {
		let mountain = mountainsArray.find((m) => m.name == event.target.value);
		results.innerHTML = `<h2>${mountain.name}</h2>`;
		results.innerHTML += mountain.desc;
		results.innerHTML += `<h3>Elevation: ${mountain.elevation} feet</h3>`;
		results.innerHTML += `<h3>Effort: ${mountain.effort}</h3>`;
		results.innerHTML += `<img src="./images/${mountain.img}">`;
	});
});
