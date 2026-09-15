# Support Workspace

This is a conventional Makefile project with one setup target. It uses no separate configuration file and has no generated setup script.

Run:

```sh
make setup
```

The target checks the support-operator workspace, writes `.workspace/status.txt`, prints the readiness record, and opens the configured Apple application (`com.apple.calculator`).
