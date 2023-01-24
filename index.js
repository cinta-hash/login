const url = "http://localhost:3000/users";

const form = document.querySelector(".info");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);

    fetch(`${url}`, {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(data)

    });
})


