import { atom } from "recoil";
import { CartItemType } from "../types";

export const cartItemState = atom({
  key: "cartItemState",
  default: [] as CartItemType[],
});
