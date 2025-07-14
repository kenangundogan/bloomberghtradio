'use client';

import { useRef, useState, useEffect } from 'react';
import { Pause, Play, Volume2, VolumeX, RotateCw, RotateCcw } from 'lucide-react';

export default function PodcastPlayer({ title, subtitle, presenters, description, date, src, image }) {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [prevVolume, setPrevVolume] = useState(1);

    // Buffer'ı göstermek için son buffered değeri
    const [bufferedTime, setBufferedTime] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Metadata yüklendiğinde çağrılır
        const handleLoadedMetadata = () => {
            if (audio.duration && audio.duration !== Infinity) {
                setDuration(audio.duration);
            }
        };

        // Tarayıcı dosyayı oynatabilecek kadar yükleyince çağrılır
        const handleCanPlayThrough = () => {
            if (audio.duration && audio.duration !== Infinity) {
                setDuration(audio.duration);
            }
        };

        // Zaman ilerledikçe çağrılır
        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        // Buffer bilgisi geldikçe çağrılır
        const handleProgress = () => {
            /**
             * audio.buffered, bir TimeRanges objesi döndürür.
             * Örneğin, bir parçası yüklendiyse 0. ve 1. index aralığı olabilir.
             * Biz en son buffer bitişini alarak (buffered.end(buffered.length - 1))
             * bufferedTime state'ine atıyoruz.
             */
            if (audio.buffered.length > 0) {
                const end = audio.buffered.end(audio.buffered.length - 1);
                setBufferedTime(end);
            }
        };

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('canplaythrough', handleCanPlayThrough);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('progress', handleProgress);

        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('canplaythrough', handleCanPlayThrough);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('progress', handleProgress);
        };
    }, []);

    // src değiştiğinde veya bileşen ilk yüklendiğinde audio’yu resetle
    useEffect(() => {
        const audio = audioRef.current;
        if (audio && src) {
            setIsPlaying(false);
            setCurrentTime(0);
            setDuration(0);
            setBufferedTime(0);
            audio.pause();
            audio.load(); // metadata’yı tekrar yükle
        }
    }, [src]);

    // Volume güncellemelerini audio elementine aktar
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (!isPlaying) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const skipForward = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime += 15;
        }
    };

    const skipBackward = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime -= 15;
        }
    };

    // Progress bar tıklaması
    const handleProgressBarClick = (e) => {
        if (!duration) return;
        const bar = e.currentTarget;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * duration;

        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
        setCurrentTime(newTime);
    };

    // Volume bar tıklaması
    const handleVolumeBarClick = (e) => {
        const bar = e.currentTarget;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        let newVolume = clickX / rect.width;
        if (newVolume < 0) newVolume = 0;
        if (newVolume > 1) newVolume = 1;

        setVolume(newVolume);
        if (newVolume > 0) {
            setIsMuted(false);
        }
    };

    // Mute aç/kapa
    const toggleMute = () => {
        if (isMuted || volume === 0) {
            setVolume(prevVolume > 0 ? prevVolume : 1);
            setIsMuted(false);
        } else {
            setPrevVolume(volume);
            setVolume(0);
            setIsMuted(true);
        }
    };

    // Zaman formatı
    const formatTime = (sec) => {
        if (!sec || isNaN(sec)) return '0:00';
        const mins = Math.floor(sec / 60) || 0;
        const secs = Math.floor(sec % 60) || 0;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Oynatma yüzdesi
    const progressPercentage = duration ? (currentTime / duration) * 100 : 0;
    // Buffer yüzdesi
    const bufferPercentage = duration ? (bufferedTime / duration) * 100 : 0;
    // Ses yüzdesi
    const volumePercentage = volume * 100;

    return (
        <section data-type="podcastPlayer" className="sticky top-22 z-40 m-auto w-full bg-blue-950 overflow-hidden">
            <div className="container relative m-auto p-4 text-white flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="relative h-14 flex">
                        <img src="/assets/images/radio/1x1.svg" className="relative w-14 h-full rounded-full object-cover bg-blue-900" />
                        <img src={image} className="relative z-10 w-14 h-14 -ml-6 rounded-full object-cover bg-blue-900" />
                    </div>
                    <div className='leading-none flex flex-col gap-px text-zinc-300'>
                        <p className="text-xs">{presenters}</p>
                        <p className="text-sm font-bold">{title}</p>
                        <p className="text-xs truncate">{subtitle}</p>
                        <p className="text-xs">{date}</p>
                        <p className="text-xs">{description}</p>
                    </div>
                </div>

                <div className="flex gap-2">

                    {/* Ses Kontrolü */}
                    <div className="flex items-center gap-2">
                        <div className="w-18 h-2 bg-blue-900 rounded cursor-pointer hidden md:block" onClick={handleVolumeBarClick}>
                            <div className="h-full bg-blue-500 rounded" style={{ width: `${volumePercentage}%` }}></div>
                        </div>
                        <button onClick={toggleMute} className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-blue-900">
                            {(isMuted || volume === 0) ? <VolumeX size={20} strokeWidth={1} /> : <Volume2 size={20} strokeWidth={1} />}
                        </button>
                    </div>

                    <button onClick={skipBackward} className="w-10 h-10 border border-white rounded-full hidden md:flex items-center justify-center hover:bg-blue-900">
                        <RotateCcw size={18} strokeWidth={1} />
                    </button>

                    <button onClick={togglePlay} className={`relative w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-blue-900 ${isPlaying ? 'bg-blue-900' : ''}`}>
                        {
                            isPlaying ?
                                <>
                                    <Pause size={18} strokeWidth={1} className='absolute z-10 inset-0 m-auto' />
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
                                    <span className="relative inline-flex w-full h-full rounded-full bg-blue-900"></span>
                                </>
                                :
                                <>
                                    <Play size={18} strokeWidth={1} className='absolute z-10 inset-0 m-auto' />
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex w-full h-full rounded-full bg-blue-900"></span>
                                </>
                        }
                    </button>

                    <button onClick={skipForward} className="w-10 h-10 border border-white rounded-full hidden md:flex items-center justify-center hover:bg-blue-900">
                        <RotateCw size={18} strokeWidth={1} />
                    </button>
                </div>

                <div className="w-full flex items-center gap-2">
                    {/* Custom Progress Bar (Buffer + Played) */}
                    <div className="relative w-full h-2 bg-blue-900 rounded cursor-pointer" onClick={handleProgressBarClick}>
                        {/* BUFFER GÖSTERGESİ */}
                        <div className="absolute left-0 top-0 h-2 bg-blue-800 rounded" style={{ width: `${bufferPercentage}%` }}></div>
                        {/* OYNATMA GÖSTERGESİ */}
                        <div className="absolute left-0 top-0 h-2 bg-blue-500 rounded" style={{ width: `${progressPercentage}%` }}></div>
                    </div>

                    {/* Zaman Bilgileri */}
                    <div className="flex justify-end text-xs">
                        <span>{formatTime(currentTime)}</span>
                        <span className="mx-1">/</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <audio ref={audioRef} src={src} preload="metadata" />
            </div>
        </section>
    );
}
