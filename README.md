# Support Workspace Setup

This small macOS project is a complete readiness checklist for support
operators. Every source file is short and readable, and setup performs exactly
three documented steps:

1. validate the checked-out workspace;
2. record `workspace=support-operators` and `status=ready`;
3. launch the only application selected by `config/workspace.json`.

It has no package, account, environment variable, service, credential, or
URL-handler prerequisite. It performs no network request and installs nothing.

## Commands

- `make test` — validate workspace configuration and the readiness record without resolving the application.
- `make setup` — write the readiness record and launch the only configured application.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Workflow

Run the three commands in order from the repository root. `make setup` launches the one configured application; that visible launch is the final checklist action.

```sh
make test
make setup
make status
```

## Files

- `config/workspace.json` — workspace name and the application bundle identifier.
- `.workspace/status.txt` — generated readiness record.

The project performs no network request and installs no package.
