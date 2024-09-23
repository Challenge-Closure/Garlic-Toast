// toast 부분 설정 기능 업데이트 시 inline style에 적용 예정
const setPosition = (position: string) => {
  switch (position) {
    case "t-l":
      return { top: "20px", left: "20px" };
    case "t-c":
      return { top: "20px", left: "50%", transform: "translateX(-50%)" };
    case "t-r":
      return { top: "20px", right: "20px" };
    case "c-l":
      return { top: "50%", transform: "translateY(-50%)", right: "20px" };
    case "c-c":
      return {
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
      };
    case "c-r":
      return { top: "50%", transform: "translateY(-50%)", right: "20px" };
    case "b-l":
      return { bottom: "20px", left: "20px" };
    case "b-c":
      return { bottom: "20px", left: "50%", transform: "translateX(-50%)" };
    case "b-r":
      return { bottom: "20px", right: "20px" };
  }
};

export default setPosition;
