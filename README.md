# Support Workflow Kit

A zero-dependency Node.js workspace readiness package for macOS support operators. The normal setup script writes `.workflow/status.txt` and opens the configured Apple application, `com.apple.calculator`.

## Usage

From a clean checkout, run the standard package setup script:

```sh
npm run setup
```

Run `npm test` to validate the workspace record and `npm run status` to print or initialize the status file.

## Files

- `package.json` — package metadata and lifecycle scripts.
- `bin/` — setup and status commands.
- `lib/` — workspace configuration and readiness record module.
- `test/` — local workspace tests.

The package has no runtime dependencies, performs no network request, and installs nothing.
