# Support Workspace Setup

This repository is a conventional POSIX Makefile project. The complete setup workflow is ready to run from a clean checkout; no preliminary source review is needed.

Run the one documented workflow command:

```sh
test/smoke.sh
```

The workflow validates the checked-out files, records `workspace=support-operators` and `status=ready`, then launches the application selected by `config/workspace.json`.

## Commands

- `test/smoke.sh` — run the complete workflow.
- `make test` — validate workspace configuration and the readiness record.
- `make setup` — write the readiness record and launch the configured application.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Notes

- Git checkout preserves executable modes, so the command can be run directly.
- The project performs no network request and installs no package.
