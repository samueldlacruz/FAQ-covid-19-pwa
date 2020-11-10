import React from 'react';
import { FooterContainer, FooterItems, FooterLink } from './Footer.styles';

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
const Footer = () => {
    return (
       <FooterContainer>
         More information:
          <FooterItems>
             {links.map((link, index) => (
              <FooterLink key={index}>
                <a href={link.href}>{link.text}</a>
             </FooterLink>               
             ))}
          </FooterItems>
       </FooterContainer>
    )
}

export default Footer;