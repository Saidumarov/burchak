

const a = Number(prompt("Birinchi sonni kiriting: "))
const b = Number(prompt("Ikkinchi sonni kiriting: "))
const c = Number(prompt("Uchinchi sonni kiriting: "))


if (a + b > c && b + c > a && a + c > b) {
    if (a == b && b == c) {
        document.querySelector(".ok").textContent=("Uchburchak teng tomonli teng yonli.");
    } else if (a == b || b == c || c == a) {
        document.querySelector(".ok").textContent=("Uchburchak teng yonli.");
    } else {
        document.querySelector(".ok").textContent=("Uchburchak o'zaro qarama-qarshi tomonli.");
    }
} else {
    document.querySelector(".ok").textContent=("Uchburchak kiritilmagan, yoki kiritilgan sonlar uchburchakni yaratmaydi.");
}



