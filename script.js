// Complete the js code
function Car(make, model) {
	this.make= make;
	this.model = model;
	getMakeModel(){
		return (this.make+" "+this.model)
	}
}

function SportsCar(make, model, topSpeed) {
	this.topSpeed = topSpeed;
	getTopSpedd(){
		return this.topSpeed;
	}
}

SportsCar.__proto__ = Car;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
