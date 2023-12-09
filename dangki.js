const btn = document.getElementById("btn-submit");
const tk = document.getElementById("account");
const mk = document.getElementById("password");
const re_mk = document.getElementById("rpassword");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (tk.value == "") {
    alert("Vui lòng nhập tài khoản!!!");
  } else if (mk.value == "") {
    alert("Vui lòng nhập mật khẩu!!!");
  } else if (re_mk.value == "") {
    alert("Vui lòng nhập lại mật khẩu!!!");
  }
});
