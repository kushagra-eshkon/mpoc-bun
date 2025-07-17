"use client"

import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset } from "@mpoc/store"
import type { RootState } from "@mpoc/store"
import styles from "./Counter.module.css"

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div className={styles.value}>Count: {count}</div>
      <div className={styles.controls}>
        <button
          className={styles.button}
          onClick={() => dispatch(decrement())}
        >
          −
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  )
}
