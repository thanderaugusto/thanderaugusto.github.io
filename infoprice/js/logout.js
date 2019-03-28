function logout() {
    window.sessionStorage.removeItem("token");
    window.location = "index.html";
}
