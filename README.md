# Note

## ReactJS

### Những vấn đề khi sử dụng JQuery

1. Yêu cầu nhiều thao tác trực tiếp với DOM và duyệt qua.
2. Dữ liệu (state) thường được lưu trữ trong DOM, được chia sẻ trên toàn bộ ứng dụng => Khó lý giải + lỗi.

### Tại sao phải cần framework front-end

1. Giữ giao diện người dùng đồng bộ với dữ liệu theo thời gian thực.
2. Code có cấu trúc và cách viết chính xác hơn.
3. Cung cấp cho dev và team một cách nhất quán để xây dựng các ứng dụng front-end.

### Khác nhau giữa yarn và npm

- NPM sẽ install thư viện tuần tự còn yarn sẽ cài song song.
- YARN sẽ dành riêng một phân vùng trong máy để lưu cache nên khi install lại package sẽ tối ưu hơn (nhưng tốn dung lượng hơn).

### Sự khác nhau giữa export và export default

- Trong một tệp, `export default` chỉ có thể xuất 1 lần, còn `export` không giới hạn số lần xuất.
- Syntax:

  ```jsx
  // Export default
  export default function Button() {}
  import ButtonA from "./Button.ts"; // Có thể sử dụng tên bất kỳ khi import
  // Import default
  export function Button() {}
  import { Button } from "./Button.js"; // Bắt buộc phải đúng tên component
  ```

- Thường sẽ sử dụng `export default` khi 1 file chỉ export ra một component, còn `export` nếu có nhiều components và giá trị.
  > Để giảm khả năng nhầm lẫn chỉ nên sử dụng một kiểu và tránh sử dụng kết hợp trong cùng một file.

### React là gì

- Là JS framework phổ biến sử dụng để xây dựng giao diện dựa trên component.
- Trong React, các component là các khối xây dựng giao diện người dùng.
- Xây dựng giao diện người dùng phức tạp bằng cách xây dựng và kết hợp nhiều components.
- React sử dụng DOM ảo.
- Khai báo JSX, TSX: Để mô tả mỗi components và cách hoạt động của nó.
- JSX, TSX bao gồm: HTML, CSS, Javascript, Typescript và tham chiếu tới các components khác.

> 1. React render các components trên trang web (UI) dựa trên trạng thái (state) hiện tại của chúng.
> 2. Giữ UI đồng bộ với state bằng cách re-rendering khi state thay đổi.

### Props

- React elements
  - Sử dụng props giống như với attribute của thẻ HTML
  - 2 props class, for => className, htmlFor
  - Phải tuân theo quy ước có sẵn
- React components
  - Sử dụng dụng props giống như đối số cho Component
  - Tự do đặt tên props
    - Đặt theo camelCase
    - Có thể bao gồm dấu gạch ngang (`_`)
- Có 2 cách truyền props trong JSX: String literals (`"..."`), expression (`{...}`)
- Khi truyền props nếu không truyền giá trị gì thì mặc định sẽ là `true`.
- Children props: `<tag>value</tag>` (value sẽ là children props)

> Chú ý:
>
> 1. Prop "key" là prop đặc biệt
> 2. Props cơ bản là đối số của component => Có thể là bất cứ kiểu dữ liệu gì
> 3. Sử dụng destructuring

### JSX

- Babel giúp chuyển đổi code js (> ES6) về những phiên bản cũ hơn để tương thích trên các môi trường Js cũ hơn.
- Để sử dụng được JSX cần phải có JS và babel.
- Component do chúng ta định nghĩa phải viết hoa kí tự đầu.
- Booleans, Null & Undefined không được render.
- Kết hợp toán tử logic để render theo điều kiện.
- Nếu là UI component chỉ nên nhận dữ liệu và hiển thị chứ ko nên làm logic

### Hook

> Hook nghĩa là móc, các hàm này 'móc gắn' vào component.

#### 1. useState (trạng thái của dữ liệu)

- **Trường hợp sd:** Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (_render lại theo dữ liệu_).
- **Cách dùng:**

  ```jsx
  import { useState } from 'react'

  function Component() {
      // useState trả về một array: 0: initState, 1: hàm setState()
      const [state, setState] = useState(initState)
      ...
  }
  ```

> **Chú ý:**
>
> 1. Component được re-render sau khi `setState`
> 2. Initial state chỉ dùng cho lần đầu
> 3. Set state với callback
> 4. Initial state với callback

#### 2. useEffect

- `useEffect()` cho phép thực hiện các side effects trong các component, đồng bộ hóa một component với một hệ thống bên ngoài.
  > Một số side effects: fetching data, cập nhật DOM trực tiếp, timers
- **Cách dùng:**

  ```tsx
  import { useEffect } from "react";

  useEffect(() => {
    // setup
  }, [dependencies]);
  ```

- **Parameters**:
  - `setup`:
    - Callback luôn được gọi sau khi component mounted
    - Khi component được thêm vào DOM hàm setup sẽ được chạy.
    - Sau mỗi lần re-render lại với các `dependencies` đã thay đổi. Trước tiên sẽ chạy cleanup function (nếu đã cung cấp) với các giá trị cũ, sau đó chạy hàm `setup` với các giá trị mới.
  - `dependencies`: Là các biến chúng ta muốn nhờ `useEffect()` **quan sát** sự thay đổi của nó
    - Nếu là mảng rỗng (`[]`) thì `useEffect()` sẽ chỉ chạy sau lần render đầu tiên.
    - Nếu có giá trị (`[dp1, dp2...]`) thì `useEffect()` sẽ chạy bất cứ khi nào giá trị của một trong các **biến quan sát** (dependency) bị thay đổi.
    - Nếu không truyền gì thì sẽ chạy lại sau mỗi lần render, re-render. => Không nên sd.

## React Native

### Tổ chức thư mục cơ bản

- src
  - assets
  - components
  - hooks
  - routers
  - screens
  - utils
