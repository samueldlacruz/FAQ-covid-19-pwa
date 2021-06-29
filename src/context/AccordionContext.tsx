import { createContext } from "react";
import { IAccordionContextValue } from "../interfaces/Accordion";

export const AccordionContext = createContext<IAccordionContextValue | undefined>(undefined);

export const AccordionProvider = AccordionContext.Provider;