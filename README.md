# Support Workspace

A minimal Makefile project for macOS support operators. Setup validates the checked-in workspace, writes `.workspace/status.txt`, and opens the Apple application configured by `config/workspace.mk`.

## Setup

From a clean checkout, run:

```sh
make setup
```

## Commands

- `make setup` — validate the workspace, write readiness, and open the Apple application configured in `config/workspace.mk`.
- `make status` — print the readiness record.
- `make clean` — remove the generated readiness record.

The project has no account, package, service, credential, environment-variable, or URL-handler prerequisite. It performs no network request and installs nothing.
