var name = "Hi, I'm Vineet! I'm currently a junior at the University of Michigan - Ann Arbor, studying Computer Science. 🚀"
var i = 0;

function typeName() {
if (i < name.length) {
  var nameHeader = document.getElementById("nametag");
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