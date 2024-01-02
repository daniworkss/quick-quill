import { CohereClient } from "cohere-ai"

// PARAPHRASER
const paraphrasingapikey = process.env.NEXT_PUBLIC_PARAPHRASING_API_KEY 
const paraphrasingapiurl = process.env.NEXT_PUBLIC_PARAPHRASING_API_URL
const paraphrasingapihost = process.env.NEXT_PUBLIC_PARAPHRASING_API_HOST

// SUMMARIZER
const summarizingapikey = process.env.NEXT_PUBLIC_SUMMARIZING_API_KEY


// visit cohere if you want to use this 
 export const Summary = new CohereClient({
     token: summarizingapikey

 })
// also for paraphrasing 
export const Explain = new CohereClient({
    token: process.env.NEXT_PUBLIC_EXPLANATION_API_KEY
})





// for paraphrasing
export const paraphrasingOptions ={
       method: "POST",
        url: paraphrasingapiurl,
        headers: {
         'content-type': 'application/json',
         'X-RapidAPI-Key': paraphrasingapikey,
         'X-RapidAPI-Host': paraphrasingapihost
        }
     
}

