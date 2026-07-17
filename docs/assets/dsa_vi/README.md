# 如意金股（RuyiDailyStockAnalysis）品牌视觉资产

本目录存放练习 2 产出的项目 Logo 与 Icon 设计资产（浅紫主题）。

## 设计方向：B — 金股 + AI 光晕

- **圆角磁贴 + 浅紫渐变**：主色 `#8B5CF6 → #A78BFA`，呼应品牌浅紫主题。
- **AI 光晕**：磁贴外圈淡紫径向光晕（`#C4B5FD`），象征智能化、量化分析。
- **金股菱形节点**：白底 K 线上升走势峰值处嵌入金色菱形（`#FDE68A → #F59E0B`），点题「金股」。
- **如意意象**：K 线低位小钩收尾，暗合「如意」品牌名。
- 选择理由：现代、科技感强，金色仅作为「金股」焦点点缀，整体以浅紫为主，与练习 1 主题一致；比「如意+K线」（偏稳重）和「如意+数据流」（偏灵动）更契合「AI 量化」定位。

## 资产清单

| 文件 | 尺寸 / 说明 |
| --- | --- |
| `icon.svg` | 256×256 主图标（源文件，含光晕/磁贴/K线/金股菱形） |
| `logo-light.svg` | 亮色主题横版 Logo（图标 + 中文「如意金股」+ 英文 RuyiDailyStockAnalysis） |
| `logo-dark.svg` | 暗色主题横版 Logo（同上，文字改为浅色以适配深色背景） |
| `favicon.ico` | 多尺寸 ICO，含 16/32/48/64/128/256 |
| `favicon-16.png` | 16×16 |
| `favicon-32.png` | 32×32 |
| `favicon-48.png` | 48×48 |
| `favicon-64.png` | 64×64 |
| `favicon-128.png` | 128×128 |
| `favicon-180.png` | 180×180（Apple Touch 兼容） |
| `favicon-256.png` | 256×256 |
| `favicon-512.png` | 512×512（PWA / 高分屏） |
| `README.md` | 本说明 |

## 主题适配

- 应用内图标随主题切换：亮色用 `#8B5CF6` 主渐变，暗色用 `#A78BFA` 主渐变；文字在暗色下改为 `#F5F3FF`，保证清晰度。
- Web 副本位于 `apps/dsa-web/public/brand/`，由 `BrandMark.tsx` 组件按主题加载对应 SVG。

## 生成方式

SVG 由手工编写；PNG 与 ICO 由 `resvg-py` 光栅化 `icon.svg` 后用 `Pillow` 导出（PNG 尺寸与 ICO 多尺寸目录均经脚本校验）。
