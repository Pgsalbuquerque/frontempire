import React, {useState} from 'react'
import Scope from '../_scope';
import { Background, DivFlex, DivBox} from '../../styles/list'
import { Header, Text1 } from '../../styles/header'
import ClientCard from './_cardClient'
import { GetStaticProps } from 'next'


export async function getStaticProps() {
    const c = await fetch('http://localhost:3333/client/listall')
    const clients = await c.json()

    return {
        props: {
        clients,
        },
        revalidate: 1,
    }
}

function ListAll({clients}) {
    return (
    <>
        <DivFlex>
            <Scope >
            </Scope>
        <DivBox>
            <Header>
                <Text1>
                List all
                </Text1>
            </Header>
            <Background>
                {clients.map(client => <ClientCard name={client.name} cpf={client.cpf}
                email = {client.email} telephone = {client.telephone1} telephone2 = {client.telephone2}
                telephone3 = {client.telephone3} indicator = {client.client_cpf}
                key = {client.cpf}
                ></ClientCard>)}
            </Background>
            
            
        </DivBox>

      </DivFlex>
        
        
    </>
    )
  }
  


  export default ListAll;