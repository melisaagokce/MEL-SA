let kisaMetin = "merhaba";
let metin =
  "merhaba trend sese hoşgeldiniz haydi trendlere kulak verelim şu anda anasayfadasınız kadın giyim için 1 e erkek giyim için 2 ye sepet için 3 e kullanıcı girişi için 4 e basınız";
let metin2 =
  "kadın giyime hoşgeldiniz üst giyim için 1 i alt giyim için 2 yi kadın ayakkabılar için 3 ü çantalar için 4 ü  anasayfaya dönmek için 5 i tuşlayın ";
let metin3 =
  "erkek giyime hoşgeldiniz üst giyim için biri alt giyim için ikiyi ayakkabılar için üçü çantalar için dördü anasayfaya dönmek için beşi tuşlayınız.";
let metin4 =
  "sepetim sayfasına hoşgeldiniz sepetteki ürünleri dinlemek için biri sepeti onaylamak için ikiyi anasayfaya dönmek için üçe tuşlayınız. ";

let metin5 =
  "şu anda üst giyimdesiniz ürün açıklamaları için yönlendiriliyorsunuz ";
let metin6 =
  "şu and alt giyimdesiniz ürün açıklamaları için yönlendiriliyorsunuz ";
let metin7 =
  "şu anda  çanta bölümündesiniz ürün açıklamaları için yönlendiriliyorsunuz ";
let metin8 =
  "şu anda  ayakkabı bölümündesiniz ürün açıklamaları için yönlendiriliyorsunuz ";
let metin9 = "sepete eklemek için 1 e basınız";
let metin10 =
  "şu anda üst giyimdesiniz ürün açıklamaları için yönlendiriliyorsunuz ";

function mesaj_oku(metinx) {
  responsiveVoice.speak(metinx, "Turkish Female");
}
var products = document.querySelectorAll(".product");
var currentIndex = 0;
function speakNextProduct() {
  if (currentIndex < products.length) {
    var currentProduct = products[currentIndex].textContent;
    responsiveVoice.speak(currentProduct, "Turkish Female", {
      onend: speakNextProduct,
    });
    currentIndex++;
  }
}

window.onload = function () {
  speakNextProduct();
};

var input = document.getElementById("girdi-alma");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    document.getElementById("myBtn").click();
  }
});

window.onload = function () {
  speakNextProduct();
};
function yonlendirme() {
  var secim = document.getElementById("girdi-alma").value;

  if (secim == 1) {
    window.location.href = "kadingiyim.html";
  } else if (secim == 2) {
    window.location.href = "erkekgiyim.html";
  } else if (secim == 3) {
    window.location.href = "sepetim.html";
  } else if (secim == 4) {
    window.location.href = "kullancgirisi.html";
  } else if (secim == 5) {
    window.location.href = "http://localhost/kayit.php ";
  } else {
    responsiveVoice.speak("hatalı giriş", "Turkish Female");
    document
      .querySelector("#ses-dosyasi")
      .addEventListener("click", mesaj_oku(kisaMetin));
  }
}

function kadin_yonlendirme() {
  var secim = document.getElementById("kadin_girdi_alma").value;
  if (secim == 1) {
    window.location.href = "kadinustgiyim.html";
    //alert("kadin üst giyim");
  } else if (secim == 2) {
    window.location.href = "kadnaltgiyim.html";
  } else if (secim == 3) {
    window.location.href = "kadnayakkabi.html";
  } else if (secim == 4) {
    window.location.href = "kadncanta.html";
  } else if (secim == 5) {
    window.location.href = "trendses.html";
  } else {
    responsiveVoice.speak("hatalı giriş", "Turkish Female");
    document
      .querySelector("kadin_ses-dosyasi")
      .addEventListener("click", mesaj_oku(metin2));
  }
}
function erkek_yonlendirme() {
  var secim = document.getElementById("erkek_girdi_alma").value;
  if (secim == 1) {
    window.location.href = "erkekustgiyim.html";
  } else if (secim == 2) {
    window.location.href = "erkekaltgiyim.html";
  } else if (secim == 3) {
    window.location.href = "erkekayakkabi.html";
  } else if (secim == 4) {
    window.location.href = "erkekcanta.html";
  } else if (secim == 5) {
    window.location.href = "trendses.html";
  } else {
    responsiveVoice.speak("hatalı giriş", "Turkish Female");
    document
      .querySelector("erkek_ses-dosyasi")
      .addEventListener("click", mesaj_oku(metin3));
  }
}
function ustGiyim_yonlendirme() {
  var secim = document.getElementById("ust_girdi_alma").value;
  if (secim == 1) {
    // window.location.href = "kadinüstgiyim.html";
    alert("kadin üst giyim");
  } else if (secim == 2) {
    window.location.href = "kadnaltgiyim.html";
  } else if (secim == 3) {
    window.location.href = "trendses.html";
  } else {
    responsiveVoice.speak("hatalı giriş", "Turkish Female");
    document
      .querySelector("sepet_ses-dosyasi")
      .addEventListener("click", mesaj_oku(metin4));
  }
}
function altGiyim_yonlendirme() {
  var secim = document.getElementById("alt_girdi_alma").value;
  if (secim == 1) {
    //sonraki ürüne gecme
  } else if (secim == 2) {
    //beden seçimi ve sepete ekleme
    window.location.href = "kadnaltgiyim.html";
  } else if (secim == 3) {
    //anasayfaya yönlendirme
    window.location.href = "trendses.html";
  } else {
    responsiveVoice.speak("hatalı giriş", "Turkish Female");
    document
      .querySelector("altGiyim_ses-dosyasi")
      .addEventListener("click", mesaj_oku(metin4));
  }
}
function ayakkabi_yonlendirme() {
  var secim = document.getElementById("ayakkabi_girdi_alma").value;
  if (secim == 1) {
    // window.location.href = "kadinüstgiyim.html";
    alert("ürün bilgisi okunacak");
  } else if (secim == 2) {
    window.location.href = "kadnaltgiyim.html";
  } else if (secim == 3) {
    window.location.href = "trendses.html";
  } else {
    responsiveVoice.speak("hatalı giriş", "Turkish Female");
    document
      .querySelector("ayakkabi_ses-dosyasi")
      .addEventListener("click", mesaj_oku(metin4));
  }
}
function canta_yonlendirme() {
  var secim = document.getElementById("canta_girdi_alma").value;
  if (secim == 1) {
    //sepete ekleme beden seçimi
  } else if (secim == 2) {
    //diğer ürüne geçme
  } else if (secim == 3) {
    //tekrar dinleme ve geri donme
  } else {
    responsiveVoice.speak("hatalı giriş", "Turkish Female");
    document
      .querySelector("canta_ses-dosyasi")
      .addEventListener("click", mesaj_oku(metin4));
  }
}
function sepet_ekleme() {
  var secim = document.getElementById("sepet_ekle_girdi").value;
  if (secim == 1) {
    console.log("sepete ekle");
  } else {
    responsiveVoice.speak("hatalı giriş", "Turkish Female");
    document
      .querySelector("canta_ses-dosyasi")
      .addEventListener("click", mesaj_oku(metin4));
  }
}

function sepet_yonlendirme() {
  var secim = document.getElementById("sepet_girdi_alma").value;
  if (secim == 1) {
    alert("ürün bilgisi ve toplam fiyat okuma");
  } else if (secim == 2) {
    window.location.href = "kadnaltgiyim.html";
  } else if (secim == 3) {
    window.location.href = "trendses.html";
  } else {
    responsiveVoice.speak("hatalı giriş", "Turkish Female");
    document
      .querySelector("sepet_ses-dosyasi")
      .addEventListener("click", mesaj_oku(metin4));
  }
}
document
  .querySelector("#sepetEkleme_ses-dosyasi")
  .addEventListener("click", mesaj_oku(metin9));
document
  .querySelector("#canta_ses-dosyasi")
  .addEventListener("click", mesaj_oku(metin7));
document
  .querySelector("#ayakkabi_ses-dosyasi")
  .addEventListener("click", mesaj_oku(metin8));

document
  .querySelector("#alt_ses-dosyasi")
  .addEventListener("click", mesaj_oku(metin6));
document
  .querySelector("#ust_ses-dosyasi")
  .addEventListener("click", mesaj_oku(metin5));
document
  .querySelector("#sepet_ses-dosyasi")
  .addEventListener("click", mesaj_oku(metin4));
document
  .querySelector("#erkek_ses-dosyasi")
  .addEventListener("click", mesaj_oku(metin3));
document
  .querySelector("#kadin_ses-dosyasi")
  .addEventListener("click", mesaj_oku(metin2));
document
  .querySelector("#ses-dosyasi")
  .addEventListener("click", mesaj_oku(kisaMetin));
