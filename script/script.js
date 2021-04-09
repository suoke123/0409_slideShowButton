$(function(){

    /* location 객체를 이용한 페이지 이동 */
    $("#moveDaum").click(function(){
        location.href="https://www.daum.net";
    });

    /* location 객체를 이용한 페이지 새로고침(=기능키 F5와 동일) */
    $("#reload").click(function(){
        location.reload();
    });

    /* history 객체를 이용한 뒤페이지로 돌아가기 */
    $("#back").click(function(){
        history.back();
    });

    /* history 객체를 이용한 앞페이지로 이동 */
    $("#goBtn").click(function(){
        history.forward();
    });

    /* 슬라이드쇼 시작 */
    var slideGo = setInterval(fnSlide, 2000);

    $("#startBtn").click(function(){
        slideGo = setInterval(fnSlide, 2000);
        // setInterval 적용
    });

    $("#stopBtn").click(function(){
        // clearInterval => setInterval 중지
        clearInterval(slideGo);
    });

    function fnSlide() {
        $("#shuttleFrame").animate(
            {"margin-left": "-1000px"},
            1000,
            function() {
                $("a:first-child").insertAfter("a:last-child");

                $("#shuttleFrame").css({"margin-left": "0"});
            }
        );
    }
    /* 슬라이드쇼 끝 */

});
