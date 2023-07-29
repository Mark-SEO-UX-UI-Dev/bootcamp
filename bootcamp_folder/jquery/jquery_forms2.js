$(document).ready(function () {
  const d = new Date();
  console.log(d.toISOString().split("T")[0]);
  $("#datemax").prop("max", d.toISOString().split("T")[0]);

  $("#country_code").change(function () {
    let cc = $("#country_code").val().toUpperCase();
    $("#country_code").val(cc);
  });

  $("form").submit(function () {
    alert("Form submitted!");
  });
});

// $(document).ready(function () {
//   $("#register").submit(function (x) {
//     let username = $("#username").val();
//     let password = $("#pw").val();
//     let gender = $("#gender").val();
//     let newsletter = $("#newsletter").prop("checked");
//     // console.log(username);
//     // console.log(password);
//     // console.log(gender);
//     // console.log(newsletter);

//     if (confirm("Are you sure?\n" + username + "\nGender: " + gender)) {
//       if (gender != "") {
//         let fullname = first_name + "" + last_name;
//         let reg_users = $("#reg_users").html();
//         if (newsletter) {
//           newsletter = "Yes";
//         } else {
//           newsletter = "No";
//         }
//         let new_user =
//           "<tr><td>" +
//           username +
//           "</td><td>" +
//           gender +
//           "</td><td>" +
//           newsletter +
//           "</td></tr>";
//         $("#reg_users").html(reg_users + new_user);
//       } else {
//         alert("ERROR: Speciy your gender.");
//       }
//     }
//     x.preventDefault();
//   });
// });
