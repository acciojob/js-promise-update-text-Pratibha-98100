//your JS code here. If required.

function delayedGreeting(){
	return new Promise((resolve) => {
		setTimeout(() =>{
		  resolve('Hello, world!')
		} , 1000)
	})
}

const box = document.getElementById("output");

let x = delayedGreeting();
x.then((data) => {
	box.innerText =  data 
})
// +'Hello, world!'