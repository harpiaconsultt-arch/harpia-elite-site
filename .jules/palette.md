## 2025-05-14 - Fixed Header Anchor Overlap
**Learning:** Fixed headers (sticky navigation) obscure the top of elements when navigating via anchor links (#ID), hiding section titles or important content from the user.
**Action:** Apply Tailwind's `scroll-mt-{size}` utility (e.g., `scroll-mt-24`) to any element that serves as a navigation target to ensure it lands below the header.

## 2025-05-14 - Skip to Content Target Focus
**Learning:** For a "Skip to Content" link to work reliably across all browsers and screen readers, the target element (usually `<main>`) should have `tabIndex={-1}` and `outline-none` to receive programmatic focus without an unwanted visual ring.
**Action:** Always include `id="main-content" tabIndex={-1} className="outline-none"` on the main content wrapper when implementing skip links.
