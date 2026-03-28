## 2025-05-15 - [Vite & CSS @import]
**Learning:** In Vite-based projects, CSS `@import` statements (e.g., Google Fonts) must precede all other CSS rules, including Tailwind directives (`@tailwind base`, etc.). Failure to do so will cause PostCSS/Vite build warnings or errors.
**Action:** Always place third-party font imports at the absolute top of the main CSS entry point (`index.css`).

## 2025-05-15 - [Skip to Content Implementation]
**Learning:** For a "Skip to Content" link to work reliably across all browsers (including older versions of Safari and Chrome), the target element (usually `<main>`) must have `tabIndex={-1}` and `outline-none`. This ensures it can receive programmatic focus without an unsightly focus ring unless intended.
**Action:** Apply `id="main-content"`, `tabIndex={-1}`, and `className="outline-none"` to the primary content container when implementing skip links.

## 2025-05-15 - [Fixed Header Scroll Offset]
**Learning:** When using a fixed/sticky header, anchor navigation (e.g., `#services`) will often cause the target section to be partially hidden behind the header. Tailwind's `scroll-mt-{size}` utility is the standard way to fix this without adding extra padding to the content itself.
**Action:** Apply `scroll-mt-24` (or the appropriate header height equivalent) to all section IDs that are targets of navigation links.
