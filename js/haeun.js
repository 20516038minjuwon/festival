document.addEventListener("DOMContentLoaded",()=>{

//fade슬라이드 (opacity)사용
const $slide_a = document.querySelectorAll('#slide a');
let i=0
const fading= ()=>{
    $slide_a.forEach(i=>i.style.opacity=0);
    $slide_a[i].style.opacity=1 ;
    i=(i+1)%3;
}

setInterval(fading,2800)

//(공지사항/갤러리)탭 전환하여 콘텐츠 보이기

const $nogal_btn=document.querySelectorAll('#nogal button');
const $notice=document.getElementById('notice');
const $gallery=document.getElementById('gallery');

$nogal_btn.forEach((i,j)=>{
    i.addEventListener('click',()=>{
        $nogal_btn.forEach(b=>b.classList.remove('active'));
        i.classList.add('active');
        if(j===0){
            $notice.style.display='block';
            $gallery.style.display='none';
        }
        else {
            $notice.style.display='none';
            $gallery.style.display='flex';
        }
    });
});

//팝업창 클릭하면 뜨고 닫기 누르면 닫기.
const $notice_a = document.querySelectorAll('#notice a');
const $popup=document.getElementById('popup');
const $popup_btn=document.getElementById('popBtn');

$notice_a.forEach((i)=>{
    i.addEventListener('click',()=>{
        $popup.style.display='block';
    });
});
    $popup_btn.addEventListener('click',()=>{
        $popup.style.display='none';
    });


}); //js금지