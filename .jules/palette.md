## 2024-05-24 - Skip to Content and Localization

**Learning:** For keyboard accessibility, "Skip to Content" links must target elements with `tabIndex={-1}` and `outline-none` to ensure the focus moves correctly without creating distracting focus rings for mouse users. Additionally, in localized applications (e.g., Portuguese), ARIA labels must be translated to match the UI language for a consistent screen reader experience.

**Action:** Implement `tabIndex={-1}` on main content containers and always audit `aria-label` attributes for translation when working on localized features.
