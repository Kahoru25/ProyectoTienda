
// Dopdowns - deplegable


const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown=>{
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret-categorias");
    const caret2 = dropdown.querySelector(".caret-rango");
    const menu_drop = dropdown.querySelector(".menu-drop");
    const options = dropdown.querySelector(".menu-drop li");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click",() =>{ // para categorias
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
        menu_drop.classList.toggle("menu-open");
    });

    select.addEventListener("click",() =>{ //para rangos
        select.classList.toggle("select-clicked");
        caret2.classList.toggle("caret-rotate");
        menu_drop.classList.toggle("menu-open");
    });

    // options.forEach(option => {
    //     option.addEventListener("click", ()=>{
    //         selected.innerText = option.innerText;
    //         select.classList.remove("select-clicked");
    //         caret.classList.remove("caret-rotate");
    //         menu_drop.classList.remove("menu-open");
    //         options.forEach(option =>{
    //             option.classList.remove("active");
    //         });
    //         option.classList.add("active");
    //     });
    // });

});


// funcion contador carro

let count = 0;

$('.cart-btn').on("click", function(){
    let cart = $(".cart-nav");

    let imgtodrag = $(this).parent(".buttons").parent(".content-card").parent(".card").find("img").eq(0);
    if(imgtodrag){
        //duplicar la imagen
        let imgclone = imgtodrag.clone().offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
        }).css({
            "opacity": "0.8",
            "position": "absolute",
            "height": "150px",
            "z-index": "100"
        }).appendTo($("body")).animate({
            "top": cart.offset().top + 20,
            "left": cart.offset().left + 30,
            "width": 75,
            "heigth": 75,
        }, 1000, "easeInOutExpo");

        setTimeout(function(){
            count++;
            $(".cart-nav .item-count").text(count);
        }, 1500);

        imgclone.animate({
            "width": 0,
            "height": 0
        }, function(){
            $(this).detach()
        })
    }
})