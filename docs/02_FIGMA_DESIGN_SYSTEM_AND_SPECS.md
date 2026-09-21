# Figma Design System & Specifications

Use this blueprint to rapidly construct the Figma prototype or apply it directly to the frontend CSS.

## 1. Core Concept & Vibe
* **Vibe:** Clean, urgent, trustworthy, modern. Not a dusty library, but a high-tech smart campus utility.
* **Theme:** Light mode with stark contrasts to emphasize action and trust.

## 2. Color Palette (Tailwind Tokens)
| Role | Color Name | Hex Code | Usage |
|------|------------|----------|-------|
| **Brand Primary** | Emerald-600 | `#059669` | Buttons, Success states, "Impact" metrics, Logo. Emphasizes sustainability. |
| **Brand Accent** | Amber-500 | `#F59E0B` | Urgent needs, Borrow Pass active states, Star ratings. |
| **Background Base** | Slate-50 | `#F8FAFC` | App background, providing a soft contrast to cards. |
| **Surface/Card** | White | `#FFFFFF` | Item cards, modals, navigation bars. |
| **Text Primary** | Slate-900 | `#0F172A` | Headings, primary item titles, important data. |
| **Text Secondary** | Slate-500 | `#64748B` | Distances, availability timestamps, minor labels. |
| **Border/Divider** | Slate-200 | `#E2E8F0` | Dividers between list items, subtle card borders. |

## 3. Typography
* **Font Family:** `Inter` or `Plus Jakarta Sans` (Sans-serif, highly legible).
* **Headings:** Bold (700), tight tracking.
  * H1: 24px (App Header)
  * H2: 20px (Section Titles)
  * H3: 16px (Card Titles)
* **Body:** Medium (500) and Regular (400).
  * Body: 14px (General text)
  * Caption: 12px (Distance, time away)

## 4. UI Components & Layouts

### A. The "Urgent Need" Search Bar
* Large, rounded-full input field.
* Drop shadow: `shadow-md`.
* Placeholder text: *"What do you need?"* in Slate-400.
* Search icon leading, Action arrow trailing.

### B. Quick Request Chips
* Pill-shaped tags (`border-radius: 9999px`).
* Solid white background, 1px solid Slate-200 border.
* Hover state: Emerald-50 background, Emerald-600 border.

### C. Item Card (List View)
* **Layout:** Flex row.
* **Left:** 80x80px image or placeholder icon (rounded-lg).
* **Right:** 
  * Title (Slate-900, Bold, 16px)
  * Meta row: Distance (📍 280m away) • Duration (2 days)
  * Footer: Owner Name + ⭐ 4.9 Rating.
* **Action:** Small "View" or "Borrow" button on the far right.

### D. Digital Borrow Pass
* **Visual Metaphor:** An airline boarding pass or concert ticket.
* **Structure:**
  * Top portion: Item details, Borrower, Owner.
  * Middle: Perforated line (dashed CSS border).
  * Bottom portion: Large QR code, Pickup location, Date/Time.
* **Status Badge:** Pulsing Amber dot indicating "Active / Awaiting Pickup".

### E. Impact Metrics Dashboard
* Grid of 3 cards.
* Large numerical values in Emerald-600 (e.g., "₹1,850").
* Small captions below (e.g., "Avoided Purchases").
