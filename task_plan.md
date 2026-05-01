# AI API 性价比网站改进计划

## 目标
修复并改进国内 AI 厂商 API / Code Plan 比价网站的缺陷，确保所有数据准确、功能正常、代码安全。

---

## Phase 1: 清理死代码（已完成）
- [x] 移除向导（wizard）、首页评分、计划选择等废弃 UI 代码
- [x] 移除未使用的辅助函数和模板字符串
- [x] 文件从 ~2130 行压缩到 ~1650 行

## Phase 2: 安全修复（已完成）
- [x] 所有外部链接添加 `rel="noopener noreferrer"`
- [x] 添加 `escapeHtml()` 函数
- [x] 详情弹窗改用安全的 DOM API（`createElement` + `textContent`）
- [x] 修复 XSS 风险点

## Phase 3: 功能修复（已完成）
- [x] 修复详情弹窗不工作的问题
- [x] 添加弹窗 HTML 结构到 index.html
- [x] 添加弹窗 CSS 样式
- [x] 添加详情按钮点击事件处理
- [x] 修复 `modelSort()` 函数被误删的问题

## Phase 4: 补全 API 价格数据（已完成）
- [x] 阿里云 Qwen3.6-Plus: ¥2/12/1M
- [x] 腾讯云 混元 T1: ¥1/4/1M
- [x] 火山方舟 豆包 Pro: ¥0.8/2/0.16/1M
- [x] 百度千帆 ERNIE-4.5-Turbo: ¥0.8/3.2/0.2/1M
- [x] 智谱 GLM-5.1: ¥6/24/1.3/1M
- [x] 讯飞星火: 改为标注"仅订阅套餐，无按量单价"
- [x] 所有状态从 `pending` 改为 `official`

## Phase 5: 待修复问题（已完成）
- [x] **移除 404 fetch**: `boot()` 中 `fetch("./data/official-price-data.json")` 已移除
- [x] **复核 Qwen3.6-Plus 价格**: 阿里百炼帮助中心未列出按量计费单价，已在 weaknesses 中标注需人工复核
- [x] **复核混元 T1 价格**: 已确认输入 ¥1/输出 ¥4 / 百万 tokens（来源：腾讯云官方文档）
- [x] **清理剩余 innerHTML**: `renderSyncPanel`, `renderChangePanel`, `renderSourceDirectory`, `renderProviderLibrary`, `buyBtn` 已改为安全 DOM API
- [x] **"待同步"筛选项**: 已移除（当前无 pending 内容）
- [x] **京东云数据**: 订阅页为动态加载，当前"官方订阅页未公开模型名"标注如实反映信息状况

## Phase 6: 部署前优化（已完成）
- [x] 补 og-image.svg — `assets/og-image.svg` 已存在且内容完整
- [x] 修复弹窗 aria-labelledby — `modal-title` id 已绑定到弹窗标题 h2
- [x] DNS prefetch — 11 个厂商外部域名已添加
- [x] 构建脚本 — `build.sh` 生成 minified dist/ 目录（JS -24%）

## Phase 7: 可选增强（待评估）
- [ ] 响应式布局进一步优化
- [ ] 按 API 输出价/缓存价排序
- [ ] 价格变动历史记录

## Phase 6: 可选增强
- [ ] 响应式布局优化（移动端）
- [ ] 按价格排序功能
- [ ] 价格变动历史记录
