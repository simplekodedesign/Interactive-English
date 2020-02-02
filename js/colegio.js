var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    const response = JSON.parse(this.responseText);
    console.log(response)
  }
}
xhttp.open("GET","php/controller/subdomain.php", true);
xhttp.send();