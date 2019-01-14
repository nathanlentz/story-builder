import React, { Component } from 'react';
import styled from 'styled-components';

const Head = styled.header`
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 16px;
`;

class Header extends Component {

    render() {
        return(
            <Head>{this.props.title}</Head>
        );
    }  

}

export default Header;