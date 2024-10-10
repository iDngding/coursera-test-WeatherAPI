// src/js/main.js

// 定义城市数据数组
const cities = [
  {
    latitude: 52.367,
    longitude: 4.904,
    city: "Amsterdam",
    country: "Netherlands",
  },
  { latitude: 39.933, longitude: 32.859, city: "Ankara", country: "Turkey" },
  { latitude: 56.134, longitude: 12.945, city: "Åstorp", country: "Sweden" },
  { latitude: 37.983, longitude: 23.727, city: "Athens", country: "Greece" },
  {
    latitude: 54.597,
    longitude: -5.93,
    city: "Belfast",
    country: "Northern Ireland",
  },
  { latitude: 41.387, longitude: 2.168, city: "Barcelona", country: "Spain" },
  { latitude: 52.52, longitude: 13.405, city: "Berlin", country: "Germany" },
  { latitude: 46.948, longitude: 7.447, city: "Bern", country: "Switzerland" },
  { latitude: 43.263, longitude: -2.935, city: "Bilbao", country: "Spain" },
  { latitude: 50.847, longitude: 4.357, city: "Brussels", country: "Belgium" },
  { latitude: 47.497, longitude: 19.04, city: "Bucharest", country: "Romania" },
  { latitude: 59.329, longitude: 18.068, city: "Budapest", country: "Hungary" },
  { latitude: 51.483, longitude: -3.168, city: "Cardiff", country: "Wales" },
  { latitude: 50.937, longitude: 6.96, city: "Cologne", country: "Germany" },
  {
    latitude: 55.676,
    longitude: 12.568,
    city: "Copenhagen",
    country: "Denmark",
  },
  { latitude: 51.898, longitude: -8.475, city: "Cork", country: "Ireland" },
  { latitude: 53.349, longitude: -6.26, city: "Dublin", country: "Ireland" },
  {
    latitude: 55.953,
    longitude: -3.188,
    city: "Edinburgh",
    country: "Scotland",
  },
  { latitude: 43.7696, longitude: 11.255, city: "Florence", country: "Italy" },
  { latitude: 50.11, longitude: 8.682, city: "Frankfurt", country: "Germany" },
  {
    latitude: 43.254,
    longitude: 6.637,
    city: "French Riviera",
    country: "France",
  },
  {
    latitude: 32.65,
    longitude: -16.908,
    city: "Funchal",
    country: "Portugual",
  },
  { latitude: 36.14, longitude: -5.353, city: "Gibraltar", country: "" },
  {
    latitude: 57.708,
    longitude: 11.974,
    city: "Gothenburg",
    country: "Sweden",
  },
  { latitude: 53.548, longitude: 9.987, city: "Hamburg", country: "Germany" },
  { latitude: 60.169, longitude: 24.938, city: "Helsinki", country: "Finland" },
  { latitude: 39.02, longitude: 1.482, city: "Ibiza", country: "Spain" },
  { latitude: 50.45, longitude: 30.523, city: "Kyiv", country: "Ukraine" },
  {
    latitude: 61.115,
    longitude: 10.466,
    city: "Lillehammer",
    country: "Norway",
  },
  { latitude: 38.722, longitude: -9.139, city: "Lisbon", country: "Portugual" },
  { latitude: 51.507, longitude: -0.127, city: "London", country: "England" },
  { latitude: 40.416, longitude: -3.703, city: "Madrid", country: "Spain" },
  { latitude: 39.695, longitude: 3.017, city: "Mallorca", country: "Spain" },
  {
    latitude: 53.48,
    longitude: -2.242,
    city: "Manchester",
    country: "England",
  },
  { latitude: 43.296, longitude: 5.369, city: "Marseille", country: "France" },
  { latitude: 27.76, longitude: -15.586, city: "Maspalomas", country: "Spain" },
  { latitude: 45.464, longitude: 9.19, city: "Milan", country: "Italy" },
  { latitude: 48.135, longitude: 11.582, city: "Munich", country: "Germany" },
  { latitude: 40.851, longitude: 14.268, city: "Naples", country: "Italy" },
  { latitude: 43.034, longitude: -2.417, city: "Oñati", country: "Spain" },
  { latitude: 59.913, longitude: 10.752, city: "Oslo", country: "Norway" },
  { latitude: 48.856, longitude: 2.352, city: "Paris", country: "France" },
  {
    latitude: 50.075,
    longitude: 14.437,
    city: "Prague",
    country: "Czech Republic",
  },
  {
    latitude: 64.146,
    longitude: -21.942,
    city: "Reykjavík",
    country: "Iceland",
  },
  { latitude: 56.879, longitude: 24.603, city: "Riga", country: "Latvia" },
  { latitude: 41.902, longitude: 12.496, city: "Rome", country: "Italy" },
  {
    latitude: 39.453,
    longitude: -31.127,
    city: "Santa Cruz das Flores",
    country: "Portugual",
  },
  {
    latitude: 28.463,
    longitude: -16.251,
    city: "Santa Cruz de Tenerife",
    country: "Spain",
  },
  { latitude: 57.273, longitude: -6.215, city: "Skye", country: "Scotland" },
  { latitude: 42.697, longitude: 23.321, city: "Sofia", country: "Bulgaria" },
  { latitude: 59.329, longitude: 18.068, city: "Stockholm", country: "Sweden" },
  { latitude: 59.437, longitude: 24.753, city: "Tallinn", country: "Estonia" },
  { latitude: 18.208, longitude: 16.373, city: "Vienna", country: "Austria" },
  { latitude: 52.229, longitude: 21.012, city: "Warsaw", country: "Poland" },
  { latitude: 53.961, longitude: -1.07, city: "York", country: "England" },
  {
    latitude: 47.376,
    longitude: 8.541,
    city: "Zurich",
    country: "Switzerland",
  },
];

// 获取下拉列表元素
const citySelect = document.getElementById("citySelect");

// 遍历城市数组，创建选项
cities.forEach((city, index) => {
  const option = document.createElement("option");

  // 设置选项的显示文本
  option.text = `${city.city} - ${city.country}`;

  // 设置选项的值，这里我们可以使用城市的编号或其他唯一标识
  // 以便后续查询天气时使用
  option.value = index; // 使用索引作为值

  // 设置自定义数据属性
  option.setAttribute("data-latitude", city.latitude);
  option.setAttribute("data-longitude", city.longitude);

  // 将选项添加到下拉列表中
  citySelect.appendChild(option);
});

// 获取显示天气信息的元素
const weatherInfo = document.getElementById("weatherInfo");

// 添加事件监听器，当选择器变化时触发
citySelect.addEventListener("change", function () {
  const selectionOption = this.options[this.selectedIndex];

  // 调试代码
  const allOptions = this.options; // 获取所有选项
  console.log(allOptions); // 显示所有的 <option> 元素

  const currentIndex = this.selectedIndex; // 获取当前选中的选项的索引
  console.log(currentIndex); // 显示当前选中选项的索引，例如 2

  const latitude = selectionOption.getAttribute("data-latitude");
  const longitude = selectionOption.getAttribute("data-longitude");
  const cityName = selectionOption.text;

  // 检查是否选择了有效的城市
  if (!latitude || !longitude) {
    weatherInfo.innerHTML = "<p>请选择一个有效的城市。</p>";
    return;
  }

  // 如果有效，未跳出。则继续构建API请求URL
  const apiURL =
    "http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json";

  // 显示加载状态
  weatherInfo.innerHTML = "正在获取天气信息...";

  // 发起API请求
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒后超时

  fetch(apiURL, { signal: controller.signal })
    .then((response) => {
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error("网络响应异常");
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data, cityName);
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        console.error("请求超时");
        weatherInfo.innerHTML = "<p>请求超时，请稍后再试。</p>";
      } else {
        console.error("获取天气数据时出错:", error);
        weatherInfo.innerHTML = "<p>无法获取天气信息，请稍后再试。</p>";
      }
    });
});

// 函数1：显示天气信息
// function displayWeather(data, cityName) {
//   const dataseries = data.dataseries;

//   let html = `<h2>${cityName} 的未来几天天气</h2>`;
//   html += `<table class="table table-striped">`;
//   html += `
//       <thead>
//         <tr>
//           <th>日期</th>
//           <th>天气</th>
//           <th>最高温度 (°C)</th>
//           <th>最低温度 (°C)</th>
//           <th>最大风速 (m/s)</th>
//         </tr>
//       </thead>
//       <tbody>
//     `;

//   dataseries.forEach((day) => {
//     // 格式化日期为 YYYY-MM-DD
//     const date = day.date.toString();
//     const formattedDate = `${date.substring(0, 4)}-${date.substring(
//       4,
//       6
//     )}-${date.substring(6, 8)}`;

//     html += `
//         <tr>
//           <td>${formattedDate}</td>
//           <td>${translateWeather(day.weather)}</td>
//           <td>${day.temp2m.max}</td>
//           <td>${day.temp2m.min}</td>
//           <td>${day.wind10m_max}</td>
//         </tr>
//       `;
//   });

//   html += `</tbody></table>`;

//   weatherInfo.innerHTML = html;
// }

// 函数2：显示天气信息
function displayWeather(data, cityName) {
  const dataseries = data.dataseries;

  let html = `<h2 style="margin: 5px auto 20px;">${cityName} 的未来几天天气</h2>`;
  html += `<div class="row row-cols-1 row-cols-md-3 g-4">`; // 使用Bootstrap的响应式行和列布局

  dataseries.forEach((day) => {
    // 格式化日期为 YYYY-MM-DD
    const date = day.date.toString();
    const formattedDate = `${date.substring(0, 4)}-${date.substring(
      4,
      6
    )}-${date.substring(6, 8)}`;

    // 获取星期几的中文名称
    const weekday = getWeekday(date);

    // 获取天气类型并映射到对应的图标文件名
    const weatherType = day.weather.toLowerCase(); // 转换为小写以匹配图标文件名
    const iconPath = `images/${weatherType}.png`;

    // 构建卡片HTML
    html += `
      <div class="col">
        <div class="card h-100">
          <div class="card-body text-center">
            <h5 class="card-title date-title">${formattedDate} ${weekday}</h5>
            <img src="${iconPath}" class="card-img-top" alt="${weatherType}" style="width: 200px; height: 200px; object-fit: contain; margin: 5px auto 0;">
            <p class="card-text weather-title">${translateWeather(day.weather)}</p>
            <p class="card-text">最高温度: ${day.temp2m.max}°C</p>
            <p class="card-text">最低温度: ${day.temp2m.min}°C</p>
            <p class="card-text">最大风速: ${day.wind10m_max} m/s</p>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`; // 关闭row

  weatherInfo.innerHTML = html;
}

// 函数：翻译天气描述
function translateWeather(weather) {
  const translations = {
    clear: "晴",
    ishower: "局部阵雨",
    pcloudy: "部分多云",
    cloudy: "多云",
    mcloudy: "阴天",
    rainsnow: "雨夹雪",
    lightrain: "小雨",
    lightsnow: "小雪",
    tsrain: "雷雨",
    tstorm: "雷暴",
    oshower: "偶尔阵雨",
    windy: "有风",
    fog: "雾",
    // 根据需要添加其他天气描述的翻译
  };

  return translations[weather] || weather;
}

// 函数：获取星期几的中文名称
function getWeekday(dateStr) {
  // 将YYYYMMDD格式的字符串转换为Date对象
  const year = parseInt(dateStr.substring(0, 4));
  const month = parseInt(dateStr.substring(4, 6)) - 1; // 月份从0开始
  const day = parseInt(dateStr.substring(6, 8));
  const date = new Date(year, month, day);

  // 获取星期几（0=星期日, 1=星期一, ..., 6=星期六）
  const weekdayNumber = date.getDay();

  // 星期几的中文名称映射
  const weekdays = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];

  return weekdays[weekdayNumber];
}
