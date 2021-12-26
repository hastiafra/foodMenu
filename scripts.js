let butt18 = document.getElementById("year18");

let topFont = document.getElementById("topFont")

let butt19 = document.getElementById("year19");

let year = "2018"; 
let items = topTenList[year];

//blueBar 
butt18.addEventListener("click",changeText)

function changeText(){
topFont.innerHTML="2018";
butt18.classList.add("active");
butt19.classList.remove("active");
year= "2018";
items = topTenList[year];
console.log(items)
}

butt19.addEventListener("click",textChange)

function textChange(){
topFont.innerHTML="2019";
butt19.classList.add("active");
butt18.classList.remove("active");
year= "2019";
items = topTenList[year];
console.log(items)
}


//whiteBar

let whiteBar = document.getElementById("whiteBar");

let itemNumbers = document.getElementById("itemNumbers");

let foodMenu = document.getElementById("foodMenu");

let purpContainer = document.getElementById("purpleContainer");

let introText = document.getElementById("introText");

introText.innerHTML="hover over a #!"
purpContainer.style.display="none";

function textShow(event){
    
    const index = event.target.innerText-1;
    itemNumbers.classList.add("itemNumbers");
    itemNumbers.innerText= items[index].id;
    itemNumbers.style.display="block";
    foodMenu.classList.add("foodMenu");
    foodMenu.innerText = items[index].name;
    foodMenu.style.display="block";
    purpContainer.style.display="block";
    introText.style.display="none";
    

    
    
}


function notShow(){
    itemNumbers.style.display="none";
    foodMenu.style.display="none";
    purpContainer.style.display="none";
    introText.style.display="block";
    introText.innerHTML="hover over a #!"



}

for(let i=1; i < 11; ++i ){
 

 
 let circle = document.createElement("p");
 circle.classList.add("yellowCircle");
 circle.innerHTML=`${i}`;
 whiteBar.appendChild(circle);
 circle.addEventListener("mouseover" , textShow);
 circle.addEventListener("mouseleave", notShow)


}


