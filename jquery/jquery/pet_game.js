$(document).ready(function () {
  let petName = "Rudolph";
  let maxPoints = 100;
  let hunger = maxPoints;
  let exercise = maxPoints;
  let sleep = maxPoints;
  let lastActivity = "";

  function updateProgressBars() {
    $("#hunger_bar")
      .css("width", hunger + "%")
      .attr("aria-valuenow", hunger);
    $("#exercise_bar")
      .css("width", exercise + "%")
      .attr("aria-valuenow", exercise);
    $("#sleep_bar")
      .css("width", sleep + "%")
      .attr("aria-valuenow", sleep);
  }

  function updateLastActivity() {
    $("#l_act").text(lastActivity);
  }

  setInterval(function () {
    hunger = Math.max(hunger - 1, 0);
    exercise = Math.max(exercise - 1, 0);
    sleep = Math.max(sleep - 1, 0);

    updateProgressBars();
  }, 1000);

  function changeAct(activity) {
    lastActivity = getActivityDescription(activity);
    updateLastActivity();

    switch (activity) {
      case "hunger":
        hunger = maxPoints;
        break;
      case "exercise":
        exercise = maxPoints;
        break;
      case "sleep":
        sleep = Math.max(sleep - 5, 0);
        break;
      default:
        break;
    }

    updateProgressBars();
  }

  function getActivityDescription(activity) {
    switch (activity) {
      case "hunger":
        return "Fed " + petName + "!";
      case "exercise":
        return "Played with " + petName + "!";
      case "sleep":
        return petName + " took a nap!";
      default:
        return "";
    }
  }

  $("#hunger").click(function () {
    changeAct("hunger");
  });

  $("#exercise").click(function () {
    changeAct("exercise");
  });

  $("#sleep").click(function () {
    changeAct("sleep");
  });
});
