/*請務必依照格式填寫 職位代號請務必和照片的檔名代號相同 
例如 職位1為活動 系級為114 圖片黨名為： 114-1.jpg 必須為jpg檔
系級 職位1 名稱1 職位2 名稱2 職位3 名稱3 職位4 名稱4

下一年範例   
  
   

*/
  /*請務必依照格式填寫 職位代號請務必和照片的檔名代號相同 
例如 職位1為活動 系級為114 圖片黨名為： 114-1.jpg 必須為jpg檔
系級 職位1 名稱1 職位2 名稱2 職位3 名稱3 職位4 名稱4

下一年範例   



*/
////////// data /////////////
  var all=[
"115 會長 蔣宗儒 https://www.instagram.com/ntou_ee_no1/ https://www.facebook.com/ntouee/ 職位1 職位2 副會長 蔣宗儒 職位1 職位2 ",
"114 會長 沉宣揚 https://www.instagram.com/ntou_ee_no1/ https://www.instagram.com/ntou_ee_no1/ 職位1 職位2 活動 劉之凝 職位３ 職位４" 
]

var activity=[
  ["活動名稱1","1/1","下午三點～五點","學生活動中心3樓-展演廳展演廳","電機系大一新生 ","免費","1000/人","http:","2/1","....","p1.jpg"],
  ["活動名稱2","2/1","下午2點～五點","學生活動中心2樓","電機系大一新生 ","免費","1000/人","http:","2/1","..2..","p1.jpg"]
]
var activity_pic=[
  "b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"
]
var contents=[
  ["關於我們","系學會介紹","about_us.html","成員介紹","members.html"],
  ["活動","活動項目","activity.html","活動照片","activity_pic_page.html"],
  ["會務","會員大會",".html","財政報表","finantial_report.html","會費繳交名單","member_payment_list.html"],
  ["連結","link.html"],
  ["行事曆","calendar.html"],
  ["聯絡我們","contact_us.html"]
]

////////// initialize  /////////////


function upper_banner(){
  var data=`   
<a href="main_page.html">
           <img  src="logo.png" style="height:68px; width:130px; margin-right:50px;">

       </a>
  <h1 style="margin-top:20px; ">海洋大學 電機系 系學會</h1>`;
  document.getElementById("upper_pop").innerHTML=data;
}


function bottom_banner(){
  var data=` 
<br><br><br><a href="https://www.instagram.com/ntou_ee_no1/">
        <img src="ig.svg" style="padding:0px; margin:15px 0 0px 150px; height:30px; width:30px;">
       </a>
       
<a href="https://www.facebook.com/ntouee/">
        <img src="fb.png" style="padding:0px; margin:15px 0px 0px 235px; height:30px; width:30px;">
       </a>

       <a href="mailto:NTOUEEN01@email.ntou.edu.tw?body=To 海大電機系學會 (來自網站）：">
        <img src="mail.png" style="padding:0px; margin:15px 0 0px 290px; height:30px; width:30px;">
       </a>
       <div class="downlink">
       
<a href="https://www.instagram.com/ntou_ee_no1/" class="downlink">
        <h3>
        &nbsp; &nbsp; &nbsp;ig:
        ntou_ee_no1                   
          </h3>
      </a>

        <a href="https://www.facebook.com/ntouee/"class="downlink">
        <h3>
        &nbsp; fb:
        國立臺灣海洋大學電機系系學會                  
          </h3>
      </a>
 
       <a href="mailto:NTOUEEN01@email.ntou.edu.tw?body=To 海大電機系學會 (來自網站）："class="downlink">
        
     <h4>
        &nbsp; &nbsp; &nbsp;email:
        NTOUEEN01@email.ntou.edu.tw

         </h4>
      </a> 
          </div>
       <br><br><br>
  `;
  document.getElementById("bottom_pop").innerHTML=data;
}
function list(){
  var data="";
  var i=0;
  for(i=0;i<contents.length;i++){
  
   if(contents[i].length>2){
      data=data+`<div class="all_block" >
      
       <div class="dropdown">
      <button class="dropbtn">${contents[i][0]} </button>  <div class="dropdown-content">`
  var j=1;
    for(j=1;j<contents[i].length;j++){
         data=data+  `<a href="${contents[i][j+1]}">`;
      j++;
      data=data+`${contents[i][j-1]}</a> <br>`
           }
data=data+"</div>";}else{data=data+`<div class="all_block">
      
       <div class="dropdown">
      
   <a href="${contents[i][1]}" >    
<button class="more_1" >${contents[i][0]} </button></a>`}
     data=data+"</div></div>";
      }
  document.getElementById("list-pop").innerHTML=data;
}

//////////////////. main_page. ///////////////////////////////
function begin_main() {
  upper_banner();
  bottom_banner();
  list();

}



/////////////    member_page    ////////////////////////////////////
function begin_main() {
  upper_banner();
  bottom_banner();
  list();

}



/////////////    member_page    ////////////////////////////////////

function begin(){
    upper_banner();
  bottom_banner();
  list();
   var data="";
   var i=0;
  for(i=0; i<all.length; i++){

    data=data+"<option>"+all[i][0]+all[i][1]+all[i][2]+"</option>";
  
  }
document.getElementById("select-options").innerHTML=data;
  pop(0);
}

function decideselect(){
  var a = document.getElementById("select-options").selectedIndex;
  pop(a);
}

function pop(year)
{

var data="";

var i=0; var j=1;
    const word = all[year].split(" ");
  var now_year=word [i][0]+word[i][1]+word[i][2];
  
  for(i=1;i<word.length-1;i++){
   data=data+`<div class='all_block'><div class='pic-block'><img  class='mem-pic'  src='member_pic/${now_year}-${j}.jpg' > </div><div class='name-block'><h5 class='h-title'>l
     ${word[i]}`;
   i++;
    data=data+`:<h5 class='h-title' id='b1'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
   
     ${word[i]}
    </h5>    <div class="all_block">
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              <a href="${word[i+1]}">
        <img src="ig.svg" style="height:30px; width:30px;">
       </a>
       
<a href="${word[i+2]}">
        <img src="fb.png" style="height:30px; width:30px;">
       </a>
    </div>  
</div> 
             <div class='work-block'>
            <h5 class='h-title'>l職位：</h5>
            <h5 class='h-nontitle'>l &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `;
         i=i+3;
     data=data+`${word[i]}
</h5> <h5 class='h-nontitle'>l &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `;
     i++;
data=data+`
    ${word[i]}
   </h5></div></div>`
    j++;
  }
   
document.getElementById("data").innerHTML=data;
}

//////////////.    activity_page.    //////////////////////
function begin_activity(){
  upper_banner();
  bottom_banner();
  list();
  activitypop();
}
function activitypop(){
  var i=0;
  var data="";
  for(i=0;i<activity.length;i++){
  data=data+`<br>
 <div class="all_block" style="margin:5px;">
   <div style="margin-bottom:50px; width:485px;">
   <h5 class="h-title" style="margin:0 0px 0px 38px; height:23px;">${activity[i][0]}</h5>
   <div class='all_block' >
       <h5 class='activity-item' style="max-width:210px; word-wrap:break-word;">
       Ｏ日期：${activity[i][1]}<br>Ｏ時間：${activity[i][2]}<br>Ｏ地點：${activity[i][3]}
      <br>Ｏ參加資格：${activity[i][4]} 
       </h5>
       <h5 class='activity-item' style="margin:0; margin-left:35px;">
       Ｏ費用：<br>系學會成員：${activity[i][5]} <br>(有繳會費)<br>非系學會成員：${activity[i][6]}
       </h5>
   </div>
   <h5 class='activity-item' style="margin:0px margin-left:45px;">
       <a href="">Ｏ報名連結：${activity[i][7]}</a><br>Ｏ報名截止:${activity[i][8]}<br>Ｏ備註：${activity[i][9]}
   </h5> 
   </div>      
 <div class='pic-block' style="">
        <img   src='activity_pic/${activity[i][10]}' style="margin-left:5px; margin-right:0px;
	max-height:300px; max-width:280px">
  </div>
  </div>
  </div>`;
    
  }document.getElementById("pop_activity").innerHTML=data;
  
}
//////////////.    activity_pic_page.    //////////////////////
function begin_activity_pic(){
  upper_banner();
  bottom_banner();
  list();
  var data="";
  var i=0;
    for(;i<activity_pic.length;i++){
      data=data+`<div class="all_block2">  `;
      if(!(i<activity_pic.length)){
          data=data+"</div>";
          break;}
      data=data+`<p>
          <img src="activity_pic_page_pic/${activity_pic[i]}" class="activity_pic_pic">
        </p>`;
        i++;
        if(!(i<activity_pic.length)){
          data=data+"</div>";
          break;}
      data=data+`<p>
          <img src="activity_pic_page_pic/${activity_pic[i]}" class="activity_pic_pic">
        </p>`;
        i++;
        if(!(i<activity_pic.length)){
          data=data+"</div>";
          break;}
      data=data+`<p>
          <img src="activity_pic_page_pic/${activity_pic[i]}" class="activity_pic_pic">
        </p>`;
     
     data=data+"</div>";
  
    }
    document.getElementById("pop_activity_pic").innerHTML=data;
  
}





