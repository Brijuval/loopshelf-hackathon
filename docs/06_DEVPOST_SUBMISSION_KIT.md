# Devpost Submission Kit

Use this document to copy-paste directly into your Devpost / Hackathon submission form.

---

### Project Name
**LoopShelf**

### Elevator Pitch / Tagline
Don't buy it. Loop it. A hyperlocal campus micro-sharing network for short-term access to everyday items.

### The Problem It Solves (Inspiration)
Have you ever needed an HDMI cable, a scientific calculator, or an Arduino kit for just a few hours? Most students face a dilemma: buy a new one at full price, or struggle without it. The tragedy is that while you are hitting "Buy Now" on Amazon, the exact item you need is sitting unused in a dorm room 300 meters away. 

Campuses don't have a shortage of products; they have a shortage of access. The "use-once-and-store-forever" lifecycle is a massive drain on student wallets and terrible for the environment (e-waste and plastic packaging). We built LoopShelf to fix this.

### What It Does
LoopShelf is a hyperlocal peer-to-peer micro-sharing network restricted to verified university students. Instead of an open marketplace designed for selling things permanently (like Facebook Marketplace), LoopShelf is designed around urgent, short-term needs. 

Users broadcast a need ("I need a lab coat for 3 hours"). The platform matches them with a verified peer nearby who has it available. They connect, scan a digital QR Borrow Pass to log the transaction, and the borrower returns it when done. LoopShelf tracks "Borrowability"—showing exactly how much money was saved and how much waste was avoided by keeping items in circulation.

### How We Built It
We started with extensive problem validation, mapping out why existing platforms fail at this specific use case (lack of trust, high friction, focus on ownership). We then designed the system around a strict campus boundary to ensure high trust. 

For the prototype, we built the interface using **React, Vite, and Tailwind CSS**, focusing on a frictionless mobile-first experience. We conceptualized an AI layer that forecasts demand based on academic calendars and campus search trends, pushing notifications to owners to list dormant items right before they are needed most.

### Challenges We Ran Into
Our biggest challenge was solving the "trust and dispute" problem. Why would someone lend an expensive Arduino kit? We solved this by designing the "Digital Borrow Pass"—a QR-based handshake protocol that logs the exact time of transfer, combined with a strict `.edu` email verification wall and a community Reliability Score.

### Accomplishments That We're Proud Of
We are incredibly proud of the "Borrowability Metric" and the Loop Impact Dashboard. By quantifying the financial savings and the direct environmental impact (SDG 12: Responsible Consumption), we turn sharing from a "favor" into a measurable contribution to the circular economy.

### What We Learned
We learned that the most effective AI applications aren't always chatbots. By designing an AI layer that quietly analyzes search velocities and academic calendars to predict demand, we can make the network fundamentally smarter without complicating the user interface.

### What's Next for LoopShelf
We plan to pilot LoopShelf in a single university dorm to test the QR handoff protocol in real life. After validating the model on one campus, the architecture is designed to scale horizontally to other campuses, maker spaces, and eventually residential apartment complexes. We envision a world where access matters more than ownership.

---

### AI Disclosure
**Did you use AI to build this project?** Yes.
**How was it used?** AI was used as a brainstorming partner during problem validation, for generating the React boilerplate and CSS layout structures for the interactive prototype, and for refining our presentation structure. The core product vision, business logic, and UI design decisions were human-led.
