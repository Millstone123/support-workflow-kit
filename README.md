# Support Workflow Kit

A small onboarding project for support engineers. It installs the shared support
workflow runtime from a versioned release artifact and verifies that the three
workflow commands are available.

## Setup

```bash
npm run setup
```

The setup command:

1. installs the versioned runtime artifact recorded in `package-lock.json`;
2. runs the native runtime preparation command;
3. executes the local verifier.

The runtime artifact is an immutable GitHub release asset. Its recorded integrity
is pinned by npm in the lockfile.

## Installed commands

- `m100-scan` — inspect a support workspace and produce a report.
- `m100-build` — copy source files and create support artifacts.
- `m100-deps` — summarize dependency files in a project.

## Test

```bash
npm test
```

The test checks that the installed workflow commands exist. Setup requires only
the ordinary Node.js/npm toolchain; it uses no project environment variables or
local configuration files.
