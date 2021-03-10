let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();



xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("data").innerHTML = this.responseText;
       data = JSON.parse(this.responseText);
        
    }
};

setTimeout(function() {
   console.log(data);
}, 500);

