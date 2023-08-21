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
		itemId.style.animation = "line-anim 10s ease-in-out ";
		loop = true;
	});

	setTimeout(() => {
		ganesh.forEach((item, i) => {
			let pathLength = ganesh.item(i).getTotalLength();
			// console.log("Path " + i + " : " + pathLength);
			item.removeAttribute("style");
			loop = true;
		});
	},  5000);
}

let manBtn = document.getElementById("btn");

manBtn.addEventListener("click", play);



document.addEventListener("DOMContentLoaded", function () {
	const playButton = document.getElementById("playButton");
	const audioPlayer = document.getElementById("audioPlayer");
  
	playButton.addEventListener("click", function () {
	  if (audioPlayer.paused) {
		audioPlayer.play();
		playButton.textContent = "Pause";
	  } else {
		audioPlayer.pause();
		playButton.textContent = "Play Audio";
	  }
	});
  })
  
  
