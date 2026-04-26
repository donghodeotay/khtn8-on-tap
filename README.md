# KHTN 8 — Ôn tập tổng hợp HK2

60 câu trắc nghiệm tổng hợp Khoa học tự nhiên lớp 8 học kỳ 2 — bám sát đề cương ôn tập của THCS Kim Đồng. Bao gồm 20 câu Hóa, 20 câu Lý, 20 câu Sinh.

## Files

```
.
├── index.html       Trang chủ + quiz screen + result screen
├── styles.css       Theme amber/teal
├── glossary.js      753 thuật ngữ Việt-Anh (di chuột để xem nghĩa)
├── questions.js     60 câu hỏi với lời giải chi tiết
├── app.js           Logic: shuffle, render, scoring, retake
└── README.md
```

## Tính năng

- **60 câu** — 20 Hóa + 20 Lý + 20 Sinh, mỗi câu có chip màu cho biết môn
- **Lời giải chi tiết** — hiện ngay sau khi chọn đáp án; giải thích dễ hiểu
- **Trộn ngẫu nhiên** — mỗi lần `Bắt đầu` hoặc `Làm lại`, thứ tự câu hỏi thay đổi
- **Đếm thời gian** — tổng thời gian làm bài
- **Kết quả** — phần trăm, số câu đúng/sai/bỏ qua, vòng tròn điểm động
- **Tooltip Việt-Anh** — di chuột (PC) hoặc chạm (mobile) lên thuật ngữ

## Nội dung

### A. Phần Hóa học (20 câu)
- Khái niệm và tên gọi acid/base/oxide/muối
- Tính chất hóa học · pH · chỉ thị màu
- Bảng tính tan
- Phương trình hóa học · chuỗi biến đổi
- Bài toán tính nồng độ %, khối lượng
- Phân bón hóa học

### B. Phần Vật lý (20 câu)
- Lực đẩy Archimedes, vật nổi/chìm
- Nhiễm điện do cọ xát
- Dòng điện · nguồn điện · vật dẫn/cách điện
- Mạch điện · các tác dụng của dòng điện
- Cường độ dòng điện (A) · hiệu điện thế (V)
- Năng lượng nhiệt · nội năng

### C. Phần Sinh học (20 câu)
- Hệ sinh dục — chức năng + cơ quan
- Biện pháp tránh thai
- Quần thể, quần xã sinh vật
- Bảo vệ đa dạng sinh học
- Hệ sinh thái · chuỗi/lưới thức ăn · tháp sinh thái

## Run & Deploy

Mở `index.html` để chạy thử cục bộ.

Deploy lên GitHub Pages:
1. Tạo repo `donghodeotay/khtn8-on-tap` (Public)
2. Upload **5 file** (index.html, styles.css, glossary.js, questions.js, app.js)
3. Settings → Pages → branch main → root → Save
4. URL: `https://donghodeotay.github.io/khtn8-on-tap/`

## Disclaimer

Tài liệu tham khảo. Câu hỏi được biên soạn theo đề cương; không thay thế đề thi chính thức.
