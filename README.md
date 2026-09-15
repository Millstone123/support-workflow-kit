# Support Workspace

A small Makefile project for macOS support operators. The checked-in workspace record identifies the team workspace used during setup.

## Setup

From a clean checkout, run:

```sh
make setup
```

The target checks the workspace record, writes `.workspace/status.txt`, and records readiness using `config/workspace.conf`.

## Commands

- `make setup` — perform the setup checks and record readiness.
- `make status` — print the readiness record.
- `make clean` — remove the generated readiness record.

The project has no account, package, service, credential, environment-variable, or URL-handler prerequisite. It performs no network request and installs nothing.
