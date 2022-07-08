export interface AccordionComposition {
    Content: React.FunctionComponent<AccordionContentProps>;
    Header: React.FunctionComponent<AccordionHeaderProps>;
}

export interface AccordionContentProps {
    children: React.ReactNode;
}

export interface AccordionHeaderProps extends QuestionProps {
    children: React.ReactNode;
}
export interface AccordionProps {
    children: React.ReactNode;
}

export interface QuestionProps {
    category?: string;
}

export interface IAccordionContextValue {
    activeItem: boolean;
    setActiveItem: (active: boolean) => void
};
