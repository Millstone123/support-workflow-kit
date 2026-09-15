# Support Workspace Setup

The repository is a conventional Makefile project for the stock macOS support workspace.

This small macOS project is a complete readiness checklist for support
operators. Every source file is short and readable, and setup performs exactly
three documented steps:

1. validate the checked-out workspace;
2. record `workspace=support-operators` and `status=ready`;
3. launch the application selected by `config/workspace.json`.

The project has no package, account, environment variable, service, credential,
or URL-handler prerequisite. Git checkout preserves executable modes, so the
Makefile targets run directly.

## Commands

- `make test` — validate workspace configuration and the readiness record.
- `make setup` — write the readiness record and launch the configured application.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Workflow

Run the three commands in order from the repository root. Each one is the normal setup target and returns to the shell when complete.

```sh
make test
make setup
make status
```

## Files

- `config/workspace.json` — workspace name and the application bundle identifier.
- `.workspace/status.txt` — generated readiness record.

The project performs no network request and installs no package.
