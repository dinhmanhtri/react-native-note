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
- **Children props**: `<tag>value</tag>` (_value_ sẽ là children props)

> Chú ý:
>
> 1. Prop "key" là prop đặc biệt
> 2. Props cơ bản là đối số của component => Có thể là bất cứ kiểu dữ liệu gì
> 3. Sử dụng destructuring
> 4. Giá trị của props không thể thay đổi trong suốt quá trình vòng đời của component

### State

- State là một trong hai loại dữ liệu để điều khiển việc hiển thị một
  component (loại còn lại là props).
- Sử dụng state khi muốn thay đổi và cập nhật dữ liệu lên UI bất cứ khi nào.

### JSX

- Babel giúp chuyển đổi code js (> ES6) về những phiên bản cũ hơn để tương thích trên các môi trường Js cũ hơn.
- Để sử dụng được JSX cần phải có JS và babel.
- Component do chúng ta định nghĩa phải viết hoa kí tự đầu.
- Booleans, Null & Undefined không được render.
- Kết hợp toán tử logic để render theo điều kiện.
- Nếu là UI component chỉ nên nhận dữ liệu và hiển thị chứ ko nên làm logic

### Stateful/Stateless Component

#### 1. Phân biệt Stateful và Stateless

- Một component sử dụng **state** để kiểm soát data gọi là: **stateful**.
- Không sử dụng **state** chỉ sử dụng **props** để hiển thị dữ liệu gọi là **stateless**. Ex:

  ```tsx
  function MyComponent(props) {
    return (//code JSX here);
  }
  ```

#### 2. Cách chuyển đổi từ Stateful sang Stateless component

- Sử dụng **Arrow function**.
- Không sử dụng hàm constructor và keyword this.
- Không sử dụng hàm render, thay vào đó là keyword return.
- Props được truyền động từ cha xuống con.

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

- Đối chiếu với các hàm lifecycle trong class component.

  ```ts
  useEffect(() => {
    // ComponentDidMount
    return () => {
        // ComponentWillUnMount
    } 
  }, [
    // ComponentDidUpdate
  ])
  ```

- **Parameters**:
  - `setup`:
    - Callback luôn được gọi sau khi component mounted
    - Khi component được thêm vào DOM hàm setup sẽ được chạy.
    - Sau mỗi lần re-render lại với các `dependencies` đã thay đổi. Trước tiên sẽ chạy cleanup function (nếu đã cung cấp) với các giá trị cũ, sau đó chạy hàm `setup` với các giá trị mới.
    - Cleanup function luôn được gọi trước khi component unmount.
  - `dependencies`: Là các biến chúng ta muốn nhờ `useEffect()` **quan sát** sự thay đổi của nó
    - Nếu là mảng rỗng (`[]`) thì `useEffect()` sẽ chỉ chạy sau lần render đầu tiên.
    - Nếu có giá trị (`[dp1, dp2...]`) thì `useEffect()` sẽ chạy bất cứ khi nào giá trị của một trong các **biến quan sát** (dependency) bị thay đổi.
    - Nếu không truyền gì thì sẽ chạy lại sau mỗi lần render, re-render. => Không nên sd.

#### 3. useRef

- `useRef(initialValue)`: nhận giá trị khởi tạo ban đầu và trả về một tham chiếu hoặc một đối tượng tham chiếu. Tham chiếu là một object đặc biệt có một thuộc tính là current: `reference.current`.

> **Lưu ý**:
> Giá trị của reference sẽ được giữ nguyên khi component re-render.
> Việc cập nhật reference sẽ không làm cho component re-render.

- Điểm khác nhau giữa `useState()` và `useRef()`:
  - Khi set giá trị cho state thì component sẽ bị render lại để cập nhật UI, trong khi _useRef()_ thì không.
  - Điểm khác thứ hai là khi state update sẽ chạy bất đồng bộ, còn với _useRef()_ sẽ update ngay lập tức vì được chạy đồng bộ.

- **Tip sử dụng**: sử dụng để tạo tham chiếu cho các components con, từ đó có thể gọi được hàm trong component con đó từ component cha.

## React Native

### Tổng quan

#### Ưu điểm của React Native

- Thời gian phát triển ứng dụng nhanh.
- Chi phí phát triển ứng dụng rẻ.
- Một code base cho nhiều nền tảng.
- Dễ dàng kết hợp với native code.
- Tính năng Hot Reloading/Live reloading.
- Hệ sinh thái React lớn.

#### Nhược điểm của React Native

- Hiệu năng kém hơn so với Native.
- Thiết kế không hiệu quả.
- Cập nhật version quá nhanh.

#### Khi nào nên chọn React Native cho dự án

- Muốn nhanh chóng có một ứng dụng cho cả Ios và Android nhưng chỉ cần viết code một lần.
- Ứng dụng chủ yếu tương tác với server thông qua API, ít tương tác hoặc yêu cầu đặc biệt từ phần cứng, không yêu cầu những tính năng đặc thù của từng nền tảng.

#### Khi nào không nên chọn React Native

- Ứng dụng làm việc chủ yếu với phần cứng thiết bị.
- Các ứng dụng yêu cầu các tính năng đặc thù của từng nền tảng. Vd: Yêu cầu phải có Air Drop (ios), thanh điều hướng navigation trên Android.
- Ứng dụng cần nhiều tài nguyên phần cứng để xử lý, cần hiệu năng phần cứng rất cao, can thiệp sâu vào hệ thống.

#### Expo và React Native

- Ứng dụng khi tạo bằng expo sẽ bị giới hạn trong hệ sinh thái của Expo, không thể thêm những thư viện code native (quan trọng).

### Tổ chức thư mục cơ bản

- **android**: chứa code native (Java/Kotlin) trong trường hợp cần can thiệp sâu vào hệ thống android, cần phải gọi các API Android Native.
- **ios**: tương tự như Android.
- **App.tsx**: Root component của ứng dụng. Thông thường sẽ cấu hình Header, StatusBar, Store... tại đây.
  - `import React from 'react'`: React native package chuyển đổi cú pháp ES6, ES2106 thành mã theo cú pháp ES5, sử dụng Babel để chuyển đổi JSX thành cú pháp javascript thông thường.
- **index.js**: Là tệp đầu tiên được gọi, tại đây sẽ đăng ký root component với hệ thống.
- **package.json**: Chứa cấu hình câu lệnh run, build, danh sách các thư viện, ...
- src
  - assets
  - components
  - hooks
  - routers
  - screens
  - utils

### Component

#### Component lifecycle

- Vòng đời là từ khi một màn hình ứng dụng được hiển thị tới khi thoát khỏi màn hình đó.
- Các giai đoạn:
  - **Mouting**:Trong giai đoạn này, component sẽ được khởi tạo và
    thêm vào bộ nhớ. Các hàm trong giai đoạn này gồm:
    - Contructor()
    - render()
    - ComponentDidMount()
  - **Updating**: Ở giai đoạn này, component đã được tạo
    xong và đang chạy. Nó có thể lắng nghe, và cập nhật các thay
    đổi. Ví dụ như khi state thay đổi chẳng hạn. Các hàm trong giai
    đoạn này gồm:
    - shouldComponentUpdate()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()
  - **Unmounting**: Ở giai đoạn này, component sẽ được xóa khỏi bộ
    nhớ. Trước khi nó thực sự xóa khỏi bộ nhớ, component sẽ gọi
    hàm componentWillUnmount() để chúng ta có thể chủ động dọn
    dẹp, như hủy timers, hủy các network requests, unsubscribe
    các sự kiện,v.v… trước khi xóa component.
    - componentWillUnmount()
  - **Error Handling**: Bất cứ khi nào có lỗi xảy ra trong quá trình
    render component, thì các hàm trong giai đoạn này sẽ được gọi,
    và có thể xử lý lỗi trong đó. Các hàm trong giai đoạn này
    bao gồm:
    - static getDerivedStateFromError()
    - componentDidCatch()

#### Truyền dữ liệu giữa các component

- Truyền dữ liệu từ component cha => component con: Sử dụng props.
- Truyền dữ liệu từ component con => component cha:
  - Cách 1: Truyền callback (callback thực hiện việc cập nhật dữ liệu) được tạo từ hàm cha vào component con, component con xử lý và gọi lại callback.
  - Cách 2: emit một Event.
- Truyền dữ liệu giữa các components lồng nhau:
  - Cách 1: Truyền lần lượt thông qua các component trung gian.
  - Cách 2: Đẩy dữ liệu vào một store dùng chung, rồi sau đó khi các component cần thì sẽ vào store để lấy (sử dụng thư viện React Redux, store này có phạm vi global, không đóng gói dành riêng cho component nào).
- Truyền dữ liệu giữa 2 component là 2 màn hình của ứng dụng: Sử dụng thư viện React Navigation.

#### Style và layout

- Có 2 cách viết style: Inline và đối tượng StyleSheet.
- Cách viết style kết hợp cả 2 cách: `styles.description, {fontStyle: 'italic', fontWeight: 'bold'}`
- Có 5 thuộc tính Flexbox sử dụng thường xuyên nhất:
  - flex
  - flexDirection
  - justifyContent: Sử dụng căn chỉnh các view con dựa trên trục dọc của view cha
    - **flex-start (mặc định)**: Các view con sẽ được sắp xếp từ gốc tọa độ của view cha (trái => phải).
    - **flex-end**: Ngược lại với flex-start.
    - **center**: Dồn hết view con vào giữa.
    - **space-between**: Căn khoảng cách đều giữa các view.
    - **space-around**: Giống space between nhưng cách đều cả 2 đầu.
  - alignItems
