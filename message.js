function validation(){
    var uname=document.getElementById("exampleInputName").value;
    var uemail=document.getElementById("email").value;
    var unumber=document.getElementById("number").value;
    var text=document.getElementById("Text").value;

    if(uname==""){
        document.getElementById("usernamr").innerHTML="** please enter your name";
        return false;
    }

    if((uname.length<2)||(uname.length>20)){
        document.getElementById("usernamr").innerHTML="** user length must be in between 2 to 20 ";
        return false;
    }

    if(!isNaN(uname)){
        document.getElementById("usernamr").innerHTML="** only characters are allowed ";
        return false;
    }

    if(uemail==""){
        document.getElementById("mail").innerHTML="** please enter your email";
        return false;
    }

    if(uemail.indexOf("@") == -1){
        document.getElementById("mail").innerHTML="** inavlid email";
        return false;
    }

    if(unumber==""){
        document.getElementById("num").innerHTML="** please enter your Number";
        return false;
    }

   if(isNaN(unumber)){
        document.getElementById("num").innerHTML="** only numbers are allowed";
        return false;  
    }

   

    if(unumber.length<10){
        document.getElementById("num").innerHTML="** eneter valid number ";
        return false;
        
    }

    if(text==""){
        document.getElementById("Textt").innerHTML="** please enter your message here";
        return false;
    }
}