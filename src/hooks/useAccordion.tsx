import { useContext } from "react";
import { AccordionContext } from "../context/AccordionContext";
import { IAccordionContextValue } from "../interfaces/Accordion";

export const useAccordion = (): IAccordionContextValue => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(
            "Accordion.Question and Accordion.Answer must be used within an Accordion"
        );
    }
    return context;
}

export default useAccordion;