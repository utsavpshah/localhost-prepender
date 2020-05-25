document.addEventListener('DOMContentLoaded', init, false);

function navigateToPort(input) {
  chrome.tabs.create({
    url: "http://localhost:" + input.value
  });
}

function init() {
  document.getElementById('openPort').addEventListener('click',
    function () {
      navigateToPort(document.getElementById('port_number'));
    });

  document.body.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
      document.getElementById('openPort').click();
    }
  });
}