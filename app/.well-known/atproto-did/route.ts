import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const hostname = request.headers.get('host')!;
    const segments = hostname.split('.');
    const subdomain = segments.length === 3 ? segments[0] : '';

    console.log(`Hostname: ${hostname}`);
    console.log(`Subdomain: ${subdomain}`);

    let did;
    if (subdomain) {
        did = `did:plc:${subdomain}`;
    } else {
        // root domain for main account
        did = 'did:plc:iqa6bfednevr3dztjkz5nd2m';
    }

    return new Response(did, { 
        status: 200, 
        headers: {
            'Content-Type': 'text/plain',
        }
    });
}