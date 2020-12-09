import { createContext } from "react";
import { conditionInterface } from "../interface";
import { conditions } from "./conditions";

export const Context = createContext<conditionInterface[]>(conditions);
