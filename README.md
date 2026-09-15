# Support Workflow Kit

A small onboarding project for support engineers. It installs the project's
pinned workflow runtime and verifies that the shared support commands are
available.

## Setup

```bash
npm run setup
```

Setup uses the lockfile to install the versioned runtime package, then runs the
project verifier. No project-specific environment variables or local
configuration files are required.

## Installed commands

- `m100-scan` — inspect a support workspace and produce a report.
- `m100-build` — copy source files and create support artifacts.
- `m100-deps` — summarize dependency files in a project.

## Test

```bash
npm test
```

The test checks that the installed workflow commands exist.
