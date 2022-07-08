import useAccordion from "../../../hooks/useAccordion";
import { AccordionHeaderProps } from "../../../interfaces/Accordion";
import { CloseIcon, FAQBadge, FAQQuestion, Icon, SpanIcon } from "./styles";

const Header = ({ children, category }: AccordionHeaderProps) => {
    const { setActiveItem, activeItem } = useAccordion();

    return (
        <FAQQuestion onClick={() => setActiveItem(!activeItem)}>
            {children}
            <div>
                <FAQBadge>{category}</FAQBadge>
                <Icon>
                    {activeItem ?
                        <CloseIcon onClick={() => setActiveItem(false)} /> :
                        <SpanIcon onClick={() => setActiveItem(true)} />}
                </Icon>
            </div>
        </FAQQuestion>
    )
}

export default Header;