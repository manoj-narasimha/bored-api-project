// Api: https://www.boredapi.com/api/

var activity = document.getElementById("activity");
var type = document.getElementById("type");
var participant = document.getElementById("participants");
var link = document.getElementById("link");

function getApi() {
  fetch("https://www.boredapi.com/api/activity?type=recreational")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return response.reject();
    })
    .then((data) => {
        activity.innerText = data.activity;
        type.innerText = data.type;
        participant.innerText = data.participants;
        link.innerText = data.link;

      console.log(data);
      return data;
    });
}

window.onload = () => getApi();

// getApi()
