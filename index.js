const student={
    name:"ABC",
    roll:20220,
         age:20,
        abc:function(){
            console.log(this.name);
            console.dir(this);
        }
};

student.abc();
// Dstructuring in JS


const {name,roll,age}=student;
console.log(name);
console.log(roll);
console.log(age);


const promise=fetch("https://api.github.com/users/mohitjangra117");
promise.then(
    (res)=>{
        return res.json();

    }).then(
        (data)=>console.log(data)
    ).catch(
        (err)=>console.log("Errror: " , err)
    )
