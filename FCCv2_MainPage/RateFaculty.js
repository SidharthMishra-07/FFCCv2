const starWrapper =document.querySelector(".rate-faculty");
const stars =document.querySelectorAll(".rate-faculty a");

stars.forEach((star,clickedIdx) => {
    star.addEventListener("click", () => {
        starWrapper.classList.add("disabled");

        stars.forEach((otherStar,otherIdx) => {
            if(otherIdx <= clickedIdx){
                otherStar.classList.add("active");
            }
        });
        console.log(`star of index ${clickedIdx + 1} was clicked`);
        //POST to backend the star rating
        
    });
});