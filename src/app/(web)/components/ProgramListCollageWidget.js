import Image from '@/app/(web)/components/Image';
export default function ProgramListCollageWidget({ programs }) {

    return (
        <div className='grid grid-cols-4 md:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-11'>
            {[...programs, ...programs].map((item, i) => (
                <div key={i} className='relative group select-none'>
                    {i % 3 === 0 ? (
                        <div className='h-full flex flex-col justify-center p-4 lg:p-8 group-hover:bg-black transition-all duration-300'>
                            <h3 className='text-xs font-bold'>{item.title}</h3>
                            <p className='text-[10px] line-clamp-1 lg:line-clamp-2 xl:line-clamp-2'>{item.description}</p>
                        </div>
                    ) : (
                        <>
                            <Image src={item.image.ratio1x1.small} alt={item.title} />
                            <div className="absolute z-10 inset-0 bg-blue-900 mix-blend-hue"></div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
