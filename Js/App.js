const imgsearch=document.querySelector(".imgsearch");
const searchbutton=document.querySelector(".searchbutton");
const Temizlebutton=document.querySelector(".Temizle");
const searchcontainer=document.querySelector(".search-container");
const imagecontainer=document.querySelector(".image-container");
const container=document.querySelector(".container");
const Form=document.querySelector(".Form");


function search (e)
{

e.preventDefault(); 
   
const value= imgsearch.value.trim(); 
fetch(`https://api.unsplash.com/search/photos?query=${value}`,{ 


    method:"GET", 
    headers :{
    Authorization: "Client-ID //Kendinize ait tokeninizi ekleyin 
    }
    })





  
.then((res)=>res.json())
.then((data)=>{


Array.from(data.results).forEach((image)=>{


   

resimleriekle(image.urls.small);

})
})



.catch((Err)=>console.log(Err)); 



}



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
