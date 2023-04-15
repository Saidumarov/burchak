

const a = Number(prompt("Birinchi sonni kiriting: "))
const b = Number(prompt("Ikkinchi sonni kiriting: "))
const c = Number(prompt("Uchinchi sonni kiriting: "))


if (a + b > c && b + c > a && a + c > b) {
    if (a == b && b == c) {
        document.querySelector(".ok").textContent=(" Teng tomonli uchburchak.");
    } else if (a == b || b == c || c == a) {
        document.querySelector(".ok").textContent=(" Teng yonli uchburchak.");
    } else {
        document.querySelector(".ok").textContent=("O'zaro qarama-qarshi tomonli uchburchak .");
    }
} else {
    document.querySelector(".ok").textContent=("Uchburchak kiritilmagan, yoki kiritilgan sonlar uchburchakni yaratmaydi.");
}



