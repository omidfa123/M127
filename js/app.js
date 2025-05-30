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

// detailPageUrl
// :
// "/listings/listing-001"
// features
// :
// (3) ['نورگیر عالی از جنوب', 'دسترسی آسان به پارک', 'آشپزخانه نیمه فرنیش']
// id
// :
// "listing-001"
// isFavorited
// :
// false
// location
// :
// {address: 'نیاوران، خیابان بوکان، پلاک ۲۳'}
// mainImageUrl
// :
// "/images/property-sample-1.jpg"
// price
// :
// {amount: 12000000, currency: 'Toman', period: 'ماهانه'}
// propertyDetails
// :
// {bedrooms: 2, floor: 'چهارم', agents: Array(2)}
// rating
// :
// {score: 4.2, reviewCount: 15}
// tags
// :
// (2) [{…}, {…}]
// title
// :
// "آپارتمان دنج در شمال شهر"

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
                      <svg
                        width="69"
                        height="11"
                        viewBox="0 0 69 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.16257 0.377916L7.4052 3.79448L11.055 3.91394C11.4392 3.92588 11.6013 4.4097 11.2952 4.64862L8.41371 6.87655L9.42822 10.3648C9.53627 10.7351 9.12206 11.0338 8.8039 10.8187L5.78438 8.78194L2.76485 10.8187C2.44669 11.0338 2.03248 10.7351 2.14053 10.3648L3.15505 6.87655L0.261583 4.64862C-0.0445718 4.41567 0.11751 3.92588 0.501705 3.91394L4.15155 3.79448L5.39418 0.377916C5.52024 0.0195357 6.0305 0.0195357 6.16257 0.377916Z"
                          fill="#DC3545"
                          fill-opacity="0.16"
                        />
                        <path
                          d="M20.5163 0.377916L21.759 3.79448L25.4088 3.91394C25.793 3.92588 25.9551 4.4097 25.6489 4.64862L22.7675 6.87655L23.782 10.3648C23.89 10.7351 23.4758 11.0338 23.1577 10.8187L20.1381 8.78194L17.1186 10.8187C16.8004 11.0338 16.3862 10.7351 16.4943 10.3648L17.5088 6.87655L14.6153 4.64862C14.3092 4.41567 14.4713 3.92588 14.8555 3.91394L18.5053 3.79448L19.7479 0.377916C19.874 0.0195357 20.3843 0.0195357 20.5163 0.377916Z"
                          fill="#ED5765"
                        />
                        <path
                          d="M34.8701 0.377916L36.1127 3.79448L39.7626 3.91394C40.1468 3.92588 40.3088 4.4097 40.0027 4.64862L37.1212 6.87655L38.1357 10.3648C38.2438 10.7351 37.8296 11.0338 37.5114 10.8187L34.4919 8.78194L31.4724 10.8187C31.1542 11.0338 30.74 10.7351 30.8481 10.3648L31.8626 6.87655L28.9691 4.64862C28.6629 4.41567 28.825 3.92588 29.2092 3.91394L32.8591 3.79448L34.1017 0.377916C34.2278 0.0195357 34.738 0.0195357 34.8701 0.377916Z"
                          fill="#ED5765"
                        />
                        <path
                          d="M49.2238 0.377916L50.4664 3.79448L54.1163 3.91394C54.5005 3.92588 54.6625 4.4097 54.3564 4.64862L51.4749 6.87655L52.4894 10.3648C52.5975 10.7351 52.1833 11.0338 51.8651 10.8187L48.8456 8.78194L45.8261 10.8187C45.5079 11.0338 45.0937 10.7351 45.2018 10.3648L46.2163 6.87655L43.3228 4.64862C43.0166 4.41567 43.1787 3.92588 43.5629 3.91394L47.2128 3.79448L48.4554 0.377916C48.5815 0.0195357 49.0917 0.0195357 49.2238 0.377916Z"
                          fill="#ED5765"
                        />
                        <path
                          d="M63.5775 0.377916L64.8202 3.79448L68.47 3.91394C68.8542 3.92588 69.0163 4.4097 68.7101 4.64862L65.8287 6.87655L66.8432 10.3648C66.9513 10.7351 66.537 11.0338 66.2189 10.8187L63.1994 8.78194L60.1798 10.8187C59.8617 11.0338 59.4475 10.7351 59.5555 10.3648L60.57 6.87655L57.6766 4.64862C57.3704 4.41567 57.5325 3.92588 57.9167 3.91394L61.5665 3.79448L62.8092 0.377916C62.9352 0.0195357 63.4455 0.0195357 63.5775 0.377916Z"
                          fill="#ED5765"
                        />
                      </svg>
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
