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
var productBuyButtons = document.querySelectorAll('.product-buy-button');
var popupInfo = document.querySelector('.popup-info');
var popupInfoCloseBtn = document.querySelector('.popup-info-close');
var popupBuyButton = document.querySelector('.popup-buy-button');
var popupContinueButton = document.querySelector('.popup-continue-button');


if (advSliderBtnLeft != null) {
  advSliderBtnLeft.addEventListener('click', function () {
    advSlideDrill.classList.toggle('show');
    advSlidePerforator.classList.toggle('show');
    advSliderDotDrill.classList.toggle('active');
    advSliderDotPerforator.classList.toggle('active');
  });
}

if (advSliderBtnRight != null) {
  advSliderBtnRight.addEventListener('click', function () {
    advSlideDrill.classList.toggle('show');
    advSlidePerforator.classList.toggle('show');
    advSliderDotDrill.classList.toggle('active');
    advSliderDotPerforator.classList.toggle('active');
  });
}

if (advSliderDotDrill != null) {
  advSliderDotDrill.addEventListener('click', function () {
    if (!advSlideDrill.classList.contains('show')) {
      advSlideDrill.classList.add('show');
      advSlidePerforator.classList.remove('show');
      advSliderDotDrill.classList.add('active');
      advSliderDotPerforator.classList.remove('active');
    }
  });
}

if (advSliderDotPerforator != null) {
  advSliderDotPerforator.addEventListener('click', function () {
    if (advSlideDrill.classList.contains('show')) {
      advSlideDrill.classList.remove('show');
      advSlidePerforator.classList.add('show');
      advSliderDotDrill.classList.remove('active');
      advSliderDotPerforator.classList.add('active');
    }
  });
}

if (mapLink != null) {
  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('show');
  });
}

if (popupMapCloseBtn != null) {
  popupMapCloseBtn.addEventListener('click', function () {
    popupMap.classList.remove('show');
  });
}

if (popupEmailUsBtn != null) {
  popupEmailUsBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupEmailUs.classList.add('show');
  });
}

if (popupEmailUsCloseBtn != null) {
  popupEmailUsCloseBtn.addEventListener('click', function () {
    popupEmailUs.classList.remove('show');
  });
}

if (popupEmailUsSubmitBtn != null) {
  popupEmailUsSubmitBtn.addEventListener('click', function () {
    popupEmailUs.classList.remove('show');
  });
}

if (serviceButton.length != 0) {
  for (var i = 0; i < serviceButton.length; i++) {
    (function (i) {
      var link = serviceButton[i];
      link.addEventListener('click', function () {
        for (var j = 0; j < serviceItem.length; j++) {
          if (serviceItem[j].classList.contains('show')) {
            serviceItem[j].classList.remove('show');
          }
        }
        serviceItem[i].classList.add('show');
        for (var k = 0; k < serviceButton.length; k++) {
          if (serviceButton[k].classList.contains('active')) {
            serviceButton[k].classList.remove('active');
          }
        }
        this.classList.add('active');
      })
    })(i);
  }
}

for(var m=0; m <productBuyButtons.length; m++) {
  productBuyButtons[m].addEventListener('click', function () {
    if (!popupInfo.classList.contains('show')){
      popupInfo.classList.add('show');
    }
  })
}

if (popupInfoCloseBtn != null) {
  popupInfoCloseBtn.addEventListener('click', function () {
    if (popupInfo.classList.contains('show')){
      popupInfo.classList.remove('show');
    }
  });
}

if (popupBuyButton != null) {
  popupBuyButton.addEventListener('click', function () {
    if (popupInfo.classList.contains('show')){
      popupInfo.classList.remove('show');
    }
  });
}

if (popupContinueButton != null) {
  popupContinueButton.addEventListener('click', function () {
    if (popupInfo.classList.contains('show')){
      popupInfo.classList.remove('show');
    }
  });
}

