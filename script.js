console.log("Initializing project...");

function converter(){
    let c = document.getElementById("celsius").value;
    let f = c * 9 / 5 + 32;
    document.getElementById("fahrenheit").innerHTML = f;
}