'use client' //uses event so must be client managed, since page is server rendered make this button

import Image from "next/image";

const ExploreBtn = () => {
    return (
        <button onClick={()=> console.log('explore clicked')} type="button" id="explore-btn" className="mt-7 mx-auto">
            <a href="#events">
                Explore Events
                <Image alt="arrow-down" src="/icons/arrow-down.svg" width={24} height={24} />
            </a>
        </button>
    )
}
export default ExploreBtn
