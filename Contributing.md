# Contributing to Stock Tracker

Thank you for your interest in contributing to Stock Tracker! 🎉

Whether you're fixing bugs, improving documentation, adding new features, or enhancing the frontend experience, your contributions are welcome.

## Before You Start

Please:

1. Read the project README.
2. Check existing Issues before creating a new one.
3. Comment on an issue before starting work to avoid duplicate efforts.
4. Create a new issue if your idea has not been discussed yet.

---

## Ways to Contribute

### Beginner Friendly

If you're new to open source, look for issues labeled:

* `good first issue`
* `documentation`
* `frontend`
* `help wanted`

Examples:

* README improvements
* API documentation
* Frontend UI components
* Error handling improvements
* Test coverage

---

## Development Setup

### Prerequisites

* Java 21+
* Maven 3.6+
* Git

### Clone Repository

```bash
git clone https://github.com/abhinavdevaradesi/stock-tracker.git
cd stock-tracker
```

### Configure Environment

Copy the example environment file:

```bash
cp .env.example .env
```

Add your Alpha Vantage API key:

```env
ALPHA_VANTAGE_API_KEY=YOUR_API_KEY
```

### Run Application

```bash
mvn spring-boot:run
```

Application runs on:

```text
http://localhost:8082
```

---

## Running Tests

Run all tests:

```bash
mvn test
```

Run full verification:

```bash
mvn clean verify
```

Please ensure all tests pass before submitting a pull request.

---

## Branch Naming

Create a new branch from main.

Examples:

```text
feature/react-search-component
feature/mock-data-profile
fix/cache-key-bug
docs/update-readme
```

Avoid committing directly to the main branch.

---

## Pull Request Process

### Step 1

Fork the repository.

### Step 2

Create a feature branch.

### Step 3

Make your changes.

### Step 4

Test locally.

### Step 5

Submit a Pull Request.

---

## Pull Request Checklist

Before opening a PR:

* [ ] Code compiles successfully
* [ ] Tests pass
* [ ] No unnecessary files committed
* [ ] Documentation updated if required
* [ ] Changes are focused on a single issue
* [ ] PR title clearly describes the change

---

## Coding Guidelines

### Java

* Follow standard Java naming conventions.
* Keep methods focused and concise.
* Prefer constructor injection over field injection.
* Use meaningful variable names.

### Spring Boot

* Keep controllers thin.
* Business logic belongs in services.
* Handle exceptions through GlobalExceptionHandler.

### Frontend (Future Contributions)

* Prefer reusable components.
* Avoid duplicate API calls.
* Use environment variables for backend URLs.
* Keep components small and maintainable.

---

## Mock Development Mode

Alpha Vantage has strict rate limits.

Contributors are encouraged to work on:

* Documentation
* Frontend components
* Testing
* Refactoring

without relying heavily on external API calls.

A future "Mock Data Mode" is planned to simplify local development.

---

## Reporting Bugs

When opening a bug report, include:

* Steps to reproduce
* Expected behavior
* Actual behavior
* Screenshots (if applicable)
* Relevant logs

---

## Suggesting Features

Feature requests should include:

* Problem statement
* Proposed solution
* Alternative solutions considered
* Expected benefits

---

## Code of Conduct

Please be respectful and constructive when interacting with other contributors.

We aim to create a welcoming environment for developers of all experience levels.

---

## Need Help?

If you're unsure where to start:

1. Check issues labeled `good first issue`.
2. Leave a comment on the issue.
3. Ask questions in the discussion thread.

Every contribution, no matter how small, is appreciated.

Happy Coding! 🚀
