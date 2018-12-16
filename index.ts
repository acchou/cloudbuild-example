import { google } from "googleapis";

export async function initializeGoogleServices() {
    console.log(`getClient`);
    const auth1 = await google.auth
        .getClient({
            scopes: ["https://www.googleapis.com/auth/cloud-platform"]
        })
        .catch(console.error);
    console.log(`auth1: ${auth1}`);

    const response = await google.auth.getApplicationDefault().catch(console.error);
    console.log(`auth2: ${response}`);

    const token = await google.auth.getAccessToken().catch(console.error);
    console.log(`auth3: ${token}`);

    const project = await google.auth.getProjectId();
    console.log(`%O`, { project });

    const creds = await google.auth.getCredentials();
    console.log(`%O`, { email: creds.client_email });

    console.log(`google.options`);

    // google.options({ auth: auth1 });
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
}

main();
