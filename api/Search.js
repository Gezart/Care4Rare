import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

const handler = async(req, res) => {
    try{
        const {data} = await client.query({
            query: gql`
            query allJobs {
                jobs(where: {offsetPagination: {size: 3, offset: 3}}) {
                  nodes {
                    title
                    slug
                    featuredImage {
                      node {
                        mediaItemUrl
                      }
                    }
                    jobDetails {
                      bundesland
                      abWann
                    }
                  }
                  pageInfo {
                    offsetPagination {
                      total
                    }
                  }
                }
            }              
            `
        });
        return res.status(200).json({
            jobs: data.jobs.nodes
        })
    }catch(e){
        console.log('ERROR', e);
    }
}