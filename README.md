# 스파르타 토스트

## 소개

- ### portal과 pub/sub 패턴을 이용하여 만든 커스텀 toast입니다.

## 사용 방법

### 1. `ToastContainer`를 import 하여 toast를 사용할 컴포넌트에서 `<ToastContainer/ >`형태로 실행 해준다.

### 2. `toast`를 import 하여 `toast.alert(내용, 옵션)`, `toast.info(내용, 옵션)`,

```
toast.confirm(내용).then(isConfirm => {
  if (isConfirm) {
    toast.success("확인", 옵션)
    } else {
    toast.error("취소", 옵션)
    }
})
```

### 와 같은 형식으로 사용한다.

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
toast.confirm(메세지 내용, 옵션)
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

#### `<ToastContainer />`에 position과 time(ms)을 props로 내려준다. <br/>

#### ex) `<ToastContainer position="t-r" time={5000} />`<br/>

- ##### time(ms) 후 알림이 사라집니다.
- ##### isFold true 시 3개까지 스택이 쌓이고, false 시 스택이 쌓이지 않고 나열됩니다.

### 부분 설정

- ### 필요한 옵션만 추가하여 사용할 수 있습니다.

```
toast.info("정보입니다.", {
      position: position,          // 행(t, c, b) 과 열(l, c, r)을 조합하여 위치 설정
      color: 색상,                  // 알림 글씨의 색상 지정
      bg: 색상,                     // 토스트 배경 색상 지정
      barColor: 색상,               // progressBar의 색상 설정
      autoClose: true/false,       // 알림을 자동으로 닫기게 할 지 설정
      progressBar: true/false,     // progressBar를 보이게 할 지 설정
      pauseOnHover: true/false,    // 알림에 마우스를 올렸을 때 알림을 일시정지 할 지 설정
      autoCloseTime: 숫자,          // 몇 ms 후 알림을 닫을 지 설정
      closeOnClick: true/false,    // 알림을 클릭하여 닫을 지 설정
      customImage: imageURL        // 원하는 이미지를 알림에 보이도록 설정
    });
```
