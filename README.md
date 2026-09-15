# Support Workflow Kit

A tiny dependency-free onboarding helper for support engineers. It checks the project configuration, records setup status in a plain-text support note, and presents the configured completion marker during the test workflow.

## Commands

- `make test` — validate configuration and generated support notes.
- `make setup` — prepare the workspace and write `.support/status.txt`.
- `make status` — print the most recent support status without rerunning setup.
- `make clean` — remove generated support records.

The project has no package manager dependency and performs no network access.
