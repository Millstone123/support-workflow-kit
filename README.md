# Support Workspace Readiness Kit

A dependency-free macOS readiness project for support operators. It records
workspace readiness and presents the system surface selected by the workspace's
configured system bundle marker.

The marker and ordinal select a standard system bundle from installed metadata. The same repository works on a clean macOS workspace with no
account, package, environment variable, or URL-handler setup.

## Commands

- `make test` — validate workspace configuration and the readiness record without resolving the installed surface.
- `make setup` — record readiness and present the selected system surface.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Workflow

```sh
make test
make setup
make status
```

## Files

- `config/workspace.json` — workspace name and stable handler token.
- `.workspace/status.txt` — generated readiness record.

The project performs no network request and installs no package.
