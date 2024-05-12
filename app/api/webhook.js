import  { NextApiRequest,NextApiResponse } from "next";
import stripe from 'stripe'
import getRawBody from 'raw-body'

const  stripe = new stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion  : "2023-10-16",
})

const endPointSecret = process.env.WEBHOOK_SECRET;

export const config ={
    api:{
        bodyParser : false
    }
}

// export default async function handler(
//    req:  NextApiRequest,
//    NextApiResponse
// ){

// }