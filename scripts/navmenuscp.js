const list = document.querySelectorAll(".list");
function activeLink(){
    list.forEach((item) =>
    this.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item)=>
item.addEventListener('click', activeLink2));

const list2 = document.querySelectorAll(".list2");
function activeLink2(){
    list2.forEach((item2) =>
    this.classList2.remove('active-sub'));
    this.classList2.add('active-sub');
}

list2.forEach((item2)=>
item2.addEventListener('click', activeLink2));