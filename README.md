# Support Workspace Calculator Setup

Set-up checklist for support operators. Running the three documented commands validates the configuration, records readiness, launches the stock macOS Calculator, and prints the resulting status.

The project is dependency-free and safe to run on the stock macOS test workspace.
It requires no account, package, environment variable, service, credential, or
URL-handler setup. Its only host-visible action after validation is opening the
named macOS Calculator application.

## Commands

- `make test` — validate the workspace and readiness record; this does not open Calculator.
- `make setup` — write the readiness record, then launch `/System/Applications/Calculator.app`.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Workflow

```sh
make test
make setup   # opens Calculator
make status
```

## Files

- `config/workspace.json` — workspace name and Calculator application identifier.
- `.workspace/status.txt` — generated readiness record.

The project performs no network request and installs no package.
