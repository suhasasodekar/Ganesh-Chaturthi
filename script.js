function svgDraw() {
	let ganesh = document.querySelectorAll("#ganesh path");

	ganesh.forEach(i => {
		i.style.fill = "none";
	});

	ganesh.forEach((item, i) => {
		let pathLength = ganesh.item(i).getTotalLength();
		// console.log("Path " + i + " : " + pathLength);
		item.setAttribute("id", `p${i}`);
		let itemId = document.getElementById(`p${i}`);
		itemId.style.strokeDasharray = pathLength;
		itemId.style.strokeDashoffset = pathLength;
		itemId.style.animation = "line-anim 5s ease-in-out ";
	});

	setTimeout(() => {
		ganesh.forEach((item, i) => {
			let pathLength = ganesh.item(i).getTotalLength();
			// console.log("Path " + i + " : " + pathLength);
			item.removeAttribute("style");
		});
	}, 5000);
}

let manBtn = document.getElementById("btn");

manBtn.addEventListener("click", play);
