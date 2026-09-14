# 更新日志

## v0.1.2（2026-09-15）

- 新增市场身份图 `resources/icon.svg`（Type-2 彩色身份图，E6#68a）——此前 `plugin.json` 没有 `icon` 字段，市场里显的是**统一默认彩块**
- 意象：问候卡 + 一道手写签名 + 右上首发暖金点（呼应它 640 封面的深夜紫舞台与 hello 笔迹）
- 形态照 [06-图标.md](https://github.com/Encaron/linkdesk/blob/electron/docs/02-Electron%E6%9E%B6%E6%9E%84/E6_%E6%8F%92%E4%BB%B6%E7%94%9F%E6%80%81%E4%B8%8E%E5%8F%91%E5%B8%83/03-%E6%8F%92%E4%BB%B6%E5%B8%82%E5%9C%BA/06-%E5%9B%BE%E6%A0%87.md)：SVG / 透明底 / 48×48 正方形 viewBox / 零 `<text>`（不绑字体）
- `@linkdesk/plugin-sdk` 升到 0.1.19（^0.1.0 → ^0.1.19）——SDK 0.1.16 之前的 `publish` 没有 E6#106 的身份图 URL 化：包内相对路径写进目录条目后，**未装用户看到的图标恒 404**
- 本笔同时把 **0.1.1 的源码改动**（README 与插件内显示的版本号）落进版本历史——0.1.1 当初只发了 Release，源改动一直挂在工作副本未提交（HEAD 停在 0.1.0）。顺带把两处显示号对齐到 0.1.2，并新建本 `CHANGELOG.md`（此前没有 ⇒ 目录条目里一直没有 `changelog`）

