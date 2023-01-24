const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

let linka = document.querySelectorAll("nav a");
linka[0].textContent = siteContent.nav["nav-item-1"];
linka[1].textContent = siteContent.nav["nav-item-2"];
linka[2].textContent = siteContent.nav["nav-item-3"];
linka[3].textContent = siteContent.nav["nav-item-4"];
linka[4].textContent = siteContent.nav["nav-item-5"];
linka[5].textContent = siteContent.nav["nav-item-6"];

linka[0].classList.add("italic");
linka[1].classList.add("italic");
linka[2].classList.add("italic");
linka[3].classList.add("italic");
linka[4].classList.add("italic");
linka[5].classList.add("italic");

let logo = document.querySelector("#logo-img");
logo.src = siteContent.images["logo-img"];

//logo.setAttribute("src",siteContent.images["logo-img"]);

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
document.querySelector("#cta-img").src = siteContent.images["cta-img"];

let topcontents = document.querySelectorAll(".top-content h4");
topcontents[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
let topcontentsP = document.querySelectorAll(".top-content p");
topcontentsP[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
topcontents[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
topcontentsP[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

let middleimg = document.querySelector("#middle-img");
middleimg.src = siteContent.images["accent-img"];

let bottomcontent = document.querySelectorAll(".bottom-content h4");
let bottomcontentP = document.querySelectorAll(".bottom-content p");
bottomcontent[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomcontentP[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomcontent[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomcontentP[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomcontent[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];
bottomcontentP[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];
let iletişimP = document.querySelectorAll(".contact p");
iletişimP[0].textContent = siteContent.iletisim.adres;
iletişimP[1].textContent = siteContent.iletisim.telefon;
iletişimP[2].textContent = siteContent.iletisim.email;

let footera = document.querySelector("footer a");
footera.textContent = siteContent.footer["copyright"];
footera.classList.add("bold");
