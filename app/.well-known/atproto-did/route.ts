import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = request.headers.get('host')!;
    const subdomain = hostname.split('.')[0].replace('localhost:3000', '');

    console.log(`URL: ${url}`);
    console.log(`Hostname: ${hostname}`);
    console.log(`Subdomain: ${subdomain}`);

    let did;
    if (subdomain) {
        did = 'did:plc:username';
    } else {
        // root domain for main account
        did = 'did:plc:iqa6bfednevr3dztjkz5nd2m';
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