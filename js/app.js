const BASE_URL = "https://www.omidfaryabi.ir/api";

const switchBtn = document.getElementById("switch");

//  <!-- Enabled: "", Not Enabled: "bg-gray-200" -->

switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("bg-red-400");
  switchBtn.children.item(1).classList.toggle("translate-x-5");
});

console.log("s", switchBtn);

const searchParams = new URLSearchParams(window.location.search);

const city = searchParams.get("city"),
  building = searchParams.get("building"),
  budget = searchParams.get("budget"),
  room = searchParams.get("room");

const getListingData = async (prams) => {
  const url = new URLSearchParams(BASE_URL + "/listing");

  // for (const key in prams) {
  //   if (Object.prototype.hasOwnProperty.call(prams, key)) {
  //     const element = prams[key];
  //     url.append(key, element);
  //   }
  // }

  console.log(BASE_URL + "/listing");
  const request = await fetch(BASE_URL + "/listings", {
    method: "GET",
  });

  const response = await request.json();

  console.log(response);
};

getListingData({ city, building, budget, room });

// fetch(url, {
//   method: "GET",
// });
