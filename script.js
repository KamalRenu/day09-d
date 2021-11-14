var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload = function(){
    var a = JSON.parse(request.response);
    console.log(a);
    var total = a.reduce((a,b)=>a+b.population,0);
    console.log(total);
}