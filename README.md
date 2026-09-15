# Support Workspace Setup

The repository is a conventional Makefile project for the stock macOS support workspace.

Setup performs exactly three documented steps:

1. validate the checked-out workspace and configured stock application surface;
2. record `workspace=support-operators` and `status=ready`;
3. launch the selected stock application surface.

## Commands

- `make test` — validate the workspace configuration and readiness record.
- `make setup` — write the readiness record and launch the configured surface.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Workflow

Run the documented workflow from a clean checkout:

```sh
test/smoke.sh
```

The script runs `make test`, `make setup`, and `make status` in order.

## Files

- `config/workspace.json` — workspace name and stock application surface ordinal.
- `.workspace/status.txt` — generated readiness record.

The project performs no network request and installs no package.
