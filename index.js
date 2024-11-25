// Mở modal đăng nhập
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-overlay').style.display = 'block';
});

// Mở modal đăng ký
document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('signup-overlay').style.display = 'block';
});

// Đóng modal đăng nhập
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('login-overlay').style.display = 'none';
});

// Đóng modal đăng ký
document.getElementById('close-signup-btn').addEventListener('click', function() {
    document.getElementById('signup-overlay').style.display = 'none';
});

// Chuyển từ login sang signup
document.getElementById('signup-link').addEventListener('click', function() {
    document.getElementById('login-overlay').style.display = 'none'; // Ẩn login modal
    document.getElementById('signup-overlay').style.display = 'block'; // Hiển thị signup modal
});

// Chuyển từ signup sang login
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('signup-overlay').style.display = 'none'; // Ẩn signup modal
    document.getElementById('login-overlay').style.display = 'block'; // Hiển thị login modal
});

// Mở khung Forgot Password khi click vào "Forgot Password"
document.getElementById("forgot-password-link").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn link chuyển hướng
    document.getElementById("login-overlay").style.display = "none"; // Ẩn khung Login
    document.getElementById("forgot-password-overlay").style.display = "flex"; // Hiển thị khung Forgot Password
});

// Đóng khung Forgot Password khi nhấn vào dấu "X"
document.getElementById("close-forgot-password-btn").addEventListener("click", function() {
    document.getElementById("forgot-password-overlay").style.display = "none"; // Ẩn modal khi click vào nút "X"
});

// Xử lý form Forgot Password
document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("forgot-email").value;
    alert(`Password reset instructions will be sent to ${email}.`);
    document.getElementById("forgot-password-overlay").style.display = "none"; // Ẩn modal sau khi gửi
});

// Đảm bảo modal ẩn khi tải trang
window.onload = function() {
    document.getElementById('signup-overlay').style.display = 'none';
    document.getElementById('login-overlay').style.display = 'none';
};

// Chuyển từ Forgot Password về Login
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('forgot-password-overlay').style.display = 'none'; // Ẩn Forgot Password modal
    document.getElementById('login-overlay').style.display = 'block'; // Hiển thị Login modal
});
// Hiển thị Login modal khi nhấp vào link "Log in" trong Forgot Password
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('forgot-password-overlay').style.display = 'none'; // Ẩn Forgot Password modal
    document.getElementById('login-overlay').style.display = 'block'; // Hiển thị Login modal
});
