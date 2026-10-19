/* Meta(페이스북) 픽셀 — 광고 대행사가 준 공통 스크립트와 전환 이벤트. CSP 가 인라인 스크립트를 막아서 파일로 뺐다(내용은 받은 그대로) */
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '868913456211963');
fbq('track', 'PageView');

/* 전환 이벤트: 전화번호 클릭. 관심고객·방문예약 등록은 한 폼이라 main.js 의 접수 성공 시점에서 한 번 보낸다 */
document.addEventListener('click', (event) => {
  if (event.target.closest('a[href^="tel:"]')) fbq('track', 'CompleteRegistration');
});
