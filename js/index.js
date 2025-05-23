// DOM
const fieldCity = document.getElementById("field-city");
const dropDown = document.getElementById("drop-down");
const searchFrom = document.getElementById("search-from");

const searchData = {
  "field-budget": [
    { title: "5 میلیون تومان", id: "budget-1", value: 5000000 },
    { title: "10 میلیون تومان", id: "budget-2", value: 10000000 },
    { title: "15 میلیون تومان", id: "budget-3", value: 15000000 },
  ],
  "field-building-type": [
    {
      title: "آپارتمان",
      id: "building-1",
      img: "https://picsum.photos/id/1018/46/46 ",
    },
    {
      title: "خانه ویلایی",
      id: "building-2",
      img: "https://picsum.photos/id/1015/46/46 ",
    },
    {
      title: "مغازه",
      id: "building-3",
      img: "https://picsum.photos/id/1019/46/46 ",
    },
    {
      title: "دفتر کار",
      id: "building-4",
      img: "https://picsum.photos/id/1020/46/46 ",
    },
  ],
  "field-city": [
    {
      title: "تهران",
      id: "city-1",
      img: "../assets/images/city-1.png ",
    },
    {
      title: "اصفهان",
      id: "city-2",
      img: "../assets/images/city-2.png ",
    },
    {
      title: "شیراز",
      id: "city-3",
      img: "../assets/images/city-3.png ",
    },
    {
      title: "مشهد",
      id: "city-4",
      img: "../assets/images/city-4.png ",
    },
  ],
  "field-room": [
    { title: "۱ اتاق", id: "room-1", value: 1 },
    { title: "۲ اتاق", id: "room-2", value: 2 },
    { title: "۳ اتاق", id: "room-3", value: 3 },
    { title: "۴ اتاق به بالا", id: "room-4", value: 4 },
  ],
};

searchFrom.addEventListener("click", (event) => {
  const targetEl = event.target;
  if (targetEl.classList[0] !== "form-field") return;
  const targetType = searchData[targetEl.id];
  dropDown.children.item(0).innerHTML = "";
  targetType.map((option) => {
    dropDown.children.item(0).innerHTML += `
              <li id="${option.id}" name="$">
              ${option.img ? `<img src="${option.img}" alt="city-1" />` : ""}
                <span>${option.title}</span>
              </li>
    `;
  });
  searchFrom
    .querySelectorAll(".form-field")
    .forEach((field) => field.classList.remove("active"));

  targetEl.classList.add("active");
});

dropDown.addEventListener("click", function (event) {
  const targetEl = event.target;
  if (targetEl.tagName !== "LI") return;
  console.log(targetEl);
  const id = targetEl.id.split("-")[0];
  const value = targetEl.querySelector("span").textContent;

  const targetInput = searchFrom.querySelector(`#${id}`);
  targetInput.value = value;
});
