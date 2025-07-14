export default function Featured({ children, featuredName = '', sectionClass = '', sectionWrapperClass = '', backgroundSize = 'before:h-[calc(100%+5rem)] after:h-[calc(100%+5rem)]' }) {
    return (
        <section data-type="featured" data-name={`${featuredName}`} className={`
            relative w-full flex justify-center items-center bg-blue-800 ${sectionClass}
            after:content-[''] after:absolute after:w-full after:bg-gradient-to-b after:from-indigo-950 after:to-blue-800 after:top-0 after:left-0 after:opacity-0
            before:content-[''] before:absolute before:w-full before:bg-gradient-to-b before:from-indigo-950 before:to-blue-800 before:top-0 before:left-0
            before:bg-cover before:bg-center before:bg-no-repeat
            ${backgroundSize} before:bg-no-repeat before:bg-cover before:bg-center
            `}>
            <div className={`relative z-10 container m-auto px-4 text-white ${sectionWrapperClass}`}>
                {children}
            </div>
        </section>
    );
}
