// 阿拉伯语词汇学习站 · 交互逻辑
// 侧栏索引(LESSON_INDEX)内联; 课程内容(data/lessons/<id>.json)与搜索索引(data/all.json)按需懒加载。
const LESSON_INDEX = [{"id":"f1-L2","file":"阿拉伯语词汇表 01.pdf","num":2,"title":"第二课 你好 أَهْلًا وَسَهْلًا","count":12},{"id":"f1-L3","file":"阿拉伯语词汇表 01.pdf","num":3,"title":"第三课 你叫什么名字 مَا اسْمُكَ","count":13},{"id":"f1-L4","file":"阿拉伯语词汇表 01.pdf","num":4,"title":"第四课 艾敏是一个学生 أَمِين طَالِب","count":18},{"id":"f1-L5","file":"阿拉伯语词汇表 01.pdf","num":5,"title":"第五课 我很高兴见到你 أَنَا مَسْرُورٌ بِلِقَائِك","count":26},{"id":"f1-L6","file":"阿拉伯语词汇表 01.pdf","num":6,"title":"第六课 这是我的书 هَذَا كِتَابِي","count":30},{"id":"f1-L7","file":"阿拉伯语词汇表 01.pdf","num":7,"title":"第七课 欢迎你 مَرْحَبًا بِك","count":19},{"id":"f1-L8","file":"阿拉伯语词汇表 01.pdf","num":8,"title":"第八课 阿米尔在哪儿 أَيْنَ عَامِر","count":24},{"id":"f1-L9","file":"阿拉伯语词汇表 01.pdf","num":9,"title":"第九课 我们的图书馆 مَكْتَبَتُنَا","count":30},{"id":"f1-L10","file":"阿拉伯语词汇表 01.pdf","num":10,"title":"第十课 我有一个兄弟 لِي أَخ","count":23},{"id":"f1-L11","file":"阿拉伯语词汇表 01.pdf","num":11,"title":"第十一课 这两位是职员 هَذَانِ مُوَظَّفَانِ","count":21},{"id":"f1-L12","file":"阿拉伯语词汇表 01.pdf","num":12,"title":"第十二课 你们班里有多少学生 كَمْ طَالِبًا فِي فَصْلِكُمْ","count":38},{"id":"f1-L13","file":"阿拉伯语词汇表 01.pdf","num":13,"title":"第十三课 我今天没有上课 مَا حَضَرْتُ الدَّرْسَ الْيَوْمَ","count":34},{"id":"f1-L14","file":"阿拉伯语词汇表 01.pdf","num":14,"title":"第十四课 问候与相识 تَحِيَّات وَتَعَارُف","count":44},{"id":"f1-L15","file":"阿拉伯语词汇表 01.pdf","num":15,"title":"第十五课 拜访 الزِّيَارَة","count":53},{"id":"f1-L16","file":"阿拉伯语词汇表 01.pdf","num":16,"title":"第十六课 卡迈勒的家庭 أُسْرَةُ كَمَال","count":56},{"id":"f1-L17","file":"阿拉伯语词汇表 01.pdf","num":17,"title":"第十七课 工程师的家 بَيْتُ مُهَنْدِس","count":44},{"id":"f1-L18","file":"阿拉伯语词汇表 01.pdf","num":18,"title":"第十八课 网上来信 رِسَالَة عَلَى الْإِنْتَرْنِت","count":69},{"id":"f1-L19","file":"阿拉伯语词汇表 01.pdf","num":19,"title":"第十九课 选择一天 اِخْتَارُوا يَوْمًا","count":59},{"id":"f1-L20","file":"阿拉伯语词汇表 01.pdf","num":20,"title":"第二十课 一次愉快的郊游 نُزْهَة مُمْتِعَة","count":70},{"id":"f1-L21","file":"阿拉伯语词汇表 01.pdf","num":21,"title":"第二十一课 在餐厅里 فِي الْمَطْعَم","count":62},{"id":"f1-L22","file":"阿拉伯语词汇表 01.pdf","num":22,"title":"第二十二课 标准语和方言 الفُصْحَى وَالْعَامِّيَّة","count":61},{"id":"f1-L23","file":"阿拉伯语词汇表 01.pdf","num":23,"title":"第二十三课 中国外交部长访问埃及 زِيَارَة وَزِير الْخَارِجِيَّة الصِّينِيّ لِمِصْر","count":51},{"id":"f2-L2","file":"阿拉伯语词汇表 02.pdf","num":2,"title":"第2课","count":25},{"id":"f2-L3","file":"阿拉伯语词汇表 02.pdf","num":3,"title":"第3课","count":28},{"id":"f2-L4","file":"阿拉伯语词汇表 02.pdf","num":4,"title":"第4课","count":24},{"id":"f2-L5","file":"阿拉伯语词汇表 02.pdf","num":5,"title":"第5课","count":22},{"id":"f2-L6","file":"阿拉伯语词汇表 02.pdf","num":6,"title":"第6课","count":28},{"id":"f2-L7","file":"阿拉伯语词汇表 02.pdf","num":7,"title":"第7课","count":21},{"id":"f2-L8","file":"阿拉伯语词汇表 02.pdf","num":8,"title":"第8课","count":24},{"id":"f2-L9","file":"阿拉伯语词汇表 02.pdf","num":9,"title":"第9课","count":26},{"id":"f2-L10","file":"阿拉伯语词汇表 02.pdf","num":10,"title":"第10课","count":22},{"id":"f2-L11","file":"阿拉伯语词汇表 02.pdf","num":11,"title":"第11课","count":20},{"id":"f2-L12","file":"阿拉伯语词汇表 02.pdf","num":12,"title":"第12课","count":26},{"id":"f2-L13","file":"阿拉伯语词汇表 02.pdf","num":13,"title":"第13课","count":21},{"id":"f2-L14","file":"阿拉伯语词汇表 02.pdf","num":14,"title":"第14课","count":19},{"id":"f2-L15","file":"阿拉伯语词汇表 02.pdf","num":15,"title":"第15课","count":26},{"id":"f2-L16","file":"阿拉伯语词汇表 02.pdf","num":16,"title":"第16课","count":25},{"id":"f2-L17","file":"阿拉伯语词汇表 02.pdf","num":17,"title":"第17课","count":16},{"id":"f2-L18","file":"阿拉伯语词汇表 02.pdf","num":18,"title":"第18课","count":25},{"id":"f2-L19","file":"阿拉伯语词汇表 02.pdf","num":19,"title":"第19课","count":27},{"id":"f2-L20","file":"阿拉伯语词汇表 02.pdf","num":20,"title":"第20课","count":26},{"id":"f2-L21","file":"阿拉伯语词汇表 02.pdf","num":21,"title":"第21课","count":23},{"id":"f2-L22","file":"阿拉伯语词汇表 02.pdf","num":22,"title":"第22课","count":26},{"id":"f2-L23","file":"阿拉伯语词汇表 02.pdf","num":23,"title":"第23课","count":26},{"id":"f2-L24","file":"阿拉伯语词汇表 02.pdf","num":24,"title":"第24课","count":16},{"id":"f2-L25","file":"阿拉伯语词汇表 02.pdf","num":25,"title":"第25课","count":26},{"id":"f2-L26","file":"阿拉伯语词汇表 02.pdf","num":26,"title":"第26课","count":26},{"id":"f2-L27","file":"阿拉伯语词汇表 02.pdf","num":27,"title":"第27课","count":19},{"id":"f2-L28","file":"阿拉伯语词汇表 02.pdf","num":28,"title":"第28课","count":26},{"id":"f2-L29","file":"阿拉伯语词汇表 02.pdf","num":29,"title":"第29课","count":25},{"id":"f2-L30","file":"阿拉伯语词汇表 02.pdf","num":30,"title":"第30课","count":23},{"id":"f2-L31","file":"阿拉伯语词汇表 02.pdf","num":31,"title":"第31课","count":27},{"id":"f2-L32","file":"阿拉伯语词汇表 02.pdf","num":32,"title":"第32课","count":25},{"id":"f2-L33","file":"阿拉伯语词汇表 02.pdf","num":33,"title":"第33课","count":23},{"id":"f2-L34","file":"阿拉伯语词汇表 02.pdf","num":34,"title":"第34课","count":26},{"id":"f2-L35","file":"阿拉伯语词汇表 02.pdf","num":35,"title":"第35课","count":27},{"id":"f2-L36","file":"阿拉伯语词汇表 02.pdf","num":36,"title":"第36课","count":22},{"id":"f2-L37","file":"阿拉伯语词汇表 02.pdf","num":37,"title":"第37课","count":28},{"id":"f2-L38","file":"阿拉伯语词汇表 02.pdf","num":38,"title":"第38课","count":27},{"id":"f2-L39","file":"阿拉伯语词汇表 02.pdf","num":39,"title":"第39课","count":23},{"id":"f2-L40","file":"阿拉伯语词汇表 02.pdf","num":40,"title":"第40课","count":27},{"id":"f2-L41","file":"阿拉伯语词汇表 02.pdf","num":41,"title":"第41课","count":28},{"id":"f2-L42","file":"阿拉伯语词汇表 02.pdf","num":42,"title":"第42课","count":22},{"id":"f2-L43","file":"阿拉伯语词汇表 02.pdf","num":43,"title":"第43课","count":25},{"id":"f2-L44","file":"阿拉伯语词汇表 02.pdf","num":44,"title":"第44课","count":27},{"id":"f2-L45","file":"阿拉伯语词汇表 02.pdf","num":45,"title":"第45课","count":25},{"id":"f2-L46","file":"阿拉伯语词汇表 02.pdf","num":46,"title":"第46课","count":22},{"id":"f2-L47","file":"阿拉伯语词汇表 02.pdf","num":47,"title":"第47课","count":27},{"id":"f2-L48","file":"阿拉伯语词汇表 02.pdf","num":48,"title":"第48课","count":24},{"id":"f2-L49","file":"阿拉伯语词汇表 02.pdf","num":49,"title":"第49课","count":19},{"id":"f2-L50","file":"阿拉伯语词汇表 02.pdf","num":50,"title":"第50课","count":28},{"id":"f2-L51","file":"阿拉伯语词汇表 02.pdf","num":51,"title":"第51课","count":27},{"id":"f2-L52","file":"阿拉伯语词汇表 02.pdf","num":52,"title":"第52课","count":13},{"id":"f2-L53","file":"阿拉伯语词汇表 02.pdf","num":53,"title":"第53课","count":22},{"id":"f2-L54","file":"阿拉伯语词汇表 02.pdf","num":54,"title":"第54课","count":23},{"id":"f2-L55","file":"阿拉伯语词汇表 02.pdf","num":55,"title":"第55课","count":2},{"id":"f3-L2","file":"阿拉伯语词汇表 03.pdf","num":2,"title":"第2课","count":23},{"id":"f3-L3","file":"阿拉伯语词汇表 03.pdf","num":3,"title":"第3课","count":22},{"id":"f3-L4","file":"阿拉伯语词汇表 03.pdf","num":4,"title":"第4课","count":20},{"id":"f3-L5","file":"阿拉伯语词汇表 03.pdf","num":5,"title":"第5课","count":22},{"id":"f3-L6","file":"阿拉伯语词汇表 03.pdf","num":6,"title":"第6课","count":21},{"id":"f3-L7","file":"阿拉伯语词汇表 03.pdf","num":7,"title":"第7课","count":22},{"id":"f3-L8","file":"阿拉伯语词汇表 03.pdf","num":8,"title":"第8课","count":27},{"id":"f3-L9","file":"阿拉伯语词汇表 03.pdf","num":9,"title":"第9课","count":24},{"id":"f3-L10","file":"阿拉伯语词汇表 03.pdf","num":10,"title":"第10课","count":22},{"id":"f3-L11","file":"阿拉伯语词汇表 03.pdf","num":11,"title":"第11课","count":24},{"id":"f3-L12","file":"阿拉伯语词汇表 03.pdf","num":12,"title":"第12课","count":23},{"id":"f3-L13","file":"阿拉伯语词汇表 03.pdf","num":13,"title":"第13课","count":23},{"id":"f3-L14","file":"阿拉伯语词汇表 03.pdf","num":14,"title":"第14课","count":26},{"id":"f3-L15","file":"阿拉伯语词汇表 03.pdf","num":15,"title":"第15课","count":22},{"id":"f3-L16","file":"阿拉伯语词汇表 03.pdf","num":16,"title":"第16课","count":24},{"id":"f3-L17","file":"阿拉伯语词汇表 03.pdf","num":17,"title":"第17课","count":23},{"id":"f3-L18","file":"阿拉伯语词汇表 03.pdf","num":18,"title":"第18课","count":19},{"id":"f3-L19","file":"阿拉伯语词汇表 03.pdf","num":19,"title":"第19课","count":27},{"id":"f3-L20","file":"阿拉伯语词汇表 03.pdf","num":20,"title":"第20课","count":24},{"id":"f3-L21","file":"阿拉伯语词汇表 03.pdf","num":21,"title":"第21课","count":21},{"id":"f3-L22","file":"阿拉伯语词汇表 03.pdf","num":22,"title":"第22课","count":27},{"id":"f3-L23","file":"阿拉伯语词汇表 03.pdf","num":23,"title":"第23课","count":25},{"id":"f3-L24","file":"阿拉伯语词汇表 03.pdf","num":24,"title":"第24课","count":21},{"id":"f3-L25","file":"阿拉伯语词汇表 03.pdf","num":25,"title":"第25课","count":26},{"id":"f3-L26","file":"阿拉伯语词汇表 03.pdf","num":26,"title":"第26课","count":22},{"id":"f3-L27","file":"阿拉伯语词汇表 03.pdf","num":27,"title":"第27课","count":28},{"id":"f3-L28","file":"阿拉伯语词汇表 03.pdf","num":28,"title":"第28课","count":26},{"id":"f3-L29","file":"阿拉伯语词汇表 03.pdf","num":29,"title":"第29课","count":19},{"id":"f3-L30","file":"阿拉伯语词汇表 03.pdf","num":30,"title":"第30课","count":27},{"id":"f3-L31","file":"阿拉伯语词汇表 03.pdf","num":31,"title":"第31课","count":22},{"id":"f3-L32","file":"阿拉伯语词汇表 03.pdf","num":32,"title":"第32课","count":25},{"id":"f3-L33","file":"阿拉伯语词汇表 03.pdf","num":33,"title":"第33课","count":24},{"id":"f3-L34","file":"阿拉伯语词汇表 03.pdf","num":34,"title":"第34课","count":18},{"id":"f3-L35","file":"阿拉伯语词汇表 03.pdf","num":35,"title":"第35课","count":27},{"id":"f3-L36","file":"阿拉伯语词汇表 03.pdf","num":36,"title":"第36课","count":25},{"id":"f3-L37","file":"阿拉伯语词汇表 03.pdf","num":37,"title":"第37课","count":21},{"id":"f3-L38","file":"阿拉伯语词汇表 03.pdf","num":38,"title":"第38课","count":26},{"id":"f3-L39","file":"阿拉伯语词汇表 03.pdf","num":39,"title":"第39课","count":19},{"id":"f3-L40","file":"阿拉伯语词汇表 03.pdf","num":40,"title":"第40课","count":25},{"id":"f3-L41","file":"阿拉伯语词汇表 03.pdf","num":41,"title":"第41课","count":26},{"id":"f3-L42","file":"阿拉伯语词汇表 03.pdf","num":42,"title":"第42课","count":22},{"id":"f3-L43","file":"阿拉伯语词汇表 03.pdf","num":43,"title":"第43课","count":28},{"id":"f3-L44","file":"阿拉伯语词汇表 03.pdf","num":44,"title":"第44课","count":22},{"id":"f3-L45","file":"阿拉伯语词汇表 03.pdf","num":45,"title":"第45课","count":12},{"id":"f3-L46","file":"阿拉伯语词汇表 03.pdf","num":46,"title":"第46课","count":16},{"id":"f3-L47","file":"阿拉伯语词汇表 03.pdf","num":47,"title":"第47课","count":14},{"id":"f4-L2","file":"阿拉伯语词汇表 04.pdf","num":2,"title":"第2课","count":25},{"id":"f4-L3","file":"阿拉伯语词汇表 04.pdf","num":3,"title":"第3课","count":25},{"id":"f4-L4","file":"阿拉伯语词汇表 04.pdf","num":4,"title":"第4课","count":16},{"id":"f4-L5","file":"阿拉伯语词汇表 04.pdf","num":5,"title":"第5课","count":27},{"id":"f4-L6","file":"阿拉伯语词汇表 04.pdf","num":6,"title":"第6课","count":21},{"id":"f4-L7","file":"阿拉伯语词汇表 04.pdf","num":7,"title":"第7课","count":23},{"id":"f4-L8","file":"阿拉伯语词汇表 04.pdf","num":8,"title":"第8课","count":26},{"id":"f4-L9","file":"阿拉伯语词汇表 04.pdf","num":9,"title":"第9课","count":19},{"id":"f4-L10","file":"阿拉伯语词汇表 04.pdf","num":10,"title":"第10课","count":25},{"id":"f4-L11","file":"阿拉伯语词汇表 04.pdf","num":11,"title":"第11课","count":26},{"id":"f4-L12","file":"阿拉伯语词汇表 04.pdf","num":12,"title":"第12课","count":20},{"id":"f4-L13","file":"阿拉伯语词汇表 04.pdf","num":13,"title":"第13课","count":26},{"id":"f4-L14","file":"阿拉伯语词汇表 04.pdf","num":14,"title":"第14课","count":25},{"id":"f4-L15","file":"阿拉伯语词汇表 04.pdf","num":15,"title":"第15课","count":25},{"id":"f4-L16","file":"阿拉伯语词汇表 04.pdf","num":16,"title":"第16课","count":23},{"id":"f4-L17","file":"阿拉伯语词汇表 04.pdf","num":17,"title":"第17课","count":19},{"id":"f4-L18","file":"阿拉伯语词汇表 04.pdf","num":18,"title":"第18课","count":27},{"id":"f4-L19","file":"阿拉伯语词汇表 04.pdf","num":19,"title":"第19课","count":23},{"id":"f4-L20","file":"阿拉伯语词汇表 04.pdf","num":20,"title":"第20课","count":22},{"id":"f4-L21","file":"阿拉伯语词汇表 04.pdf","num":21,"title":"第21课","count":25},{"id":"f4-L22","file":"阿拉伯语词汇表 04.pdf","num":22,"title":"第22课","count":21},{"id":"f4-L23","file":"阿拉伯语词汇表 04.pdf","num":23,"title":"第23课","count":22},{"id":"f4-L24","file":"阿拉伯语词汇表 04.pdf","num":24,"title":"第24课","count":24},{"id":"f4-L25","file":"阿拉伯语词汇表 04.pdf","num":25,"title":"第25课","count":19},{"id":"f4-L26","file":"阿拉伯语词汇表 04.pdf","num":26,"title":"第26课","count":28},{"id":"f4-L27","file":"阿拉伯语词汇表 04.pdf","num":27,"title":"第27课","count":24},{"id":"f4-L28","file":"阿拉伯语词汇表 04.pdf","num":28,"title":"第28课","count":20},{"id":"f4-L29","file":"阿拉伯语词汇表 04.pdf","num":29,"title":"第29课","count":26},{"id":"f4-L30","file":"阿拉伯语词汇表 04.pdf","num":30,"title":"第30课","count":23},{"id":"f4-L31","file":"阿拉伯语词汇表 04.pdf","num":31,"title":"第31课","count":20},{"id":"f4-L32","file":"阿拉伯语词汇表 04.pdf","num":32,"title":"第32课","count":27},{"id":"f4-L33","file":"阿拉伯语词汇表 04.pdf","num":33,"title":"第33课","count":26},{"id":"f4-L34","file":"阿拉伯语词汇表 04.pdf","num":34,"title":"第34课","count":23},{"id":"f4-L35","file":"阿拉伯语词汇表 04.pdf","num":35,"title":"第35课","count":24},{"id":"f4-L36","file":"阿拉伯语词汇表 04.pdf","num":36,"title":"第36课","count":22},{"id":"f4-L37","file":"阿拉伯语词汇表 04.pdf","num":37,"title":"第37课","count":23},{"id":"f4-L38","file":"阿拉伯语词汇表 04.pdf","num":38,"title":"第38课","count":25},{"id":"f4-L39","file":"阿拉伯语词汇表 04.pdf","num":39,"title":"第39课","count":21},{"id":"f4-L40","file":"阿拉伯语词汇表 04.pdf","num":40,"title":"第40课","count":26},{"id":"f4-L41","file":"阿拉伯语词汇表 04.pdf","num":41,"title":"第41课","count":23},{"id":"f4-L42","file":"阿拉伯语词汇表 04.pdf","num":42,"title":"第42课","count":16},{"id":"f4-L43","file":"阿拉伯语词汇表 04.pdf","num":43,"title":"第43课","count":24},{"id":"f4-L44","file":"阿拉伯语词汇表 04.pdf","num":44,"title":"第44课","count":14},{"id":"f4-L45","file":"阿拉伯语词汇表 04.pdf","num":45,"title":"第45课","count":17},{"id":"f4-L46","file":"阿拉伯语词汇表 04.pdf","num":46,"title":"第46课","count":17},{"id":"f4-L47","file":"阿拉伯语词汇表 04.pdf","num":47,"title":"第47课","count":4}];
const VOL = {"阿拉伯语词汇表 01.pdf":"第1册","阿拉伯语词汇表 02.pdf":"第2册","阿拉伯语词汇表 03.pdf":"第3册","阿拉伯语词汇表 04.pdf":"第4册"};
const AUDIO_BASE = "https://cdn.jsdelivr.net/gh/realrentao/arabic-vocabulary@main/audio/";
// 绝大多数词条(含第一/二/三课及第4课已达 baseline 的辅音结尾词)统一走 @main 自然音频;
// 仅第4课 7 个 tanween 名词(طالبٌ 破音 + 6 个 ة-词偏弱)走 gh-pages 覆盖, 用 madd 精修 -un。
const AUDIO_OVERRIDE = {"bea7c61ac7f.mp3":true,"f69923af1ab.mp3":true,"541a021b10d.mp3":true,"a11eb08be38.mp3":true,"29fe6f5be0c.mp3":true,"9fb2d7ac796.mp3":true,"edc1caa7c6d.mp3":true,"acbbf08dfc0.mp3":true,"a6a84e49faf.mp3":true,"a29a73b686f.mp3":true,"ab0745e4c5b.mp3":true,"a056e40079c.mp3":true,"a05a0e2d8a6.mp3":true,"a9e8c3d4007.mp3":true,"a69e2570282.mp3":true,"abe6af6f643.mp3":true,"a9e8b39a13b.mp3":true,"a4462714591.mp3":true,"aaad8e41dc2.mp3":true,"a6ed51b77c3.mp3":true,"a4cbf9fe3c2.mp3":true,"ae4733ffe11.mp3":true,"ae17891f39a.mp3":true,"aa8ba3cb805.mp3":true,"a0cb582020c.mp3":true,"a68489984cb.mp3":true,"a8833ee0d24.mp3":true,"ac7c0bf653f.mp3":true,"acd739766e2.mp3":true,"a6d8571ed24.mp3":true,"aadc5fef256.mp3":true,"a4a3b8cf082.mp3":true,"a94a8028344.mp3":true,"a4e17528bef.mp3":true,"aea0972bc88.mp3":true,"aba02fc9967.mp3":true,"ab11d0ecc48.mp3":true,"af15d74967d.mp3":true,"a392e8b9e85.mp3":true,"a909a949f68.mp3":true,"a0b273d5a67.mp3":true,"a43cdaeeae5.mp3":true,"ab960d51683.mp3":true,"a8688d99622.mp3":true,"a3dbf0b60eb.mp3":true,"a083fe20e96.mp3":true,"a037eab9af4.mp3":true,"a434a1ca374.mp3":true,"add05b4618b.mp3":true,"a452870f435.mp3":true,"a222f6bf216.mp3":true,"a2a65a7ff0e.mp3":true,"ae4d09ff098.mp3":true,"a3c99ac1698.mp3":true,"a48df644d5e.mp3":true,"a4416defb3f.mp3":true,"a41e876d781.mp3":true,"ae499172c25.mp3":true,"a281945ea47.mp3":true,"a266459f9d2.mp3":true,"a349a80cf5e.mp3":true,"a29c610686a.mp3":true,"a2d31c1083d.mp3":true,"a1f7f9349c7.mp3":true,"a6b273b6f6e.mp3":true,"ac71e8ec720.mp3":true,"a9882aab554.mp3":true,"aac8e72cb25.mp3":true,"a6aab6ff926.mp3":true,"a95f436e110.mp3":true,"a73de9c42f0.mp3":true,"ae1428f8a0b.mp3":true,"a3496259e6d.mp3":true,"a1e27864ca1.mp3":true,"a8168e410b2.mp3":true,"ac54be4a8bf.mp3":true,"a671c71453e.mp3":true,"a18f013e26a.mp3":true,"aa3b1cddb77.mp3":true,"a6355f2e6d9.mp3":true,"abcb56d4d48.mp3":true,"af7918ab623.mp3":true,"a221736d701.mp3":true,"a1156926732.mp3":true,"ad584fc1e1f.mp3":true,"aceaac5353f.mp3":true,"a34f396d59d.mp3":true,"a4d65e231b5.mp3":true,"a3324257d24.mp3":true,"a514fa096d4.mp3":true,"a0109be90f8.mp3":true,"ab96f4d6a85.mp3":true,"a8d2074f040.mp3":true,"a07419113ec.mp3":true,"a54049fdfa1.mp3":true,"a50ea3ed014.mp3":true,"a91360a0a71.mp3":true,"a58c6f66c3f.mp3":true,"adb7324d81c.mp3":true,"af2d5874121.mp3":true,"a7cfeb5540d.mp3":true,"ac783af8cbb.mp3":true,"a434e2d2dd9.mp3":true,"a653a23d1b4.mp3":true,"aad3d498085.mp3":true,"a5013453440.mp3":true,"a983bbeae42.mp3":true,"a578bf14c53.mp3":true,"a425af5ab57.mp3":true,"a9d5fd45282.mp3":true,"a3882e50a67.mp3":true,"aa726bb657c.mp3":true,"a2764a16f87.mp3":true,"ac367f82637.mp3":true,"a642c0458ba.mp3":true,"a64ff4b4fd1.mp3":true,"a199f50bf51.mp3":true,"aa5db54d92b.mp3":true,"ac0342f9f48.mp3":true,"a5f6b019f66.mp3":true,"af5545801b2.mp3":true,"ad4b2428b07.mp3":true,"a398ab7058b.mp3":true,"a1ce013c1c4.mp3":true,"a6189df3d93.mp3":true,"a873ad09024.mp3":true,"a5059d2b83e.mp3":true,"aa3ea6c5c0a.mp3":true,"a8fd7c8988e.mp3":true,"adef945b51f.mp3":true,"ab95b7e6a71.mp3":true,"aa6b2fd7f9d.mp3":true,"a219fe6c4ff.mp3":true,"a7c16bc2f68.mp3":true,"a8aa8316421.mp3":true,"a8104ebafbb.mp3":true,"a60e231a3f6.mp3":true,"abe82e8f272.mp3":true,"afe9b1d9871.mp3":true,"aa93b958290.mp3":true,"aba5c947f8f.mp3":true,"aab7fefa29c.mp3":true,"ac3892c77d6.mp3":true,"a2e8a6e1173.mp3":true,"a6989231ec8.mp3":true,"a56774bf67c.mp3":true,"a1baf68c20c.mp3":true,"a06225ead00.mp3":true,"abd78c2294d.mp3":true,"a6f1bb7ea45.mp3":true,"a3d422e0089.mp3":true,"a5a8e42aa30.mp3":true,"ae059ab6103.mp3":true,"a89c6f2c4a6.mp3":true,"ad7648c71f7.mp3":true,"a557bfb365c.mp3":true,"a67ae2090eb.mp3":true,"a9f166472d1.mp3":true,"a92a7ce26a3.mp3":true,"af594ddeb0b.mp3":true,"ae158ad7c56.mp3":true,"aa91edad56f.mp3":true,"a4e1e23e44a.mp3":true,"a1742394e94.mp3":true,"a141861c7d3.mp3":true,"a511189c3ca.mp3":true,"afe8d29da33.mp3":true,"ab47948fae6.mp3":true,"add338c4882.mp3":true,"a2c2e1e4e8e.mp3":true,"ad1b7a2c3f8.mp3":true,"a64acc65572.mp3":true,"af4e138ddcf.mp3":true,"afb1162af0c.mp3":true,"a2227b30eed.mp3":true,"abb90634066.mp3":true,"ac0600bd230.mp3":true,"a0e43ef6cca.mp3":true,"a8e3c0d7571.mp3":true,"afff8e8542c.mp3":true,"ab5cae15207.mp3":true,"ab536deed12.mp3":true,"aa4cdb4e2cd.mp3":true,"a9d95cf752d.mp3":true,"a00293f4345.mp3":true,"adfcc8283bf.mp3":true,"affa5ea2646.mp3":true,"adff2e02108.mp3":true,"a77be217b25.mp3":true,"a51fa6e9709.mp3":true,"aa08e0e703e.mp3":true,"aa6b7b1d838.mp3":true,"ac969517920.mp3":true,"af9d5023900.mp3":true,"a74cf6eb7bc.mp3":true,"ae5c8d1cff0.mp3":true,"a93909a4cc0.mp3":true,"afb3d511935.mp3":true,"a7eeaa78b8f.mp3":true,"a60217d546a.mp3":true,"a6c62acdd00.mp3":true,"a9ce8dd5899.mp3":true,"a62b32300bf.mp3":true,"a48a2f99b6a.mp3":true,"a4eb176acfa.mp3":true,"a4085b02b48.mp3":true,"a8f18f846ce.mp3":true,"aed255e6b1d.mp3":true,"afde1c7d47d.mp3":true,"abb44c9a79c.mp3":true,"a3696bc1e03.mp3":true,"ab1f501e430.mp3":true,"ab56e83fb4f.mp3":true,"ae7ef3d0233.mp3":true,"a73876327d1.mp3":true,"a1fab3f944e.mp3":true,"a09c09a3bd8.mp3":true,"a9e47d77d47.mp3":true,"a4e00d2d5f4.mp3":true,"a616e062e7b.mp3":true,"a9040ff0de5.mp3":true,"a8b857e7fab.mp3":true,"a7217a2a2e5.mp3":true,"a7fe1acc2b0.mp3":true,"aa2c3bb5aa8.mp3":true,"ac788677fbf.mp3":true,"a16ee8c96b2.mp3":true,"a44b902b9f8.mp3":true,"a3969bca3a5.mp3":true,"ab7cf8b7884.mp3":true,"abc05e7b7fd.mp3":true,"ab32b93e9d7.mp3":true,"a2b1b723256.mp3":true,"ae7fa698460.mp3":true,"a297e5b9c5a.mp3":true,"a4fe6654dbb.mp3":true,"a800c9ee81a.mp3":true,"aa25f7b9175.mp3":true,"a5de919c933.mp3":true,"a43d83ac18b.mp3":true,"a94df3830d3.mp3":true,"a8b778605c4.mp3":true,"a1188ce429c.mp3":true,"ab0bb077b18.mp3":true,"a994a7a1c83.mp3":true,"a3d0a8d1421.mp3":true,"abdaefe6ae2.mp3":true,"a974324974c.mp3":true,"a3f078cf611.mp3":true,"a837f11bd16.mp3":true,"a98c4f65e85.mp3":true,"ac8549df788.mp3":true,"ad9e2e97113.mp3":true,"adb5b8348ef.mp3":true,"a0b7ec6cb57.mp3":true,"a4c24973034.mp3":true,"ae876d35125.mp3":true,"a0457b3622f.mp3":true,"aafb585fc22.mp3":true,"a690d15b560.mp3":true,"a4337bb0d7c.mp3":true,"a81af76475d.mp3":true,"a0a3ddde7f3.mp3":true,"a1502d55e46.mp3":true,"a3b2e896dd4.mp3":true,"ad998ea334f.mp3":true,"a5d52504da2.mp3":true,"af5fd243dce.mp3":true,"aa246507328.mp3":true,"af87f48d34d.mp3":true,"ac491e07e44.mp3":true,"a3ed49c06de.mp3":true,"a0b29cce036.mp3":true,"af8b70113d6.mp3":true,"ab8bebe0c78.mp3":true,"a236f8c15d8.mp3":true,"aeea52535c8.mp3":true,"a843bffaf2c.mp3":true,"a566ce5e989.mp3":true,"acb9fbf6553.mp3":true,"a173d0dd723.mp3":true,"a72145bdf72.mp3":true,"a92e3cf045e.mp3":true,"a8391770a0f.mp3":true,"a66b98c6dc6.mp3":true,"a1fdea00ced.mp3":true,"a45cc76515e.mp3":true,"a67040894a6.mp3":true,"ad862ac5a9a.mp3":true,"a8b885ff3cf.mp3":true,"a86c78b3800.mp3":true,"a50c9d89de7.mp3":true,"ac88bdde1bf.mp3":true,"a91c3f59e29.mp3":true,"a2180bef93d.mp3":true,"a22524ebf01.mp3":true,"a7bb6900287.mp3":true,"a2e962d3cbb.mp3":true,"abedff2d636.mp3":true,"af1a19a2d1a.mp3":true,"ae34cd40273.mp3":true,"a8a6af9ce52.mp3":true,"aa326dfd7ee.mp3":true,"a823404198a.mp3":true,"a2120107ca8.mp3":true,"a2235d7a78b.mp3":true,"a9930c37f70.mp3":true,"aeb8a38bba7.mp3":true,"afff6bcc8cd.mp3":true,"a35d1380e8e.mp3":true,"a276d3e3af8.mp3":true,"a370f60eaeb.mp3":true,"a84ed16af82.mp3":true,"a523c27986f.mp3":true,"a7002c460c2.mp3":true,"afe93673575.mp3":true,"af446f74b5e.mp3":true,"ad54acf1780.mp3":true,"ab7942dc938.mp3":true,"a213fa60c85.mp3":true,"a13fdd90970.mp3":true,"a47315f9cb2.mp3":true,"a0534bc4a9c.mp3":true,"a0514cce61d.mp3":true,"a464ed1ed64.mp3":true,"a89ac836819.mp3":true,"a66bb21abd2.mp3":true,"ad4debdea55.mp3":true,"a8af269f799.mp3":true,"a8c9c7f5823.mp3":true,"aa217a09577.mp3":true,"a987cc311e5.mp3":true,"aaeeab90542.mp3":true,"a1329447a70.mp3":true,"a5dc4ad507a.mp3":true,"a5f89145a0a.mp3":true,"aae51d2880d.mp3":true,"ae0d7e9ff64.mp3":true,"a881308ce8d.mp3":true,"a53ae4f362e.mp3":true,"a6065b33e4f.mp3":true,"a39803ccd93.mp3":true,"aa1a693ec7a.mp3":true,"a2aa0f1f0f5.mp3":true,"a520fbc3b8e.mp3":true,"a29e95e062d.mp3":true,"a085aca3089.mp3":true,"a8409321242.mp3":true,"aa85418dc6f.mp3":true,"a7cd14a4955.mp3":true,"ac145174f1d.mp3":true,"a1988a599bc.mp3":true,"aba261af639.mp3":true,"aa0872bbb8d.mp3":true,"a0361de2173.mp3":true,"a901168aaf5.mp3":true,"a01a655d7d0.mp3":true,"a5426a40b84.mp3":true,"acda3b1bd93.mp3":true,"a0ec6a086c7.mp3":true,"ac6aace8cf8.mp3":true,"aab10866377.mp3":true,"ad545a834a7.mp3":true,"a99af92ee95.mp3":true,"a3caa27ca0b.mp3":true,"a31a7828837.mp3":true,"adec699936a.mp3":true,"aee282767b2.mp3":true,"a1a540c49b9.mp3":true,"ad42c51cbb3.mp3":true,"aa50cf9bb79.mp3":true,"a9ababb594b.mp3":true,"a33d986dfab.mp3":true,"a58c8b50d0c.mp3":true,"a24c61850a7.mp3":true,"a559f14cdfd.mp3":true,"ad7992ab5e5.mp3":true,"a27b486e2a7.mp3":true,"ac3fb922fc0.mp3":true,"a679fc2b9a7.mp3":true,"af793568557.mp3":true,"ab6be2024a4.mp3":true,"aab825bf37b.mp3":true,"a8c41a8da5c.mp3":true,"a39a8c0bdbd.mp3":true,"aa975667893.mp3":true,"add0247107d.mp3":true,"a10c2f0ef06.mp3":true,"a9079fdb735.mp3":true,"afd7969cc69.mp3":true,"a63856ce89b.mp3":true,"afc8bb7b19b.mp3":true,"a058835857d.mp3":true,"a412b8ee290.mp3":true,"a7c9040404a.mp3":true,"a78c1353ab1.mp3":true,"a8505bd9736.mp3":true,"ad64af8fc2b.mp3":true,"a79d7a76811.mp3":true,"a036aab1330.mp3":true,"af95fa3111a.mp3":true,"a6610da5376.mp3":true,"a25e5b5ebf6.mp3":true,"aba93af00fd.mp3":true,"a4218b5820d.mp3":true,"a04d3405db0.mp3":true,"a7d6c96360a.mp3":true,"aeb29987bc6.mp3":true,"ada4cbbb6ac.mp3":true,"a58e523084e.mp3":true,"a8ab0ae571e.mp3":true,"aef2a1537a6.mp3":true,"a2ab77e7668.mp3":true,"abd75904be0.mp3":true,"a728ecfebdd.mp3":true,"a104d73bad4.mp3":true,"adb4ee3fdfc.mp3":true,"a13e64eceab.mp3":true,"ae2574838fa.mp3":true,"a2f646190e9.mp3":true,"ae06ecd91db.mp3":true,"abb534ab88f.mp3":true,"af19453566b.mp3":true,"a00a441f14c.mp3":true,"af16fb57092.mp3":true,"a969d454f34.mp3":true,"a13d3c798e4.mp3":true,"a7e4f609222.mp3":true,"ab28d66ce40.mp3":true,"a7647f1d934.mp3":true,"a5678adaa9f.mp3":true,"a155b60e7d1.mp3":true,"a582838f068.mp3":true,"aaff4e18084.mp3":true,"a0129426a35.mp3":true,"afb117a590a.mp3":true,"a196d90a65e.mp3":true,"a2fea590a46.mp3":true,"a92942a61c4.mp3":true,"adf4409ae40.mp3":true,"a676f49579b.mp3":true,"ae13364964d.mp3":true,"a9ea11666c1.mp3":true,"a9743c9afb1.mp3":true,"a0933d190e6.mp3":true,"a0bb5c57f83.mp3":true,"a13ea48894a.mp3":true,"a9e47d4d6e0.mp3":true,"a958ac47c91.mp3":true,"a49976f9fca.mp3":true,"a6314953036.mp3":true,"a1e71c0aa46.mp3":true,"aed79254d9e.mp3":true,"a4a489919e1.mp3":true,"a301ce0088a.mp3":true,"afd47c933a6.mp3":true,"a96a03fffa6.mp3":true,"aa6e4cd25a1.mp3":true,"a9d2b5386f7.mp3":true,"a15d2e34ccb.mp3":true,"ae32275b1e5.mp3":true,"a871d3c8c27.mp3":true,"aa2fa77c136.mp3":true,"ab6fc454d64.mp3":true,"acb8153da24.mp3":true,"ae39aef72e1.mp3":true,"aafdf4b5f69.mp3":true,"a4e75f925f4.mp3":true,"a336dc51389.mp3":true,"a08385af2ed.mp3":true,"acdaa74821b.mp3":true,"a7c2f55eae4.mp3":true,"a277daab05f.mp3":true,"a44e88abbf3.mp3":true,"a16d637bfdc.mp3":true,"a2353b4a405.mp3":true,"af9e98dd76e.mp3":true,"a7a4d66b690.mp3":true,"a0a29efd6dc.mp3":true,"a39f0c4f743.mp3":true,"af88b931648.mp3":true,"a5e99998d6a.mp3":true,"a48e6dcf915.mp3":true,"aac8bcda019.mp3":true,"a88729f25c5.mp3":true,"a2a8aaa6c0e.mp3":true,"a0ae31189aa.mp3":true,"a5fae3055b7.mp3":true,"a03152504ec.mp3":true,"afa9dcf5b4f.mp3":true,"aaa03763d16.mp3":true,"a2a7e4cbdf4.mp3":true,"af5ee847de1.mp3":true,"a1de8f5c305.mp3":true,"a81c8d7468a.mp3":true,"ab5f9e98a9e.mp3":true,"ac5fd849a30.mp3":true,"aa291d51420.mp3":true,"a965442ef6b.mp3":true,"ab4ee1e3c56.mp3":true,"adb77091c61.mp3":true,"a6024ad9f95.mp3":true,"ad926aeae31.mp3":true,"ae6b15ca2c6.mp3":true,"a57a05625c1.mp3":true,"ac904dac93a.mp3":true,"a7996af6d2a.mp3":true,"a43919e976e.mp3":true,"ad25a23d488.mp3":true,"ad83675ac76.mp3":true,"ad51948084f.mp3":true,"a80f983bf76.mp3":true,"a1be3dab3ef.mp3":true,"a2dc4d6ceb3.mp3":true,"a289f2df059.mp3":true,"ac25fdf9261.mp3":true,"a2a2d2accc6.mp3":true,"acc9622ad55.mp3":true,"af0fd9c1e34.mp3":true,"a9c48b604cc.mp3":true,"affe62ff685.mp3":true,"af491ce0206.mp3":true,"afac7a55554.mp3":true,"afd9c26b53f.mp3":true,"ae74e26e440.mp3":true,"a90c6603336.mp3":true,"a506d1be66d.mp3":true,"af69f069b5f.mp3":true,"a3b79f0077c.mp3":true,"a793ebb1cfe.mp3":true,"a0068373a85.mp3":true,"a8aaeb2e311.mp3":true,"afc17578733.mp3":true,"a1fb460daa7.mp3":true,"a43ad29c600.mp3":true,"a2061f793b6.mp3":true,"a17892c9794.mp3":true,"ae95af144d2.mp3":true,"a54d4109189.mp3":true,"af4689c2119.mp3":true,"a86e1f65eb4.mp3":true,"a178f9be484.mp3":true,"a45b4473a9a.mp3":true,"a16e316ca4f.mp3":true,"a8d72df8a54.mp3":true,"a6217749f33.mp3":true,"a2a190a308d.mp3":true,"ab588a98f18.mp3":true,"aebf367325e.mp3":true,"a963a0eaf4c.mp3":true,"a0a823cfbfe.mp3":true,"a39dcb116b8.mp3":true,"a77da328ecd.mp3":true,"a41137f28f1.mp3":true,"a4e96bb4030.mp3":true,"a8deb1ecb2e.mp3":true,"aa5f37367ba.mp3":true,"a9db1a2272b.mp3":true,"a289fa1e75a.mp3":true,"a2aef480f32.mp3":true,"a73c6d07a92.mp3":true,"aa494debc8c.mp3":true,"a1bc23653d6.mp3":true,"a14ed5eccb2.mp3":true,"aab8db215e0.mp3":true,"a660934bcb9.mp3":true,"a6cf6cadbfe.mp3":true,"a13c4f5ebcc.mp3":true,"ae7efeef0fe.mp3":true,"a9186170486.mp3":true,"a538d7560a9.mp3":true,"a1b594b06a3.mp3":true,"a8cd7424c53.mp3":true,"a69ba51e04a.mp3":true,"afad58c262e.mp3":true,"aab6f5b5b56.mp3":true,"a4686369176.mp3":true,"a65414bb0a7.mp3":true,"a33f7f12e0a.mp3":true,"a9c35144f68.mp3":true,"af7f5164baa.mp3":true,"a7b024f6898.mp3":true,"ad2562f57eb.mp3":true,"aff5e791831.mp3":true,"a4e5ee3453f.mp3":true,"a0f7877eb6a.mp3":true,"a71e02290b9.mp3":true,"ae63b7cfaca.mp3":true,"afdc2d2d3e5.mp3":true,"a89c14a3d08.mp3":true,"ad184e1b459.mp3":true,"ae5ae2bde56.mp3":true,"a10f6f570a9.mp3":true,"a820afbcaed.mp3":true,"af1e9d01576.mp3":true,"aa0af76ca8a.mp3":true,"aad479ca875.mp3":true,"a6dd998a27e.mp3":true,"a10d5478df2.mp3":true,"a4a5cdbe467.mp3":true,"a5985e23f1a.mp3":true,"a767e12eafe.mp3":true,"acd8ea7c96e.mp3":true,"aca86b6804c.mp3":true,"aa2868547a9.mp3":true,"ace74a59141.mp3":true,"a847ac1b15e.mp3":true,"a183cade4fd.mp3":true,"a9c4de229ac.mp3":true,"aa0fe0ad3b8.mp3":true,"ad709ce4e42.mp3":true,"a460c311819.mp3":true,"add2ab392b4.mp3":true,"a5ac1b49710.mp3":true,"aa992be8569.mp3":true,"ad070915da7.mp3":true,"a576ca0b543.mp3":true,"afc82b20d6a.mp3":true,"af3ecd840a7.mp3":true,"aacf3a58d49.mp3":true,"a9addd504d1.mp3":true,"a299521e7a7.mp3":true,"a28cf54d053.mp3":true,"a79644134b8.mp3":true,"ae256707499.mp3":true,"afbdc75f54c.mp3":true,"ac1790219fb.mp3":true,"ad3073ca90c.mp3":true,"a74c185941a.mp3":true,"a088590f311.mp3":true,"a3c93db5b41.mp3":true,"adb00497d6a.mp3":true,"a8bc35493ab.mp3":true,"a50c16aecfc.mp3":true,"a6f9f635274.mp3":true,"ab923db9aa6.mp3":true,"a8698c43e66.mp3":true,"ac103faa79f.mp3":true,"a99acfe3c04.mp3":true,"a18b18714f1.mp3":true,"aa145387c07.mp3":true,"abb38426e54.mp3":true,"a36593f7bfb.mp3":true,"a404c60f321.mp3":true,"af57159cc15.mp3":true,"a3fc6a6e6aa.mp3":true,"a5b7cceac2a.mp3":true,"a90869637f9.mp3":true,"a4a6f3e3c48.mp3":true,"ae5b358197a.mp3":true,"a47588eae02.mp3":true,"a489f41c4b1.mp3":true,"a017cb0c438.mp3":true,"ad9bd42aca4.mp3":true,"a4503393086.mp3":true,"a8c46b138f4.mp3":true,"a16d2fc1f6e.mp3":true,"a855f6102c7.mp3":true,"aceeb1997cf.mp3":true,"a62f1e8b595.mp3":true,"a6345903f7a.mp3":true,"a7830fc6a53.mp3":true,"aa25b1c9227.mp3":true,"ad8194f388e.mp3":true,"aa124449ace.mp3":true,"a57bbe528fe.mp3":true,"a5cdf7f1b7b.mp3":true,"a9eea936d75.mp3":true,"accc2ff8e15.mp3":true,"ac86e801aa2.mp3":true,"a77674f33e5.mp3":true,"a02b5e06a73.mp3":true,"a689ca971ce.mp3":true,"a9ad7ee582f.mp3":true,"a5c2aa0a372.mp3":true,"a541653a8a0.mp3":true,"aaaff49eced.mp3":true,"a11e59e7be1.mp3":true,"a5372fe2cca.mp3":true,"a5c4243e34e.mp3":true,"a8f77ed7617.mp3":true,"ad105a142e9.mp3":true,"a917fe7292f.mp3":true,"a8a7ad18c95.mp3":true,"a0195ca5901.mp3":true,"a6f460605b0.mp3":true,"a4e80c0a918.mp3":true,"a30dc0975b1.mp3":true,"a78588a8037.mp3":true,"af046178f16.mp3":true,"a833a9a9d83.mp3":true,"a326f568e1e.mp3":true,"a525ea72b05.mp3":true,"af5a5ad3c41.mp3":true,"a2153264bfb.mp3":true,"a7c6941fd5c.mp3":true,"a1223111b18.mp3":true,"a0c15c365bd.mp3":true,"ab1b9d0c0e4.mp3":true,"a4fb662e915.mp3":true,"add54fcdb79.mp3":true,"a1dff2f512b.mp3":true,"affb3561777.mp3":true,"aed531c2ac3.mp3":true,"af041ba83e3.mp3":true,"aa89a28d1ec.mp3":true,"aa7b101700f.mp3":true,"a39a281901c.mp3":true,"ab4f61dac20.mp3":true,"a5b9e3c146f.mp3":true,"aa61208b816.mp3":true,"aec69aa714d.mp3":true,"a3016638288.mp3":true,"ab88179906e.mp3":true,"abe016a7d43.mp3":true,"a17008f094a.mp3":true,"ae34ef36535.mp3":true,"ac00ab4c90d.mp3":true,"aa71eab6755.mp3":true,"afefb2fa9bf.mp3":true,"afd59af0bed.mp3":true,"ade172c3339.mp3":true,"ae8efe6bb16.mp3":true,"a808d380310.mp3":true,"a3bd2be486f.mp3":true,"a55700e7900.mp3":true,"a5d539520d4.mp3":true,"a7e87935048.mp3":true,"ade22cad3ae.mp3":true,"afbccc1dc19.mp3":true,"a3d884ed2ec.mp3":true,"a1f0948a5b3.mp3":true,"ac9cc6c982f.mp3":true,"a01f13fcb6b.mp3":true,"a1dde29ded0.mp3":true,"a87cf490010.mp3":true,"a8b44780fc6.mp3":true,"a9a8ca02354.mp3":true,"a6344c9573e.mp3":true,"a76657911d7.mp3":true,"a0b63856c0a.mp3":true,"a9837878500.mp3":true,"a1f8f8bb341.mp3":true,"a3518d8a9a9.mp3":true,"a7cec93e65a.mp3":true,"af523a87ddf.mp3":true,"a3a06c2101d.mp3":true,"a6f1c13bb60.mp3":true,"a614ccff572.mp3":true,"a7ce7f2f7a2.mp3":true,"ab1d53c769d.mp3":true,"acc6b3f8eff.mp3":true,"a8a2c600211.mp3":true,"a988c14c2d6.mp3":true,"a4a9948d3f8.mp3":true,"a6c3a663b2d.mp3":true,"aafaa917b1e.mp3":true,"adb6031620f.mp3":true,"a5e382c5b39.mp3":true,"a209656199b.mp3":true,"a174b3bdcf7.mp3":true,"ae11550de4c.mp3":true,"abb89a3fa20.mp3":true,"a0837222bad.mp3":true,"ae91048c773.mp3":true,"aa3bcb5a65c.mp3":true,"a23e3e52e19.mp3":true,"a6856b1f874.mp3":true,"a9a4143f9e2.mp3":true,"a481b5e9a3d.mp3":true,"a1ae4db9334.mp3":true,"afc73db1d62.mp3":true,"ab409d2fcce.mp3":true,"a9baebb446f.mp3":true,"a0194a3463c.mp3":true,"adb76f22bec.mp3":true,"ae73a763ff5.mp3":true,"ad713c8b2f7.mp3":true,"ac7403d34de.mp3":true,"a76a011fbf1.mp3":true,"aabe2799354.mp3":true,"aef330be540.mp3":true,"ae8cbf544e1.mp3":true,"a6027b54477.mp3":true,"aabfdf1a3d9.mp3":true,"a11bc9b5342.mp3":true,"a2b2134a264.mp3":true,"a028a4faf5c.mp3":true,"aec46324bd3.mp3":true,"ac6f1fb2cbb.mp3":true,"a07009eb844.mp3":true,"a2fe6f4dc6f.mp3":true,"adf64f6620b.mp3":true,"a5b8fae3fe1.mp3":true,"af03cad6489.mp3":true,"a63f786d5b4.mp3":true,"aef05d5cdf7.mp3":true,"a93141abb70.mp3":true,"a3cfb53e448.mp3":true,"a53de0391b3.mp3":true,"a67d9538357.mp3":true,"a4c163c248b.mp3":true,"a2feb574b45.mp3":true,"afea6f630d4.mp3":true,"a8bf65a5f19.mp3":true,"a4cef90861d.mp3":true,"a86592ced8d.mp3":true,"a1c83be1682.mp3":true,"a8d3ac9e69d.mp3":true,"a1fc9832abf.mp3":true,"aaabcd9c147.mp3":true,"a21a12b51f2.mp3":true,"a641abf5920.mp3":true,"ae6428cde4f.mp3":true,"a9f1db85948.mp3":true,"a89d6746697.mp3":true,"a8e342397a0.mp3":true,"aacef32f1cb.mp3":true,"a33425f530f.mp3":true,"a04dc3a8ffe.mp3":true,"a456d2d1e3f.mp3":true,"aca605317c6.mp3":true,"a44c8157d3c.mp3":true,"a5dfd7933a0.mp3":true,"ae94bbad102.mp3":true,"a944a8adb1c.mp3":true,"a1df3f0a6c9.mp3":true,"a3fd3014810.mp3":true,"a0a5e6d222f.mp3":true,"a7fee63ec60.mp3":true,"a4761dac3c8.mp3":true,"a1b5f9a7aad.mp3":true,"a5a2fc7f793.mp3":true,"a05f4acf5cd.mp3":true,"a3fd5ad0bbc.mp3":true,"ab87d4808ae.mp3":true,"a0918716b50.mp3":true,"a5f8e9eaf4b.mp3":true,"a325ae79d15.mp3":true,"a682a40d65f.mp3":true,"a60741f54fe.mp3":true,"acc51141190.mp3":true,"a04de4edc72.mp3":true,"a9f2b2d0c4d.mp3":true,"a95fe5e94f2.mp3":true};
const AUDIO_OVERRIDE_BASE = "https://cdn.jsdelivr.net/gh/realrentao/arabic-vocabulary@gh-pages/audio/";
function audioSrc(p){ return (AUDIO_OVERRIDE[p] ? AUDIO_OVERRIDE_BASE : AUDIO_BASE) + p; }

let activeId = null;
let activeCats = new Set(["名词","动词","虚词","短语"]);
let qi = 0, pendingTimer = null, cardEls = [], currentEntries = [];
let lessonCache = {};   // 已加载课程缓存(避免重复请求)
let ALL = null;         // 搜索全集(首次搜索时懒加载)
const cur = new Audio(); cur.preload = "auto";
const prefetch = new Audio(); prefetch.preload = "auto";  // 提前预取下一音频, 消除连播间隔

const CAT_COLOR = {"名词":"#137a7f","动词":"#c0623f","虚词":"#b8893b","短语":"#5a8a3c"};
const CAT_LABEL = {"名词":"名词","动词":"动词","虚词":"虚词","短语":"短语"};
function catLabel(c){ return CAT_LABEL[c] || c; }
function titleOf(id){ const m = LESSON_INDEX.find(x=>x.id===id); return m ? (m.title||("第"+m.num+"课")) : id; }

// ---- 懒加载单课 ----
async function getLesson(id){
  if(lessonCache[id]) return lessonCache[id];
  const r = await fetch("data/lessons/" + id + ".json", {cache:"no-cache"});
  const j = await r.json();
  lessonCache[id] = j;
  return j;
}

// ---- 播放打断机制: 新音频一响, 旧的彻底停 ----
function stopPlayback(){
  if(pendingTimer){ clearTimeout(pendingTimer); pendingTimer = null; }
  cur.pause();
  clearPlaying();
}
// play(path, el): el 为被点击的卡片元素, 直接高亮它(避免同课重复音频只高亮第一个)
function play(path, el){
  if(!path) return;
  stopPlayback();
  cur.src = audioSrc(path);
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

async function selectLesson(id){
  activeId = id;
  document.querySelectorAll(".litem").forEach(x=>x.classList.toggle("active", x.dataset.id===id));
  await renderLesson();
  closeSide();
}

async function renderLesson(){
  let L;
  try { L = await getLesson(activeId); }
  catch(e){ document.getElementById("main").innerHTML = '<div class="empty">课程加载失败，请检查网络后重试</div>'; return; }
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
  // 预取第一课音频, 让首次点击即时出声
  if(L.entries.length) prefetch.src = audioSrc(L.entries[0].audio);
}

function toggleCat(c){
  if(activeCats.has(c)) activeCats.delete(c); else activeCats.add(c);
  renderLesson();
}

// ---- 整课连播 ----
async function playAll(){
  let L;
  try { L = await getLesson(activeId); } catch(e){ return; }
  if(!L) return;
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
  const nxt = currentEntries[qi];
  if(nxt) prefetch.src = audioSrc(nxt.audio);   // 提前下载下一音频, 连播无间隔
  cur.pause();
  cur.src = audioSrc(e.audio);
  cur.onended = ()=>{ pendingTimer = setTimeout(nextInQueue, 300); };
  cur.play().catch(()=>{ pendingTimer = setTimeout(nextInQueue,300); });
  clearPlaying();
  const el = cardEls[qi-1];
  if(el) el.classList.add("playing");
}
function stopAll(){ stopPlayback(); }

// ---- 搜索(带防抖, 首次搜索才下载全集索引) ----
let searchTimer = null;
function onSearch(){
  if(searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(doSearch, 120);
}
async function doSearch(){
  const q = document.getElementById("q").value.trim().toLowerCase();
  const main = document.getElementById("main");
  if(!q){ if(activeId) renderLesson(); else main.innerHTML = '<div class="empty">请选择左侧课程</div>'; return; }
  if(!ALL){
    try { const r = await fetch("data/all.json", {cache:"no-cache"}); ALL = await r.json(); }
    catch(e){ main.innerHTML = '<div class="empty">搜索索引加载失败，请检查网络</div>'; return; }
  }
  const res = [];
  ALL.forEach(e=>{
    if((e.disp && e.disp.toLowerCase().includes(q)) || (e.zh && e.zh.toLowerCase().includes(q)))
      res.push(e);
  });
  let html = `<div class="lesson-head"><h1>搜索 “${q}”</h1></div><div class="hint">找到 ${res.length} 个结果</div>`;
  if(res.length===0) html += '<div class="empty">没有匹配的词条</div>';
  res.slice(0,300).forEach(r=>{
    html += `<div class="res-item" onclick="pickFromSearch('${r.lid}')">
        <span class="ara">${r.disp}</span>
        <span class="zh">${r.zh||""}</span>
        <span class="catlab" style="background:${CAT_COLOR[r.cat]||"#888"}">${catLabel(r.cat)}</span>
        <span class="from">${titleOf(r.lid)}</span>
      </div>`;
  });
  main.innerHTML = html;
}
// 搜索结果点击: 清空搜索框并进入该课
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
boot();
