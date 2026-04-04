# 🎨 Palette's UX Journal

## 2025-05-15 - Accessibility and Fixed Navigation
**Learning:** In landing pages with fixed headers, the "Skip to Content" link is a critical first focusable element for screen reader and keyboard users. However, simply shifting focus to the main content isn't enough; the target must have `tabIndex={-1}` and `outline-none` to receive programmatic focus reliably. Additionally, when using anchor links on the same page, Tailwind's `scroll-mt-*` utility is essential to prevent the fixed header from overlapping the section headings.

**Action:** Always implement a "Skip to Content" link as the first child of the body/root and use `scroll-mt-24` (or appropriate header offset) on all section anchors.
