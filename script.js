//your JS code here. If required.
document.getElementById("btn").addEventListener("click",async () => {
	let text = document.getElementById("text").value;
	let delay = document.getElementById("delay").value;

	if (text && delay){
		let myPromise  = new promise((resolve) => {
			setTimeout(() => {
				resolve(text);
			}, delay)
		});

		myPromise.then((data)=> {
			document.getElementById("output").textContent = data;
		})
		
		}
	}
});