import axios from 'axios'
export const handler = axios.create(
    {
        baseURL: "external-site-integration-with-salesforce-tea-git-bc6c3b-cuecas.vercel.app/api",
        headers: {
            "Content-Type" : "application/json"
        }
    }
)