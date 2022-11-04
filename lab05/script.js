//Task 1
let userName = document.getElementById("pib");
let userGroup = document.getElementById("group");
let userFaculty = document.getElementById("faculty");
let userAdress = document.getElementById("adress");
let userTelegram = document.getElementById("telegram");

const info = [userName, userGroup, userFaculty, userAdress, userTelegram];

let userNameRegex = /[А-ЯІЇЄ][а-яіїє']{1,20}\s[А-ЯІЄ]\.\s[А-ЯІЄ]\./m;
let userGroupRegex = /[А-ЯІЇЄ][А-ЯІЇЄ]\-[0-9][0-9]/m;
let userFacultyRegex = /[А-ЯІЇЄ]{1,4}/m;
let userAdressRegex = /^(?!(м\.))*[а-яґєіїА-ЯҐЄІЇ]+$/;
let userTelegramRegex = /^(?!(@))*[а-яґєіїА-ЯҐЄІЇ]+$/;

let userInfoDiv = document.getElementById("userInfo");
let userRegForm = document.getElementById("formReg")

function submitInfo(){
    let status = true;

    info.forEach(element => {
        element.style.background = '#000000';
    });

    if (!userNameRegex.test(userName)){
        status = false;
        userName.style.background = '#FF0000';
    }
    if (!userGroupRegex.test(userGroup)){
        status = false;
        userGroup.style.background = '#FF0000';
    }
    if (!userFacultyRegex.test(userFaculty)){
        status = false;
        userFaculty.style.background = '#FF0000';
    }
    if (!userAdressRegex.test(userAdress)){
        status = false;
        userAdress.style.background = '#FF0000';
    }
    if (!userTelegramRegex.test(userTelegram)){
        status = false;
        userTelegram.style.background = '#FF0000';
    }

    if (status){
        showUserInfo(info);
    } else {
        //alert("Некоректний формат даних");
    }

    //userRegForm.reset();
}

function showUserInfo(info){
    userInfoDiv.innerHTML = "";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");

    p1.value = "ПІБ: " + info[1];
    p2.value = "Група: " + info[2];
    p3.value = "Факультет: " + info[3];
    p4.value = "Адреса: " + info[4];
    p5.value = "Телеграм: " + info[5];

    userInfoDiv.appendChild(p1);
    userInfoDiv.appendChild(p2);
    userInfoDiv.appendChild(p3);
    userInfoDiv.appendChild(p4);
    userInfoDiv.appendChild(p5);
}