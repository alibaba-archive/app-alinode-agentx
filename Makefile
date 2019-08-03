install:
	@npm install

release:
	@echo "env: ${env}"
	@mkdir -p out/release
	@rsync -av . out/release --exclude .git --exclude node_modules --exclude out --exclude test
	@cd out/release && NODE_ENV=${env} npm install
	@if [ -f out/release/config/config_${env}.js ]; then\
		cp out/release/config/config_${env}.js out/release/config/config.js;\
	fi

clean:
	@rm -rf node_modules

.PHONY: install release clean
