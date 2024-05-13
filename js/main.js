$(document).ready(function () {
  // Add a click event to swtich tabs accordingly.
  $(".nav-wrapper button").click(function () {
    let tabContainer = $(this).closest(".tab-container");
    // Hide all the content wrapper
    tabContainer.find(".tab-container").hide();

    // Update the tab active design on click
    $(this).parent().find("button").addClass("inactive");
    $(this).removeClass("inactive");
    let id = $(this).attr("data-id");

    // Show content of clicked tab
    tabContainer.find("#" + id).show();
  });

  // Get all the paragraph tag
  let paragraphs = $("div.text-para p");
  // Item to be skiped
  let offset = 5;

  // Data can be fetch from API
  let data = [
    {
      title:
        "Property analysts expect S$1m HDB resale transactions soon in last 4 towns yet to record such sales",
      url: "/node/1",
    },
    {
      title:
        "Proportion of resale flat buyers who pay COV halved to 18% since CPF housing grant increase: Tan Kiat How",
      url: "/node/2",
    },
    {
      title:
        "Resale HDB flat sellers unlikely to raise prices for first-time buyers despite higher grants, property agents say",
      url: "/node/2",
    },
  ];

  if (paragraphs.length > 0) {
    let index = offset;
    for (i = 0; i < Math.floor(paragraphs.length / 5); i++) {
      if ($(paragraphs[index]).length && data[i]) {
        let url = data[i]["url"];
        let title = data[i]["title"];
        let html =
          '<div class="read-also"><h3 >READ ALSO</h3><a href="' + url + '">' + title + "</a></div>";
        $(paragraphs[index]).wrap('<div class="read-also-wrapper"></div>');
        $(html).insertAfter($(paragraphs[index]));
        index = index + 6;
      }
    }
  }
});
