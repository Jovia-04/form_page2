function test(){
    if(document.getElementById('name').value===''){
        document.getElementById('error').innerHTML="Please enter your Name";
        return false;
    }
    else if(document.getElementById('email').value===''){
        document.getElementById('error').innerHTML="Please enter your email";
         return false;
    }
    else if(document.getElementById('message').value==''){
        document.getElementById('error').innerHTML="Please enter your message";
         return false;
    }
    else{
        return true;
    }
}