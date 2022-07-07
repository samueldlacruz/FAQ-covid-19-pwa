import React, { FunctionComponent } from "react";
import useAccordion from "../../../hooks/useAccordion";
import { FAQAnswer } from "./styles";

const Content: FunctionComponent = ({ children }) => {
    const { activeItem } = useAccordion();

    return (
        <FAQAnswer isOpen={activeItem}>
            {children}
        </FAQAnswer>
    )
}

export default Content;
