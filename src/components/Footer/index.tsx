import React from 'react';
import { FooterContainer, FooterItems, FooterLink } from './styles';
import { HiLink } from 'react-icons/hi'

const links = [
   {
     text: 'Symptoms of Coronavirus', 
     href: 'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'
   },
   {
     text: 'when and how to use masks',
     href: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks'
   }
]

const Footer: React.FunctionComponent = () => {
    return (
       <FooterContainer>
         References:
          <FooterItems>
             {links.map((link, index) => (
              <FooterLink key={index}>
                 <HiLink />
                <a href={link.href}>{link.text}</a>
             </FooterLink>               
             ))}
          </FooterItems>
       </FooterContainer>
    )
}

export default Footer;