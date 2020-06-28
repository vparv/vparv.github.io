
var i = 0;

function typeName() {
var name = "Hi, I'm Vineet! I'm a junior at the University of Michigan Ann Arbor, studying Computer Science 🚀"

if (i < name.length) {
  var nameHeader = document.getElementById("nametag");
  console.log(nameHeader);
  nameHeader.innerHTML = nameHeader.innerHTML + name.charAt(i);
  i += 1;
  setTimeout(typeName, 42);
} 
else {
    i = 0;
  typeDesc();

}
}

function typeDesc() {
    name = "I'm from Princeton, New Jersey and when I have free time, I enjoy coding 💻, learning new things 💡, and checking out new restaurants 🍽️"
    
    if (i < name.length) {
      nameHeader = document.getElementById("desc");
      console.log(nameHeader);
      nameHeader.innerHTML = nameHeader.innerHTML + name.charAt(i);
      i += 1;
      setTimeout(typeDesc, 42);
    } 
    else {
      i = 0;
    typeThanks();
    }
}

function typeThanks() {
    name = "Thanks for checking out my website ❤️ "
    
    if (i < name.length) {
      nameHeader = document.getElementById("thanks");
      console.log(nameHeader);
      nameHeader.innerHTML = nameHeader.innerHTML + name.charAt(i);
      i += 1;
      setTimeout(typeThanks, 42);
    } 
    else {
      i = 0;
    //setTimeout(typeName, 100);
    }
}

window.onload = typeName;

