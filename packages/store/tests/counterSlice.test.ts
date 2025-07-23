import { describe, it, expect } from "vitest"
import {
  counterReducer as reducer,
  increment,
  decrement,
  reset,
  set,
} from "../"

describe("counterSlice", () => {
  it("returns initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({ value: 0 })
  })

  it("increments", () => {
    expect(reducer({ value: 0 }, increment())).toEqual({ value: 1 })
    expect(reducer({ value: 1 }, increment())).toEqual({ value: 2 })
  })

  it("decrements", () => {
    expect(reducer({ value: 2 }, decrement())).toEqual({ value: 1 })
    expect(reducer({ value: 1 }, decrement())).toEqual({ value: 0 })
  })

  it("resets", () => {
    expect(reducer({ value: 5 }, reset())).toEqual({ value: 0 })
  })

  it("sets value", () => {
    expect(reducer({ value: 0 }, set(3))).toEqual({ value: 3 })
    expect(reducer({ value: 3 }, set(7))).toEqual({ value: 7 })
  })
})
