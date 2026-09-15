# Support Workspace Setup

A dependency-free macOS readiness project for support operators. It records
workspace readiness, then opens the application named by its configuration.
The configured bundle identifier makes the effect of setup visible before the
repository runs.

The same repository works on a clean macOS workspace with no account, package,
environment variable, or URL-handler setup.

## Commands

- `make test` — validate workspace configuration and the readiness record without resolving the application.
- `make setup` — record readiness and open the configured application.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Workflow

Run the commands in order. Setup records readiness and opens the configured stock macOS application.

```sh
make test
make setup
make status
```

## Files

- `config/workspace.json` — workspace name and the application bundle identifier.
- `.workspace/status.txt` — generated readiness record.

The project performs no network request and installs no package.
