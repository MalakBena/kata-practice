# Kata Practice

Welcome to the Kata Practice repository! Here you will find a collection of code katas which help me practice my skills in Javascript, Python, and SQL. I wll be using Test Driven Development (TDD) because it helps us to write better, more robust and maintainable code.

## What are code katas?

Code katas are small coding exercises that help you improve your programming skills through repetition and deliberate practice. They are typically short and focused on a particular skill or concept, and can be completed in just a few minutes.

# Javascript

## Setup the node project from scratch

Make sure you are in your project directory!

1. Create a `package.json` from the start

- **Command**: `npm init -y`

2. Install the Jest library so we can write our tests

- **Command**: `npm install --save-dev jest`

3. Setup test script:

Add the following section to your package.json:

```json
{
  "scripts": {
    "test": "jest --watch"
  }
}
```

## Node commands

- To run your tests: `npm test`

You can see what these commands are aliases for by checking your package.json.
