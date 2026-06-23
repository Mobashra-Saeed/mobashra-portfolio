# Mobashra Saeed — Developer Portfolio

A high-end, production-ready personal portfolio for a **Web & AI Developer**.
Dark editorial design, ambient indigo accents, smooth Motion animations,
a working contact form, and SEO/accessibility built in.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Motion · Resend · Lucide

---

## 1. Prerequisites

- **Node.js 20.9 or newer** (check with `node -v`)
- A code editor (VS Code recommended)

---

## 2. Run it locally

From the project folder:

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

> The first run downloads the Google Fonts (Geist, Geist Mono, Bricolage Grotesque)
> and self-hosts them — so you need an internet connection the first time you build.
> After that they're served from your own site (great for performance + privacy).

---

## 3. Three things to personalize (do these first)

Everything you'll want to edit lives in **`lib/data/`** and **`public/`** — you
shouldn't need to touch the components.

### a) Drop in your real designer-project screenshot
Replace this placeholder with your actual screenshot (keep the same name):

```
public/projects/designer-hero.png
```

Your portrait (`public/profile.jpg`) and the CAIPSD screenshot
(`public/projects/caipsd-hero.png`) are already wired in.

### b) Set your live domain
In **`lib/data/site.js`**, update:

```js
url: "https://mobashrasaeed.vercel.app", // ← your real domain
```

This is used for SEO metadata, Open Graph, sitemap, and robots.

### c) (Optional) Add your résumé
Drop a `resume.pdf` into the `public/` folder and it'll be available at `/resume.pdf`.

---

## 4. Make the contact form send real email (Resend)

The form is wired to **Resend** via a secure Server Action — your API key never
touches the browser.

1. Create a free account at **https://resend.com**.
2. Go to **API Keys → Create API Key** and copy it.
3. In the project root, create a file named **`.env.local`**:

   ```bash
   RESEND_API_KEY=re_your_key_here
   CONTACT_TO_EMAIL=mobashrasaeed713@gmail.com
   ```

4. Restart `npm run dev`. Submit the form — you'll get the message by email.

> **Test mode (important):** Until you verify a domain in Resend, messages are
> sent *from* `onboarding@resend.dev` and can only be delivered **to the email you
> signed up with**. So set `CONTACT_TO_EMAIL` to your Resend account email while testing.
>
> **Production:** In Resend → **Domains**, verify your own domain, then change the
> `from:` address in `app/actions/contact.js` to something like
> `Portfolio <hello@yourdomain.com>`. Now it can deliver anywhere.

If you skip this step, everything else still works — the form just shows a friendly
"email me directly" message.

---

## 5. Adding new projects later

Open **`lib/data/projects.js`** and copy the commented template at the bottom.
The `actionType` field controls the buttons automatically:

| `actionType` | Buttons shown                         | Use when…                          |
|--------------|---------------------------------------|------------------------------------|
| `"A"`        | **Visit site** + **Code**             | You have a live demo *and* a repo  |
| `"B"`        | **Visit site**                        | Live link only                     |
| `"C"`        | **Case study** (opens a modal)        | No public live link / NDA work     |

Scenario `C` projects also get their own SEO page at `/projects/<id>`.

---

## 6. Build & deploy to Vercel

### Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Mobashra-Saeed/portfolio.git
git push -u origin main
```

### Deploy
1. Go to **https://vercel.com → Add New → Project** and import the repo.
2. Framework preset auto-detects **Next.js** — no config needed.
3. Under **Environment Variables**, add the same two keys from `.env.local`:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
4. Click **Deploy**.

After it's live, copy the URL back into `site.url` (`lib/data/site.js`), commit,
and push — Vercel redeploys automatically.

---

## 7. Project structure

```
app/
  layout.js              Fonts + global SEO metadata
  page.js                Composes all sections
  globals.css            Design tokens (@theme) — re-theme everything here
  not-found.js           Custom 404
  sitemap.js / robots.js SEO
  actions/contact.js     Resend Server Action (contact form)
  projects/[id]/page.js  Dynamic case-study pages
components/
  ui/                    Button, Badge, Modal, ProjectCard, GlowCard, …
  sections/              Navbar, Hero, About, Experience, Projects, …
lib/
  data/                  ← your content: site, experience, projects, certs
  utils.js               cn() helper + image blur placeholder
public/                  images (profile, project screenshots)
```

---

## 8. Notes

- **Re-theme in one place:** all colors and fonts are CSS variables in the
  `@theme` block of `app/globals.css`.
- **Accessibility:** semantic landmarks, labelled inputs, visible keyboard focus
  rings, and `prefers-reduced-motion` support are built in.
- **Performance:** fonts are self-hosted, images use `next/image` with blur
  placeholders, and animations are GPU-friendly — aim Lighthouse at it and tune
  from there.

Built with Next.js, Tailwind & Motion.

---

## v2 update — what changed & where to add your stuff

This version is a significant upgrade. Key changes:

- **Hero**: portrait removed, replaced with a self-animating **code editor** (edit the snippets in `components/ui/CodeWindow.jsx`).
- **Marquee ticker**, **stats band**, and a **client/proof wall** — edit `site.stats`, `site.clients`, and `site.marquee` in `lib/data/site.js`.
- **Two project categories** with a filter — every project now has `category: "web"` or `"wordpress"` in `lib/data/projects.js`.
- **Full case-study pages** at `/projects/<id>` with image **galleries** and prev-project nav (replaces the old popup).
- **Diagonal sweep-fill button** hover.

### Add your own things

**Add a certificate image (this is your proof):**
1. Drop the image in `public/certs/` (e.g. `public/certs/google-ai.png`).
2. In `lib/data/certifications.js`, set that cert's `image: "/certs/google-ai.png"`.
3. The card becomes clickable and opens the full certificate.

**Swap the ForexBrokers screenshot:**
Replace `public/projects/forexbrokers-hero.jpg` with your real screenshot (keep the filename).

**Add a new project:**
Copy any entry in `lib/data/projects.js`, set its `category`, drop screenshots in `public/projects/<name>/`, and point `image` + `gallery` at them.
