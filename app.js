const providers = [
  { id: "aliyun", name: "阿里百炼", region: "中国", status: "official", updated: "2026-04-30", source: "https://help.aliyun.com/zh/model-studio/token-plan-overview", purchaseUrl: "https://common-buy.aliyun.com/token-plan/", codePlanStatus: "available" },
  { id: "kimi", name: "Kimi", region: "中国", status: "official", updated: "2026-04-30", source: "https://platform.kimi.com/docs/pricing/chat-k26", purchaseUrl: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694", codePlanStatus: "available" },
  { id: "zhipu", name: "智谱 AI", region: "中国", status: "official", updated: "2026-04-30", source: "https://docs.bigmodel.cn/cn/coding-plan/overview", purchaseUrl: "https://www.bigmodel.cn/glm-coding?cc=fission_glmcode_sub_v1&ic=UX7NF0VZ4S&n=v", codePlanStatus: "available" },
  { id: "minimax", name: "MiniMax", region: "中国", status: "official", updated: "2026-04-30", source: "https://platform.minimaxi.com/docs/guides/pricing-token-plan", purchaseUrl: "https://platform.minimaxi.com/subscribe/token-plan", codePlanStatus: "token" },
  { id: "volcengine", name: "火山方舟", region: "中国", status: "official", updated: "2026-04-30", source: "https://www.volcengine.com/docs/82379/1925114", purchaseUrl: "https://www.volcengine.com/activity/codingplan?ac=MMAP8JTTCAQ2&rc=T84FFCKU", codePlanStatus: "available" },
  { id: "mimo", name: "小米 MiMo", region: "中国", status: "official", updated: "2026-04-30", source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md", purchaseUrl: "https://platform.xiaomimimo.com/#/token-plan", codePlanStatus: "token" },
  { id: "baidu", name: "百度千帆", region: "中国", status: "official", updated: "2026-04-30", source: "https://cloud.baidu.com/product/codingplan.html", purchaseUrl: "https://cloud.baidu.com/product/codingplan.html", codePlanStatus: "available" },
  { id: "tencent", name: "腾讯云", region: "中国", status: "official", updated: "2026-04-30", source: "https://cloud.tencent.com/act/pro/tokenplan", purchaseUrl: "https://cloud.tencent.com/act/pro/tokenplan", codePlanStatus: "token" },
  { id: "jdcloud", name: "京东云", region: "中国", status: "official", updated: "2026-04-30", source: "https://developer.jdcloud.com/topics/4467", purchaseUrl: "https://www.jdcloud.com/cn/pages/codingplan", codePlanStatus: "available" },
  { id: "xfyun", name: "讯飞星火", region: "中国", status: "official", updated: "2026-04-30", source: "https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-A4227EAE", purchaseUrl: "https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-A4227EAE", codePlanStatus: "available" },
  { id: "deepseek", name: "DeepSeek", region: "中国", status: "official", updated: "2026-04-29", source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing", codePlanStatus: "none" },
  { id: "longcat", name: "美团 LongCat", region: "中国", status: "official", updated: "2026-04-29", source: "https://longcat.chat/platform/docs/zh/", codePlanStatus: "none" }
];

const catalog = [
  {
    id: "deepseek-v4-pro",
    type: "api",
    providerId: "deepseek",
    name: "deepseek-v4-pro",
    displayTier: "flagship",
    displayRank: 1,
    input: 3,
    output: 6,
    cache: 0.025,
    originalInput: 12,
    originalOutput: 24,
    originalCache: 0.1,
    context: "1M",
    maxOutput: "384K",
    quality: 88,
    ease: 66,
    scenarios: ["coding", "content", "long", "general"],
    strengths: ["官方标注 1M 上下文与 384K 最大输出", "V4 Pro 折扣期内价格为输入 3 元、输出 6 元 / 百万 tokens", "缓存命中价 0.025 元 / 百万 tokens，适合重复上下文"],
    weaknesses: ["2.5 折优惠有明确结束时间，长期预算需按原价复算", "非开发者需要通过第三方工具或 API 使用"],
    discount: { label: "V4 Pro 2.5 折", end: "北京时间 2026-05-31 23:59", source: "DeepSeek 官方价格页" },
    source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "deepseek-v4-flash",
    type: "api",
    providerId: "deepseek",
    name: "deepseek-v4-flash",
    displayTier: "subFlagship",
    displayRank: 2,
    input: 1,
    output: 2,
    cache: 0.02,
    context: "1M",
    maxOutput: "384K",
    quality: 76,
    ease: 68,
    scenarios: ["content", "service", "general"],
    strengths: ["官方标注 1M 上下文与 384K 最大输出", "输入 1 元、输出 2 元 / 百万 tokens，适合批量轻任务"],
    weaknesses: ["复杂代码和深度推理不如 Pro", "官方价格可能调整，需定期复核"],
    source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-k2",
    type: "api",
    providerId: "kimi",
    name: "Kimi K2.6",
    displayTier: "flagship",
    displayRank: 1,
    input: 6.5,
    output: 27,
    cache: 1.1,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "256K",
    quality: 86,
    ease: 78,
    scenarios: ["content", "long", "general"],
    strengths: ["中文开放平台价格口径为人民币 / 百万 tokens", "适合长文档、中文写作和通用任务"],
    weaknesses: ["会员套餐与 API 按量计费是不同体系", "Kimi Code 额度按统一额度池和 token 消耗计算"],
    source: "https://platform.kimi.com/docs/pricing/chat-k26",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "glm-4-plus",
    type: "api",
    providerId: "zhipu",
    name: "GLM-5.1",
    displayTier: "flagship",
    displayRank: 1,
    input: 6,
    output: 24,
    cache: 1.3,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "32K+",
    quality: 84,
    ease: 82,
    scenarios: ["content", "service", "general"],
    strengths: ["官方定价页确认 GLM-5.1 输入 6 元、输出 24 元 / 百万 tokens", "适合中文通用和企业知识库场景"],
    weaknesses: ["输入长度超过 32K 后单价涨至 8/28 元", "缓存命中价 1.3 元，长上下文成本需额外关注"],
    source: "https://open.bigmodel.cn/pricing",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "minimax-text-01",
    type: "api",
    providerId: "minimax",
    name: "MiniMax-M2.7",
    displayTier: "flagship",
    displayRank: 1,
    input: 2.1,
    output: 8.4,
    cache: 0.42,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "256K",
    quality: 83,
    ease: 77,
    scenarios: ["long", "content", "general"],
    strengths: ["中文开放平台按量计费页列出缓存输入、输入、输出人民币价格", "同厂商另有 Token Plan 套餐入口"],
    weaknesses: ["Token Plan 与按量 API 是不同计费体系", "高并发高速模型需单独看 Token Plan 档位"],
    source: "https://platform.minimaxi.com/docs/guides/pricing-paygo",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "longcat-2-preview",
    type: "api",
    providerId: "longcat",
    name: "LongCat-2.0-Preview",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "公测免费；2.0 Preview 内测 1000万 tokens/2小时；暂不支持付费购买",
    context: "1M",
    maxOutput: "128K",
    quality: 82,
    ease: 76,
    scenarios: ["coding", "content", "long", "general"],
    strengths: ["官方快速开始页列入支持模型，标注为高性能 Agentic 模型", "2.0 Preview 内测额度为每两小时 1000 万 Tokens"],
    weaknesses: ["LongCat-2.0-Preview 当前处于内测阶段，仅向部分受邀开发者开放", "官方暂未发布付费单价，不能按 API 单价预算"],
    source: "https://longcat.chat/platform/docs/zh/",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "mimo-v25-pro",
    type: "api",
    providerId: "mimo",
    name: "Xiaomi MiMo-V2.5-Pro",
    displayTier: "flagship",
    displayRank: 1,
    input: 7,
    output: 21,
    cache: 1.4,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "1M",
    maxOutput: "128K",
    quality: 80,
    ease: 82,
    scenarios: ["coding", "content", "general"],
    strengths: ["官方 Pricing 文档列出国内模型单价，单位为元 / 1M tokens", "Token Plan 支持包月和包年订阅"],
    weaknesses: ["Token Plan 与常规 API 按量计费是不同体系", "超过 256K 输入时按长上下文价格计费"],
    source: "https://platform.xiaomimimo.com/static/docs/pricing.md",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "doubao-pro",
    type: "api",
    providerId: "volcengine",
    name: "豆包 Pro (doubao-pro-32k)",
    displayTier: "flagship",
    displayRank: 1,
    input: 0.8,
    output: 2,
    cache: 0.16,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "32K",
    quality: 80,
    ease: 80,
    scenarios: ["content", "service", "general"],
    strengths: ["官方模型价格页确认 doubao-pro-32k 输入 0.8 元、输出 2 元 / 百万 tokens", "火山方舟云平台集成能力强，适合企业应用"],
    weaknesses: ["实际价格可能受活动和资源包影响", "模型命名和版本需要持续校验"],
    source: "https://www.volcengine.com/docs/82379/1544106",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "qwen-plus",
    type: "api",
    providerId: "aliyun",
    name: "Qwen3.6-Plus",
    displayTier: "flagship",
    displayRank: 1,
    input: 2,
    output: 12,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "1M",
    quality: 82,
    ease: 82,
    scenarios: ["coding", "content", "service", "general"],
    strengths: ["阿里官方发布 Qwen3.6-Plus，默认 1M 上下文", "输入 2 元、输出 12 元 / 百万 tokens，适合已有阿里云业务集成"],
    weaknesses: ["输出价格相对输入较高", "阿里百炼公开页面未明确列出 Qwen3.6-Plus 按量计费单价，当前价格需人工复核确认"],
    source: "https://help.aliyun.com/zh/model-studio/token-plan-overview",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "hunyuan-t1",
    type: "api",
    providerId: "tencent",
    name: "混元 T1",
    displayTier: "flagship",
    displayRank: 1,
    input: 1,
    output: 4,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "64K",
    quality: 82,
    ease: 80,
    scenarios: ["content", "service", "general"],
    strengths: ["腾讯云混元 T1 输入 1 元、输出 4 元 / 百万 tokens", "腾讯云生态和企业接入路径清晰"],
    weaknesses: ["个人极致性价比不一定领先", "价格随模型版本和资源包变化"],
    source: "https://cloud.tencent.com/document/product/1729/97731",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "ernie-4",
    type: "api",
    providerId: "baidu",
    name: "ERNIE-4.5-Turbo-128K",
    displayTier: "flagship",
    displayRank: 1,
    input: 0.8,
    output: 3.2,
    cache: 0.2,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "128K",
    quality: 81,
    ease: 79,
    scenarios: ["content", "service", "general"],
    strengths: ["百度千帆 ERNIE-4.5-Turbo-128K 输入 0.8 元、输出 3.2 元 / 百万 tokens", "百度云与搜索、知识库场景结合较好"],
    weaknesses: ["缓存命中价 0.2 元，搜索增强需额外计费", "订阅和资源包口径需分开核对"],
    source: "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "spark-max",
    type: "api",
    providerId: "xfyun",
    name: "讯飞星火 Coding Plan",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "仅提供 Coding Plan 订阅套餐，无公开按量 API 单价",
    priceCurrency: "CNY",
    priceUnit: "订阅套餐",
    context: "以套餐配置为准",
    quality: 80,
    ease: 84,
    scenarios: ["content", "audio", "general"],
    strengths: ["语音和教育办公生态突出", "Coding Plan 订阅模式对非开发者更友好"],
    weaknesses: ["无公开按 token 计价的 API 单价，仅支持订阅套餐", "底层模型为第三方（DeepSeek、GLM 等），非自研星火 Max"],
    source: "https://www.xfyun.cn/doc/spark/CodingPlan.html",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "jdcloud-coding-models",
    type: "api",
    providerId: "jdcloud",
    name: "官方订阅页未公开模型名",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "Coding Plan 特惠页动态展示，具体模型与价格以官网为准",
    priceCurrency: "CNY",
    priceUnit: "订阅套餐",
    context: "官方页面为准",
    quality: 76,
    ease: 78,
    scenarios: ["coding"],
    strengths: ["京东云官方页面确认 Coding Plan 特惠入口", "购买入口已指向官方中文订阅页"],
    weaknesses: ["静态 HTML 未公开结构化模型名、价格和额度表", "不把页面外推测信息写成确定值"],
    source: "https://www.jdcloud.com/cn/pages/codingplan",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "zhipu-glm-coding-lite",
    type: "plan",
    providerId: "zhipu",
    name: "GLM Coding Plan Lite",
    planType: "Code Plan",
    recurringMonthly: "低至 ¥20",
    quarterly: "见中文官网",
    yearly: "见中文官网",
    request5h: "1,200",
    weeklyRequests: "12,000",
    monthlyRequests: "40,000",
    tokenLimit: "按请求额度",
    quota: "5h 1,200 / 周 12,000 / 月 40,000 请求",
    scenarios: ["coding"],
    discount: { label: "新用户首单 9 折" },
    source: "https://www.bigmodel.cn/glm-coding?cc=fission_glmcode_sub_v1&ic=UX7NF0VZ4S&n=v",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "zhipu-glm-coding-pro",
    type: "plan",
    providerId: "zhipu",
    name: "GLM Coding Plan Pro",
    planType: "Code Plan",
    recurringMonthly: "见中文官网",
    quarterly: "见中文官网",
    yearly: "见中文官网",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按请求额度",
    quota: "5h 6,000 / 周 45,000 / 月 90,000 请求",
    scenarios: ["coding"],
    discount: { label: "新用户首单 9 折" },
    source: "https://www.bigmodel.cn/glm-coding?cc=fission_glmcode_sub_v1&ic=UX7NF0VZ4S&n=v",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "zhipu-glm-coding-max",
    type: "plan",
    providerId: "zhipu",
    name: "GLM Coding Plan Max",
    planType: "Code Plan",
    recurringMonthly: "见中文官网",
    quarterly: "见中文官网",
    yearly: "见中文官网",
    request5h: "24,000",
    weeklyRequests: "180,000",
    monthlyRequests: "360,000",
    tokenLimit: "按请求额度",
    quota: "5h 24,000 / 周 180,000 / 月 360,000 请求",
    scenarios: ["coding"],
    discount: { label: "新用户首单 9 折" },
    source: "https://docs.bigmodel.cn/cn/coding-plan/overview",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-code-andante",
    type: "plan",
    providerId: "kimi",
    name: "Kimi Andante",
    planType: "会员 / Code Plan",
    recurringMonthly: "¥49",
    yearly: "年付更优惠",
    request5h: "以页面提示为准",
    weeklyRequests: "以页面提示为准",
    monthlyRequests: "Kimi Code 1 倍额度",
    tokenLimit: "统一额度池，按 token 消耗",
    quota: "Agent 约 30 个；Kimi Code 1 倍额度",
    scenarios: ["coding", "content"],
    discount: { label: "连续包年更优惠" },
    source: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-code-moderato",
    type: "plan",
    providerId: "kimi",
    name: "Kimi Moderato",
    planType: "会员 / Code Plan",
    recurringMonthly: "¥99",
    yearly: "年付更优惠",
    request5h: "以页面提示为准",
    weeklyRequests: "以页面提示为准",
    monthlyRequests: "Kimi Code 4 倍额度",
    tokenLimit: "统一额度池，按 token 消耗",
    quota: "Agent 约 60 个；Kimi Code 4 倍额度",
    scenarios: ["coding", "content"],
    discount: { label: "连续包年更优惠" },
    source: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-code-allegretto",
    type: "plan",
    providerId: "kimi",
    name: "Kimi Allegretto",
    planType: "会员 / Code Plan",
    recurringMonthly: "¥199",
    yearly: "年付更优惠",
    request5h: "以页面提示为准",
    weeklyRequests: "以页面提示为准",
    monthlyRequests: "Kimi Code 20 倍额度",
    tokenLimit: "统一额度池，按 token 消耗",
    quota: "Agent 约 150 个；Kimi Code 20 倍额度",
    scenarios: ["coding", "content"],
    discount: { label: "连续包年更优惠" },
    source: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-code-allegro",
    type: "plan",
    providerId: "kimi",
    name: "Kimi Allegro",
    planType: "会员 / Code Plan",
    recurringMonthly: "¥699",
    yearly: "年付更优惠",
    request5h: "以页面提示为准",
    weeklyRequests: "以页面提示为准",
    monthlyRequests: "Kimi Code 60 倍额度",
    tokenLimit: "统一额度池，按 token 消耗",
    quota: "Agent 约 360 个；Kimi Code 60 倍额度",
    scenarios: ["coding", "content"],
    discount: { label: "连续包年最高立省 ¥1,680" },
    source: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-basic",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Starter",
    planType: "Token Plan",
    recurringMonthly: "¥29",
    yearly: "¥290",
    request5h: "600",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7 600 requests/5hrs",
    quota: "M2.7 600 requests/5hrs",
    scenarios: ["general"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-premium",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Plus",
    planType: "Token Plan",
    recurringMonthly: "¥49",
    yearly: "¥490",
    request5h: "1,500",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7 1,500 requests/5hrs",
    quota: "M2.7 1,500 requests/5hrs",
    scenarios: ["general"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-business",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Max",
    planType: "Token Plan",
    recurringMonthly: "¥119",
    yearly: "¥1,190",
    request5h: "4,500",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7 4,500 requests/5hrs",
    quota: "M2.7 4,500 requests/5hrs",
    scenarios: ["general", "team"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-plus-highspeed",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Plus-Highspeed",
    planType: "Token Plan",
    recurringMonthly: "¥98",
    yearly: "¥980",
    request5h: "1,500",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7-highspeed 1,500 requests/5hrs",
    quota: "M2.7-highspeed 1,500 requests/5hrs",
    scenarios: ["general", "team"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-max-highspeed",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Max-Highspeed",
    planType: "Token Plan",
    recurringMonthly: "¥199",
    yearly: "¥1,990",
    request5h: "4,500",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7-highspeed 4,500 requests/5hrs",
    quota: "M2.7-highspeed 4,500 requests/5hrs",
    scenarios: ["general", "team"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-coding-plan",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Ultra-Highspeed",
    planType: "Token Plan",
    monthly: null,
    firstMonth: "-",
    recurringMonthly: "¥899",
    quarterly: "-",
    yearly: "¥8,990",
    request5h: "30,000",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7-highspeed 30,000 requests/5hrs",
    seats: "个人",
    quota: "M2.7-highspeed 30,000 requests/5hrs",
    tools: ["MiniMax API", "Token Plan"],
    quality: 84,
    ease: 86,
    scenarios: ["coding", "general"],
    strengths: ["官方 Token Plan 页面列出 M2.7 每 5 小时请求额度", "适合固定额度预算"],
    weaknesses: ["Token Plan 与按量 API 是不同计费体系", "不是通用后端批量 API 额度"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "aliyun-coding-plan-pro",
    type: "plan",
    providerId: "aliyun",
    name: "百炼 Coding Plan Pro",
    planType: "Code Plan",
    monthly: 200,
    firstMonth: "-",
    recurringMonthly: "¥200",
    quarterly: "-",
    yearly: "-",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按模型调用次数扣额",
    seats: "个人",
    quota: "Pro 高级套餐；Lite 自 2026-03-20 起停止新购",
    tools: ["通义千问", "Claude Sonnet 4", "Claude Opus 4"],
    quality: 84,
    ease: 78,
    scenarios: ["coding"],
    strengths: ["官方 Coding Plan 页面列出 Pro 高级套餐价格和三类请求额度", "整合千问、GLM、Kimi、MiniMax 模型并兼容主流 AI 编程工具"],
    weaknesses: ["Lite 基础套餐已停止新购，不作为可购买档位展示", "套餐仅限编程工具交互使用，不得当作通用 API 调用"],
    source: "https://help.aliyun.com/zh/model-studio/coding-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "aliyun-token-standard-seat",
    type: "plan",
    providerId: "aliyun",
    name: "Token Plan 团队版 标准坐席",
    planType: "Token Plan 团队版",
    recurringMonthly: "¥198/坐席",
    yearly: "-",
    request5h: "无限制",
    weeklyRequests: "无限制",
    monthlyRequests: "25,000 Credits/坐席",
    tokenLimit: "25,000 Credits/坐席/月",
    quota: "25,000 Credits/坐席/月；适合轻度使用 AI 辅助的团队成员",
    scenarios: ["coding", "team", "general"],
    discount: { label: "包月订阅；共享用量包可补充超额消耗" },
    source: "https://help.aliyun.com/zh/model-studio/token-plan-overview",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "aliyun-token-advanced-seat",
    type: "plan",
    providerId: "aliyun",
    name: "Token Plan 团队版 高级坐席",
    planType: "Token Plan 团队版",
    recurringMonthly: "¥698/坐席",
    yearly: "-",
    request5h: "无限制",
    weeklyRequests: "无限制",
    monthlyRequests: "100,000 Credits/坐席",
    tokenLimit: "100,000 Credits/坐席/月",
    quota: "100,000 Credits/坐席/月；适合日常高频使用 AI 编码的团队成员",
    scenarios: ["coding", "team", "general"],
    discount: { label: "包月订阅；共享用量包可补充超额消耗" },
    source: "https://help.aliyun.com/zh/model-studio/token-plan-overview",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "aliyun-token-premium-seat",
    type: "plan",
    providerId: "aliyun",
    name: "Token Plan 团队版 尊享坐席",
    planType: "Token Plan 团队版",
    recurringMonthly: "¥1,398/坐席",
    yearly: "-",
    request5h: "无限制",
    weeklyRequests: "无限制",
    monthlyRequests: "250,000 Credits/坐席",
    tokenLimit: "250,000 Credits/坐席/月",
    quota: "250,000 Credits/坐席/月；适合重度依赖 AI 编码的核心开发者",
    scenarios: ["coding", "team", "general"],
    discount: { label: "包月订阅；共享用量包可补充超额消耗" },
    source: "https://help.aliyun.com/zh/model-studio/token-plan-overview",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "aliyun-token-shared-pack",
    type: "plan",
    providerId: "aliyun",
    name: "Token Plan 团队版 共享用量包",
    planType: "Token Plan 团队版",
    recurringMonthly: "¥5,000/个",
    yearly: "-",
    request5h: "无限制",
    weeklyRequests: "无限制",
    monthlyRequests: "625,000 Credits/个",
    tokenLimit: "625,000 Credits/个，有效期 1 个月",
    quota: "跨坐席共享；坐席额度超出后抵扣，多个包优先抵扣最近到期",
    scenarios: ["coding", "team", "general"],
    discount: { label: "到期未使用额度自动清零" },
    source: "https://help.aliyun.com/zh/model-studio/token-plan-overview",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "volcengine-coding-lite",
    type: "plan",
    providerId: "volcengine",
    name: "火山方舟 Coding Plan Lite",
    planType: "Code Plan",
    recurringMonthly: "¥40",
    quarterly: "¥99",
    yearly: "¥400",
    request5h: "1,200",
    weeklyRequests: "12,000",
    monthlyRequests: "40,000",
    tokenLimit: "按请求额度",
    quota: "5h 1,200 / 周 12,000 / 月 40,000 请求",
    scenarios: ["coding"],
    discount: { label: "包季约 8.3 折" },
    source: "https://www.volcengine.com/activity/codingplan?ac=MMAP8JTTCAQ2&rc=T84FFCKU",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "volcengine-coding-pro",
    type: "plan",
    providerId: "volcengine",
    name: "火山方舟 Coding Plan Pro",
    planType: "Code Plan",
    recurringMonthly: "¥200",
    quarterly: "¥499",
    yearly: "¥2,000",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按请求额度",
    quota: "5h 6,000 / 周 45,000 / 月 90,000 请求",
    scenarios: ["coding"],
    discount: { label: "包季约 8.3 折" },
    source: "https://www.volcengine.com/activity/codingplan?ac=MMAP8JTTCAQ2&rc=T84FFCKU",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "baidu-coding-lite",
    type: "plan",
    providerId: "baidu",
    name: "千帆 Coding Plan Lite",
    planType: "Code Plan",
    recurringMonthly: "¥40",
    firstMonth: "¥9.9",
    yearly: "-",
    request5h: "1,200",
    weeklyRequests: "9,000",
    monthlyRequests: "18,000",
    tokenLimit: "按请求额度",
    quota: "5h 1,200 / 周 9,000 / 月 18,000 请求",
    scenarios: ["coding"],
    discount: { label: "新客首月 ¥9.9，续费 ¥40/月" },
    source: "https://cloud.baidu.com/product/codingplan.html",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "baidu-coding-pro",
    type: "plan",
    providerId: "baidu",
    name: "千帆 Coding Plan Pro",
    planType: "Code Plan",
    recurringMonthly: "¥200",
    firstMonth: "¥49.9",
    yearly: "-",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按请求额度",
    quota: "5h 6,000 / 周 45,000 / 月 90,000 请求",
    scenarios: ["coding"],
    discount: { label: "新客首月 ¥49.9，续费 ¥200/月" },
    source: "https://cloud.baidu.com/product/codingplan.html",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "tencent-hy-token-lite",
    type: "plan",
    providerId: "tencent",
    name: "Hy 个人版-体验套餐 Lite",
    planType: "Token Plan",
    recurringMonthly: "¥39 起",
    yearly: "-",
    request5h: "按 Tokens 抵扣",
    weeklyRequests: "按 Tokens 抵扣",
    monthlyRequests: "3,500 万 Tokens",
    tokenLimit: "3,500 万 Tokens",
    quota: "3,500 万 Tokens；约 70 轮问答",
    scenarios: ["coding", "general"],
    discount: { label: "2026-04-30 至 05-06 Lite/Standard 享 5 折" },
    source: "https://cloud.tencent.com/act/pro/tokenplan",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "tencent-hy-token-standard",
    type: "plan",
    providerId: "tencent",
    name: "Hy 个人版-基础套餐 Standard",
    planType: "Token Plan",
    recurringMonthly: "见官网购买页",
    yearly: "-",
    request5h: "按 Tokens 抵扣",
    weeklyRequests: "按 Tokens 抵扣",
    monthlyRequests: "1 亿 Tokens",
    tokenLimit: "1 亿 Tokens",
    quota: "1 亿 Tokens；约 200 轮问答",
    scenarios: ["coding", "general"],
    discount: { label: "2026-04-30 至 05-06 Lite/Standard 享 5 折" },
    source: "https://cloud.tencent.com/act/pro/tokenplan",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "jdcloud-coding-lite",
    type: "plan",
    providerId: "jdcloud",
    name: "京东云 Coding Plan Lite",
    planType: "Code Plan",
    firstMonth: "¥19.9",
    recurringMonthly: "¥40",
    yearly: "-",
    request5h: "活动规则页未公开",
    weeklyRequests: "活动规则页未公开",
    monthlyRequests: "活动规则页未公开",
    tokenLimit: "按官方套餐页",
    quota: "1 个月订阅；新用户首订特惠 ¥19.9，售罄后原价 ¥40/月",
    scenarios: ["coding"],
    discount: { label: "新用户首购特惠每日 10:30 限量开放" },
    source: "https://developer.jdcloud.com/topics/4467",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "jdcloud-coding-pro",
    type: "plan",
    providerId: "jdcloud",
    name: "京东云 Coding Plan Pro",
    planType: "Code Plan",
    firstMonth: "¥99.9",
    recurringMonthly: "¥200",
    yearly: "-",
    request5h: "活动规则页未公开",
    weeklyRequests: "活动规则页未公开",
    monthlyRequests: "活动规则页未公开",
    tokenLimit: "按官方套餐页",
    quota: "1 个月订阅；新用户首订特惠 ¥99.9，售罄后原价 ¥200/月",
    scenarios: ["coding"],
    discount: { label: "新用户首购特惠每日 10:30 限量开放" },
    source: "https://developer.jdcloud.com/topics/4467",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "xfyun-coding-wuyou",
    type: "plan",
    providerId: "xfyun",
    name: "Astron Coding Plan 无忧版",
    planType: "Code Plan",
    firstMonth: "¥3.9",
    recurringMonthly: "¥19",
    yearly: "-",
    request5h: "不限",
    weeklyRequests: "不限",
    monthlyRequests: "不限",
    tokenLimit: "焕新版请求次数不限",
    quota: "焕新版 2026-04-09 上线；请求次数不限，支持模型以订阅页展示为准",
    scenarios: ["coding"],
    discount: { label: "首购 ¥3.9/月，重复购买 ¥19/月" },
    source: "https://www.xfyun.cn/doc/spark/CodingPlan.html#四、套餐与计费",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "xfyun-coding-professional",
    type: "plan",
    providerId: "xfyun",
    name: "Astron Coding Plan 专业版",
    planType: "Code Plan",
    recurringMonthly: "¥39",
    yearly: "-",
    request5h: "1,200",
    weeklyRequests: "9,000",
    monthlyRequests: "18,000",
    tokenLimit: "按请求次数周期性流控",
    quota: "5h 1,200 / 周 9,000 / 订阅月 18,000 请求",
    scenarios: ["coding"],
    discount: { label: "焕新版 2026-04-09 上线" },
    source: "https://www.xfyun.cn/doc/spark/CodingPlan.html#四、套餐与计费",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "xfyun-coding-efficient",
    type: "plan",
    providerId: "xfyun",
    name: "Astron Coding Plan 高效版",
    planType: "Code Plan",
    recurringMonthly: "¥199",
    yearly: "-",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按请求次数周期性流控",
    quota: "5h 6,000 / 周 45,000 / 订阅月 90,000 请求",
    scenarios: ["coding"],
    discount: { label: "焕新版 2026-04-09 上线" },
    source: "https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-A4227EAE",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "mimo-token-lite",
    type: "plan",
    providerId: "mimo",
    name: "MiMo Token Plan Lite",
    planType: "Token Plan",
    recurringMonthly: "¥39",
    yearly: "¥411.84",
    request5h: "按 Credits 抵扣",
    weeklyRequests: "按 Credits 抵扣",
    monthlyRequests: "60M Credits",
    tokenLimit: "60M Credits/月；720M Credits/年",
    quota: "60M Credits/月；约 120 轮中复杂任务",
    scenarios: ["general"],
    discount: { label: "首购 88 折；首次自动续费新用户 77 折/老用户 7 折；连续包年 88 折；夜间 0.8x 消耗" },
    source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "mimo-token-standard",
    type: "plan",
    providerId: "mimo",
    name: "MiMo Token Plan Standard",
    planType: "Token Plan",
    recurringMonthly: "¥99",
    yearly: "¥1,045.44",
    request5h: "按 Credits 抵扣",
    weeklyRequests: "按 Credits 抵扣",
    monthlyRequests: "200M Credits",
    tokenLimit: "200M Credits/月；2400M Credits/年",
    quota: "200M Credits/月；约 400 轮中复杂任务",
    scenarios: ["general"],
    discount: { label: "首购 88 折；首次自动续费新用户 77 折/老用户 7 折；连续包年 88 折；夜间 0.8x 消耗" },
    source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "mimo-token-pro",
    type: "plan",
    providerId: "mimo",
    name: "MiMo Token Plan Pro",
    planType: "Token Plan",
    recurringMonthly: "¥329",
    yearly: "¥3,474.24",
    request5h: "按 Credits 抵扣",
    weeklyRequests: "按 Credits 抵扣",
    monthlyRequests: "700M Credits",
    tokenLimit: "700M Credits/月；8400M Credits/年",
    quota: "700M Credits/月；约 1,400 轮中复杂任务",
    scenarios: ["coding", "general"],
    discount: { label: "首购 88 折；首次自动续费新用户 77 折/老用户 7 折；连续包年 88 折；夜间 0.8x 消耗" },
    source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "mimo-token-max",
    type: "plan",
    providerId: "mimo",
    name: "MiMo Token Plan Max",
    planType: "Token Plan",
    recurringMonthly: "¥659",
    yearly: "¥6,959.04",
    request5h: "按 Credits 抵扣",
    weeklyRequests: "按 Credits 抵扣",
    monthlyRequests: "1600M Credits",
    tokenLimit: "1600M Credits/月；19200M Credits/年",
    quota: "1600M Credits/月；约 3,200 轮中复杂任务",
    scenarios: ["coding", "general"],
    discount: { label: "首购 88 折；首次自动续费新用户 77 折/老用户 7 折；连续包年 88 折；夜间 0.8x 消耗" },
    source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md",
    status: "official",
    updated: "2026-04-30"
  }
];

const reviewQueue = [
  {
    id: "rq-1",
    item: "deepseek-v4-pro",
    field: "输出价 / 百万 tokens",
    before: "¥24.00",
    after: "¥6.00",
    reason: "官方中文价格页显示 deepseek-v4-pro 2.5 折，输入缓存命中 ¥0.025、缓存未命中 ¥3、输出 ¥6 / 百万 tokens，优惠至北京时间 2026-05-31 23:59。",
    source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing"
  },
  {
    id: "rq-3",
    item: "百度千帆 ERNIE 4",
    field: "价格可信度",
    before: "自动抓取待确认",
    after: "需要人工复核",
    reason: "云文档价格入口多，需确认模型版本与资源包口径。",
    source: "https://cloud.baidu.com/product/wenxinworkshop"
  }
];

const scenarioLabels = {
  coding: "编程",
  content: "内容创作",
  long: "长文档",
  multimodal: "视频/多模态",
  audio: "语音/办公",
  service: "客服/知识库",
  general: "综合使用",
  team: "团队"
};

const statusLabels = {
  official: "官方确认",
  reviewed: "人工复核",
  estimated: "本站估算",
  reference: "参考页待官方核验",
  pending: "自动抓取待确认",
  stale: "价格可能过期"
};

const codePlanLabels = {
  none: "无官方订阅套餐",
  token: "有 Token Plan",
  pending: "套餐待核验",
  reference: "参考页待核验",
  available: "有订阅套餐",
  unknown: "官网未发布套餐"
};

const state = {
  libraryFilter: "all",
  librarySort: "priority",
  libraryQuery: "",
  expandedProviders: new Set(),
  officialData: null,
  officialDataError: null
};

function escapeHtml(text) {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function providerFor(item) {
  return providers.find((provider) => provider.id === item.providerId);
}

function yuan(value) {
  if (value === undefined || value === null) return "-";
  return `¥${Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 })}`;
}

function money(value, currency = "CNY") {
  if (value === undefined || value === null) return "-";
  const number = Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 });
  return currency === "USD" ? `$${number}` : `¥${number}`;
}

function statusBadge(status) {
  return `<span class="status ${status}">${statusLabels[status] || status}</span>`;
}

function statusBadgeElement(status) {
  const span = document.createElement("span");
  span.className = `status ${status}`;
  span.textContent = statusLabels[status] || status;
  return span;
}

function applyOfficialData(data) {
  if (!data?.models?.length) return;
  state.officialData = data;

  data.models.forEach((official) => {
    const item = catalog.find((entry) => entry.id === official.id);
    if (!item) return;

    item.name = official.name || item.name;
    item.input = official.cacheMissInput ?? item.input;
    item.cache = official.cacheHitInput ?? item.cache;
    item.output = official.output ?? item.output;
    item.priceCurrency = official.currency || item.priceCurrency;
    item.priceUnit = official.unit || item.priceUnit;
    item.priceText = official.priceText || item.priceText;
    item.originalInput = official.originalCacheMissInput ?? item.originalInput;
    item.originalCache = official.originalCacheHitInput ?? item.originalCache;
    item.originalOutput = official.originalOutput ?? item.originalOutput;
    item.context = official.context || item.context;
    item.maxOutput = official.maxOutput || item.maxOutput;
    item.displayTier = official.displayTier || item.displayTier;
    item.displayRank = official.displayRank ?? item.displayRank;
    item.source = official.sourceUrl || item.source;
    item.status = official.status || item.status;
    item.updated = official.verifiedAt || item.updated;

    if (official.discount) {
      item.discount = {
        label: official.discount.label,
        end: formatChinaTime(official.discount.endsAt),
        source: official.discount.source
      };
    }
  });

  data.plans?.forEach((official) => {
    const item = catalog.find((entry) => entry.id === official.id);
    if (!item) return;

    item.name = official.name || item.name;
    item.planType = official.planType || item.planType;
    item.firstMonth = official.firstMonth ?? item.firstMonth;
    item.recurringMonthly = official.recurringMonthly ?? item.recurringMonthly;
    item.quarterly = official.quarterly ?? item.quarterly;
    item.yearly = official.yearly ?? item.yearly;
    item.request5h = official.request5h ?? item.request5h;
    item.weeklyRequests = official.weeklyRequests ?? item.weeklyRequests;
    item.monthlyRequests = official.monthlyRequests ?? item.monthlyRequests;
    item.tokenLimit = official.tokenLimit ?? item.tokenLimit;
    item.quota = official.quota ?? item.quota;
    item.source = official.sourceUrl || item.source;
    item.status = official.status || item.status;
    item.updated = official.verifiedAt || item.updated;

    if (official.discount) item.discount = official.discount;
  });

  data.sources?.forEach((source) => {
    const provider = providers.find((entry) => entry.id === source.providerId);
    if (!provider) return;
    provider.updated = source.fetchedAt?.slice(0, 10) || provider.updated;
    provider.source = source.url || provider.source;
    provider.codePlanStatus = source.codePlanAvailability || provider.codePlanStatus;
    if (source.httpStatus && source.httpStatus >= 400) provider.status = "pending";
  });
}

function formatChinaTime(value) {
  if (!value) return "结束时间待确认";
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value;
  return `北京时间 ${date.toLocaleString("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  })}`;
}

function providerOrder(providerId) {
  const index = providers.findIndex((provider) => provider.id === providerId);
  return index === -1 ? 999 : index;
}

function modelSort(a, b) {
  return providerOrder(a.providerId) - providerOrder(b.providerId) || (a.displayRank ?? 99) - (b.displayRank ?? 99) || b.quality - a.quality;
}

function codePlanStatus(provider, plans) {
  if (plans.length) {
    const types = [...new Set(plans.map((plan) => plan.planType || "订阅套餐"))];
    if (types.every((type) => type.includes("Token"))) return { key: "available", label: "有 Token Plan" };
    if (types.every((type) => type.includes("Code"))) return { key: "available", label: "有 Code Plan" };
    return { key: "available", label: "有订阅套餐" };
  }
  if (provider.codePlanStatus === "none") return { key: "none", label: "无官方订阅套餐" };
  if (provider.codePlanStatus === "unknown") return { key: "unknown", label: "官网未发布套餐" };
  return { key: "pending", label: codePlanLabels[provider.codePlanStatus] || "套餐待核验" };
}

function isOfficialItem(item) {
  return item.status === "official" || item.status === "reviewed";
}

function flagshipFor(provider) {
  const models = catalog
    .filter((item) => item.providerId === provider.id && item.type === "api")
    .sort(modelSort);
  return models.find((item) => isOfficialItem(item) && item.displayTier === "flagship") || models.find(isOfficialItem) || models[0];
}

function apiPriceText(model) {
  if (!model) return "待补充";
  if (model.priceText) return model.priceText;
  if (!isOfficialItem(model)) return "官方价格待同步";
  const currency = model.priceCurrency || "CNY";
  return `输入 ${money(model.input, currency)} / 输出 ${money(model.output, currency)} / 缓存 ${money(model.cache, currency)}`;
}

function planDiscountText(plan) {
  const discounts = [];
  if (plan.firstMonth && plan.firstMonth !== "-" && plan.firstMonth !== "待官方核验" && plan.firstMonth !== "参考页待核验") {
    discounts.push(`首月 ${plan.firstMonth}`);
  }
  if (plan.discount?.label) {
    discounts.push(plan.discount.label);
  } else if (plan.yearly && plan.recurringMonthly && plan.yearly !== "待官方核验" && plan.yearly !== "参考页待核验") {
    const monthly = Number(String(plan.recurringMonthly).replace(/[^\d.]/g, ""));
    const yearly = Number(String(plan.yearly).replace(/[^\d.]/g, ""));
    if (monthly && yearly) {
      const ratio = yearly / (monthly * 12);
      if (ratio > 0 && ratio < 1) discounts.push(`包年约 ${Math.round(ratio * 10)} 折`);
    }
  }
  return discounts.length ? discounts.join("；") : "暂无明确优惠";
}

function planPriceText(plan) {
  const parts = [
    plan.firstMonth && plan.firstMonth !== "-" ? `首月 ${plan.firstMonth}` : "",
    plan.recurringMonthly ? `包月 ${plan.recurringMonthly}` : plan.monthly ? `包月 ${yuan(plan.monthly)}` : "",
    plan.quarterly && plan.quarterly !== "-" ? `包季 ${plan.quarterly}` : "",
    plan.yearly && plan.yearly !== "-" ? `包年 ${plan.yearly}` : ""
  ].filter(Boolean);
  return parts.length ? parts.join(" / ") : "见官方套餐页";
}

function sourceLink(item, label = "官方来源") {
  const url = item?.sourceUrl || item?.source;
  return url ? `<a class="source-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>` : "";
}

function sourceLinkElement(item, label = "官方来源") {
  const url = item?.sourceUrl || item?.source;
  if (!url) return null;
  const a = document.createElement("a");
  a.className = "source-link";
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = label;
  return a;
}

function planCardElement(plan) {
  const quotaLabel = plan.planType?.includes("Token") || plan.planType?.includes("会员") ? "额度" : "调用次数";
  const quotaText = plan.planType?.includes("Token") || plan.planType?.includes("会员")
    ? plan.quota || plan.tokenLimit || `5小时 ${plan.request5h || "-"} / 每周 ${plan.weeklyRequests || "-"} / 每月 ${plan.monthlyRequests || "-"}`
    : `5小时 ${plan.request5h || "-"} / 每周 ${plan.weeklyRequests || "-"} / 每月 ${plan.monthlyRequests || "-"}`;

  const article = createEl("article", "plan-card");

  const head = createEl("div", "plan-card-head");
  head.appendChild(createEl("h3", null, plan.name));
  const metaRow = createEl("div", "meta-row");
  metaRow.appendChild(createEl("span", null, plan.planType || "订阅套餐"));
  const detailBtn = createEl("button", "small-btn", "详情");
  detailBtn.setAttribute("data-detail", plan.id);
  detailBtn.setAttribute("aria-label", `查看 ${plan.name} 详情`);
  metaRow.appendChild(detailBtn);
  head.appendChild(metaRow);
  article.appendChild(head);

  const dl = createEl("dl", "plan-fields");
  const priceDiv = document.createElement("div");
  priceDiv.appendChild(createEl("dt", null, "价格"));
  priceDiv.appendChild(createEl("dd", null, planPriceText(plan)));
  dl.appendChild(priceDiv);

  const quotaDiv = document.createElement("div");
  quotaDiv.appendChild(createEl("dt", null, quotaLabel));
  quotaDiv.appendChild(createEl("dd", null, quotaText));
  dl.appendChild(quotaDiv);

  const discountDiv = document.createElement("div");
  discountDiv.appendChild(createEl("dt", null, "优惠"));
  discountDiv.appendChild(createEl("dd", null, planDiscountText(plan)));
  dl.appendChild(discountDiv);
  article.appendChild(dl);

  const sourceEl = sourceLinkElement(plan, "套餐来源");
  if (sourceEl) article.appendChild(sourceEl);

  return article;
}

function providerPlans(provider) {
  return catalog.filter((item) => item.providerId === provider.id && item.type === "plan" && isOfficialItem(item));
}

function minPlanPrice(plans) {
  const prices = plans
    .map((plan) => {
      const candidates = [plan.recurringMonthly, plan.monthly, plan.firstMonth]
        .map((value) => Number(String(value ?? "").replace(/[^\d.]/g, "")))
        .filter((value) => Number.isFinite(value) && value > 0);
      return Math.min(...candidates);
    })
    .filter((value) => Number.isFinite(value));
  return prices.length ? Math.min(...prices) : Number.POSITIVE_INFINITY;
}

function providerMatchesFilter(provider, plans, flagship) {
  const query = state.libraryQuery.trim().toLowerCase();
  if (query) {
    const searchable = [
      provider.id,
      provider.name,
      flagship?.name,
      ...plans.flatMap((plan) => [plan.name, plan.planType, plan.quota, plan.tokenLimit])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (!searchable.includes(query)) return false;
  }

  if (state.libraryFilter === "available") {
    return plans.some((plan) => String(plan.planType || "").includes("Code"));
  }
  if (state.libraryFilter === "token") {
    return plans.some((plan) => String(plan.planType || "").includes("Token"));
  }
  if (state.libraryFilter === "discount") {
    return plans.some((plan) => planDiscountText(plan) !== "暂无明确优惠");
  }
  return true;
}

function sortedProviders(entries) {
  const order = new Map(providers.map((provider, index) => [provider.id, index]));
  return [...entries].sort((a, b) => {
    if (state.librarySort === "plan-count") {
      return b.plans.length - a.plans.length || order.get(a.provider.id) - order.get(b.provider.id);
    }
    if (state.librarySort === "api-input") {
      const aInput = isOfficialItem(a.flagship) ? Number(a.flagship.input) : Number.POSITIVE_INFINITY;
      const bInput = isOfficialItem(b.flagship) ? Number(b.flagship.input) : Number.POSITIVE_INFINITY;
      return aInput - bInput || order.get(a.provider.id) - order.get(b.provider.id);
    }
    if (state.librarySort === "updated") {
      return String(b.provider.updated).localeCompare(String(a.provider.updated)) || order.get(a.provider.id) - order.get(b.provider.id);
    }
    return order.get(a.provider.id) - order.get(b.provider.id);
  });
}

function renderPlanList(provider, plans) {
  if (!plans.length) return null;
  const isExpanded = state.expandedProviders.has(provider.id);
  const visiblePlans = isExpanded ? plans : plans.slice(0, 2);
  const hiddenCount = plans.length - visiblePlans.length;

  const container = document.createElement("div");

  const listDiv = createEl("div", "plan-list");
  for (const plan of visiblePlans) {
    listDiv.appendChild(planCardElement(plan));
  }
  container.appendChild(listDiv);

  if (hiddenCount > 0 || isExpanded) {
    const toggleBtn = createEl("button", "toggle-plans", isExpanded ? "收起套餐" : `展开全部 ${plans.length} 个套餐`);
    toggleBtn.type = "button";
    toggleBtn.setAttribute("data-toggle-plans", provider.id);
    toggleBtn.setAttribute("aria-expanded", String(isExpanded));
    container.appendChild(toggleBtn);
  }

  return container;
}

function renderSyncPanel() {
  const panel = document.querySelector("#sync-panel");
  if (!panel) return;
  const data = state.officialData;
  const hasError = Boolean(state.officialDataError);
  const sources = data?.sources || [];
  const reviewItems = data?.reviewQueue || [];
  const okSources = sources.filter((source) => source.httpStatus >= 200 && source.httpStatus < 400).length;
  const generatedAt = data?.generatedAt
    ? new Date(data.generatedAt).toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    : "使用内置数据";

  panel.innerHTML = "";

  const headDiv = document.createElement("div");
  headDiv.appendChild(createEl("h2", null, "数据同步状态"));
  const p = createEl("p", hasError ? "sync-warning" : null,
    hasError ? `官方同步数据加载失败，当前使用内置回退数据。${state.officialDataError}` : "自动同步只发布可解析的官方字段；未覆盖或动态页面会进入复核队列。"
  );
  headDiv.appendChild(p);
  panel.appendChild(headDiv);

  const statsDiv = createEl("div", "sync-stats");
  const statItems = [
    { value: generatedAt, label: "最近生成" },
    { value: `${okSources}/${sources.length || "--"}`, label: "来源可访问" },
    { value: String(reviewItems.length), label: "待复核" }
  ];
  for (const item of statItems) {
    const span = document.createElement("span");
    span.appendChild(createEl("strong", null, item.value));
    span.appendChild(createEl("small", null, item.label));
    statsDiv.appendChild(span);
  }
  panel.appendChild(statsDiv);
}

function renderChangePanel() {
  const target = document.querySelector("#change-panel");
  if (!target) return;

  const data = state.officialData;
  const models = data?.models || [];
  const plans = data?.plans || [];
  const reviewItems = data?.reviewQueue || [];
  const recentPlans = plans.slice(0, 4);
  const generatedAt = data?.generatedAt
    ? new Date(data.generatedAt).toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    : null;

  target.innerHTML = "";

  const headDiv = createEl("div", "change-head");
  const headInfo = document.createElement("div");
  headInfo.appendChild(createEl("h2", null, "最近数据变化"));
  headInfo.appendChild(createEl("p", null,
    generatedAt ? `${generatedAt} 生成的官方同步摘要。` : "当前使用内置数据，官方同步摘要加载后会自动更新。"
  ));
  headDiv.appendChild(headInfo);
  headDiv.appendChild(createEl("span", "freshness", `${models.length} 模型 · ${plans.length} 套餐`));
  target.appendChild(headDiv);

  const gridDiv = createEl("div", "change-grid");

  const card1 = createEl("div", "change-card");
  card1.appendChild(createEl("small", null, "本次结构化"));
  card1.appendChild(createEl("strong", null, `${models.length} 个 API 模型，${plans.length} 个套餐`));
  gridDiv.appendChild(card1);

  const card2 = createEl("div", "change-card");
  card2.appendChild(createEl("small", null, "待人工复核"));
  card2.appendChild(createEl("strong", null, `${reviewItems.length} 项`));
  gridDiv.appendChild(card2);

  const card3 = createEl("div", "change-card wide");
  card3.appendChild(createEl("small", null, "最近解析套餐"));
  card3.appendChild(createEl("strong", null,
    recentPlans.length ? recentPlans.map((plan) => plan.name).join("、") : "等待官方同步数据"
  ));
  gridDiv.appendChild(card3);

  target.appendChild(gridDiv);
}

function renderSourceDirectory() {
  const target = document.querySelector("#source-directory");
  if (!target) return;

  target.innerHTML = "";

  const headDiv = createEl("div", "source-directory-head");
  const headInfo = document.createElement("div");
  headInfo.appendChild(createEl("h2", null, "官方来源列表"));
  headInfo.appendChild(createEl("p", null, "集中列出每个厂商当前使用的官网来源，便于上线后核查和用户交叉验证。"));
  headDiv.appendChild(headInfo);
  headDiv.appendChild(createEl("span", "freshness", `${providers.length} 个厂商`));
  target.appendChild(headDiv);

  const gridDiv = createEl("div", "source-grid");
  for (const provider of providers) {
    const plans = providerPlans(provider);
    const planSources = [...new Set(plans.map((plan) => plan.source).filter(Boolean))].slice(0, 2);

    const article = createEl("article", "source-item");
    article.appendChild(createEl("h3", null, provider.name));
    article.appendChild(createEl("p", null, `最近校验 ${provider.updated}`));

    const linksDiv = createEl("div", "source-links");

    const priceLink = createEl("a", null, "价格 / 文档");
    priceLink.href = provider.source;
    priceLink.target = "_blank";
    priceLink.rel = "noopener noreferrer";
    linksDiv.appendChild(priceLink);

    if (provider.purchaseUrl) {
      const buyLink = createEl("a", null, "购买 / 订阅");
      buyLink.href = provider.purchaseUrl;
      buyLink.target = "_blank";
      buyLink.rel = "noopener noreferrer";
      linksDiv.appendChild(buyLink);
    }

    for (const source of planSources) {
      const planLink = createEl("a", null, "套餐来源");
      planLink.href = source;
      planLink.target = "_blank";
      planLink.rel = "noopener noreferrer";
      linksDiv.appendChild(planLink);
    }

    article.appendChild(linksDiv);
    gridDiv.appendChild(article);
  }
  target.appendChild(gridDiv);
}

function renderProviderLibrary() {
  const grid = document.querySelector("#provider-grid");
  const lastUpdated = providers.map((provider) => provider.updated).sort().at(-1);
  const officialPlans = catalog.filter((item) => item.type === "plan" && isOfficialItem(item));
  document.querySelector("#freshness").textContent = lastUpdated ? `${lastUpdated} 校验` : "待校验";
  document.querySelector("#vendor-count").textContent = providers.length;
  document.querySelector("#plan-count").textContent = officialPlans.length;

  const entries = sortedProviders(
    providers
      .map((provider) => {
        const flagship = flagshipFor(provider);
        const plans = providerPlans(provider);
        return { provider, flagship, plans };
      })
      .filter(({ provider, flagship, plans }) => providerMatchesFilter(provider, plans, flagship))
  );

  grid.innerHTML = "";

  if (!entries.length) {
    grid.appendChild(createEl("div", "empty-library", "当前筛选下没有匹配厂商。可以切回「全部」查看完整厂商库。"));
  } else {
    for (const { provider, flagship, plans } of entries) {
      const codePlan = codePlanStatus(provider, plans);
      const purchaseUrl = provider.purchaseUrl || provider.source;
      const lowestPlanPrice = minPlanPrice(plans);

      const article = createEl("article", "provider-card");
      article.id = provider.id;

      const cardMain = createEl("div", "card-main");

      const cardHead = createEl("div", "card-head");

      const providerTitle = createEl("div", "provider-title");
      providerTitle.appendChild(createEl("span", "provider-mark", provider.name.slice(0, 1)));

      const titleInfo = document.createElement("div");
      const providerNameH2 = createEl("h2", "provider-name", provider.name);
      const anchorBtn = createEl("button", "anchor-btn", "#");
      anchorBtn.type = "button";
      anchorBtn.setAttribute("data-copy-anchor", provider.id);
      anchorBtn.setAttribute("aria-label", `复制 ${provider.name} 分享链接`);
      providerNameH2.appendChild(anchorBtn);
      titleInfo.appendChild(providerNameH2);

      const metaRow = createEl("div", "meta-row");
      metaRow.appendChild(statusBadgeElement(provider.status));
      metaRow.appendChild(createEl("span", "tag", provider.region));
      metaRow.appendChild(createEl("span", "tag", `更新 ${provider.updated}`));
      titleInfo.appendChild(metaRow);
      providerTitle.appendChild(titleInfo);
      cardHead.appendChild(providerTitle);

      const statusStack = createEl("div", "status-stack");
      statusStack.appendChild(createEl("span", `status ${codePlan.key}`, codePlan.label));
      const stackMetaRow = createEl("div", "meta-row");
      stackMetaRow.appendChild(createEl("span", "tag", `${plans.length || "无"} 个套餐`));
      if (Number.isFinite(lowestPlanPrice)) {
        stackMetaRow.appendChild(createEl("span", "tag", `低至 ${yuan(lowestPlanPrice)}/月`));
      }
      statusStack.appendChild(stackMetaRow);
      cardHead.appendChild(statusStack);
      cardMain.appendChild(cardHead);

      const summaryGrid = createEl("div", "summary-grid");

      const modelMetric = createEl("div", "metric-box");
      modelMetric.appendChild(createEl("small", null, "旗舰模型"));
      const modelStrong = createEl("strong", null);
      if (flagship) {
        modelStrong.appendChild(document.createTextNode(flagship.name + " "));
        const detailBtn = createEl("button", "small-btn", "详情");
        detailBtn.setAttribute("data-detail", flagship.id);
        detailBtn.setAttribute("aria-label", `查看 ${flagship.name} 详情`);
        modelStrong.appendChild(detailBtn);
      } else {
        modelStrong.textContent = "待补充";
      }
      modelMetric.appendChild(modelStrong);
      summaryGrid.appendChild(modelMetric);

      const priceMetric = createEl("div", "metric-box");
      priceMetric.appendChild(createEl("small", null, "API 价格 / 百万 tokens"));
      priceMetric.appendChild(createEl("strong", "price-line", apiPriceText(flagship)));
      summaryGrid.appendChild(priceMetric);
      cardMain.appendChild(summaryGrid);

      const planSection = createEl("section", "plan-section");
      planSection.appendChild(createEl("h3", "section-title", "订阅 / 套餐"));
      if (plans.length) {
        const planListEl = renderPlanList(provider, plans);
        if (planListEl) planSection.appendChild(planListEl);
      } else {
        planSection.appendChild(createEl("p", "empty-plan", `${codePlan.label}。当前仅展示官网可核验的订阅或套餐。`));
      }
      cardMain.appendChild(planSection);
      article.appendChild(cardMain);

      const cardActions = createEl("div", "card-actions");
      const sourceBtn = createEl("a", "source-btn", "官方来源");
      sourceBtn.href = provider.source;
      sourceBtn.target = "_blank";
      sourceBtn.rel = "noopener noreferrer";
      cardActions.appendChild(sourceBtn);

      const buyBtn = createEl("a", "buy-btn");
      buyBtn.href = purchaseUrl;
      buyBtn.target = "_blank";
      buyBtn.rel = "noopener noreferrer";
      buyBtn.textContent = "跳转购买";
      const arrowSpan = createEl("span", null, "→");
      arrowSpan.setAttribute("aria-hidden", "true");
      buyBtn.appendChild(arrowSpan);
      cardActions.appendChild(buyBtn);
      article.appendChild(cardActions);

      grid.appendChild(article);
    }
  }

  renderSyncPanel();
  renderChangePanel();
  renderSourceDirectory();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1600);
}

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

function appendField(container, label, value) {
  const row = createEl("div");
  row.appendChild(createEl("dt", null, label));
  const dd = createEl("dd");
  if (typeof value === "string" && value.startsWith("http")) {
    const a = createEl("a", "source-link");
    a.href = value;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = value;
    dd.appendChild(a);
  } else {
    dd.textContent = value ?? "-";
  }
  row.appendChild(dd);
  container.appendChild(row);
}

function renderModalContent(item, provider) {
  const content = document.createElement("div");

  const head = createEl("div", "modal-content-head");
  const metaRow = createEl("div", "meta-row");
  metaRow.appendChild(createEl("span", `status ${item.status}`, statusLabels[item.status] || item.status));
  if (item.scenarios) {
    item.scenarios.slice(0, 3).forEach((s) => {
      metaRow.appendChild(createEl("span", "tag", scenarioLabels[s] || s));
    });
  }
  head.appendChild(metaRow);
  const modalTitle = createEl("h2", null, `${provider.name} · ${item.name}`);
  modalTitle.id = "modal-title";
  head.appendChild(modalTitle);
  content.appendChild(head);

  const fields = createEl("dl", "modal-fields");

  if (item.type === "api") {
    appendField(fields, "类型", "API 按量计费");
    appendField(fields, "输入价", item.input != null ? `¥${item.input} / 百万 tokens` : item.priceText || "待同步");
    appendField(fields, "输出价", item.output != null ? `¥${item.output} / 百万 tokens` : "-");
    appendField(fields, "缓存命中", item.cache != null ? `¥${item.cache} / 百万 tokens` : "-");
    if (item.originalInput != null) {
      appendField(fields, "原价", `输入 ¥${item.originalInput} / 输出 ¥${item.originalOutput} / 缓存 ¥${item.originalCache}`);
    }
    appendField(fields, "上下文", item.context ?? "-");
    appendField(fields, "最大输出", item.maxOutput ?? "-");
    appendField(fields, "质量评分", item.quality != null ? `${item.quality}/100` : "-");
    appendField(fields, "易用评分", item.ease != null ? `${item.ease}/100` : "-");
  } else {
    appendField(fields, "类型", item.planType || "订阅套餐");
    appendField(fields, "首月", item.firstMonth ?? "-");
    appendField(fields, "包月", item.recurringMonthly ?? (item.monthly != null ? `¥${item.monthly}` : "-"));
    appendField(fields, "包季", item.quarterly ?? "-");
    appendField(fields, "包年", item.yearly ?? "-");
    appendField(fields, "5小时请求", item.request5h ?? "-");
    appendField(fields, "每周请求", item.weeklyRequests ?? "-");
    appendField(fields, "每月请求", item.monthlyRequests ?? "-");
    appendField(fields, "Token 上限", item.tokenLimit ?? "-");
    appendField(fields, "额度说明", item.quota ?? "-");
    if (item.tools?.length) appendField(fields, "支持工具", item.tools.join(" / "));
    if (item.seats) appendField(fields, "座位", item.seats);
  }

  if (item.discount) {
    appendField(fields, "优惠", `${item.discount.label}${item.discount.end ? `，${item.discount.end}` : ""}`);
  }
  appendField(fields, "状态", statusLabels[item.status] || item.status);
  appendField(fields, "最近更新", item.updated ?? "-");
  appendField(fields, "官方来源", item.source ?? "-");
  content.appendChild(fields);

  if (item.strengths?.length) {
    const section = createEl("div", "modal-section");
    section.appendChild(createEl("h3", null, "优势"));
    const ul = createEl("ul");
    item.strengths.forEach((s) => ul.appendChild(createEl("li", null, s)));
    section.appendChild(ul);
    content.appendChild(section);
  }

  if (item.weaknesses?.length) {
    const section = createEl("div", "modal-section");
    section.appendChild(createEl("h3", null, "注意"));
    const ul = createEl("ul");
    item.weaknesses.forEach((s) => ul.appendChild(createEl("li", null, s)));
    section.appendChild(ul);
    content.appendChild(section);
  }

  const actions = createEl("div", "modal-actions");
  if (item.source) {
    const sourceBtn = createEl("a", "source-btn");
    sourceBtn.href = item.source;
    sourceBtn.target = "_blank";
    sourceBtn.rel = "noopener noreferrer";
    sourceBtn.textContent = "查看官方来源";
    actions.appendChild(sourceBtn);
  }
  const providerObj = providers.find((p) => p.id === item.providerId);
  if (providerObj?.purchaseUrl) {
    const buyBtn = createEl("a", "buy-btn");
    buyBtn.href = providerObj.purchaseUrl;
    buyBtn.target = "_blank";
    buyBtn.rel = "noopener noreferrer";
    buyBtn.textContent = "跳转购买";
    const arrowSpan = document.createElement("span");
    arrowSpan.setAttribute("aria-hidden", "true");
    arrowSpan.textContent = "→";
    buyBtn.appendChild(arrowSpan);
    actions.appendChild(buyBtn);
  }
  content.appendChild(actions);

  return content;
}

function openDetailModal(itemId) {
  const item = catalog.find((entry) => entry.id === itemId);
  if (!item) return;
  const provider = providers.find((p) => p.id === item.providerId);
  const modal = document.querySelector("#detail-modal");
  const content = document.querySelector("#modal-content");
  if (!modal || !content) return;

  content.innerHTML = "";
  content.appendChild(renderModalContent(item, provider || { name: "未知厂商" }));
  modal.hidden = false;
  window.requestAnimationFrame(() => modal.classList.add("show"));
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  const modal = document.querySelector("#detail-modal");
  if (!modal) return;
  modal.classList.remove("show");
  window.setTimeout(() => {
    modal.hidden = true;
    document.body.style.overflow = "";
  }, 200);
}

function bindLibraryControls() {
  document.querySelector("#library-search")?.addEventListener("input", (event) => {
    state.libraryQuery = event.target.value;
    state.expandedProviders.clear();
    renderProviderLibrary();
  });

  document.querySelector(".library-toolbar")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.libraryFilter = button.dataset.filter;
    state.expandedProviders.clear();
    document.querySelectorAll("[data-filter]").forEach((entry) => {
      entry.classList.toggle("active", entry.dataset.filter === state.libraryFilter);
      entry.setAttribute("aria-pressed", String(entry.dataset.filter === state.libraryFilter));
    });
    renderProviderLibrary();
  });

  document.querySelector("#library-sort")?.addEventListener("change", (event) => {
    state.librarySort = event.target.value;
    renderProviderLibrary();
  });

  document.querySelector("#provider-grid")?.addEventListener("click", (event) => {
    const anchorButton = event.target.closest("[data-copy-anchor]");
    if (anchorButton) {
      const id = anchorButton.dataset.copyAnchor;
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      window.history.replaceState(null, "", `#${id}`);
      window.navigator.clipboard?.writeText(url).catch(() => {});
      showToast("厂商链接已复制");
      return;
    }

    const detailButton = event.target.closest("[data-detail]");
    if (detailButton) {
      openDetailModal(detailButton.dataset.detail);
      return;
    }

    const button = event.target.closest("[data-toggle-plans]");
    if (!button) return;
    const providerId = button.dataset.togglePlans;
    if (state.expandedProviders.has(providerId)) {
      state.expandedProviders.delete(providerId);
    } else {
      state.expandedProviders.add(providerId);
    }
    renderProviderLibrary();
  });
}

async function boot() {
  bindLibraryControls();
  renderProviderLibrary();

  document.querySelector("#modal-close")?.addEventListener("click", closeDetailModal);
  document.querySelector("#detail-modal")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeDetailModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDetailModal();
  });

  renderProviderLibrary();

  if (window.location.hash) {
    window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
    });
  }
}

boot();
