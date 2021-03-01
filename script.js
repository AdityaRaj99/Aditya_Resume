console.log(document.getElementById('heading'));
document.getElementById('heading').innerHTML='Hello World from Script';
document.getElementById('heading').style.color="red";
document.getElementById('heading').style.fontSize="40px";
document.getElementById('span').innerHTML='I am a span';
document.getElementById('button').onclick=()=>alert('hii from button');
document.write('Hello from document write');


const functionWithArgs=(a,b)=>{
	console.log(a+b);
}
functionWithArgs(10,5);


function myFunction(text){
	let a = text.split("");
	let b = text.split("");
	b = b.reverse();
	let matched = true;
	
	console.log('b',b);
	console.log('non reverse',text.split(""));
	
	for(let i=0; i<a.length; i++){
		if(a[i].toUpperCase()!==b[i].toUpperCase()){
			matched = false;
		}
	}
	console.log(matched);
}
myFunction('Madam');