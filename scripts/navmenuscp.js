const list = document.querySelectorAll(".list");
function activeLink(){
    list.forEach((item) =>
    this.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item)=>
item.addEventListener('click', activeLink));