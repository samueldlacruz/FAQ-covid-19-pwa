import React, { useEffect, useState } from 'react';
import { FaHeadSideMask } from 'react-icons/fa';
import { FAQ } from '../../../interfaces/FAQ';
import { getFAQs } from '../../../services/FAQsServices';
import Accordion from '../../common/Accordion';
import Loading from '../../common/Loading';
import Filter from '../Filter';
import Empty from './Empty';
import { ContainerList } from './styles';

const FAQList: React.FunctionComponent = () => {

    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [filterFaqs, setFilterFaqs] = useState<Array<FAQ> | undefined>([]);
    const [isLoad, setIsLoad] = useState<boolean>(false);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async (): Promise<void> => {
        setIsLoad(true);

        try {
            const listOfFaqs = await getFAQs();
            setFaqs(listOfFaqs);
            setFilterFaqs(listOfFaqs);

        } catch (_error) {
            setIsLoad(false);

        } finally {
            setIsLoad(false);
        }
    };

    const searchFAQ = async (value: string) => {

        const { _filter } = await import('../../../utils/filter');
        const results = _filter(value, faqs, ['question', 'category']);

        setFilterFaqs(() => {
            if (!results) return;
            return results;
        });
    }

    return (
        <React.Fragment>
            {isLoad ?
                <Loading icon={FaHeadSideMask} iconSize="lg" />
                :
                <ContainerList>
                    <Filter searchFAQ={searchFAQ} />
                    {filterFaqs?.length === 0 ?
                        <Empty />
                        :
                        filterFaqs?.map((faq: FAQ, index: number) => (
                            <Accordion key={index} >
                                <Accordion.Header category={faq.category}>
                                    {faq.question}
                                </Accordion.Header>
                                <Accordion.Content>{faq.answer}</Accordion.Content>
                            </Accordion>
                        ))}
                </ContainerList>
            }
        </React.Fragment>
    )
};

export default FAQList