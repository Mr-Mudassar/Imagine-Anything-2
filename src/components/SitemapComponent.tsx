import react from 'react';
import Image from 'next/image';

export default function SitemapComponent({item} : any) {

     console.log(item, "item textt")

    return (
        <div>
            {
                item?.children?.map((innerItem: any) => {
                    <div key={innerItem?.value} className='flex flex-wrap'>
                        <Image src={innerItem?.value} alt="sitemap-images" width={500} height={500} />
                        <h1 className='text-white'>{innerItem?.name}</h1>
                    </div>
                })
            }
        </div>
    )
}