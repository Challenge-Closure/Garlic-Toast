# 스파르타 토스트

## 소개

- ### portal과 pub/sub 패턴을 이용하여 만든 커스텀 toast입니다.

## 주요 기능

- ### 기본 alert // 사진 넣을 예정

- ### error

- ### warning

- ### success

- ### info

- ### confirm

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

## 설정 방법

#### position 종류

|     |     |     |
| :-: | :-: | :-: |
| t-l | t-c | t-r |
| c-l | c-c | c-r |
| b-l | b-c | b-r |

### 전체 설정 방법

- #### `<ToastContainer />`에 position과 time(ms)을 props로 내려준다. <br/>
- #### ex) `<ToastContainer position="t-r" time={5000} />`<br/>

### 부분 설정 방법

```
toast.info("info", {
      autoClose: true/false,       // 알림을 자동으로 닫기게 할 지 설정
      progressBar: true/false, // progressBar를 보이게 할 지 설정
      pauseOnHover: true/false,    // 알림에 마우스를 올렸을 때 알림을 일시정지 할 지 설정
      autoCloseTime: 숫자,          // 몇 ms 후 알림을 닫을 지 설정
      closeOnClick: true/false,    // 알림을 클릭하여 닫을 지 설정
    });
```

## 업데이트 예정

- promise 로딩 알림
- 알림 position 부분 설정
- 옵션 상수
- 아이콘 커스텀
- 자유롭고 편리한 css 설정
- 폭탄이 터지는 듯한 효과
- 다양한 색상
- 다양한 애니메이션 효과
