import axios from 'axios'
export const handler = axios.create(
    {
        baseURL: "https://external-site-integration-with-salesforce-teams-7naoseylf.vercel.app/api",
        headers: {
            "Content-Type" : "application/json"
        }
    }
)