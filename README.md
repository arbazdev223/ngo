# Shehri Kamgar Samaj Website

A Next.js App Router website for Shehri Kamgar Samaj focused on trust, storytelling, and conversion for volunteering and donor interest.

## Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Scripts

- `npm run dev` - start local development server
- `npm run lint` - run ESLint
- `npm run build` - create a production build
- `npm run start` - start the production server

## Content System

Editable site content lives in `content/config.ts`, including:

- mission and about copy
- work areas and programs
- trust section content
- gallery media manifest
- CTA and contact content

## Lead Flow

The forms on `/get-involved` and `/contact` post to `app/api/leads/route.ts`.

Current behavior:

- validates request data on the server
- uses a honeypot field for simple spam resistance
- routes submissions through a stubbed adapter in `lib/lead-adapter.ts`
- returns a reference ID for confirmation UI

## Notes

- Existing media and PDFs from `public` are preserved and used directly.
- The homepage intentionally avoids loading the large 44 MB video on first paint.
- Phone, email, and social links are left as placeholders until final NGO details are confirmed.
