# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - Anchor Navigation & Accessibility Improvements
**Learning:** Fixed headers in single-page applications often obscure anchor navigation targets unless a scroll-margin is applied. Additionally, skip-to-content links must have a matching `tabIndex={-1}` on their target to ensure reliable focus management across all browsers.
**Action:** Use `scroll-mt-24` (or appropriate header height) on section containers and ensure skip-links target elements with `tabIndex={-1}` and `outline-none`.

## 2025-05-15 - Form Usability for Mobile
**Learning:** Mobile users benefit significantly from proper `autoComplete` attributes on common fields like 'name' and 'tel', reducing friction in contact forms.
**Action:** Always include `autoComplete` and matching `id`/`htmlFor` labels for all form inputs.
