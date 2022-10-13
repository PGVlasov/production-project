import { CounterSchema } from "../types/counterSchema";
import { counterActions, counterReduser } from "./counterSlice";

describe("get counter", () => {
  test("should return incriment", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReduser(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test("should return decriment", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReduser(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test("should return 1 with undefined state", () => {
    expect(counterReduser(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
