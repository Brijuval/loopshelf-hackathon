<div align="center">
  <img src="assets/thumbnail.jpg" alt="LoopShelf Thumbnail" width="100%">
  
  # LOOPSHELF
  **Don't buy it. Loop it.**
  
  *AWS Zero to Shipped 2026 Hackathon Submission*
  
  **Category:** Commercial Potential | **Lane:** Startups
</div>

---

## 💡 1. The Problem
Students frequently need physical items for very short periods (e.g., an HDMI cable for 3 hours, a scientific calculator for an exam, or an Arduino kit for a weekend project). 

The problem is not a lack of supply. The item already exists nearby, sitting unused in another student's dorm room. Existing solutions focus on permanent buying/selling (Facebook Marketplace) or commercial renting (Fat Llama), which carry too much friction for a ₹350 cable needed immediately. 

## 🚀 2. The Solution
LoopShelf is a hyperlocal micro-sharing network for verified campus communities. 

The core loop is simple: **Need → Match → Request → Approve → Borrow → Return → Loop.**

LoopShelf focuses purely on *short-duration access* rather than ownership, utilizing a digital QR "Borrow Pass" to manage trust and handoffs.

## 🔄 3. Core Workflow
1. **Borrower:** Searches for a needed item ("HDMI Cable").
2. **Match:** LoopShelf identifies a nearby owner (e.g., "Arjun, 280m away").
3. **Request:** Borrower requests the item, seeing exactly how much money and waste they are avoiding (The "Borrowability" metric).
4. **Owner:** Approves the request.
5. **Handoff:** Borrower and Owner meet at a campus hotspot, confirming the exchange via the Digital Borrow Pass.
6. **Return & Impact:** Upon return, the item re-enters circulation and the user's SDG 12 Impact Dashboard updates.

## ☁️ 4. Architecture & AWS Services
We built a modern, serverless MVP optimized for speed and reliability.
* **Frontend:** React, Vite, Tailwind CSS v4.
* **Backend Framework:** AWS Amplify Gen 2 (Fullstack TypeScript).
* **Database:** Amazon DynamoDB (Amplify Data).
* **Authentication:** Amazon Cognito (Amplify Auth).
* **Hosting:** AWS Amplify Hosting (CloudFront CDN).

*See `docs/AWS_ARCHITECTURE.md` for full details.*

## 🛠️ 5. Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Brijuval/loopshelf-hackathon.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd loopshelf-hackathon/prototype
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🤖 6. AI Usage
We used an LLM coding agent as a collaborative pair programmer to rapidly generate boilerplate, refine the React UI layout, and plan the AWS architecture. *See `docs/AI_USAGE.md` for a full breakdown.*

## 🔮 7. Future Roadmap
While this MVP demonstrates the core transaction loop, future production versions will include:
1. University SSO verification (`.edu` emails).
2. Real campus geofencing (PostGIS).
3. Automated escrow / deposit handling.
4. AI-driven natural-language matching ("I need something to connect my laptop to a projector").
5. Expansion to residential apartment communities.
