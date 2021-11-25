import {Menu, Layout} from 'antd'
import { OrangeButton } from '../../styles/StyledComponents'
const {SubMenu} = Menu;
const {Sider} = Layout;
const SiderNav = ({openRequestPage, setOpenRequestPage}) => {
    const goToRequestPage = () => {
        setOpenRequestPage(true);
      }
    console.log("TEST", openRequestPage)
    return (
        <Sider style={{background: '#0f0f0f'}}>
        <OrangeButton style={{marginTop: 10}} onClick={() => goToRequestPage()}>
          Submit New
        </OrangeButton>
        <Menu mode='inline' style={{background: '#0f0f0f', borderRight: "1px solid #0f0f0f"}}>
            <SubMenu key="SubMenu" title="REQUEST STATUS" style={{color: '#fff'}}>
            <Menu.Item key="needs-review"><small style={{color: '#adadad'}}>Needs Review</small></Menu.Item>
            <Menu.Item key="in-review"><small style={{color: '#adadad'}}>In Review</small></Menu.Item>
            <Menu.Item key="planned"><small style={{color: '#adadad'}}>Planned</small></Menu.Item>
            <Menu.Item key="in-progress"><small style={{color: '#adadad'}}>In Progress</small></Menu.Item>
            <Menu.Item key="shipped"><small style={{color: '#adadad'}}>Shipped</small></Menu.Item>
            <Menu.Item key="not-implement"><small style={{color: '#adadad'}}>Will Not Implement</small></Menu.Item>
            </SubMenu>
        </Menu>
      </Sider>
    )
}

export default SiderNav
