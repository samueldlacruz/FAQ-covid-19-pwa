export interface AccordionComposition {
    Content: React.FunctionComponent;
    Header: React.FunctionComponent<QuestionProps>;
}

export interface QuestionProps {
    category?: string;
}

export interface IAccordionContextValue {
    activeItem: boolean;
    setActiveItem: (active: boolean) => void
};
