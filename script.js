 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = parseInt(prompt("Enter the radius of the circle:"));
	        let a=Math.PI*Math.pow(radius,2);
            // write you code here and display the result to the user'
	 console.log(`The area of the circle with radius ${radius} is ${a}`)
           
}
calculateArea();
