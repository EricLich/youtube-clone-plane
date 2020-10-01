const hideAside = () => {
        let aside = document.querySelector(".aside");
        let relleno = document.querySelector(".relleno");
    
        if(aside.style.width == "0px"){
            aside.style.width = "250px";
            relleno.style.width = "250px";
        }else{
            aside.style.width = "0px";
            relleno.style.width = "0px";
        }

}

