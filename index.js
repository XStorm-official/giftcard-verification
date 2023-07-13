function validateInputs() {
    var securityCode = document.getElementById("security-code");
    var giftCardCode = document.getElementById("gift-card");
  
    if (securityCode.value.length !== 4 || giftCardCode.value.length !== 4) {
      securityCode.classList.add('error');
      giftCardCode.classList.add('error');
      securityCode.classList.add('vibrate');
      giftCardCode.classList.add('vibrate');
      setTimeout(function() {
        securityCode.classList.remove('vibrate');
        giftCardCode.classList.remove('vibrate');
      }, 300);
  
      var errorMessage = document.getElementById("error-message");
      errorMessage.innerText = "Les codes doivent comporter exactement 4 caractères.";
      errorMessage.style.display = "block";
    } else {
      var _0xa1b2 = String.fromCharCode(48, 48, 48, 48);
      var _0xcde5 = String.fromCharCode(65, 49, 66, 50);
      var _0xsecurity = securityCode.value;
      var _0xgift = giftCardCode.value;
      var _0xsecurityInput = securityCode;
      var _0xgiftInput = giftCardCode;
  
      if (_0xsecurity === _0xa1b2 && _0xgift === _0xcde5) {
        window.location.href = "codecarte.html";
      } else {
        var _0xe2be = document.getElementById("error-message");
        _0xe2be.innerText = "Carte cadeau ou Code secret incorrecte.";
        _0xe2be.style.display = "block";
  
        _0xsecurityInput.classList.add('error');
        _0xgiftInput.classList.add('error');
      }
    }
  }
  
  function limitInputLength(element, maxLength) {
    if (element.value.length > maxLength) {
      element.value = element.value.slice(0, maxLength);
    }
  }