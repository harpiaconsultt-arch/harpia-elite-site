## 2025-05-15 - [Skip to Content Link & Scroll Margin]
**Learning:** Fixed headers often obscure content when navigating via anchor links. A skip-to-content link is essential for keyboard navigation, but the target element must have `tabIndex={-1}` and `outline-none` for reliable programmatic focus without visual clutter.
**Action:** Always add `scroll-mt-{size}` to section anchors when a fixed header is present. Ensure the skip link is the first focusable element in the app shell.
