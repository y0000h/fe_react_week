# 리엑트 라우터 

사용자가 입력한 주소를 감지하는 역활을 하며
여러 기기(환경)에서 동작할수 있도록 5종류의 라우터 컴포넌트가 있다.
- BrowserRouter : HTML5를 지원하는 브라우저의 주소를 감지 , 웹개발 가장 많이 사용
- HashRouter : 해시 주소를 감지 (http://localhost#login) , 웹개발 가장 많이 사용
- MemoryRouter : 메모리에 저장된 이전, 이후 주소로 이동시키는 라우터
- NativeRouter : 리액트 네이티브를 지원하는 라우터
- StaticRouter : 브라우저 주소가 아닌 프로퍼티로 전달된 주소를 사용하는 라우터

# 라우트 구현 단계 

1. BrowserRouter로 최상위 클래스 
2. Routes 컴포넌트
   header, footer 공통 부분을 제외한 나머지 부분을 그룹으로 감싸기 
3. Route 컴포넌트 
   Routes 컴포넌트 안에 path를 지정하도록 만들기
   