# AI API 性价比厂商库

一个面向国内用户的 **AI API 价格对比和 Code Plan 推荐平台**，专注于简化 AI 大模型服务的购买决策。

## 🌐 在线体验

👉 **[立即打开厂商库](https://yfwangning.github.io/coding-plan-/)** ← 查看完整的 AI API 厂商对比和套餐推荐

## 🎯 项目定位

通过集中、结构化、实时同步官方价格数据，帮助开发者和企业快速找到最适合的 AI 大模型厂商和套餐方案。

**核心特性：**
- 📊 官方价格数据实时同步（每日 UTC+8 09:00 自动更新）
- 🔍 透明的评分体系（质量、易用性、成本等多维度）
- 💡 30 秒问答式智能推荐向导
- 🇨🇳 人民币主价展示 + 官方来源链接
- 🏷️ Code Plan / Token Plan 套餐库
- 📱 响应式设计，支持移动端

## 📦 项目结构

```
coding-plan-/
├── index.html              # 主页面
├── app.js                  # 核心应用逻辑和数据定义（70K+）
├── styles.css              # 样式表（20K+）
├── build.sh                # 构建和部署脚本
├── data/
│   ├── vendor-sources.json # 官方数据源配置
│   ├── official-price-data.json  # 自动同步的官方价格数据
│   └── update-report.md    # 每日更新报告
├── scripts/
│   ├── update-official-data.mjs   # 官方数据爬虫和解析器
│   └── validate-site-data.mjs     # 数据验证脚本
├── .github/workflows/daily-price-update.yml  # GitHub Actions 自动化
└── assets/                 # 图片和资源
```

**技术栈：**
- HTML5 + CSS3 + Vanilla JavaScript (No Framework)
- Node.js + JavaScript (爬虫脚本)
- GitHub Actions (自动化)
- GitHub Pages (静态站点部署)

## 🚀 快速开始

### 本地开发

```bash
# 启动本地 HTTP 服务器
python3 -m http.server 5178

# 访问浏览器
open http://127.0.0.1:5178/
```

### 上线前检查

```bash
# 检查 JavaScript 语法
node --check app.js

# 验证数据完整性和一致性
node scripts/validate-site-data.mjs
```

**验证脚本会检查：**
- ✅ 数据中不出现美元或 USD
- ✅ 每个厂商必须有官方来源
- ✅ 订阅套餐厂商必须有购买入口
- ✅ 官方套餐必须有价格和官方来源
- ✅ API 模型必须有价格和官方来源
- ✅ 每个厂商必须有旗舰或 API 模型

## 📡 官方数据同步

### 手动更新

```bash
# 抓取所有厂商官方页面，生成结构化价格数据
node scripts/update-official-data.mjs
```

**输出：**
- `data/official-price-data.json` - 结构化官方价格（覆盖到前台）
- `data/update-report.md` - 人工可读的更新摘要

### 自动更新 (GitHub Actions)

配置在 `.github/workflows/daily-price-update.yml`，每天北京时间 09:00 自动：
1. 抓取所有厂商官方源
2. 解析结构化价格数据
3. 生成更新报告
4. 提交变更到代码库

### 已支持的结构化解析器

| 厂商 | 解析器覆盖 | 数据类型 |
|------|----------|--------|
| DeepSeek | ✅ | API 定价 |
| 小米 MiMo | ✅ | API + Token Plan |
| 阿里百炼 | ✅ | Token Plan 团队版 |
| 百度千帆 | ✅ | Coding Plan |
| 京东云 | ✅ | Coding Plan 特惠 |
| 讯飞星辰 | ✅ | Coding Plan 焕新版 |
| 其他厂商 | ⏳ | 快照 + SHA-256 监控 |

## 📊 数据说明

### 当前数据状态

当前为可运行 MVP 的 **结构化样例数据**，支持开发、演示和 UI 测试。

**已核验的生产级数据：**
- **DeepSeek**：复核至 2026-04-29，已按官方中文价格页验证
  - `deepseek-v4-flash`：输入 ¥1、输出 ¥2、缓存 ¥0.02 / 百万 tokens
  - `deepseek-v4-pro`：2.5 折期间输入 ¥3、输出 ¥6、缓存 ¥0.025 / 百万 tokens

**其他厂商**：示例数据，界面中标记为"自动抓取待确认"，上线前需：
- 接入半自动化爬虫和人工审核流程
- 逐条复核官方价格和折扣信息
- 建立审核队列和变更历史

### 数据显示与同步规则

#### API 模型

- 模型名称、上下文长度、最大输出、输入/输出/缓存价必须来自官方文档或官方价格页
- 每个厂商 API 榜**最多展示 2 个模型**，优先旗舰和次旗舰
- 超过 2 个时按 `displayRank` 排序截断
- 状态标签：官方确认 > 人工复核 > 本站估算 > 参考页待核验 > 自动抓取待确认

#### Code Plan / Token Plan

- 优先采用厂商**官方明确声明的套餐**
- 来自参考对比表的套餐必须标记为"参考页待核验"，**不得标为官方确认**
- Code Plan 榜仅展示官方套餐，API 估算和本站组合方案不得进入

#### 失败处理

- 抓取失败或解析失败时，脚本会**保留上一版已确认官方数据**
- 问题写入 `reviewQueue`，等待人工复核

## 🛠️ 部署说明

### 静态文件配置

#### 安全头 (_headers)

已配置适用于 Netlify / Cloudflare Pages 的：
- CSP 内容安全策略
- X-Frame-Options 防点击劫持
- 缓存策略

#### 搜索引擎优化

- `robots.txt` 已允许搜索引擎全站抓取
- 正式域名确定后补充：
  - `canonical` 标签（防重复内容）
  - 绝对地址 `og:image`（社交分享预览）
  - `sitemap.xml`（搜索引擎索引加速）

### 推荐部署平台

| 平台 | 特点 | 适合场景 |
|------|------|--------|
| GitHub Pages | 免费、内置、无需配置 | ⭐ 当前部署方案 |
| Netlify | GitHub 原生集成、自动部署 | 开源项目、快速迭代 |
| Cloudflare Pages | 全球 CDN、边缘计算 | 高性能、国际用户 |

## 📋 已实现功能

- ✅ 首页热门推荐和双榜（API 榜 + Code Plan 榜）
- ✅ 30 秒问答式智能推荐向导
- ✅ 基于成本、场景、能力、门槛、时效性的透明评分
- ✅ 人民币主价展示、折扣标签、官方来源链接
- ✅ 供应商库、模型/套餐详情弹窗、价格变更审核台
- ✅ 响应式设计（桌面 + 移动）
- ✅ 无框架纯 JavaScript，首屏加载 < 1s

## 🗺️ 下一步计划

- 🔄 完成其他主流厂商的解析器（OpenAI、Anthropic 等国际厂商）
- 📈 增加数据对标分析（同等质量最便宜的模型）
- 💬 用户反馈和价格变更通知
- 🔐 企业级 API 配额方案对比
- 📚 最佳实践文档（如何选择、成本优化等）

## 📝 代码规范

- **无框架**：Vanilla JavaScript，易于维护和部署
- **模块化**：清晰的函数职责划分
- **数据驱动**：所有内容来自 `catalog` 和 `providers` 数据源
- **可访问性**：完整的 ARIA 标签，键盘导航支持
- **响应式**：Mobile-first CSS 设计

## 🔗 贡献

欢迎提交 Issue 和 Pull Request：
- 修复数据错误或缺失
- 新增厂商或套餐
- UI/UX 改进建议
- 解析器优化

## 📄 许可证

MIT License

## 📧 反馈与支持

- 📤 [提交 Issue](https://github.com/yfwangning/coding-plan-/issues)
- 💬 讨论区（即将开放）

---

**最后更新**: 2026-05-01  
**数据源**: 官方价格页 + GitHub Actions 自动同步  
**在线地址**: https://yfwangning.github.io/coding-plan-/
