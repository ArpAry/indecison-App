const square=function(x)
{
    return x*x;
}
console.log(square(5));

const arrowSquare = (x) =>
{
    return x*x;
}
console.log(arrowSquare(4));

const arSquare = (x) => x*x;
console.log(arSquare(9));

const firstName="Andrew Mead";

const firstFun=(x) => console.log(x.split(' ')[0]);
firstFun(firstName);