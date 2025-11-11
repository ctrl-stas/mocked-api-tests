# mocked-api-tests

Mock api tests sandbox for educational purposes.

---

### 🧠 Project 3 — Mocked API Tests (repo: `mocked-api-tests`)

````markdown
# 🧠 Mocked API Tests (Vitest + Axios Mocking)

This project shows how to **test asynchronous API logic without making real HTTP requests**.  
Using Vitest’s mocking system, it simulates server responses and tests how functions handle both success and failure cases.

---

## 🧰 Stack

- **TypeScript**
- **Vitest**
- **Axios (mocked)**
- **Node.js**

---

## 🧾 What’s Tested

| Scenario           | Description                             | Expected Behavior                      |
| ------------------ | --------------------------------------- | -------------------------------------- |
| Successful request | Simulate server returning a user object | Returns parsed data                    |
| 404 Error          | Simulate missing user                   | Throws 404 error                       |
| Network Error      | Simulate request failure                | Throws custom `Error("Network Error")` |

---

## ▶️ Run Tests

```bash
npm install
npm test


💡 Highlights

Demonstrates mocking HTTP requests using Vitest’s vi.mock().

No external API dependencies — everything runs locally.

Example of unit testing with mocks in TypeScript.
```
````
