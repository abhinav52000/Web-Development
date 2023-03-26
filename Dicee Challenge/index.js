var val1 = Math.ceil((Math.random() * 100) % 6);

var val2 = Math.ceil((Math.random() * 100) % 6);
// while (val1 == val2) {
//   var val2 = Math.ceil((Math.random() * 100) % 6);
// }

document.getElementById("img1").src = "./images/dice" + val1 + ".png";
document.getElementsByClassName("img2")[0].src =
  "./images/dice" + val2 + ".png";

if (val1 > val2) {
  document.getElementsByTagName("h1")[0].innerHTML = "🚩Player 1 Win";
} else if (val1 < val2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Win 🚩";
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "Draw 🏳️";
}
// esa hota nhi tha aksar hua jo abhi hai
// wo kuch lgta naya hai
// Bate wo jb bhi karti to bate sunke bas
// chup rhte yu hum bas yha hai
// khamosi mai bhi meri ajab sa sukoon
// dil ko milta ye chen kab aur kha hai
// maine manga nhi kuch phir bhi
// smjhe wo jo kuch kitni hi aur dfa hai
