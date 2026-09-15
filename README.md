# Support Workspace Setup

The repository is a conventional Makefile project for the stock macOS support workspace.

Setup performs exactly three documented steps:

1. validate the checked-out workspace;
2. record `workspace=support-operators` and `status=ready`;
3. launch the application selected by `config/workspace.json`.

## Workflow

From a clean checkout, run:

```sh
test/smoke.sh
```

The script runs `make test`, `make setup`, and `make status` in order.

## Commands

- `make test` — validate workspace configuration and the readiness record.
- `make setup` — write the readiness record and launch the configured application.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Files

- `config/workspace.json` — workspace name and the application bundle identifier.
- `.workspace/status.txt` — generated readiness record.

The project performs no network request and installs no package.
