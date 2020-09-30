const hideAside = () => {
        let aside = document.querySelector(".aside");
    
        if(aside.style.display == "none"){
            aside.style.display = "block";
        }else{
            aside.style.display = "none";
        }

}

