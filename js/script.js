const mbMenu = document.getElementById('mbMenu');
const mbMenuUl = document.getElementById('mbMenuUl');

mbMenu.addEventListener( 'click', function() {
    mbMenu.classList.toggle('active');
    mbMenuUl.classList.toggle('active'); 
})


const bullets = document.querySelectorAll(".bullet");
const depoimentos = document.querySelectorAll(".depoimento-single");

let atual = 0;

depoimentos.forEach((item, index) => {
    if(index !== 0){
        item.classList.add("right");
    }
});

bullets.forEach((bullet, index) => {

    bullet.addEventListener("click", () => {

        if(index === atual) return;

        bullets[atual].classList.remove("active");
        bullet.classList.add("active");

        if(index > atual){

            depoimentos[atual].classList.remove("active");
            depoimentos[atual].classList.add("left");
            depoimentos[atual].classList.remove("right");

            depoimentos[index].classList.remove("right");
            depoimentos[index].classList.add("active");

        }else{

            depoimentos[atual].classList.remove("active");
            depoimentos[atual].classList.add("right");
            depoimentos[atual].classList.remove("left");

            depoimentos[index].classList.remove("left");
            depoimentos[index].classList.add("active");

        }

        atual = index;

    });

});