import { CohereClient } from "cohere-ai"
import { summarizingapikey,explainApiKey } from "@/config/Api-urls-and-keys"
import axios from "axios"
// visit cohere if you want to use this 
 export const Summary = new CohereClient({
     token: summarizingapikey

 })
// also for paraphrasing 
export const Explain = new CohereClient({
    token: explainApiKey
})

// to send email
export async function sendMessage(data){
    return axios.post('/api/contact', data, {
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
} 

export async function sendNewsLetterSubscription(data){
    return axios.post('/api/newsletter', data, {
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
} 

