document.querySelector("#form");

    document.querySelector("button").addEventListener("click",store);

    var signupdetails=[];

function store(event){
    event.preventDefault();
    var cerdentials={
        mail: form.email.value,
        fname: form.fname.value,
        lname: form.lname.value,
        pass: form.pass.value
    }

    signupdetails.push(cerdentials);

    localStorage.setItem("usercred",JSON.stringify(signupdetails));
}


document.querySelector("button").addEventListener("click",gotomain);

function gotomain(){
    window.location.href="signin.html"
}
  