let userName = prompt("Adınızı Giriniz")
let myName = document.querySelector("#myName")
if (userName.length<= 0){
    alert ("Boş Bırakamazsınız")
    location.reload();
}else{

    myName.innerHTML =`${userName}`
}
function time() {
    var days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let date = new Date()
    let hour = date.getHours()
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getDay();
    document.getElementById("myClock").innerHTML = hour+":"+min+":"+sec+"-"+days[day];
    }
    setInterval(time,1000)
