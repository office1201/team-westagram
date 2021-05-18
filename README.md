# Westagram Project 리팩토링 코드

## Description

이 Repository에는 기존에 진행했던 프로젝트의 코드를 이해하고, 스스로 재분석하여 현업에서 좀 더 유연하게 사고하기 위한 목적으로 만들어졌습니다.

- Westagram : 회원가입 / 로그인 유효성 검증 로직

  - 회원가입 Form의 각 요소를 컴포넌트로 분리 / 상태관리
  - React.Children을 사용한 Layout 컴포넌트

- Westagram - 프로젝트 기간 `3월 29일 ~ 4월 8일 11일간`

- Westagram - 기술 스택

  - HTML/CSS
  - JavaScript
  - React

- Westagram - 이전 구현 사항

  - 로그인, 메인 페이지 레이아웃
  - id, pw 입력 시 로그인 버튼 활성화 기능
  - 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능

- 🔥🔥개선된 점🔥🔥🔥

  - 불필요한 `<a>` 태그 사용을 금하고 라우터의 기능을 사용
  - `Input` 값을 받아오던 중복된 함수를 줄이고자 `계산된 속성명`을 활용, 함수를 합침
  - `정규표현식`을 활용한 이메일 검증
  - `email`과 `password` 검증을 통한 로그인 버튼 활성화 기능 추가
  - `setTimeout`을 활용하여 비동기적으로 실감나게 화면이동 이벤트 구현(페이지 이동)

<div display="flex">
<img width="450" alt="스크린샷 2021-05-18 오전 11 10 16" src="https://user-images.githubusercontent.com/75716128/118580013-10ea4f00-b7ca-11eb-81e0-e3115f6097ed.png">
<img width="450" alt="스크린샷 2021-05-18 오전 11 10 36" src="https://user-images.githubusercontent.com/75716128/118580015-1182e580-b7ca-11eb-8c35-8d58686e13ed.png">
</div>

## Scripts

- git clone https://github.com/office1201/Westagram-Project.git
- npm install
- npm start
