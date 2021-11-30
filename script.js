/* let lang = prompt("Выберите язык : (введите ru или en)");
if (lang == "ru") {
   console.log("Пн,Вт,Ср,Чт,Пт,Сб,Вс");
}
else if (lang == "en"){
    console.log("Mo,Tu,We,Th,Fr,Sa,Su");
}
else{
    alert("Вы допустили ошибку, попробуйте еще раз!");
}
let lang1 = prompt("Выберите язык : (введите ru или en)");
switch(lang1){
    case "ru" : {
        console.log("Пн,Вт,Ср,Чт,Пт,Сб,Вс");
        break;
    }
    case "en"  : {
        console.log("Mo,Tu,We,Th,Fr,Sa,Su");
        break;
    }
    default : alert("Вы допустили ошибку, попробуйте еще раз!");
    break;
    } */
let langArray = [ ] ;
langArray['ru'] = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
langArray['en'] = ['Mo','Tu','We','Th','Fr','Sa','Su'];
let lang2 =  prompt("Выберите язык : (введите ru или en)");
console.log(langArray[lang2]);