import Link from 'next/link'
import {DivFlex,Header, Image, Text1, BodyDashboard} from '../styles/header'
import * as FA from 'react-icons/fa';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function Home(props) {
  return (
    <div >
      <main>
      <BodyDashboard>
        <DivFlex>
        <ProSidebar collapsed={true} >
          <SidebarHeader>
            <Header>
              <Image src="/linux.svg"/>
            </Header>
          </SidebarHeader>
          
          <SidebarContent>
          
            <Menu>
              <SubMenu title="Products" icon={<FA.FaShoppingBag size={20}/>}>
                  <Link href="/products/store">
                    <MenuItem >
                      Store
                    </MenuItem>
                  </Link>
                  <Link href="/products/put">
                    <MenuItem >
                      Put
                    </MenuItem>
                  </Link>
                  <Link href="/products/delete">
                    <MenuItem >
                      Delete
                    </MenuItem>
                  </Link>
                  <Link href="/products/listall">
                    <MenuItem >
                      List All
                    </MenuItem>
                  </Link>
                  <Link href="/products/listbyname">
                    <MenuItem>List By Name</MenuItem>
                  </Link>
                  <Link href="/products/listbyvalue">
                    <MenuItem>List By Value</MenuItem>
                  </Link>
              </SubMenu>
              <SubMenu title="Clients" icon={<FA.FaUserFriends size={20}/>}>
                  <Link href="/clients/store">
                    <MenuItem >
                      Store
                    </MenuItem>
                  </Link>
                  <Link href="/clients/put">
                    <MenuItem >
                      Put
                    </MenuItem>
                  </Link>
                  <Link href="/clients/delete">
                    <MenuItem >
                      Delete
                    </MenuItem>
                  </Link>
                  <Link href="/clients/listall">
                    <MenuItem >
                      List All
                    </MenuItem>
                  </Link>
                  <Link href="/clients/listone">
                    <MenuItem>List One</MenuItem>
                  </Link>
              </SubMenu>
              <SubMenu title="Employees" icon={<FA.FaUserGraduate size={20}/>}>
              <Link href="/employees/store">
                    <MenuItem >
                      Store
                    </MenuItem>
                  </Link>
                  <Link href="/employees/put">
                    <MenuItem >
                      Put
                    </MenuItem>
                  </Link>
                  <Link href="/employees/delete">
                    <MenuItem >
                      Delete
                    </MenuItem>
                  </Link>
                  <Link href="/employees/listall">
                    <MenuItem >
                      List All
                    </MenuItem>
                  </Link>
                  <Link href="/employees/listbyname">
                    <MenuItem>List By Name</MenuItem>
                  </Link>
                  <Link href="/employees/listbycharge">
                    <MenuItem>List By Charge</MenuItem>
                  </Link>
              </SubMenu>
              <SubMenu title="Providers" icon={<FA.FaRegBuilding size={20}/>}>
                <Link href="/providers/store">
                    <MenuItem >
                      Store
                    </MenuItem>
                  </Link>
                  <Link href="/providers/put">
                    <MenuItem >
                      Put
                    </MenuItem>
                  </Link>
                  <Link href="/providers/delete">
                    <MenuItem >
                      Delete
                    </MenuItem>
                  </Link>
                  <Link href="/providers/listall">
                    <MenuItem >
                      List All
                    </MenuItem>
                  </Link>
                  <Link href="/providers/listone">
                    <MenuItem>List One</MenuItem>
                  </Link>
              </SubMenu>
              <SubMenu title="Orders" icon={<FA.FaRegFileAlt size={20}/>}>
                  <Link href="/orders/store">
                    <MenuItem >
                      Store
                    </MenuItem>
                  </Link>
                  <Link href="/orders/delete">
                    <MenuItem >
                      Delete
                    </MenuItem>
                  </Link>
                  <Link href="/orders/listall">
                    <MenuItem >
                      List All
                    </MenuItem>
                  </Link>
                  <Link href="/orders/listbyattributes">
                    <MenuItem>List By Attributes</MenuItem>
                  </Link>
              </SubMenu>
              <SubMenu title="Feedbacks" icon={<FA.FaStar size={20}/>}>
                <Link href="/feedbacks/store">
                    <MenuItem >
                      Store
                    </MenuItem>
                  </Link>
                  <Link href="/feedbacks/delete">
                    <MenuItem >
                      Delete
                    </MenuItem>
                  </Link>
                  <Link href="/feedbacks/listall">
                    <MenuItem >
                      List All
                    </MenuItem>
                  </Link>
                  <Link href="/feedbacks/findbyemployeecpf">
                    <MenuItem>Find By Employee Cpf</MenuItem>
                </Link>
              </SubMenu>
              <SubMenu title="Purchases" icon={<FA.FaRegCreditCard size={20}/>}>
                <Link href="/purchases/store">
                    <MenuItem >
                      Store
                    </MenuItem>
                  </Link>
                  <Link href="/purchases/delete">
                    <MenuItem >
                      Delete
                    </MenuItem>
                  </Link>
                  <Link href="/purchases/listall">
                    <MenuItem >
                      List All
                    </MenuItem>
                  </Link>
                  <Link href="/purchases/listbyattributes">
                    <MenuItem>List By Attributes</MenuItem>
                </Link>
              </SubMenu>
              <SubMenu title="Offs" icon={<FA.FaPercentage size={20}/>}>
                <Link href="/offs/store">
                    <MenuItem >
                      Store
                    </MenuItem>
                  </Link>
                  <Link href="/offs/delete">
                    <MenuItem >
                      Delete
                    </MenuItem>
                  </Link>
                  <Link href="/offs/listall">
                    <MenuItem >
                      List All
                    </MenuItem>
                  </Link>
                  <Link href="/offs/listbyattributes">
                    <MenuItem>List By Attributes</MenuItem>
                </Link>
              </SubMenu>
              <SubMenu title="Addresses" icon={<FA.FaWarehouse size={20}/>}>
                <Link href="/addresses/store">
                    <MenuItem >
                      Store
                    </MenuItem>
                  </Link>
                  <Link href="/addresses/put">
                    <MenuItem >
                      Put
                    </MenuItem>
                  </Link>
                  <Link href="/addresses/delete">
                    <MenuItem >
                      Delete
                    </MenuItem>
                  </Link>
                  <Link href="/addresses/listbyid">
                    <MenuItem >
                      List By Id
                    </MenuItem>
                  </Link>
                  <Link href="/addresses/listbystreet">
                    <MenuItem>List By Street</MenuItem>
                </Link>
              </SubMenu>
            </Menu>
          </SidebarContent>
        </ProSidebar>
        </DivFlex>
      </BodyDashboard>
        
      </main>
    </div>
  )
}
