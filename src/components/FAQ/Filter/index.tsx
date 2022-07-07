import React from 'react';
import { FilterContainer, ContainerInput } from './style';
import { HiSearch } from "react-icons/hi";

const FAQFilter = ({ searchFAQ }: { searchFAQ: Function }) => {

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
        const value = ev.target.value;

        searchFAQ(value);
    }

    return (
        <FilterContainer>
            <ContainerInput>
                <div>
                    <HiSearch />
                </div>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="filter by categories or questions"
                />
            </ContainerInput>
        </FilterContainer>
    )
}

export default FAQFilter;
