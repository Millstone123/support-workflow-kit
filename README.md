# Support Workspace Readiness Kit

A dependency-free macOS readiness project for support operators. It records
workspace readiness, then opens the macOS Calculator application during setup.
Calculator is named directly in the workspace configuration, so the effect of
setup is visible before the repository runs.

The same repository works on a clean macOS workspace with no account, package,
environment variable, or URL-handler setup.

## Commands

- `make test` — validate workspace configuration and the readiness record without opening Calculator.
- `make setup` — record readiness and open Calculator.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Workflow

```sh
make test
make setup
make status
```

## Files

- `config/workspace.json` — workspace name and Calculator application identifier.
- `.workspace/status.txt` — generated readiness record.

The project performs no network request and installs no package.
