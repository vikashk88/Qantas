## Qantas

## QE Code Challenge

# ✅ Automated Test Suite – Web + API (Playwright-based POM Framework)

This project contains:
- 🔹 Web UI Smoke Tests for [SauceDemo](https://www.saucedemo.com/v1/)
- 🔹 API Regression Tests for [Weatherbit API](https://www.weatherbit.io/api/swaggerui/weather-api-v2)


## 🌐 Web Smoke Test – SauceDemo

### ✅ Test Flow
- Login as standard user
- Randomly add products to cart
- Validate cart icon updates
- Validate cart content
- Complete checkout
- Validate item total and order confirmation

## 🌍 API Regression – Weatherbit.io

### ✅ Scenarios
- AC1: Get current weather using `lat` and `lon`
- AC2: Get current weather using `postal_code` and `country`

### 🔐 Environment Setup

Create a `.env` file in project root:
```
WEATHERBIT_API_KEY=your_actual_key
```

- Clone Qantas QE code challenge repo
    - 'git clone https://github.com/vikashk88/Qantas.git'
- Install all the dependencies
    - 'npm install'
- To start working on your changes, first create a branch
    - 'git checkout -b <branch name>'

### Running test

Examples to run test with different options

1) Running all test 
    Headed -> npm run test
    Headless -> npm run test:headless

2) Running with single tags
    Headed -> npm run test:tags "@test"
    Headless -> npm run test:tags:headless "@test"

3) Running with multiple tags
    Logical OR -> npm run test:tags "@test|@test1"
    Logical AND -> npm run test:tags "(?=.*@test)(?=.*@test1)"


## 🤖 GitHub Actions CI

### 🧪 Setup
1. Go to **Settings → Secrets → Actions**
2. Add:
   - `WEATHERBIT_API_KEY` = your API key
   - `username_standard` = standard user
   - `password_standard` = standard user password

### 🔁 CI Trigger
Runs on:
- Push to `main`
- Pull request

### 📤 CI Artifacts
- Uploads `playwright-report` on every run
- Can be downloaded from the GitHub Actions run summary

## 📂 Reports

After each run:
- ✅ Playwright generates `playwright-report`

