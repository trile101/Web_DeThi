let t = "cấu trúc dữ liệu"
var isNumber = /^\d+\.\d+$/.test(t);


if (t.match(/^[0-9]+$/) != null) {
    console.log("oe")
} else {
    console.log("ooke")
}

console.log(isNumber)