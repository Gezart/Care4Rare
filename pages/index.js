import { gql } from '@apollo/client'
import { client } from '../lib/apollo';
import Head from 'next/head'
import React from 'react'

const index = ({contactData, menu}) => {
    console.log('contact data', contactData);
    console.log('menu', menu);
    return (
        <>
        <Head>
            <title>Care4Rare</title>
            <link rel="icon" href="favicon.ico"></link>
        </Head>

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