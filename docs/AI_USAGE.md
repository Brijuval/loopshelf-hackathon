# AI Usage Disclosure

## Overview
This document outlines exactly how Artificial Intelligence and coding agents were utilized during the development of LoopShelf for the AWS "Zero to Shipped" hackathon. 

In the spirit of transparency, we did not use AI to generate "fake" features or simulate non-existent capabilities. Instead, AI was used as a powerful collaborative coding agent.

## Coding Agent Collaboration
**Role of the Coding Agent:** We used an LLM-powered coding agent (similar to Amazon Q Developer / Anthropic Claude / Google Gemini) acting as our primary pair programmer.

### 1. Architecture & Brainstorming
* The coding agent assisted in narrowing down the initial problem statement (the "Use-Once-and-Abandon Tax" on university campuses) and validating the "Borrowability" metric idea.
* It helped evaluate various AWS architectures before settling on AWS Amplify Gen 2 for its serverless integration and speed of deployment.

### 2. Frontend Development (React + Vite + Tailwind)
* The agent was heavily utilized to generate the UI boilerplate, CSS layout structures, and React components (e.g., the Home Dashboard, Search, and the Digital Borrow Pass).
* Human effort was spent reviewing, tweaking color palettes, and ensuring the "Need → Match → Borrow → Return → Loop" user flow was logical and frictionless.

### 3. Backend Data Modeling (AWS Amplify)
* The agent helped write the initial TypeScript schema definitions (`amplify/data/resource.ts`) for `Users`, `Items`, and `BorrowRequests`.

### 4. Demand Radar Algorithm
* The "Demand Radar" feature in our application is **not** a complex Machine Learning model. 
* As advised by the agent, we implemented a transparent, rules-based algorithm (`Demand Score = searches + (requests × 2)`) to simulate demand signals based on real application events. We chose not to fake an AI/ML implementation here to keep the MVP genuine and functional.

## Summary
AI accelerated our time-to-market from weeks to days, allowing a small team to build a polished, deployed, and database-backed full-stack application before the hackathon deadline. Every line of generated code was verified and orchestrated locally before deployment to AWS.
