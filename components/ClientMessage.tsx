'use client';

import { useEffect, useRef } from 'react';

function writeClientMessage() {
    console.log(`
        Actual about me section:
         _
        | |
        | |===( )   //////
        |_|   |||  | o o|
               ||| ( c  )                  ____
                ||| = /                  ||   _
                 ||||||                   ||     |
                 ||||||                ...||__/|-"
                 ||||||             __|________|__
                   |||             |______________|
                   |||             || ||      || ||
                   |||             || ||      || ||
-------------------|||-------------||-||------||-||-------
                   |__>            || ||      || ||
    `);
}

export default function ClientMessage() {
    const hasLogged = useRef(false);

    useEffect(() => {
        if (!hasLogged.current) {
            hasLogged.current = true;
            writeClientMessage();
        }
    }, []);

    return null;
}
