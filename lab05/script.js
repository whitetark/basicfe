//Task 1
let userName = document.getElementById("pib");
let userGroup = document.getElementById("group");
let userFaculty = document.getElementById("faculty");
let userAdress = document.getElementById("adress");
let userTelegram = document.getElementById("telegram");

let userNameRegex = /[А-ЯІЇЄ][а-яіїє']{1,20}\s[А-ЯІЄ]\.\s[А-ЯІЄ]\./m;
let userGroupRegex = /[А-ЯІЇЄ][А-ЯІЇЄ]\-[0-9][0-9]/m;
let userFacultyRegex = /[А-ЯІЇЄ]{1,4}/m;
let userAdressRegex = /^(?!(м\.))*[а-яґєіїА-ЯҐЄІЇ]+$/;
let userTelegramRegex = /^(?!(@))*[а-яґєіїА-ЯҐЄІЇ]+$/;

let userInfoDiv = document.getElementById("userInfo");

function submitInfo(){
    let status = true;

    if (!userNameRegex.test(userName)){
        status = false;
    }
    if (!userGroupRegex.test(userGroup)){
        status = false;
    }
    if (!userFacultyRegex.test(userFaculty)){
        status = false;
    }
    if (!userAdressRegex.test(userAdress)){
        status = false;
    }
    if (!userTelegramRegex.test(userTelegram)){
        status = false;
    }

    if (status){
        showUserInfo();
    } else {

    }
}

function showUserInfo(){
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");

    p1.value = "ПІБ: ";
    p2.value = "Група: ";
    p3.value = "Факультет: ";
    p4.value = "Адреса: ";
    p5.value = "Телеграм: ";

    userInfoDiv.appendChild(p1);
    userInfoDiv.appendChild(p1);
    userInfoDiv.appendChild(p1);
    userInfoDiv.appendChild(p1);
    userInfoDiv.appendChild(p1);
}