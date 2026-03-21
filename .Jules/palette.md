## 2025-05-15 - [Accessibility & Navigation Enhancements]
**Learning:** In applications with fixed headers, anchor navigation requires a scroll offset (e.g., `scroll-mt-24`) to prevent the header from obscuring the target content. Additionally, a 'Skip to Content' link is a fundamental accessibility requirement that must be the first focusable element and target a container with `tabIndex={-1}` for reliable programmatic focus.
**Action:** Always include a Skip to Content link in the root layout and ensure all section anchors have appropriate `scroll-mt` classes when using fixed headers.

## 2025-05-15 - [Form Usability]
**Learning:** Mobile users benefit significantly from proper `autoComplete` attributes on common form fields (name, tel, email), as it reduces typing effort and cognitive load.
**Action:** Audit all user-facing forms for missing `autoComplete` attributes.
