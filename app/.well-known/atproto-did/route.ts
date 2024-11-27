export async function GET(request: Request) {
    const url = URL.parse(request.url);
    console.log(url?.hostname);

    let did;
    if (url?.hostname) {
        const parts = url.hostname.split('.');
        if (parts.length === 3) {
            // subdomain for individual user account
            const username = parts[0];
            // TODO: find did for user
            did = 'did:plc:username';
        } else if (parts.length === 2) {
            // root domain for main account
            did = 'did:plc:iqa6bfednevr3dztjkz5nd2m';
        }
    }

    if (did) {
        return new Response(did, { 
            status: 200, 
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    return new Response('Bad Request', { 
        status: 400, 
    });
}