# Deployment Evidence

## Application
Production URL: 
[TO BE FILLED AFTER AWS DEPLOYMENT]

## AWS Services
* **AWS Amplify Hosting**: Hosts the React frontend application via AWS CloudFront CDN.

## Deployment Method
AWS Amplify CLI via GitHub linkage (Pending AWS Authentication).

## Coding Agent Contribution
* **Audit & Refinement**: The agent audited the codebase, removed misleading AI claims (e.g. changing "AI Insight" to "Borrowability Calculator"), ensuring hackathon integrity.
* **Component Architecture**: The agent scaffolding layout logic, responsiveness, and state routing in React/Vite.
* **Demo Flow Logic**: The agent implemented the `OwnerRequests.jsx` screen to simulate the Owner/Borrower transaction loop for judging purposes.
* **Documentation Setup**: The agent produced `AI_USAGE.md`, `AWS_ARCHITECTURE.md`, `SUBMISSION_CHECKLIST.md`, and `DEMO_FLOW.md`.

## Verification
- [x] Production build successful (`npm run build`)
- [x] Main page loads locally
- [x] Search works
- [x] Item details work
- [x] Borrow request works
- [x] Owner approval works
- [x] Borrow Pass works
- [x] Return works
- [x] Impact updates
- [x] Mobile & Desktop layouts checked
- [x] No AWS secrets exposed in codebase
- [ ] **Production URL accessible (BLOCKED BY AWS AUTH)**

## Known Limitations
* The current MVP relies on React state logic to fulfill the 60-90 second demo requirement.
* Full backend data persistence via DynamoDB is planned for post-MVP.
* Email verification/SSO is not implemented in this version.
