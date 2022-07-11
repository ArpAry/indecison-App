class Person{
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getdescription(){
        return `${this.name} is ${this.age} year old ! :`
    }
};
class Traveller extends Person{
    constructor(name,age,location)
    {
        super(name,age);
        this.location=location;
    }
    getdescription(){
        let description=super.getdescription();
        if(this.hasLocation())
        {
         description +=`I am visitng from ${this.location}`;
        }
        return description;

    }
    hasLocation()
    {
        return !!this.location;
    }



}

const me=new Traveller('Arpit',20,"bareilly");
console.log(me.getdescription());

const other=new Traveller();
console.log(other.getdescription());