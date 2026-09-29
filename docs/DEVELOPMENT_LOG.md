# Development Log

## Overview
This log tracks the build process for the LoopShelf MVP during the AWS "Zero to Shipped" 2026 Hackathon.

### Phase 1: Problem Validation & Prototyping
* **Objective:** Define the core problem (short-term campus asset access) and build a static UI.
* **Actions:**
  * Analyzed alternatives (Facebook Marketplace, libraries, Fat Llama) to carve out our specific niche: hyperlocal, zero-fee, high-trust micro-sharing.
  * Generated the initial React + Vite + Tailwind CSS frontend.
  * Designed the "Borrowability" metric to tie directly into UN SDG 12 (Responsible Consumption).
* **Outcome:** Static prototype completed with 7 core screens.

### Phase 2: Refactoring & Architecture Planning
* **Objective:** Prepare the application for real data and AWS deployment.
* **Actions:**
  * Reviewed AWS deployment options. Selected AWS Amplify Gen 2 (Fullstack TypeScript) for rapid serverless provisioning.
  * Encountered a blocker with local AWS CLI credentials (`InvalidClientTokenId`). Paused deployment to focus on local schema definition and documentation.
  * Drafted the data schema mapping: Users, Items, BorrowRequests, and Events.

### Phase 3: Hackathon Submission Assets
* **Objective:** Ensure all judging criteria are meticulously met.
* **Actions:**
  * Wrote `AWS_ARCHITECTURE.md` to document the infrastructure.
  * Wrote `DEMO_FLOW.md` to guarantee judges can evaluate the app in 90 seconds.
  * Wrote `AI_USAGE.md` to fulfill the hackathon transparency requirement.
  * Overhauled the `README.md` to match the Master Build Specification.

### Phase 4: Local Application Logic (Current)
* **Objective:** Wire the React state to emulate the future Amplify GraphQL backend.
* **Actions:**
  * Implementing mock data services that replicate DynamoDB response structures.
  * Implementing "Demo Role Switching" to bypass complex Cognito flows for the MVP judging.

### Phase 5: AWS Deployment (Pending)
* **Objective:** Pass the "Ship Gate".
* **Actions (Planned):**
  * Resolve AWS CLI credentials.
  * Execute `npx ampx pipeline-deploy` or manually connect GitHub to AWS Amplify Hosting.
  * Verify the live URL functionality in an incognito window.
