//INIFF-RECOMBINANT/frontend/lib/hygraph.js

import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://us-west-2.cdn.hygraph.com/content/cmhnuqoyi089g07uuvlu1fufi/master';

export const hygraph = new GraphQLClient(endpoint);
