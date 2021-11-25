import styled from "styled-components"
import {Button, Input, Layout, Menu} from "antd"
const {Header, Sider} = Layout;

export const MainHeader = styled(Header)`
position: relative; 
z-index: 1; 
width: 100%;
background-color: #0f0f0f !important;
border-bottom: 1px solid #4A4A4A;
`;

export const StyledMenu = styled(Menu)`
background: #0f0f0f;
color: #fff;
`
export const OrangeButton = styled(Button)`
background: #FA722E !important;
border-radius: 4px;
border: none;
padding: 5px;
width: 90%;
color: #fff;
display: block;
margin: 5px auto;
`
export const GrayContainer = styled.div`
background: #0f0f0f;
border-radius: 8px;
padding: 20px;
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
min-height: 150px;
`

export const StyledSearch = styled(Input)`
border: 1px solid #ff6633;
color: #fff;
border-radius: 100px;
background: #2D2D2D;
height: 30px;
width: 90%;
`;

// export const StyledSider = styled(Sider)`

// `