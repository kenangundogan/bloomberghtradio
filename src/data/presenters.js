export const presenters = [
    { id: 10001, name: 'Zeynep Erataman' },
    { id: 10002, name: 'Açıl Sezen' },
    { id: 10003, name: 'Alican Türkoğlu' },
    { id: 10004, name: 'Pelin Yantur' },
    { id: 10005, name: 'Burcu Kıratlı' },
    { id: 10006, name: 'Gözde Kuyumcu' },
    { id: 10007, name: 'İrfan Donat' },
    { id: 10008, name: 'Ece Mağat' },
    { id: 10009, name: 'Sefer Yüksel' },
    { id: 10010, name: 'Çağlar Kuzlukluoğlu' },
    { id: 10011, name: 'Zeynep Özyol' },
    { id: 10012, name: 'Prof. Dr. Sadi Uzunoğlu' },
    { id: 10013, name: 'Arzu Maliki' },
    { id: 10014, name: 'Aslı Şafak' },
    { id: 10015, name: 'Melike Ayan' },
    { id: 10016, name: 'Didem Arslanoğlu' }
];

// ID'ye göre presenter bulmak için helper fonksiyon
export const findPresenterById = (id) => presenters.find(p => p.id === id); 