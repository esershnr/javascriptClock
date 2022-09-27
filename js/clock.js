let isim = document.querySelector('#myName');
let saat = document.querySelector('#myClock');


let girilenAd = prompt('Adınız ?');

if (girilenAd && girilenAd.length >= 3){
    isim.innerHTML = girilenAd.charAt(0).toUpperCase() + girilenAd.slice(1).toLowerCase(); //Girilen adın baş harfini büyük harfle yazar.
} else {
    alert('Girilen ad en az 3 harften oluşmalıdır!'); // Hata mesajı
    location.reload(); // Boş gözükmesin diye sayfayı tekrar yükler.
}

function showTime(){

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let zaman = `${h}:${m}:${s}`;

    saat.innerHTML = zaman;
}

setInterval(showTime, 1000); // Her saniye showTime fonksiyonunu çağırır böylece saat canlı takip edilebilir.

