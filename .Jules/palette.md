## 2024-05-24 - [Anchor Link Obscuration & Skip Navigation]
**Learning:** Fixed-position headers on single-page applications frequently obscure target content when users navigate via anchor links. A common accessibility oversight is the omission of a 'Skip to Content' link, which is critical for keyboard and screen reader efficiency.

**Action:**
1. Always apply `scroll-margin-top` (or Tailwind's `scroll-mt-*`) to section elements that are targets of internal navigation to account for fixed header heights.
2. Implement a visually hidden (until focused) 'Skip to Content' link as the first focusable element in the DOM, targeting the main content container.
3. Enhance mobile toggles with dynamic `aria-expanded` and `aria-label` states to provide immediate semantic feedback to screen reader users.
