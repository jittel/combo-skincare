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
            console.log(res)
            location.reload();
        } else {
            alert("trumpet sound")
        }
    })
})

const submitNewProduct = document.querySelector("#submitNewProduct");
submitNewProduct.addEventListener("click", e => {
    e.preventDefault();
    console.log("clicky submitNewProduct")
    
    const productObject = {
        name: document.querySelector("#newProduct").value,
        category_id: document.querySelector("#productCategory").value,
    };

    console.log("========================", productObject);
    fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(productObject),
        headers: {
            "Content-Type": "application/json"
        }
    }).then (res => {
        if (res.ok) {
            // location.reload();
        } else {
            alert("Post error, please try again.");
        };
    })
})