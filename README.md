# Game Coach Hub Network

Unified static deploy for `gamecoachhub.com`.

## URL Structure

- `/` - Game Coach Hub homepage
- `/red-dead-online/` - Red Dead Online Guide
- `/dayz/` - DayZ Survival Guide
- `/deadlock/` - Deadlock Coach
- `/grounded/` - Grounded Survival Guide
- `/stardew-valley/` - Stardew Valley Strategy Guide

## Deploy

Deploy this folder as one Vercel project from the repository root:

```bash
C:\Markus\gamecoachhub-network
```

The project is static. `vercel.json` enables clean URLs, trailing slashes and basic asset caching. Do not push or deploy before manual approval.

## Monetization

The shared monetization layer is inactive by default and includes clearly labeled ad, sponsor, affiliate and premium-ready zones. AdSense can be activated later through `assets/monetization.js` and the root `ads.txt`.
