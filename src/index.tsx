/**
 * Hello LinkDesk —— 官方市场第一只真实发布的插件（问候卡）。
 *
 * 视图插件契约（docs/03-插件制造/01-API契约.md）：壳以 { isActive, tabId?, sourceId? } 渲染本文件
 * default 导出的组件。keep-alive 下非聚焦标签仍在渲染，isActive 只用于 gate「聚焦才跑」的副作用。
 * UI 文案经 t() 读 contributes.i18n（key = 中文原文，无 zh.json——壳以 key 兜底；en.json 供英文界面）。
 * 颜色全走 var(--xxx) 壳语义 token；字号走壳字阶 token（禁硬编码 hex/外挂字体）。
 */

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

/** 宿主 linkdesk.app 的极小类型面——只声明本插件用到的，避免依赖 SDK 精确 Window 类型 */
type HostApp = { app?: { getVersion?: () => Promise<string> } };

export default function HelloLinkDesk(_props: { isActive?: boolean; tabId?: string; sourceId?: string }) {
  const { t } = useTranslation();
  const [hostVersion, setHostVersion] = useState<string | null>(null);

  // 读宿主 LinkDesk 版本（证明插件真能触达 linkdesk.* API）；缺面/失败 → 静默不显示该行
  useEffect(() => {
    let alive = true;
    const app = (window as unknown as { linkdesk?: HostApp }).linkdesk?.app;
    (app?.getVersion?.() ?? Promise.resolve(null))
      .then((v) => {
        if (alive && v) setHostVersion(String(v));
      })
      .catch(() => {
        /* ignore */
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="hlk">
      <div className="hlk__card">
        <p className="hlk__eyebrow">{t("官方市场首发插件")}</p>
        <h1 className="hlk__title">{t("你好，LinkDesk")}</h1>
        <p className="hlk__sub">
          {t("这是官方市场第一只真实发布的插件——一张小小的问候卡。点「安装」即可体验从市场发现到插件运行的完整链路。")}
        </p>
        <dl className="hlk__meta">
          <div className="hlk__row">
            <dt>{t("插件")}</dt>
            <dd>hello-linkdesk · v0.1.0</dd>
          </div>
          <div className="hlk__row">
            <dt>{t("发布者")}</dt>
            <dd>Encaron</dd>
          </div>
          {hostVersion && (
            <div className="hlk__row">
              <dt>{t("宿主 LinkDesk")}</dt>
              <dd>v{hostVersion}</dd>
            </div>
          )}
        </dl>
        <p className="hlk__hint">{t("改 src/index.tsx 后 build & publish，即出新版。")}</p>
      </div>
    </div>
  );
}
