var name = "Vineet Parvathala 🚀"
var i = 0;

function typeName() {
if (i < name.length) {
  var nameHeader = document.getElementById("nametag");
  console.log(nameHeader);
  nameHeader.innerHTML = nameHeader.innerHTML + name.charAt(i);
  i += 1;
  setTimeout(typeName, 100);
} 
else {
  i = 0;
//setTimeout(typeName, 100);
}
}

window.onload = typeName;