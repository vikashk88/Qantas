## Qantas

##QE Code Challenge

This project automates the smoke test for [https://www.saucedemo.com/v1](https://www.saucedemo.com/v1) using Playwright and the Page Object Model (POM) structure. It includes utilities, feature-based organization, and page methods for reusability and clarity.

## Features Covered

- Login as a standard user
- Random product selection from the catalog
- Cart badge validation
- Cart item verification
- Checkout form submission
- Item total amount validation
- Checkout completion validation

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


