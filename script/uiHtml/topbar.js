// 獲取當前路徑
const currentPath = window.location.pathname;
// 基礎路徑
let basePath = '';
// 動態計算基礎路徑
if (currentPath.includes('/page/leftPage')) {
 basePath = '..'; // 根據實際目錄調整
} else if (currentPath.includes('/page/topPage')) {
 basePath = '..'; // 根據實際目錄調整
} else {
 basePath = './page';
}

//dropdown start 下拉選單效果開始
	// 創建並設置 jQuery 腳本元素
	var scriptJquery = document.createElement('script');
	scriptJquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js';
	scriptJquery.defer = true;//defer:瀏覽器會繼續解析、渲染畫面，而不會因為需要載入<script>內的資源而卡在那邊等；實際上的執行時間，會在 DOMContentLoaded 執行之前，由上到下的依照擺放順序觸發

	// 當 jQuery 加載完成後再加載 Bootstrap 的 JavaScript
	scriptJquery.onload = function() {
		var scriptBootstrap = document.createElement('script');
		scriptBootstrap.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';
		document.body.appendChild(scriptBootstrap);
	};
	document.body.appendChild(scriptJquery);
//dropdown start 下拉選單效果結束

//隱藏 Google 翻譯預設的突兀工具列，並防止fixed導覽列位移
document.writeln(`<style>
	#google_translate_element, .goog-te-banner-frame, .skiptranslate { display: none !important; }
	body { top: 0px !important; }
	.goog-text-highlight { background-color: transparent !important; box-shadow: none !important; border: none !important; }
</style>`);

document.writeln(`<nav class=\"navbar navbar-inverse\" style=\"position:fixed;top:0;width:100%; z-index:3;height: 90px;\">
                   <div class=\"container-fluid\">
                    <ul class=\"nav navbar-nav\">
                     <li><span style=\"font-size:65px;cursor:pointer;color:blue;margin-right:1px\" onclick=\"openNav()\">&#9776;</span></li>
                     <li id=\"topBar_Home1\" style=\"border:5px orange double;\"><a href=`+basePath+`/../index.html?keyName=Home><h2 id=\"topBar_Home2\" style=\"color:white\">首頁</h2></a></li>
                     <li class=\"dropdown\" style=\"border:5px orange double;\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><h2 id=\"topBar_Game\" style=\"color:white\">遊戲<span class=\"caret\"></span></h2></a>
                      <ul class=\"dropdown-menu\">
                       <li id=\"typegame0\" style=\"border:5px black double;\"><a href=`+basePath+`/topPage/game.html?index=0><h2 id=\"typefontgame0\">LF2</h2></a></li>
                       <li id=\"typegame1\" style=\"border:5px black double;\"><a href=`+basePath+`/topPage/game.html?index=1><h2 id=\"typefontgame1\">GBA</h2></a></li>
                       <li id=\"typegame2\" style=\"border:5px black double;\"><a href=`+basePath+`/topPage/game.html?index=2><h2 id=\"typefontgame2\">PC遊戲</h2></a></li>
                       <li id=\"typegame3\" style=\"border:5px black double;\"><a href=`+basePath+`/topPage/game.html?index=3><h2 id=\"typefontgame3\">線上遊戲</h2></a></li>
                      </ul>
                     </li>
                     <li class=\"dropdown\" style=\"border:5px orange double;\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><h2 id=\"topBar_QA\" style=\"color:white\">Q&A<span class=\"caret\"></span></h2></a>
                      <ul class=\"dropdown-menu\">
                 	     <li id=\"typeqa0\" style=\"border:5px black double;\"><a href=`+basePath+`/topPage/knowleageInfo.html?index=0><h2 id=\"typefontqa0\">知識</h2></a></li>
                 	     <li id=\"typeqa1\" style=\"border:5px black double;\"><a href=`+basePath+`/topPage/knowleageInfo.html?index=1><h2 id=\"typefontqa1\">策略</h2></a></li>
                       <li id=\"typeqa2\" style=\"border:5px black double;\"><a href=`+basePath+`/topPage/knowleageInfo.html?index=2><h2 id=\"typefontqa2\">手冊</h2></a></li>
                      </ul>
                     </li>
                     <li id=\"topBar_Tool1\" style=\"border:5px orange double;\"><a href=`+basePath+`/topPage/tool.html><h2 id=\"topBar_Tool2\" style=\"color:white\">工具</h2></a></li>
                     <li id=\"topBar_weather1\" style=\"border:5px orange double;\"><a id=\"href_weather\" href=`+basePath+`/topPage/weather.html?keyName=weather><h2 id=\"topBar_weather2\" style=\"color:white\">天氣</h2></a></li>
                    </ul>
                    <ul class=\"nav navbar-nav navbar-right\" id=\"selectLanguage\">
                     <li style=\"margin-top:20px;\"><font size=\"10\" color=\"white\" style=\"margin-top:15px;\" onclick=\"checkPermission()\">&#9816;</font></li>
                     <li style=\"display:none;\"><span id=\"google_translate_element\"></span></li>
                     <li>
                      <select id=\"custom_lang_select\" onchange=\"changeLanguage(this.value)\" style=\"margin-top:30px; font-size:25px; background-color:#ffffff; color:#333333; border:1px solid #cccccc; padding:8px 12px; border-radius:4px; cursor:pointer; font-family: sans-serif; box-shadow: 0 1px 3px rgba(0,0,0,0.1);\">
                       <option value=\"original\">繁體中文</option>
                       <option value=\"zh-CN\">简体中文</option>
                       <option value=\"en\">English</option>
                      </select>
                    </li>
                    </ul>
                   </div>`);
var permissionCount = 0;
const urlKey = new URLSearchParams(window.location.search);//取得網址傳值
const typeKey = urlKey.get('keyName');//用來更換進來的目錄
if(typeKey==="weather")
{
	document.writeln("<iframe id=\"ifm\" src=\"https://www.cwa.gov.tw/\" width=\"100%\" frameborder=\"yes\" scrolling=\"yes\"></iframe>");
}
document.writeln(`</nav>
                   <div id=\"mySidenav\" class=\"sidenav\">
                   	<span href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</span>
                   	<a href=`+basePath+`/leftPage/introduction.html id=\"topBar_introduction\" style=\"border:5px orange double;\">介紹</a>
                   	<a href=`+basePath+`/leftPage/photo.html id=\"topBar_photo\" style=\"border:5px orange double;\">圖片</a>
                   	<a href=`+basePath+`/leftPage/video.html id=\"topBar_video\" style=\"border:5px orange double;\">影片</a>
					          <a href=`+basePath+`/leftPage/codeExample.html id=\"topBar_code\" style=\"border:5px orange double;\">程式</a>
                    <a href=`+basePath+`/leftPage/filePage.html id=\"topBar_FilePage\" style=\"border:5px orange double;\">文件</a>
                    <a href=`+basePath+`/leftPage/chat.html id=\"topBar_chat\" style=\"border:5px orange double;\">留言板</a>
                   </div>`);
var isVisiable = true;
//網頁生命週期DOMContentLoaded，重新載入，若未加會產生錯誤
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("selectLanguage").style.marginRight = "0";//initial selectLanguage Position
	//檢查是否有歷史翻譯紀錄Cookie，同步自訂選單的顯示狀態，避免跨頁面或重新整理時錯位
	setTimeout(function () {
		const cookies = document.cookie.split('; ');
		const googtrans = cookies.find(row => row.startsWith('googtrans='));
		if (googtrans) {
			const langVal = googtrans.split('=')[1];
			const currentLang = langVal.split('/').pop(); //取得 'en' 或 'zh-CN'
			const customSelect = document.getElementById('custom_lang_select');
			if (customSelect && (currentLang === 'en' || currentLang === 'zh-CN')) {
				customSelect.value = currentLang;
			}
		}
	}, 300);
});
function openNav() {
	if(isVisiable)
	{
		if(window.innerWidth <= 1080)//手機螢幕
		{
			document.getElementById("mySidenav").style.width = "115px";
			document.getElementById("main").style.marginLeft = "115px";
   if(typeKey==="weather")
   {
    var iframe = document.getElementById("ifm");
    iframe.style.width = "calc(100% - 155px)";//轉化長度
   }
			document.getElementById("selectLanguage").style.marginRight = "115px";
		}else//電腦螢幕
		{
			document.getElementById("mySidenav").style.width = "175px";
			document.getElementById("main").style.marginLeft = "175px";
   if(typeKey==="weather")
   {
    var iframe = document.getElementById("ifm");
    iframe.style.width = "calc(100% - 175px)";//轉化長度
   }
			document.getElementById("selectLanguage").style.marginRight = "175px";
		}
	}else
	{
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginLeft= "0";
  if(typeKey==="weather")
  {
   var iframe = document.getElementById("ifm");//轉化長度
   iframe.style.width = "calc(100%)"; 
  }
		document.getElementById("selectLanguage").style.marginRight = "0";
	}
	isVisiable = !isVisiable;
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
	document.getElementById("selectLanguage").style.marginRight = "0";
	isVisiable = true;
}
// 創建並設置 Google Translate 腳本元素
var scriptGoogleTranslate = document.createElement('script');
scriptGoogleTranslate.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.head.appendChild(scriptGoogleTranslate);
//Google翻譯初始化
function googleTranslateElementInit() {
 // 將實例綁定到 window.googleTranslator，以便後續函式呼叫內部核心方法
 window.googleTranslator = new google.translate.TranslateElement({
  pageLanguage: 'zh-TW', //原始語言為繁體中文
  includedLanguages: 'en,zh-CN', //移除zh-TW，不讓Google翻譯處理原生繁體中文
  autoDisplay: false
 }, 'google_translate_element');
}

//切換語言
function changeLanguage(lang) {
 if(lang === 'original')
 {
  //尋找 Google內置的核心restore方法，瞬間恢復成原本繁體中文
  var restored = false;
  if(window.googleTranslator) {
   Object.keys(window.googleTranslator).forEach((k) => {
    if(!restored && typeof window.googleTranslator[k]?.restore === 'function') {
     window.googleTranslator[k].restore();
     restored = true;
    }
   });
  }
  //清除翻譯Cookie，確保下次重新整理網頁時也是原本繁體中文
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + document.domain;
 }
 else
 {
  //選擇其他語言，交由Google去觸發原生的變更事件
  const translateCombo = document.querySelector('.goog-te-combo');
  if (translateCombo)
  {
   translateCombo.value = lang;
   translateCombo.dispatchEvent(new Event('change'));
  }
 }
}

function checkPermission()
{
 permissionCount+=1;
 if(permissionCount===3)
 {
  var date = new Date();
  datetext = ((date.getHours()<10?'0':'')+date.getHours())+((date.getMinutes()<10?'0':'')+date.getMinutes());
	var resultKey = prompt("key");
	if(resultKey==="xxx159753"+datetext)
	{
		//ASCII解密 //加密btoa
		openUrl(atob("aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZjBMVWxyRG13YXM4SFRmVi05X2dSOTJDUlFvMFhlUExEWjN6YW9RVUl5MXBpOFZnL3ZpZXdmb3JtP3VzcD1zZl9saW5r"));
	}
	permissionCount=0;
 }
}
function openUrl(url)
{
 window.open(url);
}