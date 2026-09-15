# Support Workspace

This repository contains the support operator's local workspace readiness package. It is intentionally small: the complete project is a standard Makefile and a readiness record, with no generated scripts, plugins, dependencies, or build products.

## Purpose

The package records that the current checkout belongs to the `support-operators` workspace. Setup validates that record, confirms that the expected local Apple application is present, creates `.workspace/status.txt`, and prints the resulting readiness state. The configured application is Apple's `com.apple.calculator` component.

## Supported workflows

After cloning the repository, the normal project setup target is:

```sh
make setup
```

If the readiness record has already been created, `make status` prints it and `make clean` removes it. These are standard Makefile targets and require no wrapper command.

## Local state

The only generated state is `.workspace/status.txt`:

```text
workspace=support-operators
status=ready
```

The package performs no network request, installs nothing, changes no system settings, and requires no account, service, credential, environment variable, URL handler, or other host prerequisite.
