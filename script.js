$(".nav").click(function(e) {
  let section = e.target.name
  $("html, body").animate({
    "scrollTop": $(".block-container." + section)[0].offsetTop
  }, 500);
});

$(function() {
  $(".block-container").appear()
  $(document.body).on("appear", ".block-container", function(e, $affected) {
    let section = $affected[0].className.split(" ")[1];
    $(".nav[name=" + section + "]")[0].className = "nav toggled"
    console.log('app');
  });

  $(document.body).on("disappear", ".block-container", function(e, $affected) {
      console.log('dis');
    let section = $affected[0].className.split(" ")[1];
    $(".nav[name=" + section + "]")[0].className = "nav"
  });
});
