$(function () {
  $(".drag").draggable({
    containment: "#drag-area",
    opacity: 0.6,
    scroll: true,
    zIndex: 10,
    addClasses: false,
    stop: function (event, ui) {
      var csrfToken = $("input[name='_token']").val();
      var myNum = $(this).data("num");
      var myLeft = ui.offset.left - $("#drag-area").offset().left;
      var myTop = ui.offset.top - $("#drag-area").offset().top;

      $.ajax({
        type: "post",
        url: "/update",
        data: {
          _token: csrfToken,
          id: myNum,
          left: myLeft,
          top: myTop,
        },
      })
      .done(function () {
        console.log("成功");
      })
      .fail(function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(XMLHttpRequest.status);
        console.log(textStatus);
        console.log(errorThrown);
      });
    }
  });
});
