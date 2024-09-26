# 스파르타 토스트

## 소개

- ### 사용 편의성과 간편한 커스터마이징에 초점을 맞춘 toast입니다.


## Demo Site

[Demo Site](https://first-sparta-open-source-library.vercel.app)

## 목차

### [1. 소개](#소개)

### [2. Demo Site](#demo-site)

### [3. 목차](#목차)

### [4. 사용 방법](#사용-방법)

### [5. 설정 방법](#설정-방법)

## 사용 방법

### 1. `ToastContainer`를 import 하여 toast를 사용할 컴포넌트에서 `<ToastContainer/ >`형태로 실행 합니다.

### 2. `toast`를 import 하여 아래와 같은 형식으로 사용합니다.

- ### 기본 alert

```
toast.alert(메세지 내용, 옵션)
```

- ### success

```
toast.success(메세지 내용, 옵션)
```

- ### error

```
toast.error(메세지 내용, 옵션)
```

- ### warning

```
toast.warning(메세지 내용, 옵션)
```

- ### info

```
toast.info(메세지 내용, 옵션)
```

- ### confirm

```
toast.confirm(내용).then(isConfirm => {
  if (isConfirm) {
    toast.success("확인", 옵션)
    } else {
    toast.error("취소", 옵션)
    }
})
```

## 설정 방법

#### position 종류

- #### top, center, bottom과 left, center, right를 조합하여 토스트의 위치를 설정할 수 있습니다.
  |     |     |     |
  | :-: | :-: | :-: |
  | t-l | t-c | t-r |
  | c-l | c-c | c-r |
  | b-l | b-c | b-r |

### 전체 설정

- ### 전체적인 토스트의 설정을 할 수 있습니다.

#### `<ToastContainer />`에 position과 time(ms)을 props로 내려줍니다. <br/>

#### ex) `<ToastContainer position="t-r" time={5000} />`<br/>

- ##### time(ms) 후 알림이 사라집니다.
- ##### isFold를 props로 내려줄 시 3개까지 스택이 쌓입니다.

### 부분 설정

- ### 필요한 옵션만 추가하여 사용할 수 있습니다.

#### 1. position

- 알림을 보여줄 위치를 설정합니다.

#### 2. textColor

- 글자의 색상을 설정합니다.

#### 3. color

- 알림의 배경색을 설정합니다.

#### 4. closeOnClick

- 알림을 클릭하여 닫을 지 설정합니다.

#### 5. autoClose

- 알림을 자동으로 닫히게 할 지 설정합니다.

#### 6. autoCloseTime

- 몇 ms 후 알림을 닫을 지 설정합니다.

#### 7. progressBar

- progressBar를 보여줄 지 설정합니다.

#### 8. barColor

- progressBar의 색상을 설정합니다.

#### 9. pauseOnHover

- 알림에 마우스를 올렸을 때 알림의 시간을 일시정지 할 지 설정합니다.

#### 10. customImage

- 알림에 사용할 이미지를 설정합니다.

#### 11. confirmBtn

- 확인 버튼의 문구를 설정합니다.

#### 12. cancleBtn

- 취소 버튼의 문구를 설정합니다.

#### 13. confirmBtnColor

- 확인 버튼의 색상을 설정합니다.

#### 14. cancleBtnColor

- 취소 버튼의 색상을 설정합니다.

#### 사용 예시

```
toast.info("정보입니다.", {
      position: position,             // 행(t, c, b) 과 열(l, c, r)을 조합하여 위치 설정
      textColor: 문구 색상,             // 알림 글씨의 색상 지정
      color: 알림 색상,                 // 토스트 배경 색상 지정
      closeOnClick: true/false,       // 알림을 클릭하여 닫을 지 설정
      autoClose: true/false,          // 알림을 자동으로 닫기게 할 지 설정
      autoCloseTime: 숫자,             // 몇 ms 후 알림을 닫을 지 설정
      progressBar: true/false,        // progressBar를 보이게 할 지 설정
      barColor: 색상,                  // progressBar의 색상 설정
      pauseOnHover: true/false,       // 알림에 마우스를 올렸을 때 알림을 일시정지 할 지 설정
      customImage: imageURL           // 원하는 이미지를 알림에 보이도록 설정
      confirmBtn: 확인 버튼 문구,         // 확인 버튼 문구 설정
      cancleBtn: 취소 버튼 문구,          // 취소 버튼 문구 설정
      confirmBtnColor: 확인 버튼 색상,    // 확인 버튼 색상 설정
      cancleBtnColor: 취소 버튼 색상      // 취소 버튼 색상 설정
    });
```
