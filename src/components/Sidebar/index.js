import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper} from './SidebarElemenst';


export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                            <SidebarLink to="about"    onClick={toggle} >About</SidebarLink>
                            <SidebarLink to="discover" onClick={toggle} >Discover</SidebarLink>                   
                            <SidebarLink to="services" onClick={toggle} >Services</SidebarLink>                  
                            <SidebarLink to="contact"  onClick={toggle} >Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
