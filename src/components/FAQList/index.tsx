import React, { useEffect, useState } from 'react'
import { ContainerList } from './FAQList.styles';
import FAQAccordion from '../FAQAccordion'
import { FAQ } from '../../interfaces/FAQ'
import { getFAQs } from '../../services/FAQsServices'
import Filter from '../FAQFilter'
import { queryData } from '../../utils/queryData';


const FAQList: React.FunctionComponent = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [filterFaqs, setFilterFaqs] = useState<any>([]);

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

    /**
     * this function toggle accordion card
     * @param {number} index 
     */
    const toggleFAQ = (index: number): void => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.isOpen = !faq.isOpen
            } else {
                faq.isOpen = false;
            }

            return faq;
        }))
    }

    const searchFAQ = (value: string) => {
       const queriedFAQ = queryData(value, faqs, ['question', 'category']);
        setFilterFaqs(queriedFAQ);
    }

    return (
        <>
            {loading ?
                <h1>loading ... </h1>
                :
                <ContainerList>
                    <Filter searchFAQ={searchFAQ} />
                
                    {filterFaqs.map((faq: FAQ, index: number) => (
                        <FAQAccordion
                            key={index}
                            index={index}
                            faq={faq}
                            toggleFAQ={toggleFAQ} />
                    ))}
                </ContainerList>
            }
        </>
    )
};

export default FAQList