# web-standard-rwd-template

반응형 종합 실습

양진 관심사 블로그 영화 리뷰

실행방법

A.Actions 로 들어가 링크 https://yangjin-code.github.io/web-standard-rwd-template/ 로 들어간다

B. 파일을 다운로드한 후에 직접 실행한다.


핵심코드


.top {
    position: fixed;
    right: 2.4rem;
    bottom: 2.4rem;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-color: #FF5C5C;
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: bold;
    opacity: 0;
    transform: translateY(3rem);
    transition: 0.3s;
}

누를 경우 페이지 위로 이동한다.
