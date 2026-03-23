## 2025-03-23 - Accessibility and Scroll Margins
**Learning:** For a single-page landing page with a fixed header, adding a 'Skip to Content' link and `scroll-mt-*` utilities is essential for both keyboard navigation and a smooth scroll experience to section anchors. Programmatic focus on the `<main>` element requires `tabIndex={-1}` and `outline-none` to be effective without visual distraction.
**Action:** Always check for fixed headers and ensure section anchors have appropriate scroll offsets. Implement skip links as the first focusable element on every page.
