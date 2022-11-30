import { gql } from '@apollo/client'
import { client } from '../lib/apollo';
import Head from 'next/head'
import React from 'react'

const index = ({homeData, menu}) => {
    let sections = homeData.sections.sections
    console.log('menu', menu);
    console.log('homeData', homeData);
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
                      mediaItemUrl
                      mediaDetails {
                        file
                      }
                    }
                    bannerServices {
                      icon
                      title
                      content
                    }
                  }
                  ... on Page_Sections_Sections_Text {
                    title
                    content
                  }
                  ... on Page_Sections_Sections_PlainText {
                    content
                    button {
                      title
                      url
                    }
                    images {
                      mediaDetails {
                        file
                      }
                    }
                  }
                  ... on Page_Sections_Sections_Services {
                    services {
                      title
                      subservices {
                        title
                        content
                        image {
                          mediaItemUrl
                          mediaDetails {
                            file
                          }
                        }
                      }
                    }
                  }
                  ... on Page_Sections_Sections_Partners {
                    partnersTitle
                    backgroundImage {
                      mediaItemUrl
                    }
                    partner {
                      link {
                        url
                      }
                      image {
                        mediaItemUrl
                      }
                    }
                  }
                  ... on Page_Sections_Sections_GoToJobs {
                    goToJobs {
                      title
                      link {
                        title
                        url
                      }
                      image {
                        mediaItemUrl
                      }
                    }
                  }
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
    const homeData = response?.data?.pages?.nodes[0]
    // const contactData = response?.data?.acfOptionsThemeOption?.themeOptions
    const menu = response?.data?.menus
    return {
      props: {
        // contactData, 
        homeData,
        menu
      }
    }
  }