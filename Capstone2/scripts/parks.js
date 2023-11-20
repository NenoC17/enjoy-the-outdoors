
let selectedLocation = "";
let selectedParkType = "";

document.addEventListener("DOMContentLoaded", (e) => {
	locationsArray.forEach(
		(location) => (locationsList.innerHTML += `<option>${location}</option>`)
	);
	parkTypesArray.forEach(
		(pt) => (parkTypeList.innerHTML += `<option>${pt}</option>`)
	);

	locationsList.addEventListener("change", (e) => {
		selectedLocation = e.target.value;
		showResults();
	});

	parkTypeList.addEventListener("change", (e) => {
		selectedParkType = e.target.value;
		showResults();
	});

	function isMatch(p) {
		return (
			(selectedLocation == "" || p.State == selectedLocation) &&
			(selectedParkType == "" || p.LocationName.includes(selectedParkType))
		);
	}

	function getCard(p) {
		return `<div class="card">
            <h3>${p.LocationName}</h3>
            <p><b>Address:</b> ${p.Address}</p>
            <p><b>City:</b> ${p.City}</p>
            <p><b>State:</b> ${p.State}</p>
            <p><b>Zipcode:</b> ${p.ZipCode}</p>
            <p><b>Phone Number:</b> ${p.Phone}</p>
            <p><b>Fax:</b> ${p.Fax}</p>
            <p><b>Coordinates:</b> ${p.Latitude}, ${p.Longitude}</p>
        </div>`;
	}

	function showResults() {
		results.innerHTML = "";
		const filtered = nationalParksArray.filter(isMatch);
		filtered.forEach((p) => (results.innerHTML += getCard(p)));
	}

	showResults();
}); 