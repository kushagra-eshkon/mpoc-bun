/**
 * Type representing the kind of log message.
 * - `"error"`: Denotes a failure or critical issue.
 * - `"log"`: Denotes a success or standard output.
 * - `"note"`: Denotes a warning, hint, or informational note.
 */
export type LogType = "error" | "success" | "warning"

/**
 * Logs a formatted message to the console with symbolic prefixes based on severity.
 *
 * Format:
 * - `[-]` for errors
 * - `[+]` for successful success
 * - `[*]` for notes or warnings
 *
 * @param message - The message string to log.
 * @param type - The type of log. Defaults to `"success"`.
 *
 * @example
 * log("Operation completed", "success");   // [+] Operation completed
 * log("Missing config file", "error"); // [-] Missing config file
 * log("Using default port", "warning");   // [*] Using default port
 */
export function log(message: string, type: LogType = "success") {
  const prefix = {
    error: "[-]",
    success: "[+]",
    warning: "[*]",
  }[type]

  console.log(`${prefix} ${message}`)
}
