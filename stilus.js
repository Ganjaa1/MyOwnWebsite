var w = window.innerWidth;
var kozep = w/2;
var bekapcsolte = false;
function bekapcs(){
 do{
  document.getElementById("asd").innerHTML = Date();

  sleep(1000).then(()=>{
    document.getElementById("asd").innerHTML = Date();
    });
  }while(bekapcsolte);
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
