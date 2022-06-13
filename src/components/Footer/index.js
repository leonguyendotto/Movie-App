import React from 'react'
import FooterBG from '../../images/footer_bg.jpg'
//Styles
import { Wrapper, Content } from './Footer.styles'


const Footer = () => {
  return (
    <Wrapper className='footer' style={{backgroundImage:`url(${FooterBG})`}}>
      <Content>
        API Powered by: <a href='https://www.themoviedb.org'target='_blank'>The Movie Database</a>. 
        <p>Website made by Leo Nguyen</p> 
      </Content>
    </Wrapper>
  )
}

export default Footer