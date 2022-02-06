// 상태표시줄 url 가져오기
var 쿼리스트링2 = new URLSearchParams(window.location.search);
// 로고
$(".nav-logo").click(function () {
  location.href = "../index.html";
});
// mbti만들기

// 사용가이드 일단 숨김
$(".nav-guide").hide();
// 회원가입 & 로그인
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    $(".nav-mypage").show();
    $(".nav-join").hide();
    $(".nav-logout").show();
    $(".nav-make").click(function () {
      location.href = "../making/making1.html";
    });
  } else {
    $(".nav-mypage").hide();
    $(".nav-logout").hide();
    $(".nav-make").click(function () {
      alert("로그인을 해야 이용할 수 있습니다");
      location.href = "../login.html";
    });
    $(".nav-join").click(function () {
      location.href = "../login.html";
    });
  }
});
// 내화면
$(".nav-mypage").click(function () {
  alert("개인 화면 준비중입니다");
});
// 문의하기
$(".nav-contact").click(function () {
  alert("광고 및 제휴 문의 : dolsol4@gmail.com");
});

// 로그아웃
$(".nav-logout").click(function () {
  alert("로그아웃합니다.");
  firebase.auth().signOut();
  localStorage.removeItem("user");

  $(".nav-join").show();
});
