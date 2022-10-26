package main

import (
	"syscall/js"
)

func Hello(this js.Value, args []js.Value) any {
	return "Hello, World!"
}

func main() {
	js.Global().Set("hello", js.FuncOf(Hello))

	select {}
}
