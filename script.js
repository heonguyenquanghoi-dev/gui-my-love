// Thay đổi hoặc bổ sung đoạn code này vào sự kiện click nút startBtn trong script.js
document.getElementById('startBtn').addEventListener('click', function() {
    this.style.display = 'none';
    isActivated = true;
    
    // Tạo mã QR tự động trỏ về link web của bạn (Thay link của bạn vào đây)
    // Nếu đang chạy thử trên máy tính, bạn có thể để tạm link bất kỳ ví dụ facebook của bạn
    new QRCode(document.getElementById("qrcode"), {
        text: window.location.href, // Tự động lấy link hiện tại của trang web
        width: 100,
        height: 100,
        colorDark : "#ff007f",      // Màu mã QR là màu hồng đậm
        colorLight : "#ffffff",     // Nền trắng để dễ quét
        correctLevel : QRCode.CorrectLevel.H // Tăng cường độ nhận diện khi bị che khuất bởi hình trái tim
    });

    // Hiện chữ lãng mạn và Mã QR cùng lúc
    document.getElementById('textContent').classList.remove('hide');
    document.getElementById('textContent').classList.add('show');
    document.getElementById('footerContent').classList.remove('hide');
    document.getElementById('footerContent').classList.add('show');
    
    // Hiện khung QR ở góc màn hình
    document.getElementById('qrContent').classList.remove('hide');
    document.getElementById('qrContent').classList.add('show');
});