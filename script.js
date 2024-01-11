//close button

let myExternalList = document.getElementsByTagName("li");
let i;

for(i = 0; i<myExternalList.length; i++){

    var spanElement = document.createElement("span");
    var innerSpanText = document.createTextNode("\u00D7");
    spanElement.className = "close";
    spanElement.appendChild(innerSpanText);
    myExternalList[i].appendChild(spanElement);
}