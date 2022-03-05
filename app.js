var qrcode = new QRCode(document.querySelector(".qrcode"), {
  text: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  width: 256,
  height: 256,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});