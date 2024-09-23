// toast 부분 설정 기능 업데이트 시 inline style에 적용 예정
const setPosition = (position:string) => {
  switch (position) {
    case "top-left":
      return { top: "20px", left: "20px" };
    case "top-center":
      return { top: "20px", left: "50%", transform: "translateX(-50%)" };
    case "top-right":
      return { top: "20px", right: "20px" };
    case "center-left":
      return { top: "50%", transform: "translateY(-50%)", right: "20px" };
    case "center-center":
      return {
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
      };
    case "center-right":
      return { top: "50%", transform: "translateY(-50%)", right: "20px" };
    case "bottom-left":
      return { bottom: "20px", left: "20px" };
    case "bottom-center":
      return { bottom: "20px", left: "50%", transform: "translateX(-50%)" };
    case "bottom-right":
      return { bottom: "20px", right: "20px" };
  }
};

export default setPosition