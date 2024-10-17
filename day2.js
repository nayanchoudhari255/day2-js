console.log("Ntr is done with devara 1 shoot");
console.log(40);
console.log(true);
console.log(false);

//variables: is a container to store data(var)
//three types of variables var,let,const
 var age;//declaration
 age=40; //assigning
 var age=40; //initializeing
 var age=40;
 var job="developer";
 var sal=999;
//js is synchronous single threaded language
//synchronous means: siquence or order or line by line
//single:one, thread means:line
// var declaration are global scope variables
 console.log(age);
 console.log(sal);
 console.log(job);


//object:is a non primitive data which can holed data in key value pairs
 var details={
 
     name:"nayan",
     age:22,
     lastname:"choudhari"
 }
//two ways to access key value . ,[""]
 console.log(details["lastname"])//choudhari
  console.log(details);//{ name: 'nayan', age: 22, lastname: 'choudhari' }
  console.log(details.age)//22

//Array:array is collection of data that can primitive or non primitive
//array length start with:1
//but the index value store:0,1,2,3,4
//array is collection of data that data called elements
var info=[1,"nayan",true,null,{id:2,value:"ok"},"",""] //length is 7 ,index value is :6
console.log(info[0]);//1
console.log(info[4].value);//ok

const data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo'
    }, {
        id: 2,
        name: 'bar'
    }]
};
console.log(data)
console.log(data.items[1].name)
