import React, { useEffect } from 'react';

export default function Google(props) {

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        catch (e) {}
    }, []);

    return (
        <>
           <ins class="adsbygoogle"
                style={{"display":"block"}}
                data-ad-client="ca-pub-7944821390015829"
                data-ad-slot={props.slotId}
                data-ad-format="fluid"
                data-ad-layout-key="+1v+rx+2i-61+1u">
           </ins>
        </>
    )
}