import axios from 'axios'
export const handler = axios.create(
    {
        baseURL: "https://external-site-integration-with-salesforce-teams.vercel.app/api",
        headers: {
            "Content-Type" : "application/json"
        }
    }
)