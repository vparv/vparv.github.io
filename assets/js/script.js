

function typeName() {
var name = "Hi, I'm Vineet! I'm a junior at the University of Michigan Ann Arbor, studying Computer Science. 🚀"
var i = 0;
if (i < name.length) {
  var nameHeader = document.getElementById("nametag");
  console.log(nameHeader);
  nameHeader.innerHTML = nameHeader.innerHTML + name.charAt(i);
  i += 1;
  setTimeout(typeName, 50);
} 
else {
  typeDesc();

}
}

function typeDesc() {
    name = "I'm from Princeton, New Jersey and when I have free time, I enjoy coding 💻, learning new things 💡, and checking out new restaurants 🍽️."
    i = 0;
    if (i < name.length) {
      nameHeader = document.getElementById("desc");
      console.log(nameHeader);
      nameHeader.innerHTML = nameHeader.innerHTML + name.charAt(i);
      i += 1;
      setTimeout(typeName, 50);
    } 
    else {
      i = 0;
    //setTimeout(typeName, 100);
    }
    }

window.onload = typeName;

