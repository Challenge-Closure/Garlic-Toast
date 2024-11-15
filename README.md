![image](https://github.com/user-attachments/assets/53ca1985-eda1-43f0-b3c2-c0c8b59ac44a)

<p align="center">
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/Challenge-Closure/Garlic-Toast" alt="License"></a>
<a href="https://www.npmjs.com/package/garlic-toast" rel="nofollow"><img src="https://img.shields.io/npm/v/garlic-toast.svg" alt="version"></a>
<a href="https://www.npmjs.com/package/garlic-toast" rel="nofollow"><img src="https://img.shields.io/npm/dw/garlic-toast.svg" alt="npm"></a>
<a href="https://github.com/Challenge-Closure/Garlic-Toast" rel="nofollow"><img src="https://img.shields.io/github/stars/Challenge-Closure/Garlic-Toast" alt="stars"></a>
</p>

<div align="center">
  <a href="https://first-sparta-open-source-library.vercel.app">Demo Site</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.npmjs.com/package/garlic-toast">npm</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/Challenge-Closure/Garlic-Toast/issues/new/choose">Issues</a>
  <br />
  <br />
</div>

# 🧄 Garlic-Toast
`Garlic-Toast`는 다른 Toast 라이브러리의 장점들을 한데 모아, 
하나의 라이브러리로 편하고 다양한 토스트 기능을 제공해주는 라이브러리입니다.

<br/>
<br/>



## 🕹️ Demo Site
  <a href="https://garlic-demo.vercel.app/" target="_blank">[Demo Site] Garlic-Toast의 여러 옵션들을 확인하시고, 직접 테스트 해보실 수 있습니다.</a>


<br/>


## 🪛 Installation
```sh
# npm
npm install garlic-toast
# yarn
yarn add garlic-toast
# pnpm
pnpm add garlic-toast
```
<br/>

## 🪄 Basic Usage
```jsx
import { ToastContainer, toast } from 'garlic-toast'; 
import 'garlic-toast/style.css'; // CSS 스타일 파일

function App() {
  const alert = () => toast.alert('토스트 출력!')

  return (
    <div>
      <button onClick={alert}>Toast</button>
      <ToastContainer position="t-r" time={5000} />
    </div>
  );
}
```
<br/>


## 🍞 ToastContainer
> ```tsx
> <ToastContainer isFold position="t-r" time={5000} />
> ```

<br/>

```sh
poistion="위치"   # 기본 출력위치 (필수)
time={ms}         # 기본 출력 유지시간 (필수)
isFold            # 토스트 겹쳐서 출력되는 스타일 (선택)
```
`App.jsx` or `App.tsx` 파일에 추가하시는걸 권장드립니다.

<br/>


<br/>


## 🥪 Toast 
> ```jsx
> toast.타입(메세지 내용, {옵션})
> ```

<br/>

### 1️⃣ Type
#### Basic Type 
```sh
1. alert        # 기본적인 알럿 방식입니다.
2. success      # event가 성공했을 경우 사용을 권장드립니다.
3. error        # event가 실패했을 경우 사용을 권장드립니다.
4. warning      # 경고메시지를 전달 할 경우 사용을 권장드립니다.
5. info         # 정보를 전달 할 경우 사용을 권장드립니다.
```

#### Special Type - `confirm`

```tsx
toast.confirm(메세지 내용).then(isConfirm => {
  if (isConfirm) {
    // 확인 클릭 시 실행
  } else {
    // 취소 클릭 시 실행
  }
})
```
<br/>

### 2️⃣ Options

#### 1. position
```tsx
toast.alert('토스트 메시지', {
  position: "t-r"
})
```

`top, center, bottom`과 `left, center, right`를 조합하여 토스트의 위치를 설정할 수 있습니다.
  |     |     |     |
  | :-: | :-: | :-: |
  | t-l | t-c | t-r |
  | c-l | c-c | c-r |
  | b-l | b-c | b-r |

---

#### 2. textColor
```tsx
toast.alert('토스트 메시지', {
  textColor: "#000000"
})
```

글자의 색상을 설정합니다.

---

#### 3. color
```tsx
toast.alert('토스트 메시지', {
  color: "#ffffff"
})
```
알림의 배경색을 설정합니다.

---

#### 4. closeOnClick
```tsx
toast.alert('토스트 메시지', {
  closeOnClick: true/false
})
```
알림을 클릭하여 닫을 지 설정합니다.

---

#### 5. autoClose
```tsx
toast.alert('토스트 메시지', {
  autoClose: true/false
})
```
알림을 자동으로 닫히게 할 지 설정합니다.

---

#### 6. autoCloseTime
```tsx
toast.alert('토스트 메시지', {
  autoCloseTime: 5000
})
```

몇 ms 후 알림을 닫을 지 설정합니다.

---

#### 7. progressBar
```tsx
toast.alert('토스트 메시지', {
  progressBar: true/false
})
```

progressBar를 보여줄 지 설정합니다.

---

#### 8. barColor
```tsx
toast.alert('토스트 메시지', {
  barColor: "#000000"
})
```

progressBar의 색상을 설정합니다.

---

#### 9. pauseOnHover
```tsx
toast.alert('토스트 메시지', {
  pauseOnHover: true/false
})
```
알림에 마우스를 올렸을 때 알림의 시간을 일시정지 할 지 설정합니다.

---

#### 10. customImage
```tsx
toast.alert('토스트 메시지', {
  customImage: "img/url"
})
```

알림에 사용할 이미지를 설정합니다.

---

#### 11. confirmBtn
```tsx
toast.alert('토스트 메시지', {
  confirmBtn: "확인"
})
```
확인 버튼의 문구를 설정합니다.

---

#### 12. cancleBtn
```tsx
toast.alert('토스트 메시지', {
  cancleBtn: "취소"
})
```
취소 버튼의 문구를 설정합니다.

---

#### 13. confirmBtnColor
```tsx
toast.alert('토스트 메시지', {
  confirmBtnColor: "#0000ff"
})
```

확인 버튼의 색상을 설정합니다.

---

#### 14. cancleBtnColor
```tsx
toast.alert('토스트 메시지', {
  confirmBtnColor: "#ff0000"
})
```
취소 버튼의 색상을 설정합니다.

---

<br/><br/>

## 🍳 CONTRIBUTING
`Garlic-Toast` 라이브러리에 기여하고 싶다고 생각하셨다면 아래 문서를 참고해주세요.


<a href="https://github.com/Challenge-Closure/Garlic-Toast/blob/dev/.github/CONTRIBUTING.md">CONTRIBUTING</a>

<a href="https://github.com/Challenge-Closure/Garlic-Toast/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Challenge-Closure/Garlic-Toast" />
</a>
