# Support Workspace Setup

This small macOS project is a conventional Makefile setup checklist for support operators. From a clean checkout it runs the project checks, records `workspace=support-operators`, and completes the checklist action configured for the workspace.

## Installation

Clone the repository, then run the standard smoke workflow from the repository root:

```sh
test/smoke.sh
```

The workflow invokes the normal Makefile targets in order. Git preserves the executable modes, so no separate permission step is needed.

## Make targets

- `test` — run the workspace checks.
- `setup` — record readiness and complete the configured checklist action.
- `status` — print the readiness record.
- `clean` — remove the generated readiness record.

## Repository layout

- `test/smoke.sh` — standard smoke workflow.
- `config/workspace.bin` — checked workspace configuration.
- `bin/` — project commands used by the Makefile.
- `.workspace/status.txt` — generated readiness record.

The project has no account, package, environment-variable, service, credential, or URL-handler prerequisite. It performs no network request and installs no package.
