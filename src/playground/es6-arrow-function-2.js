const add = (a,b) =>
{
  //  console.log(arguments);
    return a+b;
}
//console.log(add(5,3));
/*
// this is function Es5---Es5 USING ( THIS ) WHICH IS NOT WORKING IN IT 
const user={
    name:'Andrew',
    cities:['Philidephia','Nework','Dublin'],
    printPlacesLived:function(){
        this.cities.forEach(function(city)
        {
            console.log(this.name +' has lived in '+city )

        });
    }
}
user.printPlacesLived(); */


/*
// this is function Es5---Es5 USING  ( THIS ) INDIRECTLY WHICH IS  WORKING IN IT
//  
const user={
    name:'Andrew',
    cities:['Philidephia','Nework','Dublin'],
    printPlacesLived:function(){
        let that =this;
        this.cities.forEach(function(city)
        {
            console.log(that.name +' has lived in '+city )

        });
    }
}
user.printPlacesLived(); */

// this is function Es5---Es6 USING ( THIS  ) WHICH IS  WORKING IN IT
// const user={
//     name:'Andrew',
//     cities:['Philidephia','NewYork','Dublin'],
//     printPlacesLived:function(){
//         this.cities.forEach((city) =>
//         {
//             console.log(this.name +' has lived in  ' +city )

//         });
//     }
// }
// user.printPlacesLived();


// this is function Es6---Es6 USING ( THIS ) WHICH IS NOT WORKING IN IT

// const user={
//     name:'Andrew',
//     cities:['Philidephia','Newyork','Dublin'],
//     printPlacesLived:()=>{
//        
//         this.cities.forEach((city) =>
//         {
//             console.log(this.name +' has lived in '+city )

//         });
//     }
// }
// user.printPlacesLived();




//  Es5 FUNCTION CONTAING ( Map ) Method 
// const user={
//     name:'Andrew',
//     cities:['Philidephia','Newyork','Dublin'],
//     printPlacesLived:function(){
//         const cityMessages=this.cities.Map(city)
//         {
//             return this.name +' has Lived in '+ city ;

//         };
//         return cityMessages;
//     }
// }
// user.printPlacesLived();


const user={
    name:'Andrew',
    cities:['Philidephia','Newyork','Dublin'],
    printPlacesLived(){
    return this.cities.map((city) => this.name +' has Lived in '+ city );
    }
};

console.log(user.printPlacesLived());

let multiplier={
    numbers:[1,2,3],
    number:2,
    multiply ()
    {
        return this.numbers.map((num) => num*this.number+' have been multiplied '+this.number);
    }
}
console.log(multiplier.multiply());

