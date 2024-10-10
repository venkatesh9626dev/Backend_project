let addBtn = document.getElementById("addName");
let modifyBtn = document.getElementById("modifyName");
let removeBtn = document.getElementById("removeName");
let newUserList = document.createElement("ul");
let formElement = document.getElementById("form");
formElement.append(newUserList);


let idArray =[];
let nameArray = [];

// Add list function

addBtn.addEventListener("click" , () =>{
    let userName = document.getElementById("name").value.trim();
    let userAge = document.getElementById("age").value;
    let userSubject = document.getElementById("subject").value;

    let isExist = false;

    for(let i = 0; i < nameArray.length; i++){
        if(userName === nameArray[i]){
            isExist = true;
        }
    }

    // check details exist or not

    if(isExist){
        alert(`The user details already exist`);
    }
    else{
        let newLi = document.createElement("li");
        let splitStr = userName.split(" ");
        let joinStr = splitStr.join("");

        newLi.setAttribute("id",joinStr);
        newLi.textContent = `Name : ${userName} Age : ${userAge} Subject : ${userSubject}`;
        newUserList.appendChild(newLi);
        idArray.push(joinStr);
        nameArray.push(userName);
    }
})

// Remove Button Function

removeBtn.addEventListener("click", () =>{

    let userName = document.getElementById("name").value.trim();
    
    let isExist = false;
    let i = 0
    for(; i < nameArray.length; i++){
        if(userName === nameArray[i]){
            isExist = true;
            break;
        }
    }

    if(isExist){
        let popIdName = idArray[i];
        let popElement = document.getElementById(popIdName);
        popElement.remove();

        let deleteId = idArray.splice(i,1);
        let deleteName = nameArray.splice(i,1);
    }
    else{
        alert(`This user details not exist`)
    }
})

// Modify the details

modifyBtn.addEventListener("click",() =>{
    let userName = document.getElementById("name").value.trim();
    let userAge = document.getElementById("age").value;
    let userSubject = document.getElementById("subject").value;
    
    let isExist = false;
    let i = 0
    for(; i < nameArray.length; i++){
        if(userName === nameArray[i]){
            isExist = true;
            break;
        }
    }

    if(isExist){

        let modifyElement = document.getElementById(idArray[i]);
        modifyElement.textContent = `Name : ${userName} Age : ${userAge} Subject : ${userSubject}`;
    }
    else{
        alert(`This user details is not exist`);
    }
})