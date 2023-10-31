async function getTranslation(lang) {
    return await fetch(`locale/${lang}/translate.json?${Date.now()}`)
      .then((response) => response.json())
      .then((data) => data);
  }
  
  async function langChange(lang) {
    if (lang == "en") {
      $(".current-lang").text("English");
    } else if (lang == "tn") {
      $(".current-lang").text("Tamil");
    }
  
    let translations = await getTranslation(lang);
    console.log(translations);
    $(".lang-change").each(function () {
      let key = $(this).data("lang").split("-");
      let index = translations.findIndex((item) =>
        Object.keys(item).includes(key[0])
      );
  
      $(this).html(translations[index][key[0]][key[1]]).text();
    });
  }

  $(document).ready(function () {
    var owl = $("#slider-carousel");
    owl.owlCarousel({
      items: 1,
      itemsDesktop: [1000, 1],
      itemsDesktopSmall: [900, 1],
      itemsTablet: [600, 1],
      itemsMobile: false,
      pagination: false });
  
    $(".next").click(function () {
      owl.trigger('owl.next');
    });
    $(".prev").click(function () {
      owl.trigger('owl.prev');
    });
  });