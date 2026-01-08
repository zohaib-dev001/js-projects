let form = document.querySelector("form");
let username = document.querySelector("#name");
let password = document.querySelector("#password");
let role = document.querySelector("#role");
let photo = document.querySelector("#photo");


const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitform.bind(this));
    },
    submitform: function (e) {
        e.preventDefault();
        if (username.value.length < 2) {
            console.error(" Name must be at least 2 characters");
            return;
        }
        if (password.value.length < 6) {
            console.error("Password must be at least 6 characters");
            return;
        }

        this.users.push({
            name: username.value,
            password: password.value,
            role: role.value,
            photo: photo.value,
        })
        form.reset();
        this.adduser();
    },

    adduser: function () {
        document.querySelector(".adduser").innerHTML = " ";
        this.users.forEach((user, index) => {
            // Parent container 
            const profileCard = document.createElement("div");
            profileCard.classList.add("profile-card");

            const img = document.createElement("img");
            img.id = "photo";
            img.src = user.photo || "developer.jpg";
            img.alt = "Profile Picture";

            const h3 = document.createElement("h3");
            h3.textContent = user.name;

   
            const p = document.createElement("p");
            p.textContent = user.role;

 
            const deletebtn = document.createElement("button");
            deletebtn.textContent = "Delete";
            deletebtn.classList.add("btn", "btn-danger",)

       
            deletebtn.addEventListener("click", () => {
                this.removeuser(index);
            })

            profileCard.appendChild(img);
            profileCard.appendChild(h3);
            profileCard.appendChild(p);
            profileCard.appendChild(deletebtn);

            document.querySelector(".adduser").appendChild(profileCard);
        })

    },

    removeuser: function (index) {
        this.users.splice(index, 1);
        this.adduser();
    },
};
userManager.init();