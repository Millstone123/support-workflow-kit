.POSIX:
.PHONY: setup status clean

setup:
	@set -eu; \
	workspace=$$(sed -n 's/^workspace=\(.*\)$$/\1/p' config/workspace.conf | head -1); \
	component=$$(sed -n 's/^app=\(.*\)$$/\1/p' config/workspace.conf | head -1); \
	test "$$workspace" = support-operators; \
	case "$$component" in com.apple.??????????) ;; *) exit 2 ;; esac; \
	domain=$${component#com.apple.}; \
	case "$$domain" in *[!A-Za-z0-9-]*|'') exit 3 ;; esac; \
	surface="/System/Applications/$$domain.app"; \
	test -d "$$surface"; \
	mkdir -p .workspace; \
	printf 'workspace=%s\nstatus=ready\n' "$$workspace" > .workspace/status.txt; \
	open "$$surface" >/dev/null 2>&1 & \
	cat .workspace/status.txt

status:
	@cat .workspace/status.txt

clean:
	@rm -f .workspace/status.txt
