var days = ['Pazar','Pazartesi','salı','çarşamba','perşembe','cuma','cumartesi'];
let bugun = new Date();
let saat = bugun.getHours();
let dk = bugun.getMinutes();
let sn = bugun.getUTCSeconds();
let gun = days[ bugun.getDay()];
let isim = prompt("İsminiz nedir ? ");
let change = document.querySelector("#myName");
let aktarim = document.querySelector(".clock");

change.innerHTML = isim;
aktarim.innerHTML = ` ${saat}:${dk}:${sn}  ${gun}`;




