// profile picture
const photo = document.querySelector("#profile-picture-upload");
const src = document.querySelector(".profile-picture").src;

// set default photo
if (src === "") {
    document.querySelector("#camer-icon").style.opacity = 1;
};

// upload new photo
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

// add product to routine
const submitNewProduct = document.querySelector("#submitNewProduct");
submitNewProduct.addEventListener("click", e => {
    e.preventDefault();

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
    }).then(res => {
        if (res.ok) {
            location.reload();
        } else {
            alert("Post error, please try again.");
        };
    })
})

// remove product from routine
const deleteBtn = document.getElementsByClassName("deleteBtn");
for (let i = 0; i < deleteBtn.length; i++) {

    deleteBtn[i].addEventListener("click", e => {
        e.preventDefault();
        console.log("clicky deleteBtn")
        console.log(e.target.parentNode.id)

        const productId = e.target.parentNode.id;
        fetch(`/api/products/${productId}`, {
            method: "DELETE"
        })
        .then(res => {
            location.reload();
        })
    })

}
