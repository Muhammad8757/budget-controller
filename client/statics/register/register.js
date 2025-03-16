import { backEnd } from "../../consts.js"


const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")

const submitbutton = document.getElementById("submitbtn")


submitbutton.onclick = async function(event) {
    debugger;
    event.preventDefault();
    try {
        const user = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        console.log(backEnd + "/register")
        const response = await fetch(
            backEnd + "/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            }
        )
        console.log(response.status)
        console.log(response)
        if (response.status == 201) {
            alert("✅ Успешная регистрация!");
        } else {
            alert("❌ Ошибка: " + result.message);
        }
    } catch (error) {
        console.error("Ошибка:", error);
    }
}