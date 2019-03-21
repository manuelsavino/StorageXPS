$(function() {

  $("#fileInput").bind("change", function() {
    //this.files[0].size gets the size of your file.
    if (this.files[0].size > 20971520) {
      $("#fileInput").val("");
      $("#myModal").modal("show");
    }
  });

  $(".submit").on("click", function(e) {
    e.preventDefault();

    let email = $("#email").val();
    let name = $("#name").val();
    let input = document.getElementById("fileInput");
    let files = input.files[0];

    let data = new FormData();

    data.append("Name", name);
    data.append("Email", email);
    data.append("Attachment", files);

    $(".holder").empty();
    let img = $("<img>");
    img.attr("src", "./assets/images/loading.gif");
    img.addClass("mx-auto");
    $(".holder").append(img);

    $.ajax({
      url: "https://stark-cove-62706.herokuapp.com/",
      type: "POST",
      data: data,
      processData: false,
      contentType: false,
      success: function(r) {
        console.log("result", r);
        $(".holder").empty();
        $(".holder").append("<h2>Thank you, we will contact you soon!</h2>");
      },
      error: function(e) {
        console.log("some error", e);
        $(".holder").empty();
        $(".holder").append("<h2>Please try submitting the form again</h2>");
      }
    });

    console.log("done");
    // console.log(fileInputElement.files[0]);
  });
});
