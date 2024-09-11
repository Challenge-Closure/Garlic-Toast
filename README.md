## 👕 방콕 스타일

### 팀 프로젝트 소개

방콕 스타일은 재택근무, 원격 수업 등 집에서 나가지 않고도 스타일리시한 OOTD를 완성할 수 있는 패션 뉴스피드 서비스입니다.

배포 링크 : https://bangkok-style.vercel.app/<br />
깃허브 링크 : https://github.com/smu06030/bangkok-style

## 🗂️ 파일 구조

## 📌 요구 사항

### 필수 구현 사항

- ✅ Supabase를 활용한 CRUD
- ✅ Supabase를 활용한 로그인 회원가입
- ✅ Context API를 활용한 전역상태 관리
- ✅ React Router DOM
- ✅ 마이 페이지
- ✅ 배포하기 (vercel)

### 도전 과제
- ✅ 로그인, 회원가입 예외 처리
- ✅ 소셜 로그인 - Github
- ✅ 비밀번호 찾기 기능
- ✅ 댓글 기능
- ✅ 좋아요 기능
- ✅ 더보기 기능
<br /><br />

## 🛠️ 사용 기술

### 프론트 엔드

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" /><img src="https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react" alt="context API" /><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled-components" /><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router" /><br />

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="javascript" /><img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="html" /><img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="css" /><br />

### 서버리스 DB

<img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white" /><br />

### 버전 관리

<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/><br />

### 협업 툴
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" /><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" /><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" /><br /><br />

## 💡 주요 기능

### 1. Supabase를 활용한 로그인 회원가입

### 2. 좋아요 게시물 관리
- #### 메인 페이지에서 `좋아요`한 게시물 가져오기
  사용자가 메인 페이지에서 '좋아요' 버튼을 클릭한 게시물은 자동으로 좋아요 게시판으로 이동합니다. 이 게시물은 '좋아요' 상태가 유지된 채로 좋아요 게시판에 표시됩니다.

- #### 좋아요 해제 시 게시물 삭제
  사용자가 좋아요를 해제하면 해당 게시물은 즉시 좋아요 게시판에서 삭제됩니다. 이를 통해 사용자는 좋아요 게시판에서 항상 최신 상태의 게시물만을 확인할 수 있습니다.

- #### 게시물 클릭 시 디테일 페이지 이동
  좋아요 게시판에 표시된 게시물을 클릭하면, 해당 게시물의 상세 정보를 확인할 수 있는 디테일 페이지로 이동합니다. 이 기능을 통해 사용자는 게시물에 대한 더 많은 정보를 쉽게 확인할 수 있습니다.

### 3. 마이페이지
- #### 프로필, 닉네임, 비밀번호 수정
  사용자 프로필, 닉네임, 비밀번호를 수정할 수 있는 기능을 제공합니다.

- #### 작성한 게시물 조회
  로그인한 사용자가 작성한 게시물을 불러와서 마이 페이지에 표시합니다. 이를 통해 사용자는 자신의 게시물 목록을 확인하고, 작성한 콘텐츠를 쉽게 관리할 수 있습니다.

## ❓ 이슈

### 1. Context 분리로 인한 사용 불편

#### 이슈
애플리케이션의 최적화를 위해 Context를 기능별로 세분화하여 분리하였습니다. 그러나 이렇게 분리된 Context를 사용할 때마다, 필요한 값을 제공하는 Context를 일일이 찾아서 사용하는 과정에서 개발의 불편함과 복잡성이 증가했습니다.

#### 해결 방안
리덕스에서 사용하는 `useSelector`와 유사한 커스텀 훅을 구현하여, Context에서 필요한 값을 쉽게 추출할 수 있도록 했습니다. 이 커스텀 훅을 통해 Context를 사용하는 과정이 단순화되었으며, 코드의 일관성을 유지하면서도 개발자 경험을 크게 개선할 수 있었습니다.

### 2. 비밀번호 유효성 검사 메세지 오류

#### 이슈
마이페이지에서 비밀번호 유효성 검사 메세지 기능 구현 중 메세지를 담는 state 를 생성해서 코드를 작성했었는데 리렌더링 문제로 비밀번호 1자리를 덜 읽으면서 메세지를 잘못 보여주는 오류가 발생했었습니다.

#### 해결 방안
팀원분과 코드를 같이 확인했는데, 해당 기능에서 state 를 사용하기보다는 논리연산자로 구현해보면 좋을 것 같다는 조언을 듣고 수정하니 입력하는 값에 따라 검증 메세지가 바로바로 반응하는 것을 확인할 수 있었습니다.