# Garlic-Toast 라이브러리에 기여하기

커뮤니티의 모든 분들의 기여를 환영합니다.

> 편리한 사용법과 확장성에 대해 고민해주세요. <br/>
> 모든 기여자는 우리의 [규칙](./CODE_OF_CONDUCT.md)을 준수해야 합니다.

## 1. Issues

다음과 같은 방법으로 Garlic-Toast 라이브러리에 기여할 수 있습니다:

- [이슈 작성하러 가기](https://github.com/Challenge-Closure/Garlic-Toast/issues/new/choose)
- [지난 이슈들 보기](https://github.com/Challenge-Closure/Garlic-Toast/issues?q=is%3Aopen+is%3Aissue)

## 2. Pull Requests

- [PR하러 가기](https://github.com/Challenge-Closure/Garlic-Toast/pulls) <br/>

자신의 PR을 제출할 수 있습니다. PR의 제목은 다음 형식과 일치해야 합니다:

```
type: 설명
```

>

### 2.1 Type

**Type 은 아래의 것들 중 하나여야 합니다.**

배포된 코드를 변경한 경우 :

- feat - 새로운 기능 추가에 대해
- fix - 새로운 기능을 추가하지 않는 수정에 대해

배포된 코드를 변경하지 않은 경우 :

- docs - 문서만 변경한 경우

그 외 :

- chore - 그 외 모든 것

## 3. Convention

알림 타입을 추가할 땐 src/utils/toast.ts의 toast 함수 안에 정의 하고 retur 객체에 담아주세요.

```ts
const toast = () => {
  const alert = (message: string, option: ToastOptionType = initialState) => {
    EventBus.publish("SHOW_TOAST", {
      ...option,
      message,
      id: Date.now(),
      type: "normal"
    });
  };

  ...

const newType = (message: string, option: ToastOptionType = initialState) => {
    EventBus.publish("SHOW_TOAST", {
      ...option,
      message,
      id: Date.now(),
      type: "newType"
    });
  };

  return { alert, ..., newType  };
};

export default toast();
```

옵션명은 명확하고 간결하게 지어주세요.

```ts
time; // X
autoCloseTime; // O

progressBarColor; // X
barColor; // O
```
