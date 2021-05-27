import React from 'react';
import { 
    FiltrerContainer,
    ContainerInput
} from './Filter.style';
import { HiSearch } from "react-icons/hi";

interface FilterProps {

} 

const Filter: React.FunctionComponent<FilterProps> = () => {
 
    return (
        <FiltrerContainer>
            <ContainerInput>
                <div>
                    <HiSearch />
                </div>
                <input type="text" placeholder="filter by categories, questions or answers" />
            </ContainerInput>
        </FiltrerContainer>
    )
}

export default Filter;
