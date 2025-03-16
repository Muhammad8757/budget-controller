import { backEnd } from "../../consts.js"

const userName = document.getElementById("username")
const password = document.getElementById("password")

if (!userName || !password) {
    console.error("Элементы формы не найдены!");
}


console.log(userName)
console.log(password)

const submitbutton = document.getElementById("submitbtn")

submitbutton.onclick = async function () {
    try {
        const user = {
            username: userName.value,
            password: password.value
        };
        console.log(backEnd + "/login")
        const response = await fetch(
            backEnd + "/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });

        const result = await response.json();
        if (response.ok) {
            alert("✅ Успешный вход!");
        } else {
            alert("❌ Ошибка: " + result.message);
        }

    } catch (error) {
        console.error("Ошибка:", error);
        alert("⚠️ Ошибка соединения с сервером!");
    }
}