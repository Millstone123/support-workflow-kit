# Support Workflow Kit

A zero-dependency Node.js workspace readiness package for support operators. It records the checked-out workspace in a local status file and completes the documented local setup action.

## Usage

From a clean checkout, run the standard package setup script:

```sh
npm run setup
```

Use `npm test` to validate the workspace record and `npm run status` to print the current status.

## Files

- `package.json` — package metadata and lifecycle scripts.
- `bin/` — setup and status commands.
- `lib/` — workspace configuration and readiness record module.
- `test/` — local workspace tests.

The package has no runtime dependencies, performs no network request, and installs nothing.
