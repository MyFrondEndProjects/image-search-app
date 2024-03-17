const imgsearch=document.querySelector(".imgsearch");
const searchbutton=document.querySelector(".searchbutton");
const Temizlebutton=document.querySelector(".Temizle");
const searchcontainer=document.querySelector(".search-container");
const imagecontainer=document.querySelector(".image-container");
const container=document.querySelector(".container");
const Form=document.querySelector(".Form");


function search (e)
{
const value=imgsearch.value.Trim(); // Trim(); yazarak İmgsearch class lı inputun değerini boşluk gibi değerlerden temizleyerek ata dedim
fetch(`https://api.unsplash.com/search/photos?query=$(value)`);

    e.preventDefault();
}

Form.addEventListener("submit",search);
