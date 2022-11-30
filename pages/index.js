import { gql } from '@apollo/client'
import { client } from '../lib/apollo';
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout';

const index = ({homeData, contactData, menu}) => {
    let mainMenu = menu?.edges[0]?.node?.menuItems?.nodes;
    let rightMenu = menu?.edges[1]?.node?.menuItems?.nodes;
    console.log('menu', menu);
    console.log('homeData', homeData);
    console.log('contactData', contactData);
    return (
        <>
        <Head>
            <title>Care4Rare</title>
            <link rel="icon" href="favicon.ico"></link>
        </Head>
        <Layout contactData ={contactData} mainMenu={mainMenu} rightMenu={rightMenu}>

        </Layout>

    </>
  )
}

export default index

export async function getStaticProps(){

    const homeQuery = gql`
    query homeQuery {
          acfOptionsThemeOption {
            themeOptions {
              logo
              footerDescription
              footerMenuTitle
              footerMenu {
                title {
                  ... on Page {
                    title
                    uri
                  }
                }
              }
              policyTitle
              policyMenu {
                title {
                  ... on Page {
                    title
                    uri
                  }
                }
              }
              locationIcon
              locationTitle
              location
              location2
              emailIcon
              emailTitle
              email {
                title
                url
              }
              phoneIcon
              phoneTitle
              phone {
                title
                url
              }
            }
          }
        menus {
          edges {
            node {
              slug
              menuItems {
                nodes {
                  uri
                  label
                }
              }
            }
          }
        }
      }
  
    `
  
    const response = await client.query({
      query: homeQuery
    })
    const homeData = response?.data?.pages?.nodes[0]
    const contactData = response?.data?.acfOptionsThemeOption?.themeOptions
    const menu = response?.data?.menus
    return {
      props: {
        contactData, 
        homeData,
        menu
      }
    }
  }