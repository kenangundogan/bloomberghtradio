'use client';

import { useRef, useState, useEffect } from 'react';
import { Pause, Play, Volume2, VolumeX, Radio } from 'lucide-react';

export default function RadioPlayer({ title, description, src, image }) {
    const audioRef = useRef(null);

    // Oynatma durumu
    const [isPlaying, setIsPlaying] = useState(false);
    // Ses kontrolü
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [prevVolume, setPrevVolume] = useState(1);

    // Volume state değiştikçe audio elementine aktar
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    // Oynat/durdur
    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Ses barına tıklanınca ses seviyesi hesaplama
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

    // Sessize al / sesi aç
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

    return (
        <section data-type="radioPlayer" className="sticky top-22 z-40 m-auto w-full bg-blue-950 overflow-hidden">
            <div className="container relative m-auto p-4 text-white flex items-center gap-4">

                {/* Radyo Görseli */}
                <div className="relative h-14 flex">
                    <img src="/assets/images/radio/1x1.svg" className="relative z-10 w-14 h-full rounded-full object-cover bg-white/10"/>
                    <img src={image} className="relative w-full h-14 -ml-6 rounded-full object-cover bg-white/10"/>
                </div>

                {/* Başlık & Açıklama */}
                <div className="flex-1">
                    <p className="text-sm font-bold">{title}</p>
                    <p className="text-xs text-zinc-300">{description}</p>
                </div>

                {/* Ses Kontrolü (Mute + Custom Volume Bar) */}
                <div className="flex items-center gap-2">

                    {/* Ses Barı */}
                    <div onClick={handleVolumeBarClick} className="w-20 h-2 bg-gray-700 rounded cursor-pointer hidden md:block">
                        <div className="h-full bg-blue-800 rounded" style={{ width: `${volume * 100}%` }}></div>
                    </div>

                    {/* Ses Aç/Kapa Butonu */}
                    <button onClick={toggleMute} className="w-10 h-10 border border-white rounded-full hidden md:flex items-center justify-center hover:bg-blue-900">
                        {(isMuted || volume === 0) ? <VolumeX strokeWidth={1} size={20} /> : <Volume2 strokeWidth={1} size={20} />}
                    </button>

                    {/* Oynat/Durdur Butonu */}
                    <button onClick={togglePlay} className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-blue-900">
                        {isPlaying ? <Pause strokeWidth={1} size={18} /> : <Play strokeWidth={1} size={18} />}
                    </button>

                    {/* Radyo İkonu */}
                    <div className="relative size-10">
                        <Radio strokeWidth={1} size={18} className='absolute z-10 inset-0 m-auto' />
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
                        <span className="relative inline-flex size-10 rounded-full bg-blue-900"></span>
                    </div>
                </div>

                {/* Audio Elementi */}
                <audio ref={audioRef} src={src} preload="none"/>
            </div>
        </section>
    );
}
