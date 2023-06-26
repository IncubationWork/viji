      
  class Person{
    constructor(name,age,sex){
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
    getVoiceType(){
      if(this.age>=18 && this.age<=40 && this.sex==="male"){
        return "hoarse";
      }else if(this.age>= 18 && this.age<=30 && this.sex === "female"){
        return "Contralto tessitura";
      }
      else if (this.age<18){
        return "soft";
      }
      else {
        return "tenor"
      }
    }
  }
      
  class Employee extends Person{
    constructor(id,name,age,sex){
      super(name,age,sex)
      this.id = id;
    }
  }

  let a = new Employee(1,"tulip", 52, "female");
  let b = new Employee(2, "ram", 32, "male");

  const aPrototype = Object.getPrototypeOf(a);
  const bPrototype = Object.getPrototypeOf(b);
 
      
  console.log(aPrototype.getVoiceType === bPrototype.getVoiceType);
