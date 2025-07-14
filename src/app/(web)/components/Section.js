export default function Section({ children, sectionName = '', sectionClass = '', sectionWrapperClass = '' }) {
    return (
        <section data-type="section" data-name={`${sectionName}`} className={`relative ${sectionClass}`}>
            <div data-type="sectionWrapper" className={`relative container m-auto px-4 ${sectionWrapperClass}`}>
                {children}
            </div>
        </section>
    );
}
