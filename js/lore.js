function openSidebar() {
  console.log('sidebar');
  document.querySelector('.sidebar').classList.add('open');
  document.getElementById('close').style.display = 'block';
  document.getElementById('overflow').style.overflow = 'hidden';
  const video = document.getElementById("video");
  video.play();

}
function closeSidebar() {
    console.log('sidebar');
    document.querySelector('.sidebar').classList.remove('open');
    document.getElementById('close').style.display = 'none';
    document.getElementById('overflow').style.overflow = 'visible';
    const video = document.getElementById("video");
    video.pause();
}
function openSidebarMenu() {
  console.log('sidebar');
  document.querySelector('.sidebar-mainpage').classList.add('open');
  document.getElementById('hidden-button-cross').style.display ='block';
  document.getElementById('overflow').style.overflow = 'hidden';
}

function closeSidebarMenu() {
  console.log('sidebar');
  document.querySelector('.sidebar-mainpage').classList.remove('open');
  document.getElementById('hidden-button-cross').style.display = 'none';
  document.getElementById('overflow').style.overflow = 'visible';
}
function redirect(pagina) {
    window.location.href = pagina;
}

/*STICKY NAVBAR*/
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
if ((window.pageYOffset - 10) >= sticky) {
    navbar.classList.add("sticky")
} else {
    navbar.classList.remove("sticky");
}
}
        /*Timeline script*/
        (function ($) {
            $(function () {
          
          
              $(window).on('scroll', function () {
                fnOnScroll();
              });
          
              $(window).on('resize', function () {
                fnOnResize();
              });
          
          
              var agTimeline = $('.js-timeline'),
                agTimelineLine = $('.js-timeline_line'),
                agTimelineLineProgress = $('.js-timeline_line-progress'),
                agTimelinePoint = $('.js-timeline-card_point-box'),
                agTimelineItem = $('.js-timeline_item'),
                agOuterHeight = $(window).outerHeight(),
                agHeight = $(window).height(),
                f = -1,
                agFlag = false;
          
              function fnOnScroll() {
                agPosY = $(window).scrollTop();
          
                fnUpdateFrame();
              }
          
              function fnOnResize() {
                agPosY = $(window).scrollTop();
                agHeight = $(window).height();
          
                fnUpdateFrame();
              }
          
              function fnUpdateWindow() {
                agFlag = false;
          
                agTimelineLine.css({
                  top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
                  bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
                });
          
                f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
              }
          
              function fnUpdateProgress() {
                var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
          
                i = agTop + agPosY - $(window).scrollTop();
                a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
                n = agPosY - a + agOuterHeight / 2;
                i <= agPosY + agOuterHeight / 2 && (n = i - a);
                agTimelineLineProgress.css({height: n + "px"});
          
                agTimelineItem.each(function () {
                  var agTop = $(this).find(agTimelinePoint).offset().top;
          
                  (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
                })
              }
          
              function fnUpdateFrame() {
                agFlag || requestAnimationFrame(fnUpdateWindow);
                agFlag = true;
              }
          
          
            });
          })(jQuery);


 