const BASE_URL = "https://www.omidfaryabi.ir/api";

const switchBtn = document.getElementById("switch");
const cardContainer = document.getElementById("card-container");

const searchParams = new URLSearchParams(window.location.search);

const city = searchParams.get("city"),
  building = searchParams.get("building"),
  budget = searchParams.get("budget"),
  room = searchParams.get("room");

switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("bg-red-400");
  switchBtn.children.item(1).classList.toggle("translate-x-5");
});

const getListingData = async (prams) => {
  const url = new URLSearchParams(BASE_URL + "/listing");
  // for (const key in prams) {
  //   if (Object.prototype.hasOwnProperty.call(prams, key)) {
  //     const element = prams[key];
  //     url.append(key, element);
  //   }
  // }
  const request = await fetch(BASE_URL + "/listings", {
    method: "GET",
  });

  const response = await request.json();

  console.log(response);
  renderListings(response);
};

function renderListings(listingsData) {
  listingsData.map((listing) => {
    let features = "";
    let tags = "";
    let agents = "";
    listing.features.forEach((feature) => (features += ` <li>${feature}</li>`));
    listing.tags.forEach(
      (tag, index) =>
        (tags += ` <span class='text-[12px]  ${
          index % 2 === 0
            ? "text-[#27AE60] bg-[#1aa1521e]"
            : " bg-[#dc35463d] text-[#DC3545]"
        }  font-medium rounded-[7.5px] p-1.5'>${tag.text}</span>`)
    );

    listing.propertyDetails.agents.forEach(
      (agent) =>
        (agents += `  <img src="../assets/images/agent-1.png" alt="" />`)
    );

    cardContainer.innerHTML += `
                <figure class="px-4 py-3 flex items-start gap-3">
              <button>
                <svg
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17.3782" cy="16.5" r="16.5" fill="#FFF5F4" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.84667 18.2786C8.90627 17.3417 8.37817 16.0755 8.37817 14.7553C8.37817 13.4278 8.91183 12.1543 9.86241 11.2156C10.813 10.277 12.1027 9.75 13.447 9.75C14.7914 9.75 16.0811 10.277 17.0317 11.2156L17.3782 11.5578L17.7247 11.2156C18.6753 10.277 19.964 9.75 21.3084 9.75C22.6537 9.75 23.9424 10.277 24.893 11.2156C25.8436 12.1543 26.3782 13.4278 26.3782 14.7553C26.3782 16.0755 25.8501 17.3417 24.9087 18.2786L18.0323 25.4687C17.8627 25.6461 17.6255 25.7468 17.3782 25.7468C17.1308 25.7468 16.8936 25.6461 16.7241 25.4687L9.84667 18.2786ZM17.3782 23.5639L23.6024 17.0563L23.6209 17.038C24.2333 16.4323 24.578 15.6117 24.578 14.7553C24.578 13.899 24.2333 13.0784 23.6209 12.4727C23.0076 11.867 22.1756 11.5267 21.3084 11.5267C20.4421 11.5267 19.6101 11.867 18.9968 12.4727L18.0147 13.4434C17.6626 13.7901 17.0928 13.7901 16.7417 13.4434L15.7586 12.4727C15.1462 11.867 14.3142 11.5267 13.447 11.5267C12.5798 11.5267 11.7488 11.867 11.1354 12.4727C10.5221 13.0784 10.1784 13.899 10.1784 14.7553C10.1784 15.6117 10.5221 16.4323 11.1354 17.038C11.1419 17.0444 11.1475 17.0499 11.153 17.0563L17.3782 23.5639Z"
                    fill="#7B6B6C"
                  />
                </svg>
              </button>
              <section class="w-full space-y-2">
                <h4 class="text-xl text-[#333] font-medium">${
                  listing.title
                }</h4>
                <div class="flex items-center gap-3 text-[#333] text-[12px]">
                  <span>${listing.location.address}</span>
                  <div class="flex items-center gap-2">
                    <span> ۱۳۵۰ </span>
                    <svg
                      width="10"
                      height="13"
                      viewBox="0 0 10 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.37816 0.5C2.89683 0.5 0.878174 2.52293 0.878174 5.00944C0.878174 9.00786 4.92733 12.1547 5.09973 12.2868L5.37819 12.5L5.65647 12.2868C5.82887 12.1547 9.87817 9.00786 9.87817 5.00944C9.87814 2.5229 7.85952 0.5 5.37816 0.5ZM5.37783 11.3257C4.49094 10.5609 1.79504 7.99005 1.79504 5.00944C1.79504 3.0295 3.40219 1.41879 5.37816 1.41879C7.35377 1.41879 8.96128 3.02953 8.96128 5.00944C8.96131 7.98367 6.26433 10.5597 5.37783 11.3257Z"
                        fill="#333333"
                      />
                      <path
                        d="M5.45824 7.25003C4.22717 7.25003 3.22559 6.24857 3.22559 5.01757C3.22559 3.7865 4.22714 2.78491 5.45824 2.78491C6.68931 2.78491 7.69086 3.78646 7.69086 5.01757C7.69086 6.24857 6.68931 7.25003 5.45824 7.25003ZM5.45824 3.51712C4.63088 3.51712 3.95776 4.19024 3.95776 5.0176C3.95776 5.84486 4.63088 6.51789 5.45824 6.51789C6.28557 6.51789 6.95869 5.84486 6.95869 5.0176C6.95869 4.19021 6.2856 3.51712 5.45824 3.51712Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                </div>
                <ul class="list-disc text-[12px] text-[#6B6F7B]">${features}</ul>
                <div class="flex items-center justify-end gap-3">
                ${tags}
                </div>
                <div class="flex items-center justify-between">
                  <section>
                    <span class="text-[12px] text-[#333]">${
                      listing.price.period
                    }</span>
                    <span class="text-lg font-bold text-[#333]">${listing.price.amount.toLocaleString(
                      "fa"
                    )}  تومان</span>
                  </section>
                  <section class="flex items-center justify-between gap-3">
                    <div class="text-[#333]">
                      <span class="text-[10px]">(${[
                        listing.rating.reviewCount,
                      ]} نظر)</span>
                      <span class="font-medium text-lg">${
                        listing.rating.score
                      }</span>
                    </div>
                    <div>
                  <svg style="display:none;">
  <defs>
    <symbol id="fivestars">
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd" transform="translate(24)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd" transform="translate(48)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd" transform="translate(72)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"  transform="translate(96)"/>
    </symbol>
  </defs>
</svg>
<div class="rating">
  <progress class="rating-bg" value=${listing.rating.score} max="5"></progress>
  <svg><use xlink:href="#fivestars"/></svg>
</div>
                    </div>
                  </section>
                </div>
              </section>
              <section class="">
                <div class="relative h-[220px] w-[220px]">
                  <img
                    src="../assets/images/listing-1.png"
                    alt=""
                    class="absolute inset-0"
                  />
                  <div
                    class="absolute flex justify-end px-6 py-2 flex-col bottom-0 bg-[linear-gradient(180deg,rgba(51,51,51,0)_0%,#333333_100%)] rounded-[7px] w-full h-[120px]"
                  >
                    <div class="flex">
            ${agents}
                    </div>
                    <div class="">
                      <div class="text-lg font-medium text-white">${
                        listing.propertyDetails.bedrooms
                      } خواب</div>
                      <div class="text-[#C6C6C6]">طبقه ${
                        listing.propertyDetails.floor
                      }</div>
                    </div>
                  </div>
                </div>
              </section>
            </figure>
    `;
  });
}

getListingData({ city, building, budget, room });
