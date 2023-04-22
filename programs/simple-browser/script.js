//delete google ads.
function adblock()
{
  for (const div of document.querySelectorAll("div"))
  {
    if ("id" in div)
      if (div.id.includes("google_ads_iframe_"))
      {
        div.id = "";
        div.style = "text-align: center;";
        div.innerHTML = "deleted google ads.";
        console.log("deleted google ads");
      }
  }
}
setInterval("adblock()", 5000);