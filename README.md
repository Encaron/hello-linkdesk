# Hello LinkDesk

官方市场第一只**真实发布**的插件（问候卡）——演示「从市场发现 → 安装 → 运行」的完整链路。

The first real plugin published to the official marketplace — a small greeting card that walks the full discovery → install → run journey.

## 这是什么

一个视图插件：在 LinkDesk 里开一个标签页，显示一张问候卡——含宿主 LinkDesk 版本（证明插件能真触达 `linkdesk.*` API）。

- 插件 ID：`hello-linkdesk`
- 版本：0.1.0
- 作者：Encaron
- 位置：主区标签页（单例）

## 本地开发

```bash
npm install
npm run dev        # 浏览器预览（HMR）
npm run dev -- --real   # 真机环：真 IPC 秒级循环（LinkDesk 以 --remote-debugging-port=9222 启动）
npm run validate   # 校验 plugin.json
npm run build      # 产出 hello-linkdesk.linkdesk-plugin
```

## 发布

```bash
npm run publish    # 一键发布：GitHub Release + .linkdesk-plugin + 本仓库根 marketplace.json
```

> 官方目录收录：向 `encaron/linkdesk-marketplace` 仓库提交条目（marketplace.json 加一条指向本插件 Release 的记录）后，所有用户默认可见。

## 结构

```
plugin.json     插件清单（身份/入口/贡献点）
src/index.tsx   主视图（问候卡）
src/index.css   样式（LinkDesk 语义 token，零硬编码 hex）
i18n/en.json    UI 文案英文翻译（key = 中文原文）
```
