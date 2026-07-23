# Event gallery — 2025

Drop event photos here as `01.jpg`, `02.jpg`, `03.jpg`, … The gallery is
data-driven from `lib/edition-2025.ts` (`galleryImages`), which currently lists
`01`–`09`. To add more (or fewer), change the `length` in that file's
`Array.from({ length: 9 }, …)` — or replace it with an explicit list if you want
per-photo captions and alt text.

How it stays fast with many photos:

- Every image lazy-loads (only what scrolls into view is fetched).
- Next.js serves a size matched to the viewport via the `sizes` hint, so phones
  download small thumbnails, not full-resolution files.
- Thumbnails are uniform squares (object-cover), so there is no layout shift.
- Clicking a thumbnail opens a full-size lightbox (arrow keys / Esc to navigate).

Any mix of aspect ratios is fine — the grid crops thumbnails and the lightbox
shows the whole image.
