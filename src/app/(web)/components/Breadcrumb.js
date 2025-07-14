import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ children, className }) => {
    const items = React.Children.toArray(children);

    return (
        <div data-type="Breadcrumb" className="py-4">
            <ul className={`w-full flex gap-1 items-center text-xs ${className || ''}`}>
                {items.map((child, index) => (
                    <li
                        key={index}
                        data-type="item"
                        className="flex items-center gap-2"
                    >
                        {child}

                        {index < items.length - 1 && (
                            <ChevronRight strokeWidth={1} className="size-2 text-white/50" />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Breadcrumb.Item = ({ children, href }) => {
    return href ? (
        <a href={href} className="font-bold hover:underline">
            {children}
        </a>
    ) : (
        <span>{children}</span>
    );
};

Breadcrumb.Item.displayName = 'BreadcrumbItem';

export default Breadcrumb;
