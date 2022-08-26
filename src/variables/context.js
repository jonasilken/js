var number = 200;

console.log(number);

this.number = 200;

// context object ===> this
console.log(this.number);

this.this = this;

console.log(this.this.this.this.this.number); //context safe

// variable context
var numberX = 300;

{
    numberX = 200;
    const numberY = 200;

    console.log(numberX);
    console.log(numberY);

    {
        let numberZ = 500;

        console.log(numberZ);
    }

    console.log(numberZ); // cannot outside this context
}

console.log(numberX);
