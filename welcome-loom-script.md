# Welcome Loom — 90-Second Script

This is the script for a 90-second welcome video to record after a customer's first payment lands. The goal is *human warmth* — not a polished corporate intro. Sit at your desk, screen-share the customer template, talk like you're walking a friend through what they just bought.

## Where it shows up

- Embedded on `thank-you.html` so it auto-plays muted right after a successful payment
- Linked in the Day 0 welcome email
- Optionally pinned on the customer-start page

## Tools

- **Loom** (free tier is fine) for recording with screen + camera bubble
- After recording: download the MP4, upload to a free CDN (Cloudinary, Vercel Storage, or Loom's hosted URL), or just keep the Loom link
- Add the URL to `config.js` as `welcomeVideoUrl`

## Recording setup

- Webcam on (the bubble matters — humans build trust with faces faster than with voiceovers)
- Screen share showing your **Airtable customer template base** with the All sources view open
- Quiet room, single take is fine
- ~90 seconds total. Loom will let you trim if you go long.

---

## The script

Read it once before recording. Don't memorize. Look at the camera as much as at the screen. Say "uh" if you say "uh" — that's the human bit.

---

> **[0:00 — 0:10] Camera, full screen.**
>
> Hey [First Name]. Thanks for buying. I wanted to take ninety seconds to walk you through what you just got, because you're not getting a spreadsheet — you're getting a working environment.

> **[0:10 — 0:25] Switch to screen share, Airtable open on All sources view.**
>
> This is your copy of the Funding Intelligence Vault. It's seventy-five Canadian funding sources I've curated and verified. You're looking at the All sources view right now.

> **[0:25 — 0:40] Click between views as you talk — Pipeline, By province, High priority.**
>
> The work is already done. There's a kanban pipeline view here. There's a By province view. There's a High priority view that I've pre-flagged with the dozen sources I'd start with for an organization like yours. So if you only have fifteen minutes today, open High priority and start there.

> **[0:40 — 0:55] Hover the priority field, the status dropdown, and the next_action_date column.**
>
> The other thing I want to point out: you've got a priority column, a status dropdown that goes from Open through Submitted to Won, and a next-action-date field. That's your tracker — not just my list. As you find sources that fit and write applications, this becomes your funding pipeline. The vault grows up with you.

> **[0:55 — 1:15] Switch back to camera.**
>
> Two things I'd ask of you. One — in the next forty-eight hours, just open it. Even if all you do is scroll through and read three rows, that's enough for week one. Two — reply to my welcome email with your province, your mission area, and whether you want to focus on public grants, foundations, or both. I'll send back the rows I'd actually start you with personally.

> **[1:15 — 1:30] Camera, slight smile.**
>
> Welcome to the vault. I'm glad you're here. If anything's confusing or missing, hit reply on any email from me — that goes straight to my inbox. Talk soon.

---

## Tone notes

- Read it conversationally. Don't sound like a marketer.
- The phrase **"You're not getting a spreadsheet — you're getting a working environment"** is the one line that earns the $49 in the customer's mind. Land it cleanly.
- "I" not "we." This is a one-person business showing up as one person. That's premium for B2B information products.
- End with the offer ("hit reply on any email") not with a CTA button. Premium feels like a relationship, not a funnel.

## Filename and format

- Save as `welcome-loom.mp4` (download from Loom) or use the Loom share URL
- If self-hosting: 720p is fine, no need for 1080p — file size matters for thank-you page load time
- If using the Loom share URL: the embed code Loom generates works in an `<iframe>` on `thank-you.html`

## Refresh cadence

- Re-record once a year minimum — it should sound recent
- Re-record sooner if you change pricing, add a tier, or shift the product positioning
- Save old versions; never delete (you may want to A/B test with new customers later)
