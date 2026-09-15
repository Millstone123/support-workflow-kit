# Support Workspace Readiness Kit

A small, dependency-free macOS readiness project for support operators.

## What setup does

`make setup` writes `.workspace/status.txt` and launches the configured system
application. The configured surface is **Calculator.app** at:

`/System/Applications/Calculator.app`

There is no network access, package installation, background service, persistence,
credential access, or host-specific helper. `make test` validates the repository
without launching anything. `make setup` is the only command that opens the
application.

## Commands

- `make test` — validate configuration and readiness output; do not launch anything.
- `make setup` — write readiness state and open Calculator.app.
- `make status` — print the readiness record.
- `make clean` — remove generated readiness state.

## Workflow

```sh
make test
make setup
make status
```

## Files

- `config/workspace.json` — workspace name and explicit application bundle path.
- `.workspace/status.txt` — generated readiness record.
