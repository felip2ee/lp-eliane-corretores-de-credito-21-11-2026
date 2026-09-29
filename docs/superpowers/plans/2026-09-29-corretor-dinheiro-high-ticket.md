# Corretor de Dinheiro High Ticket Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a high-conversion, high-ticket pre-checkout landing page for the "Corretor de Dinheiro" event using a long-form sales letter approach.

**Architecture:** Single-page React/Tailwind application. The page is structured as a sequence of high-value sections designed to move the user from curiosity to the decision of investing R$ 5.997. It utilizes a dark, sophisticated theme with strategic gold accents and a strict "no em-dash" copy rule.

**Tech Stack:** React, Tailwind CSS, Montserrat (Display), Open Sans (Sans).

**Spec:** `docs/superpowers/specs/2026-09-29-corretor-dinheiro-high-ticket-design.md`

## Global Constraints

- **Copy Rule:** NO em-dashes (`—` or `–`). Use points, colons, commas, or `·`.
- **Mobile-First:** Responsive design optimized for smartphones.
- **Visuals:** High-ticket aesthetic: Deep green (`#04281C`), Gold (`#DCA452`), ample negative space.
- **Price:** Ancoragem R$ 9.997 $\rightarrow$ Oferta R$ 5.997.
- **Event Date:** 21 de Novembro.
- **Campaign Period:** 19 a 30 de Outubro.

## Review Focus

- **Copy Compliance:** Any occurrence of `—` or `–` must be flagged and removed.
- **Contrast Ratio:** Ensure gold text on dark green backgrounds meets accessibility standards for readability.
- **Mobile Layout:** No horizontal scrolling; all sections must fit perfectly on narrow screens.
- **Visual Flow:** The transition from "Amateur" to "Corretor de Dinheiro" must be visually distinct and impactful.
- **CTA Visibility:** The primary CTA must be easily accessible and stand out in the high-ticket theme.

---

## File Structure

- `src/pages/CorretorDinheiroLP.jsx`: Main page component containing all sections and sales copy.
- `src/components/lp/HighTicketSection.jsx`: Reusable wrapper for layout consistency across sections.
- `src/components/lp/PriceCard.jsx`: Premium pricing component for the R$ 5.997 offer.
- `src/components/lp/ComparisonTable.jsx`: Component for the Amateur vs. Professional contrast.

---

## Tasks

### Task 1: Scaffolding and Theme Configuration

**Files:**
- Create: `src/pages/CorretorDinheiroLP.jsx`
- Modify: `tailwind.config.js` (verify existing colors)

- [ ] **Step 1: Verify Tailwind config colors**
  Ensure `#063A29`, `#105B41`, `#DCA452`, `#04281C`, `#02150E` are available.
- [ ] **Step 2: Create the page shell**
  Implement the basic `CorretorDinheiroLP` component with the background color `#04281C`.
- [ ] **Step 3: Implement the global typography wrapper**
  Apply Montserrat to headings and Open Sans to body text.
- [ ] **Step 4: Commit**
  `git commit -m "feat: scaffold high-ticket LP and theme"`

### Task 2: Hero Section and Contrast Section

**Files:**
- Modify: `src/pages/CorretorDinheiroLP.jsx`
- Create: `src/components/lp/ComparisonTable.jsx`

- [ ] **Step 1: Implement Hero Section**
  Write the high-impact headline and sub-headline (no em-dashes). Add the `[IMAGEM: Eliane Portrait]` placeholder.
- [ ] **Step 2: Implement Contrast Section**
  Build the `ComparisonTable` component. Column 1: Amador (Red/Grey tones). Column 2: Corretor de Dinheiro (Gold/Green tones).
- [ ] **Step 3: Verify mobile responsiveness**
  Ensure the table stacks or scrolls horizontally on mobile.
- [ ] **Step 4: Commit**
  `git commit -m "feat: implement hero and contrast sections"`

### Task 3: Event Revelation and Authority Section

**Files:**
- Modify: `src/pages/CorretorDinheiroLP.jsx`

- [ ] **Step 1: Implement Revelation Section**
  Copy focusing on the "Caixa Preta" and the 21/11 date. Add `[IMAGEM: Convite VIP]` placeholder.
- [ ] **Step 2: Implement Authority Section**
  Bio of Eliane with a focus on the R$ 400M result. Add `[IMAGEM: Eliane Leadership]` placeholder.
- [ ] **Step 3: Commit**
  `git commit -m "feat: implement event revelation and authority sections"`

### Task 4: Black Friday Hook and Pricing

**Files:**
- Modify: `src/pages/CorretorDinheiroLP.jsx`
- Create: `src/components/lp/PriceCard.jsx`

- [ ] **Step 1: Implement Black Friday Hook**
  Copy: "Pare de comprar coisas. Invista em habilidades." Add `[ÍCONE: Cronômetro]` placeholder.
- [ ] **Step 2: Implement PriceCard component**
  Visual: Anchored price R$ 9.997 (strikethrough) $\rightarrow$ Offer R$ 5.997 (Bold Gold).
- [ ] **Step 3: Implement Primary CTA**
  High-visibility button with hover effect.
- [ ] **Step 4: Commit**
  `git commit -m "feat: implement black friday hook and premium pricing"`

### Task 5: Bonuses, FAQ, and Footer

**Files:**
- Modify: `src/pages/CorretorDinheiroLP.jsx`

- [ ] **Step 1: Implement Bonuses Section**
  Two distinct blocks for the "Aula Especial" and "Mapa do Corretor". Add `[IMAGEM: Mockups]` placeholders.
- [ ] **Step 2: Implement FAQ Section**
  Clean accordion for common objections.
- [ ] **Step 3: Implement Footer**
  Minimalist footer with legal info.
- [ ] **Step 4: Commit**
  `git commit -m "feat: implement bonuses, faq and footer"`

### Task 6: Final Review and Polish

**Files:**
- Modify: `src/pages/CorretorDinheiroLP.jsx`

- [ ] **Step 1: Copy Audit**
  Run a search for `—` and `–` in the final JSX. Replace all instances.
- [ ] **Step 2: Visual Polish**
  Ensure spacing (margins/padding) is consistent and luxurious.
- [ ] **Step 3: Final Mobile Test**
  Check all sections on a simulated mobile screen.
- [ ] **Step 4: Final Commit**
  `git commit -m "perf: final polish and copy audit for high-ticket LP"`
