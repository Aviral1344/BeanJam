
const pwShowHide= document.querySelectorAll(".eye-icon");
pwShowHide.forEach(icon =>
    {
        icon.addEventListener("click",() =>
        {
            let pwFields = icon.parentElement.parentElement.querySelectorAll(".password");
            pwFields.forEach(password => {
                if(password.type === "password")
                {
                    password.type = "text";
                    icon.classList.replace("bxs-hide", "bxs-show");
                    return;
                }
                password.type = "password";
                icon.classList.replace("bxs-show", "bxs-hide");
            })
 
        })
    })

const heart= document.querySelectorAll(".heart-icon");
heart.forEach(icon =>{
    icon.addEventListener("mouseover",() =>
    {
        if(icon.classList.contains("bx-heart")){
            icon.classList.replace("bx-heart", "bxs-heart");
            return;
        }
        icon.classList.replace("bxs-heart", "bx-heart");
        return;
    })

    icon.addEventListener("mouseout",() =>{
        if(icon.classList.contains("bx-heart")){
            icon.classList.replace("bx-heart", "bxs-heart");
            return;
        }
        icon.classList.replace("bxs-heart", "bx-heart");
        return;
    })
})

const search= document.querySelectorAll(".search-icon");
search.forEach(icon =>{
    icon.addEventListener("mouseover",() =>{
        if(icon.classList.contains("bx-search-alt-2")){
            icon.classList.replace("bx-search-alt-2", "bxs-search-alt-2");
            return;
        }
        icon.classList.replace("bxs-search-alt-2", "bx-search-alt-2");
        return;
    })

    icon.addEventListener("mouseout",() =>{
        if(icon.classList.contains("bx-search-alt-2")){
            icon.classList.replace("bx-search-alt-2", "bxs-search-alt-2");
            return;
        }
        icon.classList.replace("bxs-search-alt-2", "bx-search-alt-2");
        return;
    })
})

const home= document.querySelectorAll(".home-icon");
home.forEach(icon =>{
    icon.addEventListener("mouseover",() =>{
        if(icon.classList.contains("bx-home-alt-2")){
            icon.classList.replace("bx-home-alt-2", "bxs-home-alt-2");
            return;
        }
        icon.classList.replace("bxs-home-alt-2", "bx-home-alt-2");
        return;
    })

    icon.addEventListener("mouseout",() =>{
        if(icon.classList.contains("bx-home-alt-2")){
            icon.classList.replace("bx-home-alt-2", "bxs-home-alt-2");
            return;
        }
        icon.classList.replace("bxs-home-alt-2", "bx-home-alt-2");
        return;
    })
})

    



