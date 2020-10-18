class Student{
    constructor({name, age, dateOfBirth, gender,studentId,hobbies}) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.studentId = studentId;
        this.hobbies = hobbies;
        switch (gender) {
            case 'male':
                this.gender = 'male'
                break;
            case 'female':
                this.gender = 'female'
                break;
            default:
                this.gender = 'Not Valid'
                break;
        }
    }

    set changeName(newName){
      if (typeof newName === "string" && isNaN(newName)){
        this.name = newName
      }
    }

    set changeAge(newAge){
      if (typeof newAge === "number" && newAge >=  0){
        this.age = newAge
      }
    }

    set changeDateOfBirth(newdob){
        if (typeof newdob === "string"){
          this.dateOfBirth = newdob
        }
      }
    
    set changeGender(newGender){
        if (typeof newGender === "string" && isNaN(newGender)){
            switch (newGender) {
            case 'male':
                this.gender = 'male'
                break;
            case 'female':
                this.gender = 'female'
                break;
            default:
                this.gender = 'Not Valid'
                break;
        }
      }
    }

    set addHobbies(newHobbie){
        if (typeof newHobbie === "string" && isNaN(newHobbie)){
            this.hobbies.push(newHobbie)
          }
      }

    set removeHobby(hobby) {
        const index = this.hobbies.indexOf(hobby);
        this.hobbies.splice(index, 1)
    }

    get dataStudent(){
        return `
        ID = ${this.studentId} | Name = ${this.name} | Age = ${this.age} | Date Of Birth = ${this.dateOfBirth} | Gender = ${this.gender} | Hobbies = ${this.hobbies}`
      }

    get data(){
        return this;
    }

}

// student1

const student1 = new Student({
    name: "Ahmad D",
    age : 23,
    dateOfBirth : "05 April 1997",
    gender : "male",
    studentId : "GA059",
    hobbies : ["badminton","design"]
})

student1.changeName = "Ahmad Danang"
student1.changeAge = 22
student1.changeDateOfBirth = "22 Maret 1998"
student1.changeGender = "male"
student1.addHobbies = "Volly"
student1.addHobbies = "Coding"


// let {name, age, dateOfBirth, gender, studentId, hobbies} = student1 

console.log(student1.dataStudent);
student1.removeHobby = "Volly"
console.log("\n di bawah ini hobi yang sudah di hapus")
for(let i = 0; i < student1.hobbies.length; i++){
  console.log(`${i+1}. ${student1.hobbies[i]}`)
}


// student2

const student2 = new Student({
    name : "Fair",
    age : 23,
    dateOfBirth : "15 December 1997",
    gender : "male",
    studentId : "GA060",
    hobbies : ["Audiot", "Gaming"]
})

student2.changeName = "Fairuz"
student2.changeAge = 24
student2.changeDateOfBirth = "15 December 1996"
student2.changeGender = "male"
student2.addHobbies = "Coding"
student2.addHobbies = "Not a vvibu"

console.log(student2.dataStudent);
student2.removeHobby = "Not a vvibu"
console.log("\n di bawah ini hobi yang sudah di hapus")
for(let i = 0; i < student2.hobbies.length; i++){
  console.log(`${i+1}. ${student2.hobbies[i]}`)
}





//coba function add student

function addStudent() {

  const studentId = document.querySelector("#inputId").value
  const name = document.querySelector("#inputName").value
  const age = document.querySelector("#inputAge").value
  const dateOfBirth = document.querySelector("#inputDob").value
  const gender = document.querySelector("#inputGender").value
  const hobbies = document.querySelector("#inputHobby").value

      const newStudent = new Student({
        name: name,
        age : age,
        dateOfBirth : dateOfBirth,
        gender : gender,
        studentId : studentId,
        hobbies : hobbies
    })


  let li =document.createElement("li");
  li.innerText = newStudent.dataStudent;
  document.getElementById("myUL").appendChild(li);

  }









// const addStudent = () => {

//   const studentId = document.querySelector("#inputId").value
//   const name = document.querySelector("#inputName").value
//   const age = document.querySelector("#inputAge").value
//   const dateOfBirth = document.querySelector("#inputDob").value
//   const gender = document.querySelector("#inputGender").value
//   const hobbies = document.querySelector("#inputHobby").value

//       const newStudent = new Student({
//         name: name,
//         age : age,
//         dateOfBirth : dateOfBirth,
//         gender : gender,
//         studentId : studentId,
//         hobbies : hobbies
//     })

//     document.getElementById("myth").innerText =newStudent.studentId;
//     document.getElementById("mytd1").innerText =newStudent.name;
//     document.getElementById("mytd2").innerText =newStudent.age;
//     document.getElementById("mytd3").innerText =newStudent.dateOfBirth;
//     document.getElementById("mytd4").innerText =newStudent.gender;
//     document.getElementById("mytd5").innerText =newStudent.hobbies;

//     document.getElementById("result").innerHTML = newStudent.dataStudent;
//   }