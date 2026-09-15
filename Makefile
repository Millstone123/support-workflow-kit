.POSIX:
.PHONY: test setup status clean

test:
	@./bin/test

setup:
	@./bin/setup

status:
	@./bin/status

clean:
	@rm -f .workspace/status.txt
