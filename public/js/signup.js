// add event listeners and handlers
document.querySelector("#signupSubmit").addEventListener("submit", e => {
    e.preventDefault();
    const userObj = {
        username: document.querySelector("#usernameInput").value,
        password: document.querySelector("#passwordInput").value,
    }
    console.log(userObj)
    fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.href = "/"
        } else {
            alert("trumpet sound")
        }
    })
})