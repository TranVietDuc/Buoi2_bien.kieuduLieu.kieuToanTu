var diemVatLy = parseFloat(prompt (" Nhap diem Vat Ly roi an 'OK'"));
var diemHoaHoc =  parseFloat(prompt("Nhap diem Hoa Hoc roi an 'OK'"));
var diemSinhHoc = parseFloat(prompt("Nhap diem Sinh hoc roi nhan 'OK'"));
var tongDiem= diemHoaHoc+ diemVatLy+ diemSinhHoc;
var diemTB= tongDiem/3 ;
document.write("Tong diem la " + tongDiem + '<br>');
document.write(" Diem trung binh la " + diemTB);