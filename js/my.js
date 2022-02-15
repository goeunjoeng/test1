/*초기화*/
// new fullpage('#fullpage', {
// 	//options here
// 	autoScrolling:true,
// 	scrollHorizontally: true
// });
// //methods
// fullpage_api.setAllowScrolling(false);




new fullpage('#fullpage', {
	menu: '#gnb_list',
	anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
	navigation:true,
	responsiveWidth:600,
	
	// sectionsColor: ['tan', '#4BBFC3', '#7BAABE', '#a89ab6', '#586'],
	// autoScrolling: false, //화면위치 자동맞춤 (기본set:true)
	scrollBar: true,
	keyboardScrolling: false, //화살표키보드 이동가능여부
	// easing: 'easeInOutCubic', //이징
	// easingcss3: 'ease',
	//scrollOverflow:frue, //오토스크롤 없애기, js 추가해야 작동함 <script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
	normalScrollElements: '#section01 , #section03', //특정 섹션의 자동스크롤 없애기


});

//전체메뉴 열기/닫기
$(".totalMitem").click(function(){
	$(".totalMitem").removeClass("active");
	$(this).toggleClass("active");
});

//아이스크롤 플러그인
var myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    scrollbars: false,
});

$(".totalClose, .totalClose_in").click(function(){
	$(".total_menuZ").removeClass("active");
});

$(".totalmenu_w , .btn_total_in, .btn_total ").click(function(){
	$(".total_menuZ").addClass("active");
});


//버튼을 누르면 한단계 섹션 위 or 아래 로 가기
document.querySelector(".next").addEventListener("click", function(ee){
	ee.preventDefault(); //a태그의 기본속성 제거
	fullpage_api.moveSectionDown( );
});
document.querySelector(".prev").addEventListener("click", function(ee){
	ee.preventDefault();
	fullpage_api.moveSectionUp();
});


//api 설정하기 (구글)
//AIzaSyDNWdGdhUBbze7xtz0zr14YgCs50OuwAK0


function initMap() {
	const myM = {lat:37.549605429296506 ,lng:127.12782662670207 };
	const map = new google.maps.Map(document.getElementById("map"), { // id map 에다가 구글맵을 가져옴
		center:myM,
		//center: { lat: -34.397, lng: 150.644 }, //좌표값(위도, 경도) 설정 
		zoom:17, //지도의 확대하는 정도
	});

  // 지도에 마커추가
	const marker = new google.maps.Marker({
		position: uluru,
		map: myM,
	});

}

//네이버 맵 api 설정하기
var map2 = null;

//아이디 c0b9wilsbi
//비번 yReeJKvFBsMuaA5NdzHB8Dm8N4H3SPmpiD7INQ8L



// var mapOptions = {
//     center: new naver.maps.LatLng(37.3595704, 127.105399),
//     zoom: 10
// };

// var map2 = new naver.maps.Map('map2', mapOptions);

function initMap() {
	map2 = new naver.maps.Map('map2', {
		center: new naver.maps.LatLng(37.3595704, 127.105399),
		zoom: 10
	});
}