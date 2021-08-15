import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaDiscord, } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Discord</LinkTitle>
          <LinkItem href="tel:314-343-3432">Fabian1#5466</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle></LinkTitle>
          <LinkItem href="mailto:fabianlanza11@gmail.com">
            
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/fabianlanza">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://discord.com/users/589952622820196402">
            <FaDiscord size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/ftn_fabian">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
