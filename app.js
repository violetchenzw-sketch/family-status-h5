const cityCatalog = {
  武汉: {
    province: "湖北 · 7/31入住 · 8/2退房",
    roman: "WUHAN 07.31",
    scene: "./assets/scene-wuhan.svg",
    couple: "./assets/couple-sprites.svg",
    tripStart: "2026-07-31",
    tagline: "从江汉路的老建筑走到东湖晚风，把盛夏武汉排成我们的双人主线。",
    hotel: "卡曼时尚民宿（武汉王家湾地铁站店）",
    hotelAddress: "龙阳大道19号1楼",
    hotelPoint: { x: 34, y: 55 },
    palette: ["#8f68de", "#f06bb5"],
    weather: ["☀ 盛夏 35°", "🌦 33°", "☀ 36°", "☁ 34°", "☀ 35°"],
    points: [
      p("wh-1", "黎黄陂路街头博物馆", "江岸区", 48, 40, "拍照", 1, "红砖洋房与梧桐街很适合情侣散步", "路牌与老建筑同框，傍晚光线最好", "小红书热议"),
      p("wh-2", "江汉路步行街", "江汉区", 49, 49, "街区", 2, "老建筑、商场和夜景集中，适合第一晚", "江汉关方向拍城市纵深", "城市推荐"),
      p("wh-3", "东湖听涛景区", "武昌区", 76, 48, "景点", 3, "傍晚看湖面和晚霞，体感比市中心舒服", "湖边栈道拍牵手背影", "经典必去"),
      p("wh-4", "东湖磨山·楚城", "武昌区", 82, 55, "景点", 4, "山水与楚文化建筑适合安排半天", "楚城城门前低机位合照", "情侣推荐"),
      p("wh-5", "昙华林", "武昌区", 59, 61, "街区", 5, "山坡街巷、咖啡店和小店密集", "利用坡道与屋顶拍层次", "小红书热议"),
      p("wh-6", "粮道街", "武昌区", 61, 64, "街区", 6, "早餐和小吃集中，适合上午慢慢吃", "手拿小吃拍烟火感街景", "必吃街区"),
      p("wh-7", "古德寺", "江岸区", 58, 34, "建筑", 7, "混合风格建筑辨识度很高", "回廊与穹顶做对称构图", "拍照热门"),
      p("wh-8", "汉口江滩", "江岸区", 47, 36, "景点", 8, "晚上沿江散步，看灯光与轮渡", "蓝调时刻拍江景剪影", "夜游推荐"),
      p("wh-f1", "三镇民生甜食馆", "江汉区", 50, 50, "餐厅", 1, "一次吃到热干面、豆皮和糊米酒", "早餐铺门口拍武汉烟火气", "早餐推荐"),
      p("wh-f2", "老通城豆皮", "江汉区", 52, 49, "餐厅", 2, "三鲜豆皮是武汉经典早餐", "切面近拍糯米与馅料层次", "必吃小店"),
      p("wh-f3", "夏氏砂锅", "江岸区", 48, 44, "餐厅", 3, "适合两个人一起点砂锅和藕汤", "砂锅上桌时拍蒸汽", "本地口碑"),
      p("wh-f4", "靓靓蒸虾", "江岸区", 54, 40, "餐厅", 4, "夏天来武汉可以安排一顿小龙虾", "紫色夜景下拍双人碰杯", "夏季必吃")
    ]
  },
  杭州: {
    province: "浙江",
    roman: "HANGZHOU",
    scene: "./assets/scene-hangzhou.svg",
    couple: "./assets/couple-sprites-hangzhou.svg",
    tagline: "绕开人潮，从湖边、茶山一路走进老杭州。",
    hotel: "龙翔桥附近",
    hotelPoint: { x: 51, y: 49 },
    palette: ["#4eaa70", "#c7dd76"],
    weather: ["☁ 25°", "🌦 23°", "☀ 27°", "☁ 24°", "☀ 28°"],
    points: [
      p("hz-1", "曲院风荷", "西湖区", 34, 39, "景点", 1, "清晨荷塘最安静", "曲桥做前景拍荷叶", "经典必去", "linear-gradient(145deg,#638b69,#b9c77b)"),
      p("hz-2", "北山街", "西湖区", 43, 37, "拍照", 2, "梧桐、民国建筑和湖景", "临湖长椅拍背影", "小红书热议", "linear-gradient(145deg,#5e7b66,#d3a56e)"),
      p("hz-3", "法喜寺", "西湖区", 20, 62, "景点", 3, "黄墙与山林很出片", "台阶下向上拍屋檐", "抖音热榜", "linear-gradient(145deg,#d49b3a,#8b694b)"),
      p("hz-4", "满觉陇", "西湖区", 28, 60, "街区", 4, "茶园小路适合慢走", "茶田曲线做引导", "城市推荐", "linear-gradient(145deg,#517555,#c5aa69)"),
      p("hz-5", "小河直街", "拱墅区", 55, 25, "街区", 5, "水巷和手作小店", "桥洞框住白墙乌瓦", "小红书热议", "linear-gradient(145deg,#63818b,#c3b9a3)"),
      p("hz-6", "十五奎巷", "上城区", 58, 59, "街区", 6, "老社区连着城隍阁", "坡道尽头拍望仙阁", "本地散步", "linear-gradient(145deg,#a96e53,#d7bc86)"),
      p("hz-7", "中国美术学院象山", "西湖区", 35, 76, "建筑", 7, "王澍建筑与山水校园", "长廊重复框景", "建筑推荐", "linear-gradient(145deg,#6d6256,#bb9e78)"),
      p("hz-8", "浴鹄湾", "西湖区", 35, 51, "景点", 8, "比西湖主线清净许多", "霁虹桥倒影", "本地私藏", "linear-gradient(145deg,#597d75,#d5c89b)"),
      p("hz-f1", "福缘居", "上城区", 55, 54, "餐厅", 1, "脆皮大肠与油淋鸡", "木桌靠窗自然光", "必吃榜", "linear-gradient(145deg,#9b3d2f,#dc965a)"),
      p("hz-f2", "新周记", "上城区", 59, 48, "餐厅", 2, "老底子杭帮菜", "浓油赤酱近景", "本地口碑", "linear-gradient(145deg,#86432d,#d4a05b)"),
      p("hz-f3", "方老大面", "上城区", 61, 60, "餐厅", 3, "腰花番茄汁拌川", "厨房窗口拍锅气", "必吃小店", "linear-gradient(145deg,#a64a31,#e4a95a)"),
      p("hz-f4", "游埠豆浆", "上城区", 55, 64, "餐厅", 4, "咸豆浆配油条烧饼", "清晨摊位烟火感", "早餐推荐", "linear-gradient(145deg,#8c513a,#d7ad69)")
    ]
  },
  北京: {
    province: "北京",
    roman: "BEIJING",
    scene: "./assets/scene-beijing.svg",
    couple: "./assets/couple-sprites-beijing.svg",
    tagline: "从胡同晨光到中轴夜色，解锁一场古今交错的双人旅行。",
    hotel: "王府井附近",
    hotelPoint: { x: 52, y: 50 },
    palette: ["#dc3f48", "#f3be55"],
    weather: ["☀ 32°", "☁ 30°", "🌦 28°", "☀ 33°", "☁ 31°"],
    points: [
      p("bj-1", "故宫博物院", "东城区", 49, 45, "景点", 1, "红墙金瓦是北京最经典的双人主线", "午门侧边利用红墙留白", "经典必去"),
      p("bj-2", "景山公园", "西城区", 49, 39, "景点", 2, "登高俯瞰故宫中轴线", "万春亭前拍城市全景", "日落推荐"),
      p("bj-3", "什刹海", "西城区", 42, 37, "街区", 3, "胡同、湖面和夜晚小店适合散步", "银锭桥拍湖面落日", "情侣推荐"),
      p("bj-4", "五道营胡同", "东城区", 55, 34, "街区", 4, "咖啡馆与安静胡同适合慢逛", "灰墙树影下拍街头感", "小红书热议"),
      p("bj-5", "天坛公园", "东城区", 54, 67, "景点", 5, "古建与松柏构成感很强", "祈年殿台阶下低机位", "经典必去"),
      p("bj-6", "国家博物馆", "东城区", 51, 54, "室内", 6, "炎热或下雨天安排最舒服", "中央大厅拍对称构图", "室内推荐"),
      p("bj-7", "鼓楼东大街", "东城区", 48, 33, "街区", 7, "老城与年轻小店融合", "鼓楼作为街道尽头背景", "城市漫步"),
      p("bj-8", "亮马河国际风情水岸", "朝阳区", 73, 42, "景点", 8, "夜景和河岸氛围适合约会", "桥上拍水面灯光倒影", "夜游推荐"),
      p("bj-f1", "四季民福烤鸭", "东城区", 51, 47, "餐厅", 1, "烤鸭和京味菜适合两个人分享", "靠窗位置拍故宫与烤鸭", "必吃榜"),
      p("bj-f2", "方砖厂69号炸酱面", "东城区", 48, 35, "餐厅", 2, "胡同里的北京家常味", "小院门头与面碗同框", "必吃小店"),
      p("bj-f3", "尹三豆汁", "东城区", 55, 58, "餐厅", 3, "想挑战老北京早餐可以尝试", "焦圈、咸菜与豆汁俯拍", "本地早餐"),
      p("bj-f4", "牛街清真美食", "西城区", 39, 61, "餐厅", 4, "牛肉饼、糖火烧和奶酪都值得吃", "边走边拍小吃组合", "美食街区")
    ]
  },
  南京: {
    province: "江苏",
    roman: "NANJING",
    scene: "./assets/scene-nanjing.svg",
    couple: "./assets/couple-sprites-nanjing.svg",
    tagline: "梧桐、城墙和秦淮灯影，把六朝浪漫写进两个人的路线。",
    hotel: "新街口附近",
    hotelPoint: { x: 50, y: 50 },
    palette: ["#397fb7", "#78c9e9"],
    weather: ["☀ 34°", "🌦 31°", "☁ 32°", "☀ 35°", "☁ 33°"],
    points: [
      p("nj-1", "南京博物院", "玄武区", 63, 47, "室内", 1, "民国馆和馆藏适合避暑慢逛", "民国街景内拍复古合照", "经典必去"),
      p("nj-2", "颐和路公馆区", "鼓楼区", 43, 39, "拍照", 2, "梧桐与民国建筑很有南京气质", "路口长焦拍梧桐纵深", "小红书热议"),
      p("nj-3", "明孝陵石象路", "玄武区", 71, 36, "景点", 3, "神道石刻和树荫适合清晨", "石象之间拍并肩背影", "经典必去"),
      p("nj-4", "陵园路梧桐大道", "玄武区", 69, 41, "拍照", 4, "南京代表性的浪漫梧桐路", "清晨在斑马线边缘拍摄", "情侣推荐"),
      p("nj-5", "老门东", "秦淮区", 54, 67, "街区", 5, "古巷、小吃与夜景可以一起安排", "牌坊与灯笼做背景", "夜游推荐"),
      p("nj-6", "南京城墙·解放门", "玄武区", 54, 38, "景点", 6, "可以同时看到城墙和玄武湖", "城墙砖道拍牵手远景", "城市推荐"),
      p("nj-7", "先锋书店五台山店", "鼓楼区", 43, 48, "室内", 7, "地下空间和十字架入口很特别", "长坡入口拍电影感背影", "文艺推荐"),
      p("nj-8", "夫子庙秦淮河", "秦淮区", 55, 63, "景点", 8, "建议晚上看灯影与游船", "文德桥上拍河面倒影", "经典夜游"),
      p("nj-f1", "李记清真馆", "秦淮区", 51, 59, "餐厅", 1, "锅贴和牛肉馄饨很受欢迎", "锅贴焦脆面近拍", "必吃小店"),
      p("nj-f2", "芳婆糕团店", "秦淮区", 50, 54, "餐厅", 2, "乌饭团、糖芋苗适合早餐", "早餐组合放在一起俯拍", "本地早餐"),
      p("nj-f3", "章云板鸭", "秦淮区", 52, 57, "餐厅", 3, "南京盐水鸭可以带走当伴手礼", "切好的鸭肉自然光近拍", "本地口碑"),
      p("nj-f4", "南京大牌档", "鼓楼区", 47, 47, "餐厅", 4, "一次尝试多种南京传统菜", "灯笼背景下拍双人晚餐", "人气餐厅")
    ]
  }
};

function p(id, name, area, x, y, kind, rank, reason, photoTip, source, gradient) {
  return { id, name, area, x, y, kind, rank, reason, photoTip, source, gradient: pixelGradient(id, kind), duration: kind === "餐厅" ? 70 : 90 };
}

function pixelGradient(id, kind) {
  const cityKey = id.split("-")[0];
  const cityPalettes = {
    wh: kind === "餐厅" ? [["#5c246f", "#f06bb5"], ["#6a315f", "#ffd166"]] : [["#38236c", "#8c63dd"], ["#253a72", "#65e0d5"], ["#5a287f", "#d06fe2"]],
    bj: kind === "餐厅" ? [["#71151c", "#f3be55"], ["#8f2026", "#ff8c74"]] : [["#67111a", "#dc3f48"], ["#8f1d28", "#f3be55"], ["#4d0b12", "#b92f39"]],
    hz: kind === "餐厅" ? [["#285d40", "#c7dd76"], ["#1c604d", "#6ed6ba"]] : [["#164a3d", "#4eaa70"], ["#285c4b", "#92cf82"], ["#123e36", "#6ed6ba"]],
    nj: kind === "餐厅" ? [["#173e65", "#78c9e9"], ["#29477a", "#9a9ee9"]] : [["#12385d", "#397fb7"], ["#16446e", "#78c9e9"], ["#242f6e", "#7795dc"]]
  };
  const palettes = cityPalettes[cityKey] || cityPalettes.wh;
  const index = [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % palettes.length;
  return `linear-gradient(135deg,${palettes[index][0]},${palettes[index][1]})`;
}

const state = {
  city: "武汉",
  cityOrder: ["武汉", "北京", "南京", "杭州"],
  days: 3,
  selectedDay: 0,
  plans: [],
  saved: {},
  imported: {},
  filter: "全部",
  sketchVariant: 0,
  discoverOffset: 0,
  automation: true,
  cityVersion: 4
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const els = {};
let toastTimer;

function loadState() {
  let savedVersion = null;
  try {
    const saved = JSON.parse(localStorage.getItem("manyoujian-state") || "null");
    savedVersion = saved?.cityVersion ?? null;
    if (saved) Object.assign(state, saved, { plans: [] });
  } catch (_) {}
  if (savedVersion !== 4) {
    state.city = "武汉";
    state.cityVersion = 4;
  }
  state.cityOrder = ["武汉", "北京", "南京", "杭州"];
  Object.keys(cityCatalog).forEach((city) => {
    if (!Array.isArray(state.saved[city])) state.saved[city] = cityCatalog[city].points.filter((item) => item.kind !== "餐厅").slice(0, 5).map((item) => item.id);
    if (!Array.isArray(state.imported[city])) state.imported[city] = [];
  });
  if (!cityCatalog[state.city]) state.city = "武汉";
  saveState();
}

function saveState() {
  const keep = { ...state, plans: [] };
  localStorage.setItem("manyoujian-state", JSON.stringify(keep));
}

function cacheElements() {
  ["cityStrip", "cityProvince", "heroCity", "cityTagline", "cityScene", "coupleImage", "savedCount", "foodCount", "updateText", "linkForm", "shareLink", "pasteButton", "analyzeButton", "recognitionResult", "daysMinus", "daysPlus", "daysOutput", "hotelInput", "hotelHint", "generateButton", "routeCity", "dayTabs", "dayDate", "dayTheme", "weatherChip", "routeMap", "mapNote", "distanceMetric", "stopsMetric", "paceMetric", "timeline", "recommendList", "refreshDiscover", "pocketList", "filterButton", "citySheetBackdrop", "citySheet", "cityOptions", "sketchModal", "closeSketch", "sketchCanvas", "sketchButton", "regenerateSketch", "downloadSketch", "toast", "automationToggle", "sharePlanButton"].forEach((id) => els[id] = document.getElementById(id));
}

function init() {
  loadState();
  cacheElements();
  bindEvents();
  runDailyRefresh();
  renderAll();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}

function bindEvents() {
  els.cityStrip.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.city) switchCity(button.dataset.city);
    if (button.dataset.addCity !== undefined) openCitySheet();
  });
  els.cityOptions.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-city]");
    if (!button) return;
    if (!state.cityOrder.includes(button.dataset.city)) state.cityOrder.push(button.dataset.city);
    closeCitySheet();
    switchCity(button.dataset.city);
  });
  els.citySheetBackdrop.addEventListener("click", closeCitySheet);
  $$('[data-close-sheet]').forEach((button) => button.addEventListener("click", closeCitySheet));
  els.daysMinus.addEventListener("click", () => changeDays(-1));
  els.daysPlus.addEventListener("click", () => changeDays(1));
  els.generateButton.addEventListener("click", () => {
    cityCatalog[state.city].hotel = els.hotelInput.value.trim() || cityCatalog[state.city].hotel;
    state.plans = buildPlans();
    state.selectedDay = 0;
    renderPlan();
    saveState();
    showToast("双人任务已重排，顺路值 +20");
    document.getElementById("routeSection").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  els.dayTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-day]");
    if (!button) return;
    state.selectedDay = Number(button.dataset.day);
    renderPlan();
  });
  els.linkForm.addEventListener("submit", handleLinkImport);
  els.pasteButton.addEventListener("click", pasteLink);
  els.refreshDiscover.addEventListener("click", () => {
    state.discoverOffset += 2;
    renderRecommendations();
    showToast("换了一批今天值得去的地方");
  });
  els.recommendList.addEventListener("click", toggleRecommendation);
  els.filterButton.addEventListener("click", rotateFilter);
  els.sketchButton.addEventListener("click", openSketch);
  els.closeSketch.addEventListener("click", closeSketch);
  els.sketchModal.addEventListener("click", (event) => { if (event.target === els.sketchModal) closeSketch(); });
  els.regenerateSketch.addEventListener("click", () => { state.sketchVariant += 1; drawSketch(); });
  els.downloadSketch.addEventListener("click", downloadSketch);
  els.automationToggle.addEventListener("click", toggleAutomation);
  els.sharePlanButton.addEventListener("click", sharePlan);
  $$(".bottom-nav button[data-target]").forEach((button) => button.addEventListener("click", () => {
    $$(".bottom-nav button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  $$('[data-scroll="top"]').forEach((button) => button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" })));
  window.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeSketch(); closeCitySheet(); } });
}

function renderAll() {
  const city = cityCatalog[state.city];
  document.body.dataset.city = state.city;
  els.cityProvince.textContent = city.province;
  els.heroCity.textContent = state.city;
  els.cityTagline.textContent = city.tagline;
  els.cityScene.src = city.scene;
  els.cityScene.alt = `${state.city}像素城市特色场景`;
  els.coupleImage.src = city.couple;
  els.routeCity.textContent = state.city;
  els.hotelInput.value = city.hotel;
  els.hotelHint.textContent = state.city === "武汉" ? `${city.hotelAddress} · 7/31 14:00后入住 · 8/2 12:00前退房` : "会从这里出发和收尾";
  els.daysOutput.innerHTML = `${state.days} <small>天</small>`;
  $(".hero").style.removeProperty("background");
  $(".hero-stamp span").textContent = city.roman;
  renderCityStrip();
  renderCounts();
  renderCityOptions();
  state.plans = buildPlans();
  state.selectedDay = Math.min(state.selectedDay, state.plans.length - 1);
  renderPlan();
  renderRecommendations();
  renderPocket();
  els.automationToggle.classList.toggle("is-on", state.automation);
  els.automationToggle.setAttribute("aria-checked", String(state.automation));
}

function renderCityStrip() {
  els.cityStrip.innerHTML = state.cityOrder.map((city) => `<button class="city-tab ${city === state.city ? "is-active" : ""}" data-city="${city}" type="button">${city}</button>`).join("") + `<button class="city-tab add-city" data-add-city type="button" aria-label="添加城市">＋</button>`;
}

function renderCityOptions() {
  els.cityOptions.innerHTML = Object.keys(cityCatalog).map((city) => `<button class="city-option ${state.cityOrder.includes(city) ? "is-added" : ""}" data-city="${city}" type="button"><b>${city}</b><small>${state.cityOrder.includes(city) ? "已在清单" : cityCatalog[city].province + " · 添加"}</small></button>`).join("");
}

function renderCounts() {
  const city = cityCatalog[state.city];
  const ids = new Set(state.saved[state.city]);
  const imported = state.imported[state.city] || [];
  els.savedCount.textContent = ids.size + imported.length;
  els.foodCount.textContent = city.points.filter((point) => point.kind === "餐厅" && ids.has(point.id)).length || city.points.filter((point) => point.kind === "餐厅").length;
}

function switchCity(city) {
  if (!cityCatalog[city]) return;
  state.city = city;
  state.selectedDay = 0;
  els.recognitionResult.hidden = true;
  saveState();
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeDays(delta) {
  state.days = Math.max(1, Math.min(5, state.days + delta));
  els.daysOutput.innerHTML = `${state.days} <small>天</small>`;
  state.plans = buildPlans();
  state.selectedDay = Math.min(state.selectedDay, state.days - 1);
  renderPlan();
  saveState();
}

function allCityPoints(cityName = state.city) {
  return [...cityCatalog[cityName].points, ...(state.imported[cityName] || [])];
}

function buildPlans() {
  const city = cityCatalog[state.city];
  const all = allCityPoints();
  const savedIds = new Set(state.saved[state.city]);
  const attractions = all.filter((item) => item.kind !== "餐厅").sort((a, b) => (savedIds.has(b.id) - savedIds.has(a.id)) || a.rank - b.rank);
  const restaurants = all.filter((item) => item.kind === "餐厅").sort((a, b) => a.rank - b.rank);
  const target = Math.min(attractions.length, Math.max(state.days * 3, 4));
  const candidates = attractions.slice(0, target);
  const clusters = spatialClusters(candidates, state.days);
  const usedRestaurants = new Set();

  return clusters.map((cluster, dayIndex) => {
    const center = centroid(cluster.length ? cluster : [city.hotelPoint]);
    let meal = restaurants.filter((item) => !usedRestaurants.has(item.id)).sort((a, b) => distance(a, center) - distance(b, center))[0];
    if (!meal) meal = restaurants[dayIndex % restaurants.length];
    if (meal) usedRestaurants.add(meal.id);
    const routePoints = nearestRoute(city.hotelPoint, [...cluster, ...(meal ? [meal] : [])]);
    if (meal && routePoints.length > 2) {
      const mealIndex = routePoints.findIndex((item) => item.id === meal.id);
      const wantedIndex = Math.min(2, routePoints.length - 1);
      routePoints.splice(mealIndex, 1);
      routePoints.splice(wantedIndex, 0, meal);
    }
    const area = dominantArea(cluster);
    const themes = ["烟火慢游线", "文艺散步线", "风景松弛线", "古城寻味线", "在地生活线"];
    const totalDistance = routeDistance(city.hotelPoint, routePoints) * .18;
    return {
      day: dayIndex + 1,
      title: `${area.replace(/区|市|古城/g, "") || state.city}${themes[dayIndex % themes.length]}`,
      points: routePoints,
      distance: Math.max(3.2, totalDistance),
      saving: 23 + ((cluster.length * 7 + dayIndex * 5) % 16),
      weather: city.weather[dayIndex % city.weather.length]
    };
  });
}

function spatialClusters(points, k) {
  if (!points.length) return Array.from({ length: k }, () => []);
  const count = Math.min(k, points.length);
  const sorted = [...points].sort((a, b) => a.x - b.x);
  let centers = Array.from({ length: count }, (_, i) => ({ ...sorted[Math.floor(i * (sorted.length - 1) / Math.max(1, count - 1))] }));
  let groups = [];
  for (let pass = 0; pass < 7; pass++) {
    groups = Array.from({ length: count }, () => []);
    points.forEach((point) => {
      const index = centers.reduce((best, center, i) => distance(point, center) < distance(point, centers[best]) ? i : best, 0);
      groups[index].push(point);
    });
    centers = groups.map((group, index) => group.length ? centroid(group) : centers[index]);
  }
  groups.sort((a, b) => centroid(a.length ? a : [{ x: 0, y: 0 }]).x - centroid(b.length ? b : [{ x: 0, y: 0 }]).x);
  while (groups.length < k) groups.push([]);
  return groups;
}

function nearestRoute(start, points) {
  const rest = [...points];
  const result = [];
  let current = start;
  while (rest.length) {
    rest.sort((a, b) => distance(current, a) - distance(current, b));
    current = rest.shift();
    result.push(current);
  }
  return result;
}

function centroid(points) {
  return points.reduce((sum, item) => ({ x: sum.x + item.x / points.length, y: sum.y + item.y / points.length }), { x: 0, y: 0 });
}
function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
function routeDistance(start, points) { return points.reduce((acc, point, i) => acc + distance(i ? points[i - 1] : start, point), 0); }
function dominantArea(points) {
  const counts = points.reduce((map, item) => ({ ...map, [item.area]: (map[item.area] || 0) + 1 }), {});
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0] || "城市";
}

function renderPlan() {
  if (!state.plans.length) return;
  els.dayTabs.innerHTML = state.plans.map((plan, index) => `<button class="day-tab ${index === state.selectedDay ? "is-active" : ""}" data-day="${index}" type="button" role="tab" aria-selected="${index === state.selectedDay}"><b>DAY ${index + 1}</b>${getMonthDay(index)} ${getWeekday(index)}</button>`).join("");
  const plan = state.plans[state.selectedDay];
  els.dayDate.textContent = `DAY ${plan.day} · ${getMonthDay(state.selectedDay)} ${getWeekday(state.selectedDay)}`;
  els.dayTheme.textContent = plan.title;
  els.weatherChip.textContent = plan.weather;
  els.distanceMetric.textContent = `${plan.distance.toFixed(1)} km`;
  els.stopsMetric.textContent = `${plan.points.length} 站`;
  els.paceMetric.textContent = plan.points.length <= 4 ? "刚刚好" : "较充实";
  els.mapNote.textContent = `少绕路约 ${plan.saving}%`;
  renderMap(plan);
  renderTimeline(plan);
}

function getWeekday(offset) {
  const date = getTripDate(offset);
  return date.toLocaleDateString("zh-CN", { weekday: "short" }).replace("周", "周");
}

function getMonthDay(offset) {
  const date = getTripDate(offset);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function getTripDate(offset) {
  const start = cityCatalog[state.city].tripStart;
  const date = start ? new Date(`${start}T12:00:00`) : new Date();
  date.setDate(date.getDate() + offset);
  return date;
}

function renderMap(plan) {
  const hotel = cityCatalog[state.city].hotelPoint;
  const all = [hotel, ...plan.points];
  const minX = Math.min(...all.map((item) => item.x)) - 7;
  const maxX = Math.max(...all.map((item) => item.x)) + 7;
  const minY = Math.min(...all.map((item) => item.y)) - 7;
  const maxY = Math.max(...all.map((item) => item.y)) + 7;
  const sx = (x) => 32 + ((x - minX) / Math.max(1, maxX - minX)) * 276;
  const sy = (y) => 24 + ((y - minY) / Math.max(1, maxY - minY)) * 170;
  const coords = [{ ...hotel, name: "住宿" }, ...plan.points].map((item) => ({ ...item, px: sx(item.x), py: sy(item.y) }));
  const routePath = coords.map((item, index) => `${index ? "L" : "M"} ${item.px.toFixed(1)} ${item.py.toFixed(1)}`).join(" ");
  const roads = `<path class="road" d="M-10 58 C72 38 100 86 178 62 S276 36 355 62"/><path class="road" d="M48 -10 C65 55 102 87 91 232"/><path class="road" d="M248 -10 C220 55 272 119 236 232"/><path class="water" d="M-15 187 C65 151 125 210 208 176 S286 143 355 163"/>`;
  const stops = coords.map((item, index) => {
    if (!index) return `<circle class="hotel-dot" cx="${item.px}" cy="${item.py}" r="8"/><text class="map-label" x="${item.px + 11}" y="${item.py + 3}">住</text>`;
    const anchor = item.px > 235 ? "end" : "start";
    const labelX = item.px > 235 ? item.px - 13 : item.px + 13;
    return `<circle class="stop-dot" cx="${item.px}" cy="${item.py}" r="10"/><text class="stop-number" x="${item.px}" y="${item.py + .5}">${index}</text><text class="map-label" text-anchor="${anchor}" x="${labelX}" y="${item.py + 3}">${shortName(item.name, 7)}</text>`;
  }).join("");
  els.routeMap.innerHTML = `${roads}<path class="route-under" d="${routePath}"/><path class="route-line" d="${routePath}"/>${stops}`;
}

function renderTimeline(plan) {
  const times = ["09:30", "11:10", "12:40", "15:10", "17:20", "19:00"];
  els.timeline.innerHTML = plan.points.map((point, index) => `<li class="timeline-item"><span class="timeline-time">${point.kind === "餐厅" ? (index > 2 ? "18:00" : "12:30") : times[index]}</span><span class="timeline-dot">${index + 1}</span><div class="timeline-main"><b>${point.name}</b><span>${point.reason} · ${point.photoTip}</span></div><span class="timeline-tag ${point.kind === "餐厅" ? "food" : ""}">${point.kind}</span></li>`).join("");
}

function renderRecommendations() {
  const points = allCityPoints().filter((item) => !state.saved[state.city].includes(item.id));
  const source = points.length ? points : allCityPoints();
  const rotated = [...source.slice(state.discoverOffset % source.length), ...source.slice(0, state.discoverOffset % source.length)].slice(0, 5);
  els.recommendList.innerHTML = rotated.map((point, index) => `<article class="recommend-card"><div class="recommend-image" style="background:${point.gradient}"><span class="recommend-rank">TOP ${point.rank || index + 1}</span><button class="save-button ${state.saved[state.city].includes(point.id) ? "is-saved" : ""}" data-save-id="${point.id}" type="button" aria-label="收藏${point.name}">${state.saved[state.city].includes(point.id) ? "♥" : "♡"}</button><span>${point.area} · ${point.kind}</span></div><div class="recommend-copy"><b>${point.name}</b><p>${point.reason}</p><div class="recommend-meta"><span>${point.source}</span><strong>${point.kind === "餐厅" ? "想吃" : "值得去"}</strong></div></div></article>`).join("");
}

function toggleRecommendation(event) {
  const button = event.target.closest("button[data-save-id]");
  if (!button) return;
  const id = button.dataset.saveId;
  const list = state.saved[state.city];
  const index = list.indexOf(id);
  if (index >= 0) list.splice(index, 1); else list.push(id);
  state.plans = buildPlans();
  saveState();
  renderCounts();
  renderRecommendations();
  renderPocket();
  renderPlan();
  showToast(index >= 0 ? "已从共享背包移除" : "收藏成功！亲密值 +1");
}

function renderPocket() {
  const savedIds = new Set(state.saved[state.city]);
  let items = allCityPoints().filter((item) => savedIds.has(item.id) || item.imported);
  if (state.filter === "景点") items = items.filter((item) => item.kind !== "餐厅");
  if (state.filter === "餐厅") items = items.filter((item) => item.kind === "餐厅");
  if (state.filter === "笔记") items = items.filter((item) => item.imported);
  els.filterButton.textContent = `${state.filter} ⌄`;
  els.pocketList.innerHTML = items.length ? items.map((point) => `<article class="pocket-item"><div class="pocket-image" style="background:${point.gradient}">${point.source}</div><div class="pocket-main"><small>${point.area} · ${point.kind}</small><b>${point.name}</b><span>拍照点：${point.photoTip}</span></div><span class="pocket-state">${point.imported ? "已识别" : "已收藏"}</span></article>`).join("") : `<div class="empty-state">这个分类还没有内容，先去收藏几处吧。</div>`;
}

function rotateFilter() {
  const filters = ["全部", "景点", "餐厅", "笔记"];
  state.filter = filters[(filters.indexOf(state.filter) + 1) % filters.length];
  renderPocket();
}

async function pasteLink() {
  try {
    const text = await navigator.clipboard.readText();
    if (!text) throw new Error("empty");
    els.shareLink.value = text;
    showToast("链接已粘贴");
  } catch (_) {
    els.shareLink.value = "https://www.xiaohongshu.com/explore/旅行收藏示例";
    showToast("没有读取到剪贴板，已放入演示链接");
  }
}

function handleLinkImport(event) {
  event.preventDefault();
  const link = els.shareLink.value.trim();
  if (!link) {
    els.shareLink.focus();
    showToast("先粘贴一个分享链接吧");
    return;
  }
  const platform = /douyin|v\.douyin/.test(link) ? "抖音" : /xiaohongshu|xhslink/.test(link) ? "小红书" : "旅行笔记";
  els.recognitionResult.hidden = false;
  els.recognitionResult.innerHTML = `<div class="recognizing"><span class="loader"></span><span>正在读取${platform}内容，识别地点与拍照机位…</span></div>`;
  els.analyzeButton.disabled = true;
  setTimeout(() => finishRecognition(platform), 1100);
}

function finishRecognition(platform) {
  const city = cityCatalog[state.city];
  const mocks = city.points.filter((item) => item.kind !== "餐厅");
  const base = mocks[(state.imported[state.city].length + 3) % mocks.length];
  const item = {
    ...base,
    id: `import-${state.city}-${Date.now()}`,
    name: base.name,
    source: `${platform}笔记`,
    imported: true,
    rank: 0,
    x: base.x + (Math.random() * 2 - 1),
    y: base.y + (Math.random() * 2 - 1)
  };
  state.imported[state.city].unshift(item);
  state.saved[state.city].push(item.id);
  els.recognitionResult.innerHTML = `<article class="recognized-card"><div class="recognized-cover" style="background:${item.gradient}">封面已保存</div><div class="recognized-copy"><small>${platform} · 识别完成</small><b>${item.name}</b><span>地点：${item.area}<br>机位：${item.photoTip}</span></div><span class="confidence">96%可信</span></article>`;
  els.analyzeButton.disabled = false;
  els.shareLink.value = "";
  state.plans = buildPlans();
  saveState();
  renderCounts();
  renderPlan();
  renderPocket();
  showToast("新地点解锁！已放进共享背包");
}

function openCitySheet() {
  renderCityOptions();
  els.citySheetBackdrop.hidden = false;
  els.citySheet.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeCitySheet() {
  els.citySheetBackdrop.hidden = true;
  els.citySheet.hidden = true;
  if (els.sketchModal.hidden) document.body.style.overflow = "";
}

function openSketch() {
  els.sketchModal.hidden = false;
  document.body.style.overflow = "hidden";
  drawSketch();
}
function closeSketch() {
  els.sketchModal.hidden = true;
  if (els.citySheet.hidden) document.body.style.overflow = "";
}

function drawSketch() {
  const canvas = els.sketchCanvas;
  const ctx = canvas.getContext("2d");
  const plan = state.plans[state.selectedDay];
  const city = cityCatalog[state.city];
  const seed = state.sketchVariant + state.selectedDay * 11 + state.city.length;
  const rnd = mulberry32(seed);
  // Canvas 的文字对齐、旋转等状态会跨重绘保留。每次先完全复位，
  // 避免手机浏览器第二次点击“换个排版”时标题向左偏移并被裁掉。
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
  ctx.setLineDash([]);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff9eb";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = .08;
  ctx.fillStyle = "#213029";
  for (let i = 0; i < 900; i++) ctx.fillRect(rnd() * 1080, rnd() * 1440, rnd() * 2 + .5, rnd() * 2 + .5);
  ctx.globalAlpha = 1;

  ctx.save();
  ctx.translate(72, 70);
  ctx.rotate(-.015);
  ctx.fillStyle = city.palette[0];
  roundRect(ctx, 0, 0, 936, 238, 38);
  ctx.fill();
  roughStroke(ctx, 0, 0, 936, 238, 38, "#213029", 6);
  ctx.fillStyle = "#213029";
  ctx.font = '900 34px "PingFang SC", sans-serif';
  ctx.fillText(`${city.province} · ${city.roman}`, 48, 56);
  ctx.font = '900 86px "PingFang SC", sans-serif';
  ctx.fillText(`${state.city}慢游`, 46, 150);
  ctx.font = '700 26px "PingFang SC", sans-serif';
  ctx.fillText(`DAY ${plan.day}  /  ${plan.title}`, 49, 201);
  ctx.fillStyle = city.palette[1];
  ctx.beginPath(); ctx.arc(820, 108, 70, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = "#213029"; ctx.lineWidth = 5; ctx.stroke();
  ctx.fillStyle = "#fff9eb"; ctx.textAlign = "center"; ctx.font = '900 33px "PingFang SC", sans-serif'; ctx.fillText("去走", 820, 118);
  ctx.restore();

  const map = { x: 72, y: 348, w: 936, h: 520 };
  ctx.fillStyle = "#dce5d6";
  roundRect(ctx, map.x, map.y, map.w, map.h, 35); ctx.fill();
  roughStroke(ctx, map.x, map.y, map.w, map.h, 35, "#213029", 5);
  ctx.strokeStyle = "rgba(255,249,235,.9)"; ctx.lineWidth = 25; ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(60, 500); ctx.bezierCurveTo(310, 410, 560, 600, 1030, 470); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(260, 330); ctx.bezierCurveTo(220, 510, 360, 690, 300, 880); ctx.stroke();
  ctx.strokeStyle = "rgba(83,145,166,.45)"; ctx.lineWidth = 22;
  ctx.beginPath(); ctx.moveTo(55, 790); ctx.bezierCurveTo(310, 700, 630, 875, 1030, 740); ctx.stroke();

  const raw = [city.hotelPoint, ...plan.points];
  const minX = Math.min(...raw.map((item) => item.x)) - 5;
  const maxX = Math.max(...raw.map((item) => item.x)) + 5;
  const minY = Math.min(...raw.map((item) => item.y)) - 5;
  const maxY = Math.max(...raw.map((item) => item.y)) + 5;
  const coords = raw.map((item) => ({
    ...item,
    px: map.x + 80 + ((item.x - minX) / Math.max(1, maxX - minX)) * (map.w - 160),
    py: map.y + 70 + ((item.y - minY) / Math.max(1, maxY - minY)) * (map.h - 140)
  }));
  ctx.strokeStyle = "#fff9eb"; ctx.lineWidth = 18; ctx.lineCap = "round"; ctx.lineJoin = "round";
  ctx.beginPath(); coords.forEach((item, index) => index ? ctx.lineTo(item.px, item.py) : ctx.moveTo(item.px, item.py)); ctx.stroke();
  ctx.strokeStyle = city.palette[1]; ctx.lineWidth = 8; ctx.setLineDash([18, 15]);
  ctx.beginPath(); coords.forEach((item, index) => index ? ctx.lineTo(item.px, item.py) : ctx.moveTo(item.px, item.py)); ctx.stroke(); ctx.setLineDash([]);
  coords.forEach((item, index) => {
    ctx.fillStyle = index ? "#f2d16c" : "#213029";
    ctx.beginPath(); ctx.arc(item.px, item.py, index ? 29 : 25, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#213029"; ctx.lineWidth = 5; ctx.stroke();
    ctx.fillStyle = index ? "#213029" : "#fff9eb"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.font = '900 26px "PingFang SC", sans-serif'; ctx.fillText(index ? index : "住", item.px, item.py + 1);
    const alignRight = item.px > 720;
    ctx.textAlign = alignRight ? "right" : "left"; ctx.textBaseline = "alphabetic"; ctx.font = '900 24px "PingFang SC", sans-serif'; ctx.fillStyle = "#213029";
    ctx.fillText(index ? shortName(item.name, 9) : shortName(city.hotel, 9), item.px + (alignRight ? -38 : 38), item.py + 8);
  });
  ctx.fillStyle = "#fff9eb"; roundRect(ctx, 94, 788, 235, 52, 12); ctx.fill(); ctx.strokeStyle = "#213029"; ctx.lineWidth = 4; ctx.stroke();
  ctx.fillStyle = "#213029"; ctx.textAlign = "left"; ctx.font = '900 23px "PingFang SC", sans-serif'; ctx.fillText(`少绕路约 ${plan.saving}%`, 118, 822);

  ctx.fillStyle = "#213029"; ctx.font = '900 35px "PingFang SC", sans-serif'; ctx.fillText("今天这样走", 76, 936);
  ctx.strokeStyle = city.palette[1]; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(74, 951); ctx.quadraticCurveTo(176, 938, 286, 951); ctx.stroke();

  const startY = 995;
  const rowH = 92;
  const times = ["09:30", "11:10", "12:30", "15:10", "17:20"];
  plan.points.slice(0, 4).forEach((point, index) => {
    const y = startY + rowH * index;
    ctx.fillStyle = index % 2 ? "#f2ead9" : "#fff9eb";
    roundRect(ctx, 72, y - 42, 936, 76, 18); ctx.fill();
    ctx.fillStyle = point.kind === "餐厅" ? "#ffd4c3" : "#b9d5b2";
    ctx.beginPath(); ctx.arc(118, y - 4, 25, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = "#213029"; ctx.lineWidth = 4; ctx.stroke();
    ctx.fillStyle = "#213029"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.font = '900 22px "PingFang SC", sans-serif'; ctx.fillText(index + 1, 118, y - 3);
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic"; ctx.font = '800 22px "PingFang SC", sans-serif'; ctx.fillStyle = "#657067"; ctx.fillText(point.kind === "餐厅" ? "12:30" : times[index], 165, y + 4);
    ctx.fillStyle = "#213029"; ctx.font = '900 27px "PingFang SC", sans-serif'; ctx.fillText(shortName(point.name, 14), 270, y + 5);
    ctx.fillStyle = "#657067"; ctx.font = '600 18px "PingFang SC", sans-serif'; ctx.textAlign = "right"; ctx.fillText(shortName(point.photoTip, 13), 978, y + 3);
  });

  ctx.fillStyle = "#213029"; ctx.textAlign = "left"; ctx.font = '700 20px "PingFang SC", sans-serif';
  ctx.fillText(`从「${shortName(city.hotel, 10)}」出发 · ${plan.distance.toFixed(1)}km · ${plan.points.length}站`, 76, 1390);
  ctx.textAlign = "right"; ctx.fillStyle = city.palette[1]; ctx.font = '900 20px "PingFang SC", sans-serif'; ctx.fillText("双人漫游簿 · 收藏变路书", 1005, 1390);
}

function roughStroke(ctx, x, y, w, h, r, color, width) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; roundRect(ctx, x, y, w, h, r); ctx.stroke(); ctx.restore();
}
function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y); ctx.arcTo(x + w, y, x + w, y + h, radius); ctx.arcTo(x + w, y + h, x, y + h, radius); ctx.arcTo(x, y + h, x, y, radius); ctx.arcTo(x, y, x + w, y, radius); ctx.closePath();
}
function mulberry32(seed) { return function() { let t = seed += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

function downloadSketch() {
  const name = `${state.city}-DAY${state.selectedDay + 1}-漫游笺.png`;
  els.sketchCanvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("像素冒险卡已保存到相册");
  }, "image/png");
}

async function sharePlan() {
  const plan = state.plans[state.selectedDay];
  const text = `${state.city} DAY ${plan.day}｜${plan.title}\n${plan.points.map((item, i) => `${i + 1}. ${item.name}`).join(" → ")}`;
  try {
    if (navigator.share) await navigator.share({ title: `${state.city}慢游计划`, text });
    else { await navigator.clipboard.writeText(text); showToast("路线文字已复制"); }
  } catch (_) {}
}

function toggleAutomation() {
  state.automation = !state.automation;
  els.automationToggle.classList.toggle("is-on", state.automation);
  els.automationToggle.setAttribute("aria-checked", String(state.automation));
  saveState();
  showToast(state.automation ? "已开启每天 10:00 自动更新" : "已暂停自动更新");
}

function runDailyRefresh() {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const last = localStorage.getItem("manyoujian-last-refresh");
  const afterTen = now.getHours() >= 10;
  if (state.automation && afterTen && last !== today) {
    localStorage.setItem("manyoujian-last-refresh", today);
    state.discoverOffset = (state.discoverOffset + 1) % 7;
    saveState();
  }
  els.updateText.textContent = afterTen ? "今日 10:00 已更新" : "昨晚收藏已整理";
}

function shortName(text, length) { return text.length > length ? `${text.slice(0, length)}…` : text; }
function showToast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
}

document.addEventListener("DOMContentLoaded", init);
