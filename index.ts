import { google } from "googleapis";

export async function initializeGoogleServices() {
    console.log(`getClient`);
    const auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"]
    });
    console.log(`Result: success`);
}

initializeGoogleServices();
