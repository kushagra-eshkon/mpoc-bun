import { describe, it, expect, vi, afterEach, afterAll } from "vitest"
import { log, LogType } from "../"

describe("log()", () => {
  const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {})

  afterEach(() => {
    consoleSpy.mockClear()
  })

  afterAll(() => {
    consoleSpy.mockRestore()
  })

  const cases: { type: LogType; message: string; expected: string }[] = [
    { type: "success", message: "All good", expected: "[+] All good" },
    {
      type: "error",
      message: "Something failed",
      expected: "[-] Something failed",
    },
    {
      type: "warning",
      message: "Use default config",
      expected: "[*] Use default config",
    },
  ]

  it.each(cases)(
    "logs correct prefix for type: $type",
    ({ type, message, expected }) => {
      log(message, type)
      expect(consoleSpy).toHaveBeenCalledWith(expected)
    }
  )

  it("defaults to success log when no type is provided", () => {
    log("Default success")
    expect(consoleSpy).toHaveBeenCalledWith("[+] Default success")
  })
})
