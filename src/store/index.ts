import { RematchDispatch, RematchRootState, init } from "@rematch/core";
import { RootModel, models } from "./models";
import immerPlugin from "@rematch/immer";

export const store = init<RootModel>({
  models,
  plugins: [immerPlugin()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;