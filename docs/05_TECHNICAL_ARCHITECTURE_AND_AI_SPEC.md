# Technical Architecture & AI Integration Plan

Although the hackathon submission primarily relies on the prototype and idea pitch, demonstrating a robust technical roadmap proves to the judges that the project is viable and scalable.

## 1. System Architecture (Proposed)
* **Frontend:** React + Tailwind CSS + Framer Motion (for fluid, app-like transitions).
* **Backend:** Node.js (Express) or Serverless (Next.js API routes).
* **Database:** PostgreSQL (Relational integrity for transactions and users) + PostGIS for geospatial distance calculations.
* **Authentication:** Google OAuth restricted to specific `.edu` domains (crucial for the campus trust moat).

## 2. Core Modules

### A. The Matching Engine
Instead of standard keyword search, LoopShelf uses a multi-variable matching algorithm:
* **Spatial Distance:** Calculates distance between user dorms/current locations.
* **Temporal Overlap:** Checks if the requested duration fits within the owner's available time window.
* **Trust Factor:** Prioritizes items from owners with higher Reliability Scores (calculated from past successful loops).

### B. The Handshake Protocol (QR Borrow Pass)
To eliminate disputes over "who has the item":
1. Borrower requests. Owner approves.
2. System generates a unique, time-sensitive encrypted QR token.
3. At meeting, Owner scans Borrower's QR code. System updates state to `BORROWED`.
4. Upon return, Borrower scans Owner's QR code. System updates state to `RETURNED`.

## 3. The AI Intelligence Layer
AI is *not* a chatbot in this product. It is an optimization engine operating in the background.

* **Demand Forecasting Model:**
  * Uses historical search queries and university academic calendars to predict demand spikes.
  * *Example Action:* "Midterms are in 2 weeks. Scientific Calculators will be in high demand. List yours now to help a peer!"
* **Dormancy Detection:**
  * Identifies items that haven't been requested in X months.
  * Suggests optimized tagging or highlights them in a "Trending on Campus" feed to stimulate circulation.
* **Dynamic Pricing/Deposit Advice:**
  * For high-value items, an ML model suggests an appropriate refundable deposit amount based on the item's condition and retail replacement value.
