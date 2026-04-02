## 2025-05-15 - Improving Accessibility and Navigation Precision

**Learning:** The application uses a fixed header (approx. 80px), but anchor links do not account for it, causing the header to overlap section content. Additionally, missing 'Skip to Content' links and input `autoComplete` attributes hinder accessibility for keyboard users and mobile users respectively.

**Action:**
- Implement a visually hidden 'Skip to Content' link targeting `#main-content` with `tabIndex={-1}` and `outline-none` for reliable programmatic focus.
- Add `scroll-mt-24` (96px) to all section target IDs to ensure clear visibility when navigating via anchor links.
- Enhance form inputs in `LocationSection.tsx` with appropriate `autoComplete` attributes (e.g., `name`, `tel`) to improve usability.
