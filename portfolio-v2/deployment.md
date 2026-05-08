# Deployment & Optimization Guide

## 🚀 Deployment Instructions (Vercel)

1.  **Push to GitHub**:
    Ensure all your local changes in `portfolio-v2/` are committed and pushed to your repository (`mahakagarwal7/Github-Portfolio`).

2.  **Connect to Vercel**:
    - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
    - Import your `mahakagarwal7/Github-Portfolio` repository.
    - Set the **Root Directory** to `portfolio-v2`.

3.  **Environment Variables**:
    While the portfolio uses mocked data as fallbacks, for live GitHub activity, add:
    - `NEXT_PUBLIC_GITHUB_USERNAME`: `mahakagarwal7`
    - `GITHUB_TOKEN`: (Optional, for higher rate limits) Generate at GitHub Settings > Developer Settings > Personal Access Tokens.

4.  **Build Settings**:
    - Framework Preset: `Next.js`
    - Build Command: `npm run build`
    - Install Command: `npm install`

5.  **Deploy**:
    Click **Deploy**. Vercel will automatically provide a high-performance URL (e.g., `portfolio-v2.vercel.app`).

---

## ⚡ Lighthouse & Performance Optimization

To achieve a **95+ Lighthouse Score**, follow these tips:

1.  **Image Optimization**:
    - Replace all `/projects/*.webp` and `/profile.jpg` with optimized images.
    - Use the Next.js `<Image />` component with `priority` for the Hero image.
    - Keep image sizes under 200KB where possible.

2.  **Asset Compression**:
    - The portfolio already uses `Turbopack` for fast builds.
    - Vercel automatically applies Gzip/Brotli compression to all assets.

3.  **Lazy Loading**:
    - I've implemented `dynamic` and `lazy` imports for all off-screen sections (Skills, Projects, Stats).
    - The 3D Scene is only loaded when needed and includes a fallback loader.

4.  **Font Loading**:
    - Next.js `next/font/google` is already used for the Inter font, which eliminates layout shift (CLS).

5.  **Motion Performance**:
    - All GSAP and Framer Motion animations use `transform` and `opacity` to ensure GPU-accelerated rendering.
    - Check for `will-change: transform` on high-frequency animated elements.

---

## 🛠️ Security Audit Checklist

- [x] **Rel Attributes**: All external links use `target="_blank"` and `rel="noopener noreferrer"`.
- [x] **Meta Security**: OG tags and Twitter cards implemented for safe social sharing.
- [x] **Honeypot**: Contact form includes an anti-spam honeypot to prevent bot submissions.
- [x] **Data Privacy**: No sensitive user data is sent to external servers; analytics are client-side only.
