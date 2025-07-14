import { faker } from '@faker-js/faker';

// Türkçe gün isimleri
const TURKISH_DAYS = ['pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi', 'pazar'];

// Hafta içi ve hafta sonu günlerini ayır
const WEEKDAYS = ['pazartesi', 'sali', 'carsamba', 'persembe', 'cuma'];
const WEEKENDS = ['cumartesi', 'pazar'];

// Yayın zamanı oluşturan fonksiyon
export const createBroadcastSchedule = () => {
    // %90 olasılıkla hafta içi her gün seç
    const isWeekdays = faker.number.int({ min: 1, max: 100 }) <= 90;
    
    let selectedDays;
    if (isWeekdays) {
        // Hafta içi her gün seç
        selectedDays = [...WEEKDAYS];
    } else {
        // Rastgele 1-5 arası gün sayısı seç
        const numberOfDays = faker.number.int({ min: 1, max: 5 });
        // Kullanılacak günleri karıştır ve istenen sayıda seç
        selectedDays = faker.helpers.shuffle([...TURKISH_DAYS]).slice(0, numberOfDays);
    }
    
    // Program için tek bir başlangıç ve bitiş saati belirle
    const startHour = faker.number.int({ min: 9, max: 15 });
    const endHour = startHour + faker.number.int({ min: 1, max: 3 });
    
    // Her gün için aynı saatleri kullan
    const days = selectedDays.map(day => ({
        day,
        start: `${startHour}:00`,
        end: `${endHour}:00`
    }));

    // Açıklama oluştur
    let description = '';
    
    // Tüm hafta içi günleri seçili mi kontrol et
    const hasAllWeekdays = WEEKDAYS.every(day => selectedDays.includes(day));
    // Tüm hafta sonu günleri seçili mi kontrol et
    const hasAllWeekends = WEEKENDS.every(day => selectedDays.includes(day));

    if (hasAllWeekdays) {
        description = 'Hafta içi her gün';
    } else if (hasAllWeekends) {
        description = 'Hafta sonu';
    }

    return {
        days,
        time: {
            start: `${startHour}:00`,
            end: `${endHour}:00`,
            description,
        }
    };
};

// Her program için yeni bir yayın programı oluşturan fonksiyon
export const getBroadcastSchedule = () => createBroadcastSchedule();
