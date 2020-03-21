var advSliderBtnLeft = document.querySelector('.slider-nav-btn-left');
var advSliderBtnRight = document.querySelector('.slider-nav-btn-right');
var advSliderDotDrill = document.querySelector('.dot-drill');
var advSliderDotPerforator = document.querySelector('.dot-perforator');
var advSlideDrill = document.querySelector('.slide-drill');
var advSlidePerforator = document.querySelector('.slide-perforator');
var mapLink = document.querySelector('.map-link');
var popupMap = document.querySelector('.popup-map');
var popupMapCloseBtn = document.querySelector('.popup-map-close');
var popupEmailUs = document.querySelector('.popup-email-us');
var popupEmailUsBtn = document.querySelector('.address-link');
var popupEmailUsSubmitBtn = document.querySelector('.popup-submit-buttom');
var popupEmailUsCloseBtn = document.querySelector('.popup-email-us-close');
var serviceButton = document.querySelectorAll('.service-title-button');
var serviceItem = document.querySelectorAll('.service-item');


advSliderBtnLeft.addEventListener('click', function () {
  advSlideDrill.classList.toggle('show');
  advSlidePerforator.classList.toggle('show');
  advSliderDotDrill.classList.toggle('active');
  advSliderDotPerforator.classList.toggle('active');
});

advSliderBtnRight.addEventListener('click', function () {
  advSlideDrill.classList.toggle('show');
  advSlidePerforator.classList.toggle('show');
  advSliderDotDrill.classList.toggle('active');
  advSliderDotPerforator.classList.toggle('active');
});

advSliderDotDrill.addEventListener('click', function () {
  if (!advSlideDrill.classList.contains('show')) {
    advSlideDrill.classList.add('show');
    advSlidePerforator.classList.remove('show');
    advSliderDotDrill.classList.add('active');
    advSliderDotPerforator.classList.remove('active');
  }
});

advSliderDotPerforator.addEventListener('click', function () {
  if (advSlideDrill.classList.contains('show')) {
    advSlideDrill.classList.remove('show');
    advSlidePerforator.classList.add('show');
    advSliderDotDrill.classList.remove('active');
    advSliderDotPerforator.classList.add('active');
  }
});

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('show');
});

popupMapCloseBtn.addEventListener('click', function () {
  popupMap.classList.remove('show');
});

popupEmailUsBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupEmailUs.classList.add('show');
});

popupEmailUsCloseBtn.addEventListener('click', function () {
  popupEmailUs.classList.remove('show');
});

popupEmailUsSubmitBtn.addEventListener('click', function () {
  popupEmailUs.classList.remove('show');
});

for(var i=0; i <serviceButton.length; i++) {
  (function(i) {
    var link = serviceButton[i];
    link.addEventListener('click', function () {
      for(var j=0; j <serviceItem.length; j++) {
        if(serviceItem[j].classList.contains('show')) {
          serviceItem[j].classList.remove('show');
        }
      }
      serviceItem[i].classList.add('show');
      for(var k=0; k <serviceButton.length; k++) {
        if(serviceButton[k].classList.contains('active')) {
          serviceButton[k].classList.remove('active');
        }
      }
      this.classList.add('active');
    })
  })(i);
}
