class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

  class Manager extends Employee {
    constructor(name,salary,hireDate,descriptionOfJob) {
      super(name,salary,hireDate);
      this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
      let message = this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " because he " + this.descriptionOfJob;
      console.log(message);
    }
  
  }  

  class Designer extends Employee {
    constructor(name,salary,hireDate,experience) {
      super(name,salary,hireDate);
      this.experience = experience;
    }
    yearsExperience() {
      
      let message = this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " after working for the company for " + this.experience + " years.";
      console.log(message);
    }
  } 
  
  class SalesAssociate extends Employee {
    constructor(name,salary,hireDate,degrees) {
      super(name,salary,hireDate);
      this.degrees = degrees;
    }
    degreeCompleted() {
      let myDegree;
      if(this.degrees == true)
      {
        myDegree = "has a degree.";
      }
      else{
        myDegree = "has no degree.";
      }
      let message = this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " because she " + myDegree;
      console.log(message);
    }
  }  

let myManager = new Manager("John",100000,"07/07/2002","heads Customer Service");
let myDesigner = new Designer("Sally",70000,"12/28/2018", 5);
let mySalesAssociate = new SalesAssociate("Nathan",50000,"09/02/2002",true);

myManager.jobDescription();
myDesigner.yearsExperience();
mySalesAssociate.degreeCompleted();
