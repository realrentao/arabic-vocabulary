# Arabic Vocabulary Learning Site · 阿拉伯语词汇表学习网站

阿拉伯语词汇表学习网站，所有词条由 **阿联酋女声 (ar-AE-FatimaNeural, edge-tts)** 配音，可点击播放。

## 内容
- 按「课」组织，每课分 **名词 / 虚词 / 短语** 三类
- 阿语词条均带变音符号（元音标注），点击即可听标准女声朗读
- 第一册已逐课精修（第 2、3 课），其余各册按原始解析数据呈现

## 项目结构
- `index.html` — 站点主页（数据内联，离线可直接打开）
- `audio/` — 各词条 mp3 发音（约 4000+ 条）
- `data_full.json` / `site_data.json` — 结构化词表
- `audio_manifest.json` — 发音文本 → 文件名映射

## 本地预览
直接用浏览器打开 `index.html` 即可（音频走相对路径 `audio/`）。

## 线上访问
https://realrentao.github.io/arabic-vocabulary/

---
由 WorkBuddy 生成并部署。
