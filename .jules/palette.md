# Palette's Journal

## 2025-05-15 - Skip-to-content with Fixed Header
**Learning:** For apps with fixed headers, skip-link targets need `scroll-mt-*` (e.g., `scroll-mt-24`) to avoid being obscured by the header when focused, and `tabIndex={-1}` to reliably receive programmatic focus.
**Action:** Use `scroll-mt-24`, `outline-none`, and `tabIndex={-1}` on the main content container when implementing skip links.
