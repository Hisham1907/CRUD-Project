var firstName=document.getElementById("firstName");
var secondName=document.getElementById("secondName");
var studentLevel=document.getElementById("studentLevel");
var studentId=document.getElementById("studentId");
var myIndex;
var allStudents=[];
if (localStorage.getItem("AllStudents")!=null){
    allStudents=JSON.parse(localStorage.getItem("AllStudents"));
    displayData();
}
function addStudent(){
if (firstNameValidation()){
    if(document.getElementById('main-btn').innerHTML=="Add"){
        var Student={
            firstName:firstName.value,
            secondName:secondName.value,
            studentLevel:studentLevel.value,
            studentId:Number(studentId.value)
        }
        allStudents.push(Student);
        localStorage.setItem("AllStudents",JSON.stringify(allStudents))
        clearForm();
        displayData();
            }
        else{
            allStudents[myIndex].firstName=firstName.value;
            allStudents[myIndex].secondName=secondName.value;
            allStudents[myIndex].studentLevel=studentLevel.value;
           allStudents[myIndex].studentId=Number(studentId.value)
        
           localStorage.setItem("AllStudents",JSON.stringify(allStudents))
           displayData();
            clearForm();
            document.getElementById("main-btn").innerHTML=("Add");
        
        }
}
else alert("Fuck You idiot");
}
function clearForm(){
    firstName.value="";
    secondName.value="";
    studentLevel.value="";
    studentId.value="";
}
function displayData(){
var data="";
for(var i=0; i<allStudents.length;i++){
    data+=` <tr>
    <td>${i+1}</td>
    <td>${allStudents[i].firstName}</td>
    <td>${allStudents[i].secondName}</td>
    <td>${allStudents[i].studentLevel}</td>
    <td>${allStudents[i].studentId}</td>
    <td><button onclick="updateData(${i})" class="btn btn-warning">Update</button></td>
    <td><button onclick="deleteData(${i})"  class="btn btn-danger">Delete</button></td>
</tr>`
}

document.getElementById("displayTable").innerHTML=data;

}
function deleteData(index){
allStudents.splice(index,1);
localStorage.setItem("AllStudents",JSON.stringify(allStudents))
displayData();
}
function updateData(index){
    myIndex=index;
    firstName.value=allStudents[index].firstName;
    secondName.value=allStudents[index].secondName;
    studentLevel.value=allStudents[index].studentLevel;
    studentId.value=allStudents[index].studentId;
    document.getElementById("main-btn").innerHTML=("Update");

}
function search(term){
    var data="";

    for(var i=0;i<allStudents.length;i++){
        if(allStudents[i].firstName.toLowerCase().indexOf(term.toLowerCase())==0)
        data+=` <tr>
        <td>${i+1}</td>
        <td>${allStudents[i].firstName}</td>
        <td>${allStudents[i].secondName}</td>
        <td>${allStudents[i].studentLevel}</td>
        <td>${allStudents[i].studentId}</td>
        <td><button onclick="updateData(${i})" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteData(${i})"  class="btn btn-danger">Delete</button></td>
    </tr>`
        
    }
    document.getElementById("displayTable").innerHTML=data;

}

function firstNameValidation(){
    var regex=/^[A-Z][a-z]{3,10}$/;
    return regex.test(firstName.value);
}

var x=document.getElementsByTagName("input")
for(var i=0;i<x.length;i++){
    console.log(x[i])
}
