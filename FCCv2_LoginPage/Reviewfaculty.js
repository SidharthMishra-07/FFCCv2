let facresult = {};
let allfaculties = {};

function filterFaculty(){
    var filter = document.getElementById("fac-inputFilter").value;
    facresult.faculties = allfaculties.faculties.filter(x=>x.faculty.toUpperCase().includes(filter.toUpperCase()));
    let select = document.getElementById("fac-list");

    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    for(let i=0; i < facresult.faculties.length; i++){
        let option = document.createElement("option");
        option.value = facresult.faculties[i]._id;
        option.text = facresult.faculties[i].faculty;
        select.appendChild(option);
    }
}
async function getFaculty() {
    let url = 'users.json';
    try {
        let res = await fetch("https://ffcc-app.herokuapp.com/get/faculty");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderFaculty(){
    allfaculties = await getFaculty();
    facresult = Object.assign({}, allfaculties);
    let select = document.getElementById("fac-list");
    for(let i=0; i < facresult.faculties.length; i++){
        let option = document.createElement("option");
        option.value = facresult.faculties[i]._id;
        option.text = facresult.faculties[i].faculty;
        select.appendChild(option);
    }
}

renderFaculty();