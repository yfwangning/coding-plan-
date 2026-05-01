# 研究发现

## API 定价数据来源（2026-04-30）

### 已确认价格
| 厂商 | 模型 | 输入 | 输出 | 缓存 | 来源 |
|------|------|------|------|------|------|
| DeepSeek | deepseek-v4-pro | ¥3 | ¥6 | ¥0.025 | api-docs.deepseek.com |
| Kimi | K2.6 | ¥6.5 | ¥27 | ¥1.1 | platform.kimi.com |
| MiniMax | M2.7 | ¥2.1 | ¥8.4 | ¥0.42 | platform.minimaxi.com |
| 小米 MiMo | V2.5-Pro | ¥7 | ¥21 | ¥1.4 | platform.xiaomimimo.com |
| 智谱 AI | GLM-5.1 | ¥6(32K内) ¥8(32K+) | ¥24/¥28 | ¥1.3/¥2 | open.bigmodel.cn/pricing |
| 火山方舟 | doubao-pro-32k | ¥0.8 | ¥2 | ¥0.16 | volcengine.com/docs/82379/1544106 |
| 腾讯云 | 混元 T1 | ¥1 | ¥4 | - | cloud.tencent.com/document/product/1729/97731 |
| 百度千帆 | ERNIE-4.5-Turbo | ¥0.8 | ¥3.2 | ¥0.2 | cloud.baidu.com/doc/qianfan |

### 价格待复核
| 厂商 | 模型 | 当前标注 | 状态 |
|------|------|----------|------|
| 阿里云 | Qwen3.6-Plus | ¥2 / ¥12 | 阿里百炼帮助中心 token-plan-overview 和 models 页面均未列出此模型按量计费单价，当前数据需人工复核确认 |

### 无按量定价
| 厂商 | 说明 |
|------|------|
| 讯飞星火 | 仅 Coding Plan 订阅套餐，底层为第三方模型（DeepSeek/GLM） |
| 京东云 | 订阅页动态加载，无结构化 API 定价 |
| 美团 LongCat | 2.0 Preview 内测免费，无付费单价 |

### 注意事项
- 智谱 GLM-5.1 超过 32K 输入后单价上涨（¥6→¥8，¥24→¥28）
- 火山方舟 doubao-pro-32k 为 legacy 模型，当前主推 doubao-1.5-pro-32k（同价）
- 百度 ERNIE-4.5-Turbo 缓存命中价 ¥0.2，搜索增强额外计费
- 阿里云 Qwen3.6-Plus 按量计费价格当前无法从公开帮助中心页面确认
