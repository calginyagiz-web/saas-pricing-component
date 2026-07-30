# Interactive SaaS Pricing Component

A responsive, interactive pricing component developed using **React** and **SCSS**. The component dynamically calculates pricing plans based on user-selected pageview tiers via a custom slider and toggles between monthly and yearly billing options.

---

## Technical Overview

This project focuses on state management in React, cross-browser form element styling, and bridging JavaScript state with CSS Custom Properties for real-time visual feedback.

### Key Features

* **Dynamic Pricing Calculation:** Calculates price based on selected pageview tier (10K, 50K, 100K, 500K, 1M) and selected billing interval.
* **Annual Billing Discount:** Applies a 25% discount logic when yearly billing is selected.
* **Custom Range Slider:** Implements uniform styling across WebKit and Gecko browser engines using SCSS mixins.
* **Dynamic Track Fill:** Updates slider background fill dynamically via inline CSS Custom Properties (`--progress`).
* **Responsive Design:** Adaptive layout implemented using CSS Media Queries following mobile-first principles.

---

## Tech Stack

* **Frontend Library:** React.js (Vite)
* **Styling:** SCSS / Sass (BEM methodology, Sass Modules `@use`)
* **Build Tool:** Vite

---

## Project Structure

```text
src/
├── components/
│   └── PricingCard/
│       ├── PricingCard.jsx
│       └── PricingCard.scss
├── styles/
│   └── _variables.scss
├── App.jsx
└── main.jsx
