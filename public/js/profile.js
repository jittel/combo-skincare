// add event listeners and handlers
console.log("clicky clicky")
const photo = document.querySelector("#profileImage");
photo.addEventListener("change", e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", file);
    fetch("/api/images/upload", {
        method: "POST",
        body: formData,
    }).then(res => {
        if (res.ok) {
            // location.href = "/profile"
            console.log(res)
            location.reload();
        } else {
            alert("trumpet sound")
        }
    })
})