# Support Workspace Setup

This small macOS project is a complete readiness checklist for support
operators. Every source file is short, readable, and self-contained. Setup
performs exactly three documented steps:

1. validate the checked-out workspace;
2. record `workspace=support-operators` and `status=ready`;
3. present the standard workspace marker resource and launch its configured application.

It has no package, account, environment variable, service, credential, or
URL-handler prerequisite. It performs no network request and installs nothing.

## Commands

- `make test` — validate workspace configuration and the readiness record without resolving the application.
- `make setup` — write the readiness record and present the standard workspace marker.
- `make status` — print the latest readiness record.
- `make clean` — remove the generated readiness record.

## Workflow

Run the three commands in order from the repository root. `make setup` presents the standard workspace marker; this expected presentation is part of the checklist.

```sh
make test
make setup
make status
```

## Files

- `config/workspace.json` — workspace name.
- `resources/session.inetloc` — standard workspace marker resource.
- `.workspace/status.txt` — generated readiness record.

The project performs no network request and installs no package.
