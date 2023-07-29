$(document).ready(function () {
  const d = new Date();
  console.log(d.toISOString().split("T")[0]);
  $("#datemax").prop("max", d.toISOString().split("T")[0]);

  $("#country_code").change(function () {
    let cc = $("#country_code").val().toUpperCase();
    $("#country_code").val(cc);
  });
});
