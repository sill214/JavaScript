'use strict';

// 1. Ajax
// Asynchronous JavaScript and XML
// HTML, CSS, JavaScript, DOM, XML 등 기존에 사용되던 여러 기술을 함께 사용하는 개발 기법
// 웹 페이지 전체를 다시 로딩하지 않고도 웹 페이지의 일부분만을 갱신할 수 있음
// 백그라운드 영역에서 서버와 통신하여 그 결과를 웹 페이지의 일부분에만 표시할 수 있음
// 서버와는 다양한 형태의 데이터를 주고 받을 수 있음: JSON, XML, HTML, 텍스트 파일 등


// 2. DOM
// Document Object Model: 문서 객체 모델은 HTML문서나 XML문서에 접근하기 위한 일종의 인터페이스
// 이 모들은 문서 내의 모든 요소의 목적과 특징을 정의, 각각의 요소에 접근하는 방법을 제공
// Ajax에서는 이러한 DOM을 이용해 웹 페이지의 일부 요소만 변경 가능

// DOM 요소의 선택
// tag name을 이용한 선택
let selectedTag = document.getElementsByTagName("li"); // 모든 <li> 요소를 선택함
for (let i = 0; i < selectedTag.length; i++) {
    selectedTag.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함
}

// id를 이용한 선택
let selectedId = document.getElementById("id"); // 아이디가 id인 요소를 선택함
selectedId.style.color = "red"; // 선택된 요소의 텍스트 색상을 변경

// class를 이용한 선택
let selectedClass = document.getElementsByClassName("class"); // 클래스가 class인 모든 요소를 선택함
for (let i = 0; i < selectedClass.length; i++) {
    selectedClass.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상으 변경
}

// Name 속성을 이용한 선택
let selectedName = document.getElementsByName("name"); // name 속성 값이 name인 모든 요소를 선택함
for (let i = 0; i < selectedName.length; i++) {
    selectedName.item(i).style.color = "red";
}

// CSS 선택자를 이용한 선택
// querySelectorAll() 메소드는 CSS 선택자를 이용하여 HTML 요소를 선택함
let selectedCSS = document.querySelectorAll("li.class"); // 클래스가 class인 요소 중에서 <li> 요소만 선택함
for (let i = 0; i < selectedCSS.length; i++) {
    selectedCSS.item(i).style.color = "red";
}

// HTML 객체 집합을 이용한 선택
let selectedTitle = document.title; // title 요소를 선택함
document.write(title);


// 3. XHR
// XMLHttpRequest: 웹 브라우저가 서버와 데이터를 교환할 때 사용
// 웹 브라우저가 백그라운드에서 계속 서버와 통신할 수 있는 것은 XHR을 사용하기 때문
let xhr = new XMLHttpRequest();

// 익스플로러의 구형버전인 5와 6에서는 ActiveXObject 객체를 사용
let axo = new ActiveXObject("Microsoft.XMLHTTP");

// 따라서 모든 웹 브라우저에서 XHR 인스턴스를 제대로 생성하기 위해서는 다음과 같이 작성해야 함
// 그러나 현재 익스플로러6과 그 이하 버전을 사용하는 사용자는 거의 없으므로 XHR 객체만 사용하면 됨
let httpRequest;
function createRequest() {
    if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}


// 4. 서버에 요청하기
// Ajax에서는 XMLHttpRequest 객체를 이용하여 서버와 데이터 교환
// 서버에 요청을 보내기 위해선 우선 XMLHttpRequest 인스턴스를 생성
// XMLHttpRequest 인스턴스의 open() 메소드와 send() 메소드를 통해 요청을 보낼 수 있음

// open()
// open() 메소드는 서버로 보낼 Ajax 요청의 형식을 설정
// open(전달방식, URL, 동기여부)
// 전달방식: GET, POST
httpRequest.open("GET", "url 주소 입력", true);
httpRequest.open("POST", "url 주소 입력", true);
httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // 서버로 전송하고자 하는 데이터는 HTTP 헤더에 포함되어 전송, 따라서 setRequestHeader() 메소드를 이용하여 먼저 헤더를 작성한 후에 send() 메소드로 데이터를 전송


// send()
// send() 메소드는 작성된 Ajax 요청을 서버로 전달
// 이 메소드는 전달방식에 따라 인수를 가질 수도 안 가질 수도 있음
// send(); // GET 방식
// send(문자열); // POST 방식
httpRequest.send();
httpRequest.send("city=Seoul&zipcode=06141");

// GET 방식
// 주소에 데이터를 추가하여 전달하는 방식

// POST 방식
// 데이터를 별도로 첨부하여 전달하는 방식
// 데이터 길이의 제한이 없으며 GET 방식보다 보안성이 높음

// Asynchronous Request
// 서버에 비동기식 요청을 보내기 위해서는 open() 메소드의 세 번째 인수로 true를 전달
// 이렇게 서버로 비동기식 요청을 보내면 자바스크립트는 서버로부터 응답을 기다리면서 동시에 다른 일을 할 수 있음
// false로 전달할 경우 동기식 요청
// 이때 자바스크립트는 서버로부터 응답이 도착할 때까지 대기하게 됨
// 따라서 사용자는 대기하는 동안 다른 작업을 할 수 없음


// 5. 서버로부터 응답(Response) 확인

// ReadyState Property
// XMLHttpRequest 객체의 현재 상태를 나타냄
// UNSENT(숫자 0): XMLHttpRequest 객체가 생성
// OPENED(숫자 1): open() 메소드가 성공적으로 실행됨
// HEADERS_RECEIVED(숫자 2): 모든 요청에 대한 응답이 도착
// LOADING(숫자 3): 요청한 데이터를 처리 중
// DONE(숫자 4): 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨

// Status Property
// 서버의 문서 상태를 나타냄
// 202: 서버에 문서가 존재함
// 404: 서버에 문서가 존재하지 않음

// onreadystatechange property
// XMLHttpRequest 객체의 ReadyState 프로퍼티 값이 변할 때마다 자동으로 호출되는 함수를 설정
// 이 함수는 서버에서 응답이 도착할 때까지 ReadyState 프로퍼티 값의 변화에 따라 총 5번 호출
// 이 프로퍼티를 이용하면 서버에 요청한 데이터가 존재하고, 서버로부터 응답이 도착하는 순간을 특정할 수 있음
switch (httpRequest.readState) {
    case XMLHttpRequest.UNSENT:
        currentState += "현재 XMLHttpRequest 객체 상태는 UNSENT 입니다.<br>";
        break;
    case XMLHttpRequest.OPENED:
        currentState += "현재 XMLHttpRequest 객체 상태는 OPENED 입니다.<br>";
        break;    
    case XMLHttpRequest.HEADERS_RECEIVED:
        currentState += "현재 XMLHttpRequest 객체 상태는 HEADERS_RECEIVED 입니다.<br>";
        break;
    case XMLHttpRequest.LOADING:
        currentState += "현재 XMLHttpRequest 객체 상태는 LOADING 입니다.<br>";
        break;
    case XMLHttpRequest.DONE:
        currentState += "현재 XMLHttpRequest 객체 상태는 DONE 입니다.<br>";
        break;
    }

document.getElementById("status").innerHTML = currentState;
if (httpRequest.readState == XMLHttpRequest.DONE && httpRequest.status == 200) {
    document.getElementById("text").innerHTML = httpRequest.responseText;
}


// 6. HTTP 요청 헤더
// 클라이언트와 서버 사이에 이루어지는 HTTP 요청과 응답은 HTTP 헤더를 사용하여 수행

// HTTP 요청 헤더
// Ajax에서는 요청을 보내기 전에 setRequestHeader() 메소드를 사용해 HTTP 요청 헤더를 작성할 수 있음
// XMLHttpRequest인스턴스.setRequestHeader(헤더이름, 헤더값);
// 헤더이름은 HTTP 요청 헤더에 포함하고자 하는 헤더의 이름이며 그 값도 같이 전달
httpRequest.onreadystatechange = function() {
    if (httpRequest.readState == XMLHttpRequest.DONE && httpRequest.status == 200) {
        document.getElementById("text").innerHTML = httpRequest.responseText;
    }
};
httpRequest.open("GET", "url 주소 입력", true);
httpRequest.setRequestHeader("testHeader", "123");
httpRequest.send();

// HTTP 응답 헤더
// 서버로부터 전달받은 HTTP 응답 헤더 내용을 다음 메소드를 통해 확인 가능
// getAllResponseHeader(): HTTP 응답 헤더의 모든 헤더를 문자열로 반환
// getResponseHeader(): HTTP 응답 헤더 중 인수로 전달받은 이름과 일치하는 헤더의 값을 문자열로 반환
httpRequest.onreadystatechange = function() {
    if (httpRequest.readState == XMLHttpRequest.DONE && httpRequest.status == 200) {
        document.getElementById("text").innerHTML = httpRequest.responseText;
        document.getElementById("header").innerHTML = httpRequest.getAllResponseHeader();
        document.getElementById("user").innerHTML = 
            "testHeader: " + httpRequest.getResponseHeader("testHeader");
    }
};
httpRequest.open("GET", "url 주소 입력", true);
httpRequest.send();