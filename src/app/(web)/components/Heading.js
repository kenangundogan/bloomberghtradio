import { Wifi, Podcast, Radio, RadioTower, Signature, ReceiptText, Scale, Cookie, Info, Tags, Map, GalleryHorizontalEnd } from 'lucide-react';

export default function Heading({ name = "Heading", className = '', icon = 'Default' }) {
    return (
        <div className={`flex items-center gap-2 py-4 text-white ${className}`}>
            <span className='text-yellow-600'>
                {icon === 'Default' && <GalleryHorizontalEnd strokeWidth={1} size={40} className='' />}
                {icon === 'Podcast' && <Podcast strokeWidth={1} size={40} className='' />}
                {icon === 'Streaming' && <Radio strokeWidth={1} size={40} className='' />}
                {icon === 'Frekanslar' && <RadioTower strokeWidth={1} size={40} className='' />}
                {icon === 'Contact' && <ReceiptText strokeWidth={1} size={40} className='' />}
                {icon === 'Legal' && <Scale strokeWidth={1} size={40} className='' />}
                {icon === 'Cookie' && <Cookie strokeWidth={1} size={40} className='' />}
                {icon === 'Info' && <Info strokeWidth={1} size={40} className='' />}
                {icon === 'Tags' && <Tags strokeWidth={1} size={40} className='' />}
                {icon === 'Map' && <Map strokeWidth={1} size={40} className='' />}
            </span>
            <span className='text-2xl md:text-4xl font-bold'>{name}</span>
        </div>
    );
}
