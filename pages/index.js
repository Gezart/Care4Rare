import Head from 'next/head';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Text from '../components/Text';
import PlainText from '../components/PlainText';


export default function Home({ homeData, contactData, menu }) {
  let sections = homeData.sections.sections
  let mainMenu = menu; 
  return (
    <>
      <Head>
        <title>Care4Rare</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <link rel="icon" href="favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Layout contactData ={contactData} mainMenu={mainMenu}>
          <main className='page page-home'>
            {
              sections?.map((section, index) => {
                  const typeName = section.__typename;
                  switch(typeName){
                  case 'Page_Sections_Sections_Banner':
                      return <Banner {...section} key={index}/>
                  case 'Page_Sections_Sections_Text':
                    return <Text {...section} key={index}/>
                  case 'Page_Sections_Sections_PlainText':
                    return <PlainText {...section} key={index}/>
                      
                  default: 
                  return ''
                  
                  }              
              })
            }

          </main>
      </Layout>

    </>
  )
}

export async function getStaticProps(){

  const homeQuery = gql`
  query homeQuery {
  pages(where: {title: "Home"}) {
    nodes {
      title
      slug
      uri
      sections {
        sections {
          ... on Page_Sections_Sections_Banner {
            bannerSize
            title
            content
            image {
              mediaDetails{
                file
              }
            }
            bannerServices {
							icon
              title
              content
            }
          }
          ... on Page_Sections_Sections_Text{
            title
            content
          }
          ... on Page_Sections_Sections_PlainText{
						content
            button{
              title
              url
            }
            images{
              mediaDetails{
                file
              }
            }
          }
        }
      }
    }
  }
  acfOptionsThemeOption {
    themeOptions {
      logo
      footerDescription
      footerMenuTitle
      footerMenu {
        title{
          ...on Page{
            title
            uri
          }
        }
      }
      policyTitle
      policyMenu{
        title{
          ...on Page{
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
  menus(where: {slug: "main-menu"}) {
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
  const menu = response?.data?.menus?.edges[0].node.menuItems.nodes
  return {
    props: {
      homeData,
      contactData, 
      menu
    }
  }
}
