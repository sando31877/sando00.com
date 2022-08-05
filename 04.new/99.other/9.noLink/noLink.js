$("body").on('mouseover', 'a', function (e) {
var $link = $(this),
href = $link.attr('href') || $link.data("href");

$link.off('click.chrome');
$link.on('click.chrome', function () {
window.location.href = href;
}).attr('data-href', href) //href에 지정된 링크 연결을 유지 시킵니다.
.css({ cursor: 'pointer' })
.removeAttr('href'); // 이 부분이 브라우저에서 뜨는 Url 상태바를 안보이게 처리합니다.
});