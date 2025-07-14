'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: false, message: '' });

        try {
            // Burada form verilerini gönderme işlemi yapılacak
            // Örnek: await sendEmail(formData);

            // Başarılı durumu simüle ediyoruz
            await new Promise(resolve => setTimeout(resolve, 1000));

            setStatus({
                loading: false,
                success: true,
                error: false,
                message: 'Mesajınız başarıyla gönderildi.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm text-gray-700">Ad Soyad</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full h-10 bg-white indent-2"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm text-gray-700">E-posta</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full h-10 bg-white indent-2"
                />
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm text-gray-700">Konu</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="block w-full h-10 bg-white indent-2"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm text-gray-700">Mesaj</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="block w-full h-10 bg-white indent-2"
                />
            </div>
            <div>
                <button
                    type="submit"
                    disabled={status.loading}
                    className="flex justify-center items-center h-10 px-4 text-sm text-white cursor-pointer bg-blue-600 hover:bg-blue-700"
                >
                    {status.loading ? 'Gönderiliyor...' : 'Gönder'}
                </button>
            </div>
            {status.message && (
                <div className={`mt-4 p-4 ${status.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {status.message}
                </div>
            )}
        </form>
    );
} 