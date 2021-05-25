import React from 'react';
import { 
    FiltrerContainer,
    Badge
} from './Filter.style';

interface FilterProps {

} 

const Filter: React.FunctionComponent<FilterProps> = () => {
 
    return (
        <FiltrerContainer>
            <Badge>Basics</Badge>
            <Badge>Spread</Badge>
            <Badge>Children</Badge>
        </FiltrerContainer>
    )
}

export default Filter;
