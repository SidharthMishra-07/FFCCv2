const starWrapper =document.querySelector(".rate-faculty");
const textPlane = document.querySelector(".plane");
const stars =document.querySelectorAll(".rate-faculty a");
var index=0;

stars.forEach((star,clickedIdx) => {
    star.addEventListener("click", () => {
        starWrapper.classList.add("disabled");
        textPlane.classList.add("text-active");

        stars.forEach((otherStar,otherIdx) => {
            if(otherIdx <= clickedIdx){
                otherStar.classList.add("active");
            }
        });
        index=clickedIdx;
        console.log(`star of index ${clickedIdx + 1} was clicked`);
        //POST to backend the star rating
        sessionStorage.setItem('MyUniqueUserToken',
            JSON.stringify(
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MjU2NTk1NTYsImlkIjoiNjBlMThmN2FhYTE4NzkzMGI0MTBmYWU3In0.uA2O7pzj5QAArsz3lsPiTfCUzIwsx_MLiQsnbsZ-3J0')
            );
    });
});

const form = {
    rating: index,
    review: document.querySelector("#area"),
    submit: document.querySelector("#FacultySubmit")
}
let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const rate = 'https://ffcc-app.herokuapp.com/rate/faculty';
    let token = JSON.parse(sessionStorage.getItem('MyUniqueUserToken'));

    fetch(rate,{
        method:"POST" ,
        headers:{
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            rating: form.rating.value,
            review: form.review.value,
          }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
})