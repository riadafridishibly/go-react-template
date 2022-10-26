// @ts-ignore
import './wasm_exec.js'

export async function InitiateStream() {
    // @ts-ignore
    const go = new window.Go();
    await WebAssembly.instantiateStreaming(fetch("src/assets/main.wasm"), go.importObject).then((result) => {
        go.run(result.instance);
    });
}
