import { google } from "googleapis";

export async function initializeGoogleServices() {
    console.log(`getClient`);
    const auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"]
    });
    console.log(`google.options`);

    google.options({ auth });
    console.log(`returning `);

    return {
        cloudFunctions: google.cloudfunctions("v1"),
        google
    };
}

export async function main() {
    console.log(`Creating google services`);
    const services = await initializeGoogleServices().catch(err => {
        console.error(`ERROR1: ${err}`);
        throw err;
    });
    console.log(`%O`, { services });

    console.log(`Listing functions`);
    const functionsResponse = await services.cloudFunctions.projects.locations.functions.list();
    const functions = functionsResponse.data.functions || [];
    for (const func of functions) {
        console.log(`%O`, { func });
    }
}

main();
