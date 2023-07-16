# React Note

## JS review

### Destructuring Objects and Arrays

- Destructuring cho phép giải nén các array hoặc object thành một loạt các biến.
- Syntax:

  ```JS
  // Destructuring Array
  const arr = ["John", "Smith", "Thomas"];
  let [a, b] = arr; // a: "John", b: "Smith"
  let [c, , d] = arr; // c: "John", d: "Thomas" => Bỏ qua phần tử arr[1]
  let [e, ...resVar] = arr; // c: "John", resVar: ["Smith", "Thomas"] => Kết hợp với toán tử rest
  let [fName, lName] = "John Smith".split(' '); // fName: "John", lName: "Smith" => Kết hợp với split method
  let [var1, var2, var3, var4] = arr; // var4: undefined => Nếu danh sách các biến nhiều hơn số element trong array
  let [var1, var2, var3, var4 = "anonymous"] = arr; // var4: "anonymous"; => Set default value

  // Destructuring Object
  let options = {
  title: "Menu",
  width: 100,
  height: 200
  };

  let {title, width, height} = options;
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  ```

## Những vấn đề khi sử dụng JQuery

1. Yêu cầu nhiều thao tác trực tiếp với DOM và duyệt qua.
2. Dữ liệu (state) thường được lưu trữ trong DOM, được chia sẻ trên toàn bộ ứng dụng => Khó lý giải + lỗi.

## Tại sao phải cần framework front-end

1. Giữ giao diện người dùng đồng bộ với dữ liệu theo thời gian thực.
2. Code có cấu trúc và cách viết chính xác hơn.
3. Cung cấp cho dev và team một cách nhất quán để xây dựng các ứng dụng front-end.

## React là gì

- Là JS framework phổ biến sử dụng để xây dựng giao diện dựa trên component.
- Trong React, các component là các khối xây dựng giao diện người dùng.
- Xây dựng giao diện người dùng phức tạp bằng cách xây dựng và kết hợp nhiều components.
- React sử dụng DOM ảo.
- Khai báo JSX, TSX: Để mô tả mỗi components và cách hoạt động của nó.
- JSX, TSX bao gồm: HTML, CSS, Javascript, Typescript và tham chiếu tới các components khác.

> 1. React render các components trên trang web (UI) dựa trên trạng thái (state) hiện tại của chúng.
> 2. Giữ UI đồng bộ với state bằng cách re-rendering khi state thay đổi.

## React Hook

- Babel giúp chuyển đổi code js (> ES6) về những phiên bản của hơn để tương thích trên các môi trường Js cũ hơn.
- Để sử dụng được JSX cần phải có JS và babel
