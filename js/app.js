document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const city = params.get('city') || '';
  const building = params.get('building') || '';
  const budget = params.get('budget') || '';
  const room = params.get('room') || '';

  const summary = document.getElementById('search-summary');
  if (summary) {
    summary.textContent = `نتایج برای ${building} در ${city} - بودجه ${budget} - ${room} اتاق`;
  }

  const properties = [
    { img: '../assets/images/city-1.png', title: 'آپارتمان', price: '۵ میلیارد', rooms: 2 },
    { img: '../assets/images/city-2.png', title: 'خانه ویلایی', price: '۳ میلیارد', rooms: 3 },
    { img: '../assets/images/city-3.png', title: 'مغازه', price: '۲ میلیارد', rooms: 1 },
  ];
  const list = document.getElementById('property-list');
  if (list) {
    properties.forEach((p) => {
      const li = document.createElement('li');
      li.className = 'property-card';
      li.innerHTML = `
        <img src="${p.img}" alt="${city}">
        <div class="property-info">
          <h3>${p.title} - ${city}</h3>
          <p>${p.price}</p>
          <p>${p.rooms} اتاق</p>
        </div>`;
      list.appendChild(li);
    });
  }
});
