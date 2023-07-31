// Add your code to this file
let bodyRef= document.querySelector("body");
bodyRef.style.backgroundColor="DarkBlue";

let h1Ref=document.querySelector("h1");
h1Ref.style.textDecoration="underline";
h1Ref.style.fontSize="30px";

let listRef= document.getElementsByClassName("pokemon_names");
for (let i=0;i<listRef.length;i++){   
    listRef[i].style["color"]="yellow";
}
let images= document.querySelectorAll("img")

for (let i=0;i<images.length;i++){   
    images[i].style["border-style"]="dotted";
    images[i].style["border-color"]="yellow";
}

let footRef= document.querySelector("footer");
footRef.innerHTML="ALL STAR CODE - DOM PROJECT";

