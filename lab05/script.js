//Task 1
let userName = document.getElementById("pib");
let userGroup = document.getElementById("group");
let userFaculty = document.getElementById("faculty");
let userAdress = document.getElementById("adress");
let userTelegram = document.getElementById("telegram");

const info = [userName, userGroup, userFaculty, userAdress, userTelegram];

let userNameRegex = /[а-яіїєА-ЯІЇЄ]+\s[А-ЯІЇЄ]\.[А-ЯІЇЄ]\./m;
let userGroupRegex = /[А-ЯІЇЄ][А-ЯІЇЄ]-\d\d/m;
let userFacultyRegex = /[А-ЯІЇЄ]{1,4}/m;
let userAdressRegex = /м\.[а-яіїєА-ЯІЇЄ]+/m;
let userTelegramRegex = /@[a-zA-Z]+/m;

let userInfoDiv = document.getElementById("userInfo");
let userRegForm = document.getElementById("formReg")

function submitInfo(){
    let status = true;

    if(!checkForEmpty(info)){
        return alert("Заповніть усі колонки");
    };

    if (userNameRegex.test(userName.value) == false){
        status = false;
        userName.style.borderBlockColor = '#FF0000';
    }
    if (!userGroupRegex.test(userGroup.value)){
        status = false;
        userGroup.style.borderBlockColor = '#FF0000';
    }
    if (!userFacultyRegex.test(userFaculty.value)){
        status = false;
        userFaculty.style.borderBlockColor = '#FF0000';
    }
    if (!userAdressRegex.test(userAdress.value)){
        status = false;
        userAdress.style.borderBlockColor = '#FF0000';
    }
    if (!userTelegramRegex.test(userTelegram.value)){
        status = false;
        userTelegram.style.borderBlockColor = '#FF0000';
    }

    if (status){
        showUserInfo(info);
    } else {
        alert("Некоректний формат даних");
    }

    userRegForm.reset();
}

function showUserInfo(info){
    userInfoDiv.innerHTML = "";

    var p1 = document.createTextNode("ПІБ: " + info[0].value);
    var p2 = document.createTextNode("Група: " + info[1].value);
    var p3 = document.createTextNode("Факультет: " + info[2].value);
    var p4 = document.createTextNode("Адреса: " + info[3].value);
    var p5 = document.createTextNode("Телеграм: " + info[4].value);

    userInfoDiv.className = "userInfo";

    userInfoDiv.appendChild(p1);
    userInfoDiv.appendChild(document.createElement("br"));
    userInfoDiv.appendChild(p2);
    userInfoDiv.appendChild(document.createElement("br"));
    userInfoDiv.appendChild(p3);
    userInfoDiv.appendChild(document.createElement("br"));
    userInfoDiv.appendChild(p4);
    userInfoDiv.appendChild(document.createElement("br"));
    userInfoDiv.appendChild(p5);
    userInfoDiv.appendChild(document.createElement("br"));
}

function checkForEmpty(info){
    let status = true;
    info.forEach(element => {
        if (!element.value){
            status = false;
        } 
    });
    return status;
}

//Task 2
createTable();

let palette = document.getElementById("palette");
function createTable(){
    let table = document.getElementById('table');
    for(let i = 0; i < 6; i++){
        let row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            let cell = document.createElement('td');
            let value = j+1+i*6;
            cell.innerHTML = value;
            cell.id = value;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

let needCell = document.getElementById("15");
needCell.onmouseover = function(){
    needCell.style.background = getRandomColor();
    needCell.style.color = getRandomColor();
}

needCell.onclick = function(){
    needCell.style.background = palette.value;
}

needCell.ondblclick = function(){
    let indexCell = parseInt(needCell.id);
    let rowId = Math.ceil(indexCell/6);
    let endIndexRow = parseInt(rowId) * 6;
    let startIndexRow = endIndexRow - 5;

    let temp = indexCell % 2;

    for(i = startIndexRow; i <= endIndexRow; i++){
        if(i%2==temp){
            cellElement = i.toString();
            document.getElementById(cellElement).style.background = palette.value;
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}