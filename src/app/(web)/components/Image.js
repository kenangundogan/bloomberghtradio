export default function Featured({ src = '', title = '', className = '' }) {
    const hoverClass = 'transition duration-300 group-hover:transform group-hover:scale-120 group-hover:rotate-12';
    return (
        <div className={`group relative z-10 overflow-hidden flex-none bg-gray-200 ${className}`}>
            <img src={src} alt={title} className={`w-full h-full object-cover ${hoverClass}`} />
        </div>
    );
}
