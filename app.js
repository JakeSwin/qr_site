const date = new Date()
const hour = date.getHours()

if (hour < 6) {
    date.setDate(date.getDate() - 1)
}

const day = date.getDate()
const month = date.getMonth()

const fulldate = day.toString() + month.toString() + hour.toString()

const todayhash = CryptoJS.SHA1(fulldate + "clank").toString()

const qrlink = "https://radiant-forest-06530.herokuapp.com/qrsignin/" + todayhash

var qrcode = new QRCode(document.querySelector(".qrcode"), {
  text: qrlink,
  width: 400,
  height: 400,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});