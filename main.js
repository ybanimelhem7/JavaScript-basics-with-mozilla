/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let iceCream = "chocolate";
if(iceCream === "chocolate"){
    alert("I love chocolate ice cream");
}
else{
    alert("Awww , but chocolate is my favorits");
}

document.querySelector("h1").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
*/

const myImage = document.querySelector("img");

myImage.onclick = function() {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "firefox-icon.png") {
        myImage.setAttribute("src", "download.jpg");
    }
    else{
        myImage.setAttribute("src", "firefox-icon.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("please enter your name. ");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  