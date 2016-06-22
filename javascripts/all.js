$(document).ready(function(){
  $(".sizer").find("button").on("click", function(){
    $(".glyphs").removeClass (function (index, css) {
        return (css.match (/(^|\s)size-\S+/g) || []).join(' ');
    }).addClass("size-"+$(this).data("size"));
    $(".sizer").find("button").removeClass('active');
    $(this).addClass("active");
  });
});