import { RematchDispatch, RematchRootState, init } from "@rematch/core";
import { RootModel, models } from "./models";
import immerPlugin from "@rematch/immer";
import persistPlugin from '@rematch/persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};


export const store = init<RootModel>({
  models,
  plugins: [immerPlugin(), persistPlugin(persistConfig)],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;