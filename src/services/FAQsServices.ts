import { FAQ } from '../interfaces/FAQ';
import FAQs from './FAQs.json';

export const getFAQs = async ():Promise<FAQ[]> => FAQs;