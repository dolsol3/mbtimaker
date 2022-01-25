// MBTI결과 이미지 저장하기
$(".img-upload").click(function () {
  var file = document.querySelector(".result__img-upload").files[0];
  var storageRef = storage.ref();
  var 저장할경로 = storageRef.child("image/" + file.name);
  var 업로드작업 = 저장할경로.put(file);

  업로드작업.on(
    "state_changed",
    // 변화할 때 동작하는 함수
    null,
    // 에러 상황에 동작하는 함수
    (error) => {
      console.error("이미지를 올리는데 실패한 원이는", error);
      alert("사진 저장에 실패하였습니다");
    },
    // 성공하면 보여줄 함수
    () => {
      업로드작업.snapshot.ref.getDownloadURL().then((url) => {
        console.log("이비지가 올라간 경로는", url);
        alert("사진 저장에 성공하였습니다");
      });
    }
  );
});
