// ელემენტების მოძიება
const btn = document.getElementById("clickBtn");
const input = document.getElementById("textInput");
const div = document.getElementById("hoverDiv");
const log = document.getElementById("log");
// ფუნქცია რომელიც წერს მოვლენებს
function showEvent(msg) {
    log.innerHTML += msg + "<br>";
}
// 1) onclick — დაჭერისას
btn.onclick = () => showEvent(" onclick — ღილაკი დაჭერილია!");
// 2) onload — როცა გვერდი ჩაიტვირთა
window.onload = () => showEvent(" onload — გვერდი ჩაიტვირთა!");
// 3) onunload — როცა გვერდს ტოვებთ
window.onunload = () => alert(" onunload — ტოვებთ გვერდს!");
// 4) onchange — როცა მნიშვნელობა შეიცვალა და ფოკუსი მოიხსნა
input.onchange = () => showEvent(" onchange — მნიშვნელობა შეიცვალა!");
// 5) onmouseover — მაუსი გადავიდა ელემენტზე
div.onmouseover = () => showEvent(" onmouseover — მაუსი ელემენტზეა!");
// 6) onmouseout — მაუსი გავიდა ელემენტიდან
div.onmouseout = () => showEvent(" onmouseout — მაუსი გავიდა ელემენტიდან!");
// 7) onmousedown — მაუსის ღილაკის დაჭერის მომენტი
btn.onmousedown = () => showEvent(" onmousedown — მაუსის ღილაკი დაჭერილია!");
// 8) onmouseup — მაუსის ღილაკის გაშვების მომენტი
btn.onmouseup = () => showEvent(" onmouseup — მაუსის ღილაკი გაშვებულია!");
// 9) onfocus — როცა input იღებს ფოკუსს
input.onfocus = () => showEvent("onfocus — input-ზე ფოკუსი მივიღეთ!");
// 10) onblur — როცა input კარგავს ფოკუსს
input.onblur = () => showEvent(" onblur — input-მა დაკარგა ფოკუსი!");
