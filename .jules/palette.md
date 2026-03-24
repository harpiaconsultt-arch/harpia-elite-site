## 2025-05-15 - Anchor Navigation & Accessibility
**Learning:** Fixed headers require scroll-margin-top (e.g., `scroll-mt-24`) on anchor targets to prevent content from being hidden behind the header. Programmatic focus for 'Skip to Content' links should target elements with `tabIndex={-1}` and `outline-none` to ensure focus logic works without unwanted visual rings on large containers.
**Action:** Always check header height and apply appropriate scroll margins to sections; ensure 'Skip to Content' targets the main container correctly.

## 2025-05-15 - Form Usability
**Learning:** Providing `autoComplete` attributes (like `name`, `tel`, `email`) on form inputs significantly improves the mobile experience and accessibility for users with cognitive disabilities.
**Action:** Audit forms for missing `autoComplete` attributes and add them according to WHATWG standards.
