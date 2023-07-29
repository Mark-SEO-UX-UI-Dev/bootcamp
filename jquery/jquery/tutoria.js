$("get_all").change(function() {
    if(this.checked) {
        $(".sauce").prop("checked", true);
        // alert("check");
    } else {
        $(".sauce").prop("checked", false);
    }
});

$(".sauce").change(function () {
    if (!this.checked) {
        $(".sauce")
    }
})