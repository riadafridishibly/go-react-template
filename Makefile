setup:
	cp $(shell go env GOROOT)/misc/wasm/wasm_exec.js frontend/src/wasm_exec.js

build-wasm:
	cd wasm && make
	cp wasm/main.wasm frontend/src/assets/main.wasm