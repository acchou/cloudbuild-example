import { google } from "googleapis";

export async function initializeGoogleServices() {
    const auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"]
    });
    google.options({ auth });
    return {
        cloudFunctions: google.cloudfunctions("v1"),
        pubsub: google.pubsub("v1"),
        cloudBilling: google.cloudbilling("v1"),
        google
    };
}

export async function main() {
    console.log(`Creating google services`);
    const services = await initializeGoogleServices();
    console.log(`%O`, { services });

    console.log(`Listing functions`);
    const functionsResponse = await services.cloudFunctions.projects.locations.functions.list();
    const functions = functionsResponse.data.functions || [];
    for (const func of functions) {
        console.log(`%O`, { func });
    }
}
