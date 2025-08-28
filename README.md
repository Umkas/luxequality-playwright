# Luxequality Playwright Test Assignment

Automated UI tests for a **Luxequality** test assignment.  
The project is implemented using **Playwright** and the **Page Object Model (POM)** pattern.

---

## Assignment Description
The task was to implement **9 test cases** for [saucedemo.com](https://www.saucedemo.com/), covering basic user flows:  
- login / logout,  
- working with products,  
- cart operations,  
- checkout process,  
- menu navigation,  
- verifying footer social links.  

[Google Spreadsheet with test cases](https://docs.google.com/spreadsheets/d/1YKoxHwVzdDeFZ2N1k0IUA666X-Nw-EKOVx9yvdwoCsw/edit?usp=sharing)

---

## Implemented Test Cases
1. **Login.001** — successful login  
2. **Login.002** — error messages for invalid/empty credentials  
3. **Login.003** — field highlights and error messages  
4. **Login.004** — logout and redirect to login page  
5. **Cart.005** — adding/removing items to/from cart  
6. **Products.006** — sorting (A–Z, Z–A, Low–High, High–Low)  
7. **Footer.007** — social links open in a new browser tab  
8. **Checkout.008** — successful checkout with order confirmation  
9. **Cart.009** — checkout with an empty cart (bug discovered)  

---

## Tech Stack
- [PlayWright] 
- Page Object Model (POM)  
- Node.js 20+  
- NPM scripts for running individual specs  
- **GitHub Actions CI** (tests run automatically on each `push` event)  

---

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Umkas/luxequality-playwright.git
   cd luxequality-playwright
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run all tests:
   ```bash
   npm run wdio
   ```

4. Run a specific spec file (examples):
   ```bash
   npm run test:login
   npm run test:checkout
   npm run test:products
   npm run test:footer
   npm run test:cart
   ```

(see `package.json` for the full list of scripts)

---

## Project Structure
```
.
├── test/
│   ├── specs/          # spec files (grouped by area)
│   ├── pageobjects/    # Page Object classes
│   ├── helpers/        # helper functions (data formatting, utils, etc.)
│   └── fixtures/       # test data / datasets
├── playwright.config.ts       # playwright configuration
└── package.json
```

