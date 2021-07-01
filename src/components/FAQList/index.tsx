import React, { useEffect, useState } from 'react'
import { ContainerList, NotFoundCard } from './styles';
import Accordion from '../Accordion'
import { FAQ } from '../../interfaces/FAQ'
import { getFAQs } from '../../services/FAQsServices'
import Filter from '../FAQFilter'
import { _filter } from '../../utils/filter';
import { FaInfo } from 'react-icons/fa';

const FAQList: React.FunctionComponent = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [filterFaqs, setFilterFaqs] = useState<Array<FAQ> | undefined>([]);

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchFaqs();
    }, []);

    /**
     * this function get FAQ from service
     */
    const fetchFaqs = async (): Promise<void> => {
        setLoading(true);
        try {
            const listOfFaqs = await getFAQs();
            setFaqs(listOfFaqs);
            setFilterFaqs(listOfFaqs);

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const searchFAQ = (value: string) => {
        const results = _filter(value, faqs, ['question', 'category']);
        setFilterFaqs(() => {
            if (!results) return;
            return results;
        });
    }

    return (
        <>
            {loading ?
                <h1>loading ... </h1>
                :
                <ContainerList>
                    <Filter searchFAQ={searchFAQ} />
                    {
                        filterFaqs?.length === 0 ?
                            <NotFoundCard>
                                <div className="icon">
                                    <FaInfo></FaInfo>
                                </div>
                                <span>Not found your question, Sorry</span>
                            </NotFoundCard>
                            :
                            filterFaqs?.map((faq: FAQ, index: number) => (
                                <Accordion key={index} >
                                    <Accordion.Header category={faq.category}>{faq.question}</Accordion.Header>
                                    <Accordion.Content>{faq.answer}</Accordion.Content>
                                </Accordion>
                            ))}
                </ContainerList>
            }
        </>
    )
};

export default FAQList