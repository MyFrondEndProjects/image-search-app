const imgsearch=document.querySelector(".imgsearch");
const searchbutton=document.querySelector(".searchbutton");
const Temizlebutton=document.querySelector(".Temizle");
const searchcontainer=document.querySelector(".search-container");
const imagecontainer=document.querySelector(".image-container");
const container=document.querySelector(".container");
const Form=document.querySelector(".Form");


function search (e)
{

   

    e.preventDefault(); //Submit işlemi sayfayı yenilememesi için yazılan fonksiyon


const value= imgsearch.value.trim(); // Trim(); yazarak İmgsearch class lı inputun değerini boşluk gibi değerlerden temizleyerek ata dedim

// unsplash sitesinin seach photos alanına value değişkenine atadığımız değerleri gönderiyorum yani istediğimiz fotoğraflar için 
// inputa yazılan örn car değerini gönderiyorum.
fetch(`https://api.unsplash.com/search/photos?query=${value}`,{ 


    method:"GET", // Get ile fotoğraflar istendi
    // headers alanında da token ekliyorum fotoğraf çekme yetkisini belirlemek için
    headers :{
    Authorization: "Client-ID aAT8_auWLPUbYnAd-dfhYDQM27Taeh6Tbfgs7nmWgHk" //Token kullanılarak bize ait profille istediğimiz teyitlendi
    }
    })

     //Üstteki satırlar veri isteği için yazıldı 



     // Gönderilen değerleri de .then ler ile kullanmak için aldım
.then((res)=>res.json())
.then((data)=>{
// Çekilen verinin içindeki resultssun içindeki url nin içindeki small linkine erişmem gerekiyor önce datanın içideki 
// resultsu diziye çevirip veri değişkenine atadım

Array.from(data.results).forEach((image)=>{


    // Array.from ile aldığımız datanın içindeki results değerlerini bir diziye dönüştürdüm
    // image ile bu diziyi teker teker döngüye aldım ve dizinin her bir değerini atadığım image kullanarak
    // image.urls.small ile small versiyonlu fotoğraflara eriştim


resimleriekle(image.urls.small); // aldığım fotoğraf verilerini parametre olarak alttaki resimleriekle fonksiyonuna atadım

})
    

   
   


}) // gönderilen verileri console a yazdırdım




.catch((Err)=>console.log(Err)); // Eğer işlembe bir hata varsa hata bildirimi göndermesi için yazdım 



}


//bu fonksiyona parametre olarak aldığımız verileri url parametresini kullanarak bu fonksiyona atayıp bu fonksiyonda fotoğrafları ekleyecem
const resimleriekle= (url) => 
{

    let img= document.createElement("img");
    img.classList.add("img");
    img.src=url;

    imagecontainer.appendChild(img);
}

const Temizle= () =>
{
    imagecontainer="";
}

searchbutton.addEventListener("click",search);
Temizlebutton.addEventListener("click",Temizle);