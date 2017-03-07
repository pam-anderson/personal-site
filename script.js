$(".nav").click(function(e) {
  let section = e.target.name
  $("html, body").animate({
    "scrollTop": $(".block-container." + section)[0].offsetTop
  }, 500);
});

$(function() {
  $(".block-container").appear()
  $(document.body).on("appear", ".block-container", function(e, $affected) {
    let target = $affected[0].className.split(" ")[1];
    let sections = $(".nav");
    sections.map(id => {
      if (target === "introduction") {
        $(".menu-header")[0].className = "menu-header collapsed";
      } else {
        $(".menu-header")[0].className = "menu-header";
      }
      sections[id].className = sections[id].name === target ? 
          "nav toggled" : "nav";
    });
  });
});
