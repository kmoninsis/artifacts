let url = "./images/totko.png";
let totko;

function setup(){
	loadImage(url, totko => {image(totko,0,0);
	},
		(event) => {
			console.log(event);
		}
		);
}