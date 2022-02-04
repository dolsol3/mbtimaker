// mbti만들기
$(".nav-logo").click(function () {
  location.href = "/index.html";
});
// 사용가이드
// 회원가입 & 로그인
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    $(".nav-mypage").show();
    $(".nav-join").hide();
  } else {
    $(".nav-mypage").hide();
  }
});
// 내화면

// 문의하기
