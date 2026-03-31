# Keshavaa La Arena — Luxury Real Estate Landing Page

A high-performance, mobile-first Google PPC landing page built for the official developer, **Keshavaa**, featuring their 1 & 2 BHK Residences in Nerul, Goa.

## 🏗️ Technical Architecture
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS-in-JS (Styled-JSX) for component-level performance and flexibility.
- **Performance**: Optimized with Next.js `Script` for tracking, `Next/Font` for zero layout shift, and lazy-loading for all property assets.

## 🎨 Design highlights
- **Contrast System**: Midnight Navy (`#0B1C2C`) paired with Warm Beige (`#F5F0E6`) to create a "Mixed Luxury" aesthetic.
- **Typography**: `Cormorant Garamond` (Serif) for headlines to evoke exclusivity, and `Inter` (Sans) for clean readability.
- **Premium Accents**: Warm Gold (`#C9A96E`) for primary CTAs and borders, with Turquoise (`#00B4CC`) icon highlights.

## 📊 Key Features
1. **Universal Lead Capture**:
   - Every primary interaction (Hero CTA, Footer CTA, Floor Plan Unlock, Gallery Photo clicks) triggers a centralized `LeadPopup`.
   - The popup handles the "Thank You" sequence internally without redirects, maintaining the user's scroll context.
2. **Blurred Floor Plans (Gated Context)**:
   - Floor plans use `CSS filter: blur(15px)` and `pointer-events: none` to create an exclusive, gated feel.
   - Access requires a lead submission, though the plan remains blurred as per requirements to drive "high intent" inquiries.
3. **PPC Optimization**:
   - **GTM & Meta Pixel**: Integrated placeholders for rapid deployment.
   - **UTM Capture**: Silently captures `utm_source`, `utm_medium`, etc., and logs them for form transmission.
   - **Self-Contained**: Zero outbound links or redundant menus to maximize conversion rate (CRO).

## 🚀 Deployment Ready
The project has been successfully built with `npm run build` and is ready for production hosting (Vercel, AWS, etc.).

### ✅ Verification Check
- [x] No side-navigation menu.
- [x] CTA on sticky bar (Book Site Visit).
- [x] Mobile-first layout (375px optimized).
- [x] WhatsApp deep-links included.
- [x] Lead form with Full Name, Phone, Email, and Message fields.
- [x] Performance: Static generation for optimal PageSpeed scores.
