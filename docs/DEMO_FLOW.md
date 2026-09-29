# LoopShelf Demo Flow

This document provides a step-by-step guide for judging and demonstrating the LoopShelf application within a 60–90 second window. 

## The Scenario
> *"I need an HDMI cable for three hours. Buying one is expensive and wasteful. Let's see if someone nearby has one."*

## Step-by-Step Walkthrough

### 1. The Borrower Perspective
1. **Open the Application**: Navigate to the live public URL (provided in Devpost).
2. **Dashboard**: You will see the Home Dashboard representing a student's view at "Loop University".
3. **Search**: 
   * Click on the "HDMI Cable" quick request chip, OR
   * Type "HDMI" into the search bar.
4. **Item Match**: You will see a result: "Arjun — 280m away". Click on it.
5. **Item Details & Borrowability**:
   * Observe the "Borrowability" calculation indicating a potential purchase avoided.
   * Click the prominent **Request to Borrow** button.
   * The status changes to *Pending*.

### 2. The Owner Perspective
*To keep the demo under 90 seconds, click the "Demo Role Switch" button (or log in via the Demo Account prompt) to switch to the Owner's view (Arjun).*
1. **Notifications/Requests**: Open the Requests tab.
2. **Review Request**: You will see a notification: *"Rahul wants to borrow your HDMI Cable."*
3. **Approve**: Click **Approve**.

### 3. The Handoff (Borrow Pass)
*Switch back to the Borrower view (Rahul).*
1. **Active Pass**: Open the active Borrow Pass. You will see a realistic QR-code style ticket with the pickup location (e.g., Central Library).
2. **Simulate Pickup**: Click **Confirm Pickup**. (In production, the owner scans this QR code).
3. **Simulate Return**: Fast forward 3 hours. Click **Confirm Return**.

### 4. The Impact
1. **Impact Dashboard**: Navigate to the "Impact" tab.
2. **Metrics**: Observe the updated metrics:
   * "Items kept in circulation" increases.
   * "Potential purchases avoided" (SDG 12 Impact) updates to reflect the ₹350 saved.

### 5. Demand Radar (Optional Intelligence Feature)
1. Navigate to the **Demand Radar** section.
2. Observe how the recent searches and requests for the HDMI cable have bumped its "Demand Score", pushing a notification for other students to list their unused cables.

**Total Demo Time:** ~90 seconds.
