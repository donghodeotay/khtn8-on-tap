/* questions.js — 60 questions covering the KHTN 8 HK2 review sheet
   (Phần Hóa học · Phần Vật lý · Phần Sinh học).
   Each question has a clear, easy-to-understand explanation. */

window.QUESTIONS = [

/* ====================== A. PHẦN HÓA HỌC (20) ====================== */
{subject:"hoa", q:"Công thức của Barium oxide là:",
 options:["BaO","BaO₂","Ba₂O","Ba(OH)₂"], correct:0,
 explanation:"Barium (Ba) hóa trị II + Oxygen (O) hóa trị II → BaO. Đây là một oxide base."},

{subject:"hoa", q:"Công thức của Iron(II) oxide là:",
 options:["Fe₂O₃","FeO","Fe₃O₄","Fe(OH)₂"], correct:1,
 explanation:"Iron(II) nghĩa là Fe có hóa trị II. Fe(II) + O(II) → FeO (oxide sắt II, màu đen)."},

{subject:"hoa", q:"Công thức của Calcium nitrate là:",
 options:["CaNO₃","Ca(NO₃)₂","Ca₃N₂","CaN"], correct:1,
 explanation:"Ca hóa trị II + gốc NO₃ hóa trị I → cần 2 gốc NO₃ → Ca(NO₃)₂."},

{subject:"hoa", q:"Công thức của Sulfuric acid là:",
 options:["H₂SO₃","H₂SO₄","HSO₄","H₂S"], correct:1,
 explanation:"Acid sulfuric: H₂SO₄ — chứa 2H + gốc sulfate SO₄. H₂SO₃ là acid sulfurous (yếu hơn)."},

{subject:"hoa", q:"Công thức của diphosphorus pentoxide là:",
 options:["P₂O₃","PO₅","P₂O₅","P₅O₂"], correct:2,
 explanation:"'Di' = 2, 'penta' = 5 → 2 phosphorus + 5 oxygen → P₂O₅ (oxide acid, tương ứng với H₃PO₄)."},

{subject:"hoa", q:"Công thức của Zinc phosphate là:",
 options:["ZnPO₄","Zn₂PO₄","Zn₃(PO₄)₂","Zn(PO₄)₂"], correct:2,
 explanation:"Zn hóa trị II + gốc PO₄ hóa trị III → bội chung 6 → Zn₃(PO₄)₂."},

{subject:"hoa", q:"Tên gọi của muối CuCl₂ là:",
 options:["Đồng(I) clorua","Đồng(II) clorua","Đồng oxide","Đồng hydroxide"], correct:1,
 explanation:"Cu trong CuCl₂ có hóa trị II (vì Cl hóa trị I, có 2 Cl) → Đồng(II) clorua / Copper(II) chloride."},

{subject:"hoa", q:"Tên gọi của muối Fe₂(SO₄)₃ là:",
 options:["Sắt(II) sulfate","Sắt(III) sulfate","Sắt sulfide","Sắt nitrate"], correct:1,
 explanation:"Trong Fe₂(SO₄)₃, gốc SO₄ hóa trị II × 3 = 6, chia đều cho 2 Fe → mỗi Fe có hóa trị III. Tên: Sắt(III) sulfate."},

{subject:"hoa", q:"Dung dịch có pH = 2 thuộc môi trường:",
 options:["Trung tính","Acid (mạnh)","Base (kiềm)","Không xác định"], correct:1,
 explanation:"pH < 7 = acid, pH = 7 = trung tính, pH > 7 = base. pH = 2 rất nhỏ → acid mạnh."},

{subject:"hoa", q:"Quỳ tím trong dung dịch base sẽ:",
 options:["Hóa đỏ","Hóa xanh","Không đổi màu","Mất màu"], correct:1,
 explanation:"Acid → quỳ tím hóa đỏ. Base → quỳ tím hóa xanh. Quỳ tím là chất chỉ thị màu phổ biến."},

{subject:"hoa", q:"Cặp chất nào sau đây KHÔNG tan trong nước?",
 options:["NaCl","KNO₃","BaSO₄","NaOH"], correct:2,
 explanation:"Theo bảng tính tan: BaSO₄ là kết tủa trắng, không tan. NaCl, KNO₃ tan tốt; NaOH cũng tan tốt."},

{subject:"hoa", q:"Hoàn thành: ZnO + 2HCl → __ + H₂O",
 options:["Zn","ZnCl","ZnCl₂","ZnO₂"], correct:2,
 explanation:"Oxide base + acid → muối + nước. ZnO + 2HCl → ZnCl₂ + H₂O. Cân bằng: 1Zn=1Zn, 2Cl=2Cl, 1O+2H = 1O+2H ✓."},

{subject:"hoa", q:"Hoàn thành: CuCl₂ + 2NaOH → Cu(OH)₂ + __",
 options:["NaCl","2NaCl","Na₂Cl","NaClO"], correct:1,
 explanation:"Phản ứng trao đổi: CuCl₂ + 2NaOH → Cu(OH)₂↓ (xanh) + 2NaCl. Cần 2NaCl để cân bằng Na và Cl."},

{subject:"hoa", q:"Hoàn thành: NH₄NO₃ + NaOH → __ + H₂O + NaNO₃",
 options:["NH₃","N₂","NH₄","HNO₃"], correct:0,
 explanation:"Đây là phản ứng tạo khí amoniac: NH₄NO₃ + NaOH → NH₃↑ + H₂O + NaNO₃. NH₃ là khí có mùi khai đặc trưng."},

{subject:"hoa", q:"Trong chuỗi: S → SO₂ → Na₂SO₃ → NaCl, chất tham gia ở bước SO₂ → Na₂SO₃ là:",
 options:["NaOH","HCl","H₂SO₄","H₂O"], correct:0,
 explanation:"SO₂ là oxide acid + base NaOH → muối + nước: SO₂ + 2NaOH → Na₂SO₃ + H₂O."},

{subject:"hoa", q:"Để điều chế MgCl₂, cách nào sau đây ĐÚNG?",
 options:["MgO + HCl","Mg(OH)₂ + NaCl","MgSO₄ + NaCl","Cả hai cách: MgO + HCl và Mg(OH)₂ + HCl"], correct:3,
 explanation:"MgO + 2HCl → MgCl₂ + H₂O (oxide base + acid). Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O (base + acid). Hai phản ứng đều tạo MgCl₂. Còn MgSO₄ + NaCl không phản ứng vì không tạo kết tủa/khí/nước."},

{subject:"hoa", q:"Cho dung dịch NaOH vào dung dịch CuSO₄, hiện tượng quan sát:",
 options:["Không có hiện tượng","Tạo kết tủa xanh Cu(OH)₂","Sủi bọt khí","Tạo dung dịch đỏ"], correct:1,
 explanation:"2NaOH + CuSO₄ → Cu(OH)₂↓ (kết tủa màu xanh lam) + Na₂SO₄. Đây là phản ứng trao đổi tạo kết tủa."},

{subject:"hoa", q:"Để nhận biết 3 dung dịch H₂SO₄, NaOH, HCl, ta dùng:",
 options:["Quỳ tím sau đó BaCl₂","Đường","Nước cất","Muối ăn"], correct:0,
 explanation:"Bước 1: quỳ tím — NaOH hóa xanh, H₂SO₄ và HCl hóa đỏ. Bước 2: nhỏ BaCl₂ vào 2 acid — H₂SO₄ tạo kết tủa trắng BaSO₄↓, HCl không có hiện tượng."},

{subject:"hoa", q:"Hòa tan CaCO₃ vào 200g HCl 7,3% vừa đủ. Khối lượng CaCO₃ phản ứng là (M_CaCO₃=100, M_HCl=36,5):",
 options:["10 g","20 g","30 g","50 g"], correct:1,
 explanation:"m_HCl = 7,3% × 200 = 14,6 g → n_HCl = 14,6/36,5 = 0,4 mol. PT: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. n_CaCO₃ = n_HCl/2 = 0,2 mol → m = 0,2 × 100 = 20 g."},

{subject:"hoa", q:"Phân đạm cung cấp nguyên tố nào cho cây trồng?",
 options:["N (Nitrogen)","P (Phosphorus)","K (Potassium)","Ca (Calcium)"], correct:0,
 explanation:"Phân đạm (urea, NH₄NO₃, (NH₄)₂SO₄…) chứa N — giúp cây phát triển thân lá, tăng năng suất."},

/* ====================== B. PHẦN VẬT LÝ (20) ====================== */
{subject:"ly", q:"Lực đẩy Archimedes có phương và chiều như thế nào?",
 options:["Phương ngang, chiều theo dòng nước","Phương thẳng đứng, chiều từ dưới lên","Phương thẳng đứng, chiều từ trên xuống","Phương xiên, chiều bất kỳ"], correct:1,
 explanation:"Lực đẩy Archimedes của chất lỏng tác dụng lên vật nhúng trong nó có phương thẳng đứng, chiều từ dưới lên (đẩy vật lên)."},

{subject:"ly", q:"Vật nổi trên mặt chất lỏng khi:",
 options:["Trọng lực vật > lực đẩy Archimedes","Trọng lực vật = lực đẩy Archimedes","Trọng lực vật < lực đẩy Archimedes","Vật không có trọng lực"], correct:2,
 explanation:"Vật nổi: P_vật < F_A (lực đẩy Archimedes lớn hơn trọng lực, đẩy vật lên trên mặt chất lỏng). Vật chìm khi P > F_A; vật lơ lửng khi P = F_A."},

{subject:"ly", q:"Khi cọ xát thước nhựa vào vải khô, thước có khả năng:",
 options:["Hút các vật nhẹ như mẩu giấy","Phát sáng","Tự nóng chảy","Không có hiện tượng gì"], correct:0,
 explanation:"Vật nhiễm điện do cọ xát có khả năng hút các vật nhẹ (giấy, tóc, bụi…). Đây là hiện tượng nhiễm điện do cọ xát."},

{subject:"ly", q:"Hai vật nhiễm điện cùng loại đặt gần nhau sẽ:",
 options:["Hút nhau","Đẩy nhau","Không tác dụng","Trung hòa nhau"], correct:1,
 explanation:"Cùng dấu đẩy nhau, khác dấu hút nhau. Đây là quy luật cơ bản về tương tác giữa các điện tích."},

{subject:"ly", q:"Định nghĩa dòng điện:",
 options:["Là dòng chuyển động hỗn loạn của các phân tử","Là dòng chuyển dời có hướng của các hạt mang điện","Là sự rung lắc của các nguyên tử","Là sóng âm trong dây dẫn"], correct:1,
 explanation:"Dòng điện = dòng chuyển dời CÓ HƯỚNG của các hạt mang điện (electron tự do trong kim loại; ion trong dung dịch)."},

{subject:"ly", q:"Quy ước chiều dòng điện trong mạch là:",
 options:["Từ cực âm qua mạch ngoài về cực dương","Từ cực dương qua mạch ngoài về cực âm của nguồn","Hai chiều cùng lúc","Không có chiều xác định"], correct:1,
 explanation:"Quy ước: dòng điện chạy từ cực dương → mạch ngoài (qua dây dẫn và thiết bị) → cực âm của nguồn."},

{subject:"ly", q:"Nguồn điện thông dụng trong đời sống KHÔNG bao gồm:",
 options:["Pin","Ắc quy","Máy phát điện","Bóng đèn"], correct:3,
 explanation:"Nguồn điện cung cấp năng lượng điện: pin, ắc quy, máy phát điện, pin mặt trời. Bóng đèn là thiết bị tiêu thụ điện, không phải nguồn."},

{subject:"ly", q:"Vật nào sau đây là vật cách điện?",
 options:["Đồng","Nhôm","Sứ","Sắt"], correct:2,
 explanation:"Vật cách điện không cho dòng điện chạy qua: sứ, nhựa, gỗ khô, thủy tinh, cao su. Đồng/nhôm/sắt là kim loại — vật dẫn điện tốt."},

{subject:"ly", q:"Vật nào sau đây dẫn điện tốt nhất?",
 options:["Bạc","Cao su","Gỗ khô","Thủy tinh"], correct:0,
 explanation:"Bạc dẫn điện tốt nhất, sau đó đến đồng, vàng, nhôm. Cao su, gỗ khô, thủy tinh đều là vật cách điện."},

{subject:"ly", q:"Khi vẽ mạch điện đơn giản gồm pin, công tắc, bóng đèn, dây dẫn — sơ đồ KHÔNG thể thiếu:",
 options:["Nguồn điện và thiết bị tiêu thụ","Loa","Tivi","Máy giặt"], correct:0,
 explanation:"Mạch điện đơn giản tối thiểu cần: nguồn điện (pin) + dây dẫn + thiết bị tiêu thụ (bóng đèn) + công tắc để điều khiển."},

{subject:"ly", q:"Nếu công tắc mở, mạch điện đang ở trạng thái:",
 options:["Mạch kín, có dòng điện","Mạch hở, KHÔNG có dòng điện qua tải","Bị chập mạch","Quá tải"], correct:1,
 explanation:"Công tắc mở → mạch hở (không kín) → dòng điện không chạy qua được → bóng đèn tắt."},

{subject:"ly", q:"Tác dụng nhiệt của dòng điện được ứng dụng trong:",
 options:["Bàn là, bếp điện, ấm điện","Loa, micro","Pin mặt trời","Đồng hồ cơ học"], correct:0,
 explanation:"Bàn là, bếp điện, ấm điện chuyển điện năng thành nhiệt năng — ứng dụng tác dụng nhiệt của dòng điện."},

{subject:"ly", q:"Để mạ bạc cho đồng hồ thép, người ta dùng tác dụng nào của dòng điện?",
 options:["Tác dụng nhiệt","Tác dụng phát sáng","Tác dụng từ","Tác dụng hóa học"], correct:3,
 explanation:"Mạ điện (mạ bạc, mạ đồng, mạ vàng…) sử dụng TÁC DỤNG HÓA HỌC của dòng điện. Đặt vật cần mạ làm cực âm, tấm bạc làm cực dương trong dung dịch muối bạc; dòng điện làm Ag bám lên đồng hồ."},

{subject:"ly", q:"Cường độ dòng điện đặc trưng cho:",
 options:["Mức độ mạnh, yếu của dòng điện","Số lượng pin","Khối lượng dây dẫn","Nhiệt độ dây dẫn"], correct:0,
 explanation:"Cường độ dòng điện (I) đặc trưng cho mức độ mạnh, yếu của dòng điện. I lớn → dòng mạnh; I nhỏ → dòng yếu."},

{subject:"ly", q:"Đơn vị đo cường độ dòng điện và hiệu điện thế lần lượt là:",
 options:["Vôn (V) và Ampe (A)","Ampe (A) và Vôn (V)","Oát (W) và Jun (J)","Pa-xcan (Pa) và Niu-tơn (N)"], correct:1,
 explanation:"Cường độ dòng điện đo bằng Ampe (A); hiệu điện thế đo bằng Vôn (V). 1 mA = 0,001 A; 1 kV = 1000 V."},

{subject:"ly", q:"Để đo cường độ dòng điện qua một bóng đèn, ta mắc ampe kế:",
 options:["Song song với đèn","Nối tiếp với đèn","Bất kỳ vị trí nào","Không cần mắc"], correct:1,
 explanation:"Ampe kế có điện trở rất nhỏ, phải mắc NỐI TIẾP với đèn để dòng điện đi qua cả hai. Vôn kế (đo HĐT) thì mắc SONG SONG."},

{subject:"ly", q:"Năng lượng nhiệt của một vật là:",
 options:["Tổng động năng của các phân tử cấu tạo nên vật","Khối lượng của vật","Lực hấp dẫn lên vật","Áp suất tác dụng lên vật"], correct:0,
 explanation:"Nhiệt năng (phần lớn) = tổng động năng chuyển động hỗn loạn của các phân tử. Vật càng nóng → phân tử chuyển động càng nhanh → nhiệt năng càng lớn."},

{subject:"ly", q:"Khi đun nước, nhiệt độ nước tăng lên là vì:",
 options:["Các phân tử nước chuyển động nhanh hơn → nội năng của nước tăng","Khối lượng nước tăng","Thể tích nước giảm","Nước biến mất"], correct:0,
 explanation:"Khi truyền nhiệt cho nước, các phân tử chuyển động hỗn loạn nhanh hơn → động năng phân tử tăng → nội năng tăng → nhiệt độ tăng."},

{subject:"ly", q:"Khi nước SÔI, mặc dù tiếp tục đun, nhiệt độ nước KHÔNG đổi vì:",
 options:["Nước không nhận thêm nhiệt","Nhiệt được dùng để chuyển nước từ thể lỏng sang thể hơi (nhiệt hóa hơi)","Nước bay hết","Bếp tắt"], correct:1,
 explanation:"Ở 100°C (1 atm), nhiệt cung cấp không làm tăng nhiệt độ mà dùng để biến nước lỏng thành hơi (chuyển thể) — gọi là nhiệt hóa hơi. Khi nước hết, nhiệt độ mới tăng tiếp."},

{subject:"ly", q:"Tại sao xoa hai tay vào nhau thì tay nóng lên?",
 options:["Do ma sát giữa hai tay làm chuyển cơ năng thành nhiệt năng","Do hô hấp tăng","Do máu chảy nhanh hơn","Do không khí ấm"], correct:0,
 explanation:"Khi xoa hai tay, công của lực ma sát chuyển thành nhiệt năng → các phân tử ở da chuyển động nhanh hơn → nội năng và nhiệt độ tay tăng → ấm lên."},

/* ====================== C. PHẦN SINH HỌC (20) ====================== */
{subject:"sinh", q:"Chức năng chính của hệ sinh dục là:",
 options:["Tiêu hóa thức ăn","Sản sinh tế bào sinh dục và duy trì nòi giống","Vận chuyển máu","Bài tiết nước tiểu"], correct:1,
 explanation:"Hệ sinh dục có chức năng sản sinh giao tử (tinh trùng/trứng), tiết hormone sinh dục, và duy trì nòi giống thông qua sinh sản."},

{subject:"sinh", q:"Cơ quan sinh dục nam KHÔNG có:",
 options:["Tinh hoàn","Mào tinh","Ống dẫn tinh","Buồng trứng"], correct:3,
 explanation:"Cơ quan sinh dục nam: tinh hoàn (sản xuất tinh trùng), mào tinh (lưu trữ), ống dẫn tinh, dương vật. Buồng trứng là cơ quan của hệ sinh dục NỮ."},

{subject:"sinh", q:"Tinh hoàn ở nam có chức năng:",
 options:["Sản xuất tinh trùng và hormone testosterone","Lọc máu","Tiêu hóa","Vận chuyển oxy"], correct:0,
 explanation:"Tinh hoàn vừa sản xuất tinh trùng (giao tử nam) vừa tiết hormone sinh dục nam testosterone."},

{subject:"sinh", q:"Buồng trứng ở nữ có chức năng:",
 options:["Sản xuất trứng và hormone estrogen, progesterone","Tiêu hóa thức ăn","Trao đổi khí","Co bóp thải máu"], correct:0,
 explanation:"Buồng trứng sản xuất trứng (giao tử nữ) và tiết các hormone estrogen, progesterone — quan trọng cho chu kỳ kinh nguyệt và thai kỳ."},

{subject:"sinh", q:"Sự thụ tinh ở người diễn ra ở:",
 options:["Tử cung","Ống dẫn trứng (vòi trứng)","Âm đạo","Buồng trứng"], correct:1,
 explanation:"Tinh trùng gặp trứng và thụ tinh ở 1/3 ngoài của ống dẫn trứng. Sau đó hợp tử di chuyển về tử cung và làm tổ."},

{subject:"sinh", q:"Biện pháp tránh thai an toàn nhất với tuổi vị thành niên là:",
 options:["Không quan hệ tình dục (kiêng quan hệ)","Tự dùng thuốc tránh thai khẩn cấp thường xuyên","Phá thai","Uống rượu"], correct:0,
 explanation:"Kiêng quan hệ là biện pháp duy nhất hiệu quả 100% và phù hợp nhất với vị thành niên. Các biện pháp khác chỉ áp dụng cho người trưởng thành đã có gia đình."},

{subject:"sinh", q:"Bệnh nào sau đây lây qua đường tình dục?",
 options:["HIV/AIDS","Cảm cúm","Lao phổi","Sởi"], correct:0,
 explanation:"HIV/AIDS lây qua đường máu, tình dục, mẹ–con. Cảm cúm, lao, sởi lây qua đường hô hấp (giọt bắn)."},

{subject:"sinh", q:"Quần thể sinh vật là tập hợp:",
 options:["Nhiều loài cùng sống một nơi","Các cá thể CÙNG LOÀI, cùng nơi, cùng thời điểm, có khả năng giao phối","Một cá thể riêng lẻ","Sinh vật và môi trường"], correct:1,
 explanation:"Quần thể: 4 yếu tố — cùng loài + cùng không gian + cùng thời điểm + có khả năng sinh sản với nhau. Ví dụ: đàn cá rô trong cùng một ao."},

{subject:"sinh", q:"Quần xã sinh vật là:",
 options:["Tập hợp các quần thể của các loài KHÁC NHAU cùng sống trong một sinh cảnh","Một loài duy nhất","Một cá thể","Tập hợp môi trường vô sinh"], correct:0,
 explanation:"Quần xã = nhiều quần thể của các loài khác nhau, có quan hệ với nhau (ăn nhau, cộng sinh, ký sinh…), cùng sống trong một sinh cảnh."},

{subject:"sinh", q:"Đặc trưng cơ bản của quần xã KHÔNG bao gồm:",
 options:["Số lượng loài, độ đa dạng","Loài ưu thế","Loài đặc trưng","Tốc độ ánh sáng"], correct:3,
 explanation:"Đặc trưng quần xã: số lượng loài, độ đa dạng (số loài + số cá thể mỗi loài), loài ưu thế (loài có ảnh hưởng lớn), loài đặc trưng (chỉ có ở quần xã đó). Tốc độ ánh sáng là đại lượng vật lý."},

{subject:"sinh", q:"Hành động nào BẢO VỆ đa dạng sinh học trong quần xã?",
 options:["Phá rừng làm nương rẫy","Săn bắt động vật quý hiếm","Trồng và bảo vệ rừng, lập khu bảo tồn","Xả rác xuống sông"], correct:2,
 explanation:"Bảo vệ đa dạng = giữ gìn các loài + sinh cảnh. Trồng rừng, lập khu bảo tồn, hạn chế khai thác là các biện pháp cốt lõi."},

{subject:"sinh", q:"Hành động nào PHÁ HOẠI đa dạng sinh học?",
 options:["Lập khu bảo tồn","Săn bắt động vật quý hiếm, phá rừng","Trồng cây","Tái chế rác thải"], correct:1,
 explanation:"Săn bắt + phá rừng làm giảm số loài và mất nơi sống → đa dạng sinh học giảm, nhiều loài có nguy cơ tuyệt chủng."},

{subject:"sinh", q:"Hệ sinh thái là:",
 options:["Quần xã sinh vật + sinh cảnh + các tương tác giữa chúng","Chỉ sinh vật","Chỉ vô sinh","Một loài"], correct:0,
 explanation:"Hệ sinh thái = quần xã (sinh vật) + sinh cảnh (môi trường vô sinh) + mối quan hệ tương tác qua lại giữa chúng (chuỗi thức ăn, chu trình vật chất, dòng năng lượng)."},

{subject:"sinh", q:"Hệ sinh thái nào sau đây thuộc nước ngọt?",
 options:["Rừng nhiệt đới","Sa mạc","Ao hồ","Biển sâu"], correct:2,
 explanation:"Hệ sinh thái nước ngọt: ao, hồ, sông, suối. Biển là nước mặn; rừng/sa mạc là trên cạn. Đây là phân loại theo môi trường."},

{subject:"sinh", q:"Trong chuỗi thức ăn: Cỏ → Châu chấu → Ếch → Rắn → Đại bàng. Sinh vật tiêu thụ bậc 1 là:",
 options:["Cỏ","Châu chấu","Ếch","Đại bàng"], correct:1,
 explanation:"Bậc 1 ăn trực tiếp sinh vật sản xuất (cỏ). Châu chấu ăn cỏ → bậc 1. Ếch ăn châu chấu → bậc 2. Rắn ăn ếch → bậc 3."},

{subject:"sinh", q:"Lưới thức ăn khác chuỗi thức ăn ở chỗ:",
 options:["Lưới gồm nhiều chuỗi thức ăn đan xen nhau","Lưới chỉ có một sinh vật","Lưới không có sinh vật phân giải","Chuỗi phức tạp hơn lưới"], correct:0,
 explanation:"Lưới thức ăn = nhiều chuỗi đan xen, phản ánh thực tế trong tự nhiên (1 loài có thể ăn nhiều loài khác và bị nhiều loài ăn lại)."},

{subject:"sinh", q:"Sinh vật sản xuất trong hệ sinh thái là:",
 options:["Cây xanh, tảo (tự dưỡng)","Động vật ăn thịt","Vi khuẩn phân giải","Côn trùng"], correct:0,
 explanation:"Sinh vật sản xuất tự tổng hợp chất hữu cơ từ vô cơ qua quang hợp/hóa hợp — chủ yếu là cây xanh và tảo, là nền tảng của chuỗi thức ăn."},

{subject:"sinh", q:"Sinh vật phân giải trong hệ sinh thái chủ yếu là:",
 options:["Vi khuẩn và nấm","Động vật ăn thịt","Cây xanh","Côn trùng"], correct:0,
 explanation:"Vi khuẩn và nấm phân hủy xác sinh vật và chất thải, trả các chất khoáng về môi trường — đóng vai trò không thể thiếu trong chu trình vật chất."},

{subject:"sinh", q:"Tháp sinh thái thường có hình dạng:",
 options:["Hình tròn","Hình tháp đáy rộng – đỉnh hẹp","Hình tháp ngược","Hình vuông"], correct:1,
 explanation:"Tháp sinh thái có ĐÁY RỘNG (sinh vật sản xuất nhiều) thu hẹp dần lên ĐỈNH (sinh vật tiêu thụ bậc cao ít). Lý do: năng lượng giảm dần (~10% chuyển tiếp giữa các bậc) do hô hấp, hoạt động sống, tỏa nhiệt."},

{subject:"sinh", q:"Khi mất một bậc trong chuỗi thức ăn (ví dụ tuyệt chủng ếch), hậu quả là:",
 options:["Mất cân bằng sinh thái: bậc dưới (châu chấu) bùng nổ, bậc trên (rắn) thiếu thức ăn","Không ảnh hưởng gì","Tăng đa dạng sinh học","Cây xanh chết hết"], correct:0,
 explanation:"Mỗi loài có vai trò riêng. Mất một mắt xích → cả hệ sinh thái mất cân bằng: bậc dưới mất kẻ kiểm soát số lượng (bùng phát), bậc trên mất nguồn thức ăn (suy giảm)."}
/* ============== ADDED Q61-Q72 to fully cover the review sheet ============== */
,
{subject:"hoa", q:"Công thức của Magnesium sulfate là:",
 options:["MgSO₃","MgS","MgSO₄","Mg₂SO₄"], correct:2,
 explanation:"Mg hóa trị II + gốc SO₄ hóa trị II → MgSO₄. Đây là một muối tan, dùng làm thuốc nhuận tràng."},

{subject:"hoa", q:"Công thức của potassium hydroxide là:",
 options:["KO","KOH","K₂O","K(OH)₂"], correct:1,
 explanation:"K hóa trị I + nhóm OH hóa trị I → KOH. Đây là một base mạnh, tan tốt trong nước."},

{subject:"hoa", q:"Công thức của copper(II) hydroxide là:",
 options:["CuOH","Cu(OH)₂","Cu(OH)₃","Cu₂OH"], correct:1,
 explanation:"Cu(II) hóa trị II + nhóm OH hóa trị I → cần 2 nhóm OH → Cu(OH)₂. Đây là kết tủa màu xanh lam, không tan."},

{subject:"hoa", q:"Tên gọi của muối ZnSO₄ là:",
 options:["Kẽm sulfite","Kẽm sulfate","Kẽm sulfua","Kẽm clorua"], correct:1,
 explanation:"ZnSO₄ chứa gốc SO₄ → muối sulfate. Tên đầy đủ: Kẽm sulfate / Zinc sulfate."},

{subject:"hoa", q:"Tên gọi của muối Na₂HPO₄ là:",
 options:["Natri photphat","Natri hidrophotphat (muối acid)","Natri đihidrophotphat","Natri hidroxide"], correct:1,
 explanation:"Na₂HPO₄ là MUỐI ACID — vẫn còn 1 nguyên tử H trong gốc → 'Natri hidrophotphat' / Sodium hydrogen phosphate. Còn NaH₂PO₄ giữ 2H nên gọi là 'natri đihidrophotphat'."},

{subject:"hoa", q:"Hoàn thành: MgCl₂ + 2HNO₃ → __ + 2HCl",
 options:["Mg(NO₃)","Mg(NO₃)₂","MgN₂","MgO"], correct:1,
 explanation:"Phản ứng trao đổi giữa muối và acid: MgCl₂ + 2HNO₃ → Mg(NO₃)₂ + 2HCl. Mg hóa trị II cần 2 gốc NO₃ → Mg(NO₃)₂."},

{subject:"hoa", q:"Hoàn thành: __ + Na₂SO₄ → BaSO₄↓ + 2NaCl",
 options:["BaCl","BaCl₂","Ba(OH)₂","BaO"], correct:1,
 explanation:"Để cân bằng: cần Ba và 2 Cl → BaCl₂. PT: BaCl₂ + Na₂SO₄ → BaSO₄↓ (kết tủa trắng) + 2NaCl. Đây là phản ứng dùng để nhận biết gốc SO₄²⁻."},

{subject:"hoa", q:"Cho lá Aluminum sạch vào dung dịch CuCl₂, hiện tượng:",
 options:["Không phản ứng","Lá Al tan dần, có lớp Cu màu đỏ bám lên Al; dung dịch nhạt màu xanh","Tạo khí H₂","Tạo kết tủa trắng"], correct:1,
 explanation:"2Al + 3CuCl₂ → 2AlCl₃ + 3Cu. Al mạnh hơn Cu (đứng trước trong dãy hoạt động hóa học) nên đẩy Cu ra → Cu màu đỏ bám lên, dung dịch CuCl₂ xanh nhạt dần do Cu²⁺ giảm."},

{subject:"hoa", q:"Nhỏ dung dịch H₂SO₄ loãng vào ống nghiệm chứa Na₂CO₃, hiện tượng:",
 options:["Sủi bọt khí CO₂, dung dịch trong","Tạo kết tủa trắng","Đổi màu sang xanh","Không có hiện tượng"], correct:0,
 explanation:"H₂SO₄ + Na₂CO₃ → Na₂SO₄ + H₂O + CO₂↑. Acid mạnh đẩy CO₂ ra khỏi muối carbonate → sủi bọt khí. Đây là cách nhận biết muối carbonate."},

{subject:"hoa", q:"Nhỏ dung dịch NaOH (kèm vài giọt phenolphtalein) cho tới dư vào dung dịch HCl. Màu dung dịch sẽ:",
 options:["Luôn không màu","Không màu, sau đó chuyển hồng khi NaOH dư","Đỏ","Xanh"], correct:1,
 explanation:"Lúc đầu HCl trung hòa NaOH → môi trường acid, phenolphtalein không màu. Khi NaOH DƯ → môi trường base, phenolphtalein chuyển HỒNG. Đây là dấu hiệu phản ứng trung hòa kết thúc."},

{subject:"hoa", q:"Có 4 dung dịch không nhãn: NaCl, Ba(OH)₂, NaOH, Na₂SO₄. Chỉ dùng MỘT hóa chất nào sau đây để nhận biết tất cả?",
 options:["Quỳ tím","Dung dịch H₂SO₄","Nước","Đường"], correct:1,
 explanation:"Dùng H₂SO₄: Ba(OH)₂ → kết tủa trắng BaSO₄ + nước (vừa trung hòa vừa kết tủa). NaOH → trung hòa, không kết tủa, dùng quỳ tím sau để xác nhận. Na₂SO₄ → không phản ứng. NaCl → không phản ứng. Hoặc dùng quỳ tím trước (chia 2 nhóm: base xanh = Ba(OH)₂, NaOH; trung tính = NaCl, Na₂SO₄), sau đó dùng H₂SO₄ tách từng cặp."},

{subject:"hoa", q:"Trung hòa 200 mL dung dịch H₂SO₄ 1M cần bao nhiêu mol NaOH? (Trợ giúp: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)",
 options:["0,1 mol","0,2 mol","0,4 mol","1,0 mol"], correct:2,
 explanation:"n_H₂SO₄ = 0,2 L × 1 M = 0,2 mol. Theo PT: cần 2 mol NaOH cho 1 mol H₂SO₄ → cần 2 × 0,2 = 0,4 mol NaOH. Khối lượng NaOH = 0,4 × 40 = 16 g."}


];
