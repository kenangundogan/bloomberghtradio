export default function CarouselEffect({ swiper, on, extendParams }) {
    extendParams({
        carouselEffect: {
            opacityStep: 0.33,
            scaleStep: 0.2,
            sideSlides: 2
        }
    });

    on('beforeInit', () => {
        if (swiper.params.effect !== 'carousel') return;

        swiper.classNames.push(`${swiper.params.containerModifierClass}carousel`);

        const params = {
            watchSlidesProgress: true,
            centeredSlides: true
        };

        Object.assign(swiper.params, params);
        Object.assign(swiper.originalParams, params);
    });

    on('progress', () => {
        if (swiper.params.effect !== 'carousel') return;

        const { scaleStep, opacityStep, sideSlides } = swiper.params.carouselEffect;

        const r = Math.max(Math.min(sideSlides, 3), 1);
        const scaleMap = { 1: 2, 2: 1, 3: 0.2 };
        const offsetMap = { 1: 50, 2: 50, 3: 67 };

        const scaleMultiplier = scaleMap[r];
        const offsetMultiplier = offsetMap[r];

        const totalSlides = swiper.slides.length;

        for (let i = 0; i < totalSlides; i++) {
            const slide = swiper.slides[i];
            const progress = slide.progress;
            const absProgress = Math.abs(progress);

            let distortion = 1;
            if (absProgress > 1) {
                distortion = 0.3 * (absProgress - 1) * scaleMultiplier + 1;
            }

            const opacityTargets = slide.querySelectorAll('.swiper-carousel-animate-opacity');

            const translateX = progress * distortion * offsetMultiplier * (swiper.rtlTranslate ? -1 : 1) + '%';
            const scale = 1 - absProgress * scaleStep;
            const zIndex = totalSlides - Math.abs(Math.round(progress));
            const opacity = absProgress > r + 1 ? 0 : 1;

            slide.style.transform = `translateX(${translateX}) scale(${scale})`;
            slide.style.zIndex = zIndex;
            slide.style.opacity = opacity;

            opacityTargets.forEach(el => {
                el.style.opacity = 1 - absProgress * opacityStep;
            });
        }
    });

    on('resize', () => {
        if (swiper.virtual && swiper.params.virtual && swiper.params.virtual.enabled) {
            requestAnimationFrame(() => {
                if (!swiper.destroyed) {
                    swiper.updateSlides();
                    swiper.updateProgress();
                }
            });
        }
    });

    on('setTransition', (swiperInstance, duration) => {
        if (swiper.params.effect !== 'carousel') return;

        for (let i = 0; i < swiper.slides.length; i++) {
            const slide = swiper.slides[i];
            const opacityTargets = slide.querySelectorAll('.swiper-carousel-animate-opacity');

            slide.style.transitionDuration = `${duration}ms`;

            opacityTargets.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
            });
        }
    });
}
