import React from 'react';
import { 
    FiltrerContainer,
    ContainerInput
} from './FAQFilter.style';
import { HiSearch } from "react-icons/hi";

interface FAQFilterProps {
  searchFAQ: Function
} 

const FAQFilter: React.FunctionComponent<FAQFilterProps> = ({ searchFAQ }) => {
 
    /**
     * Handle input change and set search
     * @param {React.ChangeEvent<HTMLInputElement>} ev - event
     */
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
       searchFAQ(ev.currentTarget.value);
    }

    return (
        <FiltrerContainer>
            <ContainerInput>
                <div>
                    <HiSearch />
                </div>
                <input type="text" onChange={handleChange} placeholder="filter by categories or questions" />
            </ContainerInput>
        </FiltrerContainer>
    )
}

export default FAQFilter;
