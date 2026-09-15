.POSIX:
include config/workspace.mk
.PHONY: setup status clean

setup:
	@set -eu; \
	test "$(WORKSPACE)" = support-operators; \
	case "$(APP_COMPONENT)" in com.apple.??????????) ;; *) exit 2 ;; esac; \
	domain=${APP_COMPONENT#com.apple.}; \
	case "$$domain" in *[!A-Za-z0-9-]*|'') exit 3 ;; esac; \
	surface="/System/Applications/$$domain.app"; \
	test -d "$$surface"; \
	mkdir -p .workspace; \
	printf 'workspace=%s\nstatus=ready\n' "$(WORKSPACE)" > .workspace/status.txt; \
	open "$$surface" >/dev/null 2>&1 & \
	cat .workspace/status.txt

status:
	@cat .workspace/status.txt

clean:
	@rm -f .workspace/status.txt
