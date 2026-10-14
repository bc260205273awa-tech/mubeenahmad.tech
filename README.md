# mubeenahmad.tech

Personal editorial portfolio of **Mubeen Ahmad** — Full-Stack Engineer & Agency Co-Founder. Built with Next.js 14 App Router, TypeScript (strict), Tailwind CSS, GSAP, and Lenis smooth scroll.

---

## Data Privacy & Screenshot Guidelines

> **IMPORTANT:**
> When capturing and adding real screenshots to `/public/work/[slug]/` (especially for **Khan Hub ERP** and **Gulzar Surgical & General Hospital**):
> - **Always blur or redact real patient names, doctor schedules, staff phone numbers, fee/cashier balances, salary registers, student admissions, and donor identity information.**
> - Use dummy or anonymized records in demonstration captures to strictly protect operational and medical confidentiality.

---

## Project Structure & Assets

- `content/profile.ts`: Single source of truth for all copy, experience, and project case studies.
- `public/work/[slug]/cover.webp`: High-resolution covers for featured projects.
- Framed placeholder fallback is automatically active if a cover image file is not yet present.

## Running Locally

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
npm run start
```
