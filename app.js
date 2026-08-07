// 阿拉伯语词汇学习站 · 交互逻辑
// 全量词库见 data/lessons.js (window.DATA)，本文件只内联轻量侧栏索引。
const LESSON_INDEX = [{"id":"f1-L2","file":"阿拉伯语词汇表 01.pdf","num":2,"title":"第2课 你好","count":12},{"id":"f1-L3","file":"阿拉伯语词汇表 01.pdf","num":3,"title":"第3课 你叫什么名字","count":14},{"id":"f1-L5","file":"阿拉伯语词汇表 01.pdf","num":5,"title":"第5课 我很高兴见到你","count":17},{"id":"f1-L6","file":"阿拉伯语词汇表 01.pdf","num":6,"title":"第6课 这是我的书","count":23},{"id":"f1-L7","file":"阿拉伯语词汇表 01.pdf","num":7,"title":"第7课 欢迎你","count":19},{"id":"f1-L8","file":"阿拉伯语词汇表 01.pdf","num":8,"title":"第8课 阿米尔在哪儿","count":22},{"id":"f1-L9","file":"阿拉伯语词汇表 01.pdf","num":9,"title":"第9课 我们的图书馆","count":33},{"id":"f1-L10","file":"阿拉伯语词汇表 01.pdf","num":10,"title":"第10课 我有一个兄弟","count":22},{"id":"f1-L11","file":"阿拉伯语词汇表 01.pdf","num":11,"title":"第11课 这两位是职员","count":23},{"id":"f1-L12","file":"阿拉伯语词汇表 01.pdf","num":12,"title":"第12课 你们班里有多少学生","count":23},{"id":"f1-L13","file":"阿拉伯语词汇表 01.pdf","num":13,"title":"第13课 我今天没有上课","count":31},{"id":"f1-L14","file":"阿拉伯语词汇表 01.pdf","num":14,"title":"第14课 问候与相识","count":48},{"id":"f1-L15","file":"阿拉伯语词汇表 01.pdf","num":15,"title":"第15课 拜访","count":50},{"id":"f1-L16","file":"阿拉伯语词汇表 01.pdf","num":16,"title":"第16课 卡迈勒的家庭","count":53},{"id":"f1-L17","file":"阿拉伯语词汇表 01.pdf","num":17,"title":"第17课 工程师的家","count":51},{"id":"f1-L18","file":"阿拉伯语词汇表 01.pdf","num":18,"title":"第18课 网上来信","count":62},{"id":"f1-L19","file":"阿拉伯语词汇表 01.pdf","num":19,"title":"第19课 选择一天","count":60},{"id":"f1-L20","file":"阿拉伯语词汇表 01.pdf","num":20,"title":"第20课 一次愉快的郊游","count":70},{"id":"f1-L21","file":"阿拉伯语词汇表 01.pdf","num":21,"title":"第21课 在餐厅里","count":62},{"id":"f1-L22","file":"阿拉伯语词汇表 01.pdf","num":22,"title":"第22课 标准语和方言","count":61},{"id":"f1-L23","file":"阿拉伯语词汇表 01.pdf","num":23,"title":"第23课 中国外交部长访问埃及","count":60},{"id":"f2-L2","file":"阿拉伯语词汇表 02.pdf","num":2,"title":"第2课","count":25},{"id":"f2-L3","file":"阿拉伯语词汇表 02.pdf","num":3,"title":"第3课","count":28},{"id":"f2-L4","file":"阿拉伯语词汇表 02.pdf","num":4,"title":"第4课","count":24},{"id":"f2-L5","file":"阿拉伯语词汇表 02.pdf","num":5,"title":"第5课","count":22},{"id":"f2-L6","file":"阿拉伯语词汇表 02.pdf","num":6,"title":"第6课","count":28},{"id":"f2-L7","file":"阿拉伯语词汇表 02.pdf","num":7,"title":"第7课","count":21},{"id":"f2-L8","file":"阿拉伯语词汇表 02.pdf","num":8,"title":"第8课","count":24},{"id":"f2-L9","file":"阿拉伯语词汇表 02.pdf","num":9,"title":"第9课","count":26},{"id":"f2-L10","file":"阿拉伯语词汇表 02.pdf","num":10,"title":"第10课","count":22},{"id":"f2-L11","file":"阿拉伯语词汇表 02.pdf","num":11,"title":"第11课","count":20},{"id":"f2-L12","file":"阿拉伯语词汇表 02.pdf","num":12,"title":"第12课","count":26},{"id":"f2-L13","file":"阿拉伯语词汇表 02.pdf","num":13,"title":"第13课","count":21},{"id":"f2-L14","file":"阿拉伯语词汇表 02.pdf","num":14,"title":"第14课","count":19},{"id":"f2-L15","file":"阿拉伯语词汇表 02.pdf","num":15,"title":"第15课","count":26},{"id":"f2-L16","file":"阿拉伯语词汇表 02.pdf","num":16,"title":"第16课","count":25},{"id":"f2-L17","file":"阿拉伯语词汇表 02.pdf","num":17,"title":"第17课","count":16},{"id":"f2-L18","file":"阿拉伯语词汇表 02.pdf","num":18,"title":"第18课","count":25},{"id":"f2-L19","file":"阿拉伯语词汇表 02.pdf","num":19,"title":"第19课","count":27},{"id":"f2-L20","file":"阿拉伯语词汇表 02.pdf","num":20,"title":"第20课","count":26},{"id":"f2-L21","file":"阿拉伯语词汇表 02.pdf","num":21,"title":"第21课","count":23},{"id":"f2-L22","file":"阿拉伯语词汇表 02.pdf","num":22,"title":"第22课","count":26},{"id":"f2-L23","file":"阿拉伯语词汇表 02.pdf","num":23,"title":"第23课","count":26},{"id":"f2-L24","file":"阿拉伯语词汇表 02.pdf","num":24,"title":"第24课","count":16},{"id":"f2-L25","file":"阿拉伯语词汇表 02.pdf","num":25,"title":"第25课","count":26},{"id":"f2-L26","file":"阿拉伯语词汇表 02.pdf","num":26,"title":"第26课","count":26},{"id":"f2-L27","file":"阿拉伯语词汇表 02.pdf","num":27,"title":"第27课","count":19},{"id":"f2-L28","file":"阿拉伯语词汇表 02.pdf","num":28,"title":"第28课","count":26},{"id":"f2-L29","file":"阿拉伯语词汇表 02.pdf","num":29,"title":"第29课","count":25},{"id":"f2-L30","file":"阿拉伯语词汇表 02.pdf","num":30,"title":"第30课","count":23},{"id":"f2-L31","file":"阿拉伯语词汇表 02.pdf","num":31,"title":"第31课","count":27},{"id":"f2-L32","file":"阿拉伯语词汇表 02.pdf","num":32,"title":"第32课","count":25},{"id":"f2-L33","file":"阿拉伯语词汇表 02.pdf","num":33,"title":"第33课","count":23},{"id":"f2-L34","file":"阿拉伯语词汇表 02.pdf","num":34,"title":"第34课","count":26},{"id":"f2-L35","file":"阿拉伯语词汇表 02.pdf","num":35,"title":"第35课","count":27},{"id":"f2-L36","file":"阿拉伯语词汇表 02.pdf","num":36,"title":"第36课","count":22},{"id":"f2-L37","file":"阿拉伯语词汇表 02.pdf","num":37,"title":"第37课","count":28},{"id":"f2-L38","file":"阿拉伯语词汇表 02.pdf","num":38,"title":"第38课","count":27},{"id":"f2-L39","file":"阿拉伯语词汇表 02.pdf","num":39,"title":"第39课","count":23},{"id":"f2-L40","file":"阿拉伯语词汇表 02.pdf","num":40,"title":"第40课","count":27},{"id":"f2-L41","file":"阿拉伯语词汇表 02.pdf","num":41,"title":"第41课","count":28},{"id":"f2-L42","file":"阿拉伯语词汇表 02.pdf","num":42,"title":"第42课","count":22},{"id":"f2-L43","file":"阿拉伯语词汇表 02.pdf","num":43,"title":"第43课","count":25},{"id":"f2-L44","file":"阿拉伯语词汇表 02.pdf","num":44,"title":"第44课","count":27},{"id":"f2-L45","file":"阿拉伯语词汇表 02.pdf","num":45,"title":"第45课","count":25},{"id":"f2-L46","file":"阿拉伯语词汇表 02.pdf","num":46,"title":"第46课","count":22},{"id":"f2-L47","file":"阿拉伯语词汇表 02.pdf","num":47,"title":"第47课","count":27},{"id":"f2-L48","file":"阿拉伯语词汇表 02.pdf","num":48,"title":"第48课","count":24},{"id":"f2-L49","file":"阿拉伯语词汇表 02.pdf","num":49,"title":"第49课","count":19},{"id":"f2-L50","file":"阿拉伯语词汇表 02.pdf","num":50,"title":"第50课","count":28},{"id":"f2-L51","file":"阿拉伯语词汇表 02.pdf","num":51,"title":"第51课","count":27},{"id":"f2-L52","file":"阿拉伯语词汇表 02.pdf","num":52,"title":"第52课","count":13},{"id":"f2-L53","file":"阿拉伯语词汇表 02.pdf","num":53,"title":"第53课","count":22},{"id":"f2-L54","file":"阿拉伯语词汇表 02.pdf","num":54,"title":"第54课","count":23},{"id":"f2-L55","file":"阿拉伯语词汇表 02.pdf","num":55,"title":"第55课","count":2},{"id":"f3-L2","file":"阿拉伯语词汇表 03.pdf","num":2,"title":"第2课","count":23},{"id":"f3-L3","file":"阿拉伯语词汇表 03.pdf","num":3,"title":"第3课","count":22},{"id":"f3-L4","file":"阿拉伯语词汇表 03.pdf","num":4,"title":"第4课","count":20},{"id":"f3-L5","file":"阿拉伯语词汇表 03.pdf","num":5,"title":"第5课","count":22},{"id":"f3-L6","file":"阿拉伯语词汇表 03.pdf","num":6,"title":"第6课","count":21},{"id":"f3-L7","file":"阿拉伯语词汇表 03.pdf","num":7,"title":"第7课","count":22},{"id":"f3-L8","file":"阿拉伯语词汇表 03.pdf","num":8,"title":"第8课","count":27},{"id":"f3-L9","file":"阿拉伯语词汇表 03.pdf","num":9,"title":"第9课","count":24},{"id":"f3-L10","file":"阿拉伯语词汇表 03.pdf","num":10,"title":"第10课","count":22},{"id":"f3-L11","file":"阿拉伯语词汇表 03.pdf","num":11,"title":"第11课","count":24},{"id":"f3-L12","file":"阿拉伯语词汇表 03.pdf","num":12,"title":"第12课","count":23},{"id":"f3-L13","file":"阿拉伯语词汇表 03.pdf","num":13,"title":"第13课","count":23},{"id":"f3-L14","file":"阿拉伯语词汇表 03.pdf","num":14,"title":"第14课","count":26},{"id":"f3-L15","file":"阿拉伯语词汇表 03.pdf","num":15,"title":"第15课","count":22},{"id":"f3-L16","file":"阿拉伯语词汇表 03.pdf","num":16,"title":"第16课","count":24},{"id":"f3-L17","file":"阿拉伯语词汇表 03.pdf","num":17,"title":"第17课","count":23},{"id":"f3-L18","file":"阿拉伯语词汇表 03.pdf","num":18,"title":"第18课","count":19},{"id":"f3-L19","file":"阿拉伯语词汇表 03.pdf","num":19,"title":"第19课","count":27},{"id":"f3-L20","file":"阿拉伯语词汇表 03.pdf","num":20,"title":"第20课","count":24},{"id":"f3-L21","file":"阿拉伯语词汇表 03.pdf","num":21,"title":"第21课","count":21},{"id":"f3-L22","file":"阿拉伯语词汇表 03.pdf","num":22,"title":"第22课","count":27},{"id":"f3-L23","file":"阿拉伯语词汇表 03.pdf","num":23,"title":"第23课","count":25},{"id":"f3-L24","file":"阿拉伯语词汇表 03.pdf","num":24,"title":"第24课","count":21},{"id":"f3-L25","file":"阿拉伯语词汇表 03.pdf","num":25,"title":"第25课","count":26},{"id":"f3-L26","file":"阿拉伯语词汇表 03.pdf","num":26,"title":"第26课","count":22},{"id":"f3-L27","file":"阿拉伯语词汇表 03.pdf","num":27,"title":"第27课","count":28},{"id":"f3-L28","file":"阿拉伯语词汇表 03.pdf","num":28,"title":"第28课","count":26},{"id":"f3-L29","file":"阿拉伯语词汇表 03.pdf","num":29,"title":"第29课","count":19},{"id":"f3-L30","file":"阿拉伯语词汇表 03.pdf","num":30,"title":"第30课","count":27},{"id":"f3-L31","file":"阿拉伯语词汇表 03.pdf","num":31,"title":"第31课","count":22},{"id":"f3-L32","file":"阿拉伯语词汇表 03.pdf","num":32,"title":"第32课","count":25},{"id":"f3-L33","file":"阿拉伯语词汇表 03.pdf","num":33,"title":"第33课","count":24},{"id":"f3-L34","file":"阿拉伯语词汇表 03.pdf","num":34,"title":"第34课","count":18},{"id":"f3-L35","file":"阿拉伯语词汇表 03.pdf","num":35,"title":"第35课","count":27},{"id":"f3-L36","file":"阿拉伯语词汇表 03.pdf","num":36,"title":"第36课","count":25},{"id":"f3-L37","file":"阿拉伯语词汇表 03.pdf","num":37,"title":"第37课","count":21},{"id":"f3-L38","file":"阿拉伯语词汇表 03.pdf","num":38,"title":"第38课","count":26},{"id":"f3-L39","file":"阿拉伯语词汇表 03.pdf","num":39,"title":"第39课","count":19},{"id":"f3-L40","file":"阿拉伯语词汇表 03.pdf","num":40,"title":"第40课","count":25},{"id":"f3-L41","file":"阿拉伯语词汇表 03.pdf","num":41,"title":"第41课","count":26},{"id":"f3-L42","file":"阿拉伯语词汇表 03.pdf","num":42,"title":"第42课","count":22},{"id":"f3-L43","file":"阿拉伯语词汇表 03.pdf","num":43,"title":"第43课","count":28},{"id":"f3-L44","file":"阿拉伯语词汇表 03.pdf","num":44,"title":"第44课","count":22},{"id":"f3-L45","file":"阿拉伯语词汇表 03.pdf","num":45,"title":"第45课","count":12},{"id":"f3-L46","file":"阿拉伯语词汇表 03.pdf","num":46,"title":"第46课","count":16},{"id":"f3-L47","file":"阿拉伯语词汇表 03.pdf","num":47,"title":"第47课","count":14},{"id":"f4-L2","file":"阿拉伯语词汇表 04.pdf","num":2,"title":"第2课","count":25},{"id":"f4-L3","file":"阿拉伯语词汇表 04.pdf","num":3,"title":"第3课","count":25},{"id":"f4-L4","file":"阿拉伯语词汇表 04.pdf","num":4,"title":"第4课","count":16},{"id":"f4-L5","file":"阿拉伯语词汇表 04.pdf","num":5,"title":"第5课","count":27},{"id":"f4-L6","file":"阿拉伯语词汇表 04.pdf","num":6,"title":"第6课","count":21},{"id":"f4-L7","file":"阿拉伯语词汇表 04.pdf","num":7,"title":"第7课","count":23},{"id":"f4-L8","file":"阿拉伯语词汇表 04.pdf","num":8,"title":"第8课","count":26},{"id":"f4-L9","file":"阿拉伯语词汇表 04.pdf","num":9,"title":"第9课","count":19},{"id":"f4-L10","file":"阿拉伯语词汇表 04.pdf","num":10,"title":"第10课","count":25},{"id":"f4-L11","file":"阿拉伯语词汇表 04.pdf","num":11,"title":"第11课","count":26},{"id":"f4-L12","file":"阿拉伯语词汇表 04.pdf","num":12,"title":"第12课","count":20},{"id":"f4-L13","file":"阿拉伯语词汇表 04.pdf","num":13,"title":"第13课","count":26},{"id":"f4-L14","file":"阿拉伯语词汇表 04.pdf","num":14,"title":"第14课","count":25},{"id":"f4-L15","file":"阿拉伯语词汇表 04.pdf","num":15,"title":"第15课","count":25},{"id":"f4-L16","file":"阿拉伯语词汇表 04.pdf","num":16,"title":"第16课","count":23},{"id":"f4-L17","file":"阿拉伯语词汇表 04.pdf","num":17,"title":"第17课","count":19},{"id":"f4-L18","file":"阿拉伯语词汇表 04.pdf","num":18,"title":"第18课","count":27},{"id":"f4-L19","file":"阿拉伯语词汇表 04.pdf","num":19,"title":"第19课","count":23},{"id":"f4-L20","file":"阿拉伯语词汇表 04.pdf","num":20,"title":"第20课","count":22},{"id":"f4-L21","file":"阿拉伯语词汇表 04.pdf","num":21,"title":"第21课","count":25},{"id":"f4-L22","file":"阿拉伯语词汇表 04.pdf","num":22,"title":"第22课","count":21},{"id":"f4-L23","file":"阿拉伯语词汇表 04.pdf","num":23,"title":"第23课","count":22},{"id":"f4-L24","file":"阿拉伯语词汇表 04.pdf","num":24,"title":"第24课","count":24},{"id":"f4-L25","file":"阿拉伯语词汇表 04.pdf","num":25,"title":"第25课","count":19},{"id":"f4-L26","file":"阿拉伯语词汇表 04.pdf","num":26,"title":"第26课","count":28},{"id":"f4-L27","file":"阿拉伯语词汇表 04.pdf","num":27,"title":"第27课","count":24},{"id":"f4-L28","file":"阿拉伯语词汇表 04.pdf","num":28,"title":"第28课","count":20},{"id":"f4-L29","file":"阿拉伯语词汇表 04.pdf","num":29,"title":"第29课","count":26},{"id":"f4-L30","file":"阿拉伯语词汇表 04.pdf","num":30,"title":"第30课","count":23},{"id":"f4-L31","file":"阿拉伯语词汇表 04.pdf","num":31,"title":"第31课","count":20},{"id":"f4-L32","file":"阿拉伯语词汇表 04.pdf","num":32,"title":"第32课","count":27},{"id":"f4-L33","file":"阿拉伯语词汇表 04.pdf","num":33,"title":"第33课","count":26},{"id":"f4-L34","file":"阿拉伯语词汇表 04.pdf","num":34,"title":"第34课","count":23},{"id":"f4-L35","file":"阿拉伯语词汇表 04.pdf","num":35,"title":"第35课","count":24},{"id":"f4-L36","file":"阿拉伯语词汇表 04.pdf","num":36,"title":"第36课","count":22},{"id":"f4-L37","file":"阿拉伯语词汇表 04.pdf","num":37,"title":"第37课","count":23},{"id":"f4-L38","file":"阿拉伯语词汇表 04.pdf","num":38,"title":"第38课","count":25},{"id":"f4-L39","file":"阿拉伯语词汇表 04.pdf","num":39,"title":"第39课","count":21},{"id":"f4-L40","file":"阿拉伯语词汇表 04.pdf","num":40,"title":"第40课","count":26},{"id":"f4-L41","file":"阿拉伯语词汇表 04.pdf","num":41,"title":"第41课","count":23},{"id":"f4-L42","file":"阿拉伯语词汇表 04.pdf","num":42,"title":"第42课","count":16},{"id":"f4-L43","file":"阿拉伯语词汇表 04.pdf","num":43,"title":"第43课","count":24},{"id":"f4-L44","file":"阿拉伯语词汇表 04.pdf","num":44,"title":"第44课","count":14},{"id":"f4-L45","file":"阿拉伯语词汇表 04.pdf","num":45,"title":"第45课","count":17},{"id":"f4-L46","file":"阿拉伯语词汇表 04.pdf","num":46,"title":"第46课","count":17},{"id":"f4-L47","file":"阿拉伯语词汇表 04.pdf","num":47,"title":"第47课","count":4},{"id":"f1-L4","file":"阿拉伯语词汇表 01.pdf","num":4,"title":"第4课 人物与职业","count":18}];
const VOL = {"阿拉伯语词汇表 01.pdf":"第1册","阿拉伯语词汇表 02.pdf":"第2册","阿拉伯语词汇表 03.pdf":"第3册","阿拉伯语词汇表 04.pdf":"第4册"};
const AUDIO_BASE = "https://cdn.jsdelivr.net/gh/realrentao/arabic-vocabulary@main/audio/";

let DATA = window.DATA || null;
let cur = new Audio(), activeId = null;
let activeCats = new Set(["名词","动词","虚词","短语"]);
let queue = [], qi = 0, pendingTimer = null, cardEls = [], currentEntries = [];
cur.preload = "auto";

const CAT_COLOR = {"名词":"#137a7f","动词":"#c0623f","虚词":"#b8893b","短语":"#5a8a3c"};
const CAT_LABEL = {"名词":"名词","动词":"动词","虚词":"虚词","短语":"短语"};
function catLabel(c){ return CAT_LABEL[c] || c; }

// ---- 播放打断机制: 新音频一响, 旧的彻底停 ----
function stopPlayback(){
  if(pendingTimer){ clearTimeout(pendingTimer); pendingTimer = null; }
  cur.pause();
  queue = [];
  clearPlaying();
}
// play(path, el): el 为被点击的卡片元素, 直接高亮它(避免同课重复音频只高亮第一个)
function play(path, el){
  if(!path) return;
  stopPlayback();
  cur.src = AUDIO_BASE + path;
  cur.onended = clearPlaying;
  cur.play().catch(e=>console.warn(e));
  clearPlaying();
  if(el) el.classList.add("playing");
}
function clearPlaying(){
  document.querySelectorAll(".card.playing").forEach(x=>x.classList.remove("playing"));
}

// ---- 侧栏 ----
function buildSide(){
  const side = document.getElementById("side");
  side.innerHTML = "";
  const byFile = {};
  LESSON_INDEX.forEach(L=>{ (byFile[L.file] = byFile[L.file]||[]).push(L); });
  Object.keys(byFile).forEach(f=>{
    const vol = document.createElement("div");
    vol.className = "vol"; vol.textContent = VOL[f] || f;
    side.appendChild(vol);
    byFile[f].forEach(L=>{
      const d = document.createElement("div");
      d.className = "litem"; d.dataset.id = L.id;
      d.innerHTML = `<span>${L.title||("第"+L.num+"课")}</span><span class="cnt">${L.count}</span>`;
      d.onclick = ()=>selectLesson(L.id);
      side.appendChild(d);
    });
  });
}

function catCounts(entries){
  const c = {};
  entries.forEach(e=> c[e.cat] = (c[e.cat]||0)+1);
  return c;
}

function selectLesson(id){
  activeId = id;
  document.querySelectorAll(".litem").forEach(x=>x.classList.toggle("active", x.dataset.id===id));
  renderLesson();
  closeSide();
}

function renderLesson(){
  const L = DATA.find(x=>x.id===activeId);
  const main = document.getElementById("main");
  if(!L){ main.innerHTML = '<div class="empty">请选择左侧课程</div>'; return; }
  const cc = catCounts(L.entries);
  let chips = "";
  ["名词","动词","虚词","短语"].forEach(c=>{
    if(cc[c]) chips += `<span class="chip ${activeCats.has(c)?"on":""}" data-c="${c}" onclick="toggleCat('${c}')">${catLabel(c)} ${cc[c]}</span>`;
  });
  let html = `<div class="lesson-head"><h1>${L.title||("第"+L.num+"课")}</h1><span class="voltag">${VOL[L.file]||""}</span></div>`;
  const catsum = ["名词","动词","虚词","短语"].map(c=>`<span class="csum" style="color:${CAT_COLOR[c]}">${catLabel(c)} <b>${cc[c]||0}</b></span>`).join('<span class="sep">·</span>');
  html += `<div class="hint">本课文共 ${L.entries.length} 个词条　${catsum}</div>`;
  html += `<div class="tools">
      <button class="btn primary" onclick="playAll()">▶ 播放整课</button>
      <button class="btn" onclick="stopAll()">■ 停止</button>
      <div class="chips">${chips}</div>
    </div>`;
  ["名词","动词","虚词","短语"].forEach(c=>{
    if(!cc[c] || !activeCats.has(c)) return;
    const items = L.entries.filter(e=>e.cat===c);
    html += `<div class="catblock"><div class="cat-title dot-${c}"><span class="dot"></span>${catLabel(c)}<span class="n">${items.length} 词</span></div><div class="grid">`;
    items.forEach(e=>{
      html += `<div class="card cat-${c}" data-audio="${e.audio}" onclick="play('${e.audio}', this)">
          <div class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
          <div class="ara">${e.disp}</div>
          <div class="zh">${e.zh||""}</div>
        </div>`;
    });
    html += `</div></div>`;
  });
  main.innerHTML = html;
  // 收集卡片元素顺序, 供整课连播按顺序高亮(修复同课重复音频只高亮第一个)
  cardEls = Array.from(main.querySelectorAll(".card"));
}

function toggleCat(c){
  if(activeCats.has(c)) activeCats.delete(c); else activeCats.add(c);
  renderLesson();
}

// ---- 整课连播 ----
function playAll(){
  const L = DATA.find(x=>x.id===activeId); if(!L) return;
  stopPlayback();
  const order = [];
  ["名词","动词","虚词","短语"].forEach(c=>{
    if(activeCats.has(c)) L.entries.forEach(e=>{ if(e.cat===c) order.push(e); });
  });
  currentEntries = order;
  qi = 0; nextInQueue();
}
function nextInQueue(){
  if(qi>=currentEntries.length){ clearPlaying(); return; }
  const e = currentEntries[qi++];
  cur.pause();
  cur.src = AUDIO_BASE + e.audio;
  cur.onended = ()=>{ pendingTimer = setTimeout(nextInQueue, 350); };
  cur.play().catch(()=>{ pendingTimer = setTimeout(nextInQueue,350); });
  clearPlaying();
  const el = cardEls[qi-1];
  if(el) el.classList.add("playing");
}
function stopAll(){ stopPlayback(); }

// ---- 搜索(带防抖) ----
let searchTimer = null;
function onSearch(){
  if(searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(doSearch, 120);
}
function doSearch(){
  const q = document.getElementById("q").value.trim().toLowerCase();
  const main = document.getElementById("main");
  if(!q){ if(activeId) renderLesson(); else main.innerHTML = '<div class="empty">请选择左侧课程</div>'; return; }
  const res = [];
  DATA.forEach(L=> L.entries.forEach(e=>{
    if((e.disp && e.disp.toLowerCase().includes(q)) || (e.zh && e.zh.toLowerCase().includes(q)))
      res.push({L, e});
  }));
  let html = `<div class="lesson-head"><h1>搜索 “${q}”</h1></div><div class="hint">找到 ${res.length} 个结果</div>`;
  if(res.length===0) html += '<div class="empty">没有匹配的词条</div>';
  res.slice(0,300).forEach(r=>{
    html += `<div class="res-item" onclick="pickFromSearch('${r.L.id}')">
        <span class="ara">${r.e.disp}</span>
        <span class="zh">${r.e.zh||""}</span>
        <span class="catlab" style="background:${CAT_COLOR[r.e.cat]||"#888"}">${catLabel(r.e.cat)}</span>
        <span class="from">${r.L.title||("第"+r.L.num+"课")}</span>
      </div>`;
  });
  main.innerHTML = html;
}
// 搜索结果点击: 清空搜索框并进入该课(去除原先冗余的二次 renderLesson)
function pickFromSearch(id){
  document.getElementById("q").value = "";
  selectLesson(id);
}

// ---- 移动端抽屉 ----
function toggleSide(){
  const s = document.getElementById("side");
  const open = s.classList.toggle("open");
  document.getElementById("scrim").classList.toggle("show", open);
}
function closeSide(){
  document.getElementById("side").classList.remove("open");
  document.getElementById("scrim").classList.remove("show");
}

// ---- 启动 ----
function boot(){
  document.getElementById("tot").textContent = LESSON_INDEX.length;
  buildSide();
  if(LESSON_INDEX[0]) selectLesson(LESSON_INDEX[0].id);
}
if(DATA){ boot(); }
else { window.addEventListener("load", boot); }  // 极端情况下 data.js 未就绪时兜底
