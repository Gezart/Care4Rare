import { gql } from '@apollo/client'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import { client } from '../lib/apollo'

const index = ({contactData, menu }) => {
    let mainMenu = menu?.edges[0]?.node?.menuItems?.nodes;
    let rightMenu = menu?.edges[1]?.node?.menuItems?.nodes;
    return (
        <>
        <Head>
            <title>Care4Rare</title>
            <link rel="icon" href="favicon.ico"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link> */}
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
            mobileMenu {
              icon
              page {
                url
                title
              }
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
      const contactData = response?.data?.acfOptionsThemeOption?.themeOptions
      const menu = response?.data?.menus
      return {
        props: {
          contactData, 
          menu
        }
      }

}