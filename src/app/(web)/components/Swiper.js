'use client';
import React, { useEffect, useRef, useMemo } from 'react';
import { useId } from 'react';
import SwiperCore from 'swiper';
import CarouselEffect from '@/app/(web)/components/carouselEffect';
import { Pagination, Navigation, Autoplay, EffectFade, EffectCoverflow } from 'swiper/modules';

// SwiperCore.use bir React hook olmadığı için ESLint uyarısını devre dışı bırakıyoruz.
// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade, EffectCoverflow, CarouselEffect]);

/**
 * Swiper.Item Bileşeni
 * - Her bir slide öğesini temsil eder.
 * - React'in key prop'unu DOM'a aktarmadan kullanır.
 */
function SwiperItem({ children, className = '', ...rest }) {
    const { key, ...restProps } = rest;
    return (
        <div className={`swiper-slide ${className}`} {...restProps}>
            {children}
        </div>
    );
}

/**
 * Asıl Swiper bileşeni.
 * - data-options veya options prop'u ile ayarları alır.
 * - Eğer uniqueId varsa, navigation ve pagination selector'larını unique hale getirir.
 */
function Swiper({ children, uniqueId, ...rest }) {
    const { 'data-options': dataOptions, options: optsProp, className, ...otherRest } = rest;

    // data-options veya options prop'unu parse edip options nesnesine çeviriyoruz.
    const options = useMemo(() => {
        let opts = {};
        if (dataOptions) {
            try {
                opts = JSON.parse(dataOptions);
            } catch (e) {
                console.error("data-options geçerli JSON değil:", e);
            }
        } else if (optsProp) {
            opts = optsProp;
        }
        // Unique id varsa, navigation ve pagination selector'larını güncelliyoruz.
        if (uniqueId) {
            if (opts.navigation) {
                opts.navigation = {
                    ...opts.navigation,
                    nextEl: `.swiper-button-next-${uniqueId}`,
                    prevEl: `.swiper-button-prev-${uniqueId}`,
                };
            }
            if (opts.pagination) {
                opts.pagination = {
                    ...opts.pagination,
                    el: `.swiper-pagination-${uniqueId}`,
                };
            }
        }
        return opts;
    }, [dataOptions, optsProp, uniqueId]);

    const containerRef = useRef(null);

    useEffect(() => {
        let swiperInstance;
        if (containerRef.current) {
            swiperInstance = new SwiperCore(containerRef.current, {
                ...options,
            });
        }
        return () => {
            if (swiperInstance) swiperInstance.destroy(true, true);
        };
    }, [options]);

    return (
        <div className={`swiper ${className || ''}`} ref={containerRef} {...otherRest}>
            <div className="swiper-wrapper">
                {children}
            </div>
        </div>
    );
}

// Swiper.Item'ı Swiper'a bağlıyoruz
Swiper.Item = SwiperItem;

/**
 * SwiperContainer Bileşeni
 * - Swiper bileşenini uniqueId ile sarar ve dışarıda navigation ile pagination
 *   elementlerini yerleştirir.
 * - Ekstra props ile bu öğelerin className'lerini dışarıdan özelleştirebilirsiniz.
 */
function SwiperContainer({
    children,
    navPrevClassName = '',
    navNextClassName = '',
    paginationClassName = '',
    swiperWrapperClassName = '',
    ...rest
}) {
    const uniqueId = useId();
    const { 'data-options': dataOptions, options: optsProp, className, ...otherRest } = rest;

    // Container üzerinden gelen data-options veya options prop'unu parse ediyoruz.
    const containerOptions = useMemo(() => {
        let opts = {};
        if (dataOptions) {
            try {
                opts = JSON.parse(dataOptions);
            } catch (e) {
                console.error("SwiperContainer data-options geçerli JSON değil:", e);
            }
        } else if (optsProp) {
            opts = optsProp;
        }
        // Unique id ile selector'ları güncelliyoruz.
        if (uniqueId) {
            if (opts.navigation) {
                opts.navigation = {
                    ...opts.navigation,
                    nextEl: `.swiper-button-next-${uniqueId}`,
                    prevEl: `.swiper-button-prev-${uniqueId}`,
                };
            }
            if (opts.pagination) {
                opts.pagination = {
                    ...opts.pagination,
                    el: `.swiper-pagination-${uniqueId}`,
                };
            }
        }
        return opts;
    }, [dataOptions, optsProp, uniqueId]);

    return (
        <div className={`SwiperContainer relative ${className || ''}`} data-options={dataOptions} {...otherRest}>
            {/* Swiper bileşenine uniqueId ve options'u aktarıyoruz */}
            <div className={`swiperWrapper ${swiperWrapperClassName}`}>
                {React.Children.map(children, (child) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child, { uniqueId, options: containerOptions })
                        : child
                )}
            </div>
            {containerOptions.navigation && (
                <>
                    <div
                        className={`swiper-button-prev swiper-button-prev-${uniqueId} ${navPrevClassName}`}
                    ></div>
                    <div
                        className={`swiper-button-next swiper-button-next-${uniqueId} ${navNextClassName}`}
                    ></div>
                </>
            )}
            {containerOptions.pagination && (
                <div
                    className={`swiper-pagination swiper-pagination-${uniqueId} ${paginationClassName}`}
                ></div>
            )}
        </div>
    );
}

export { Swiper, SwiperContainer };
