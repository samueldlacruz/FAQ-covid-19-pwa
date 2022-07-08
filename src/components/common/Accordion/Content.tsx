import useAccordion from "../../../hooks/useAccordion";
import { AccordionContentProps } from "../../../interfaces/Accordion";
import { FAQAnswer } from "./styles";

const Content = ({ children }: AccordionContentProps) => {
    const { activeItem } = useAccordion();

    return (
        <FAQAnswer isOpen={activeItem}>
            {children}
        </FAQAnswer>
    )
}

export default Content;
