const accessKey ="BrZZOgpMtgwVWCXTAlSVLt6c0z6HeDJDofda2S8ly-M";

//query selectors
const formEl = document.querySelector("form")
const searchInputEl=document.getElementById("search-input")
const searchResultsEl=document.querySelector(".search-results")
const showMoreE1=document.getElementById("show-more")

let inputData="";
let page =1;
//function
async function searchImage(){
    inputData = searchInputEl.value;
    console.log("inputData");
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    console.log(url); 
    const response= await fetch(url);
    const data=await response.json();
    console.log(data);
    if(page==1){
        searchResultsEl.innerHTML="";
    }
    const results =data.results;

     results.map((result)=>{
    //div image-search
    const imageWrapper=document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image=document.createElement("img");
    image.src=result.urls.small
    image.alt=result.alt_description;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";
    imageLink.textContent=result.alt_description;

    //append div 
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
});
page++;
console.log(page);
 

    
    console.log(results);
    if(page>1){
        showMoreE1.style.display="block";
    }
}

//event listners
formEl.addEventListener("submit" ,()=>{
event.preventDefault();
page=1;
//event.preventdefault() is used to prevent the page from refreshing
console.log("submitted");
//function calling
 searchImage();
});

showMoreE1.addEventListener("click",()=>{
    searchImage(); 
})