import { faker } from '@faker-js/faker';
import { programs } from '@/data/programs';

const randomSourceSet = [
    'https://vmcdn.ciner.com.tr/bbradyo/2025/03/26/26.03.2025-Ekonomik-Gorunum_3802697.mp3',
    'https://vmcdn.ciner.com.tr/bbradyo/2025/03/27/27.03.2025-Akilli-Para_8924480.mp3',
    'https://vmcdn.ciner.com.tr/bbradyo/2025/03/27/27.03.2025-Piyasa-Hatti_7755322.mp3',
    'https://vmcdn.ciner.com.tr/bbradyo/2025/03/27/27.03.2025-Yatirim-Bulteni_5514811.mp3',
    'https://vmcdn.ciner.com.tr/bbradyo/2025/03/27/27.03.2025-Finans-Merkezi_9655202.mp3',
];

// Yeni podcast oluşturma mantığı
const additionalPodcasts = [];

// Her program için minimum podcast sayısı
const minPodcastsPerProgram = 5;
// Her program için maksimum podcast sayısı
const maxPodcastsPerProgram = 9;

// Her program için podcast sayısını belirle
const podcastCounts = {};
programs.forEach(program => {
    podcastCounts[program.id] = faker.number.int({ min: minPodcastsPerProgram, max: maxPodcastsPerProgram });
});

// Her program için bir podcast oluştur ve tüm programlar için podcast oluşturduktan sonra tekrar başa dön
let podcastIndex = 0;
let allPodcastsCreated = false;

while (!allPodcastsCreated) {
    allPodcastsCreated = true;
    
    for (const program of programs) {
        // Eğer bu program için hala podcast oluşturulması gerekiyorsa
        if (podcastIndex < podcastCounts[program.id]) {
            allPodcastsCreated = false;
            
            additionalPodcasts.push({
                programId: program.id,
                programTitle: program.title,
                id: program.id + podcastIndex + 1,
                title: faker.lorem.words(3),
                description: faker.lorem.sentences(7),
                slug: faker.lorem.slug(3),
                url: `/podcastler/${program.slug}-${program.id + podcastIndex + 1}`,
                status: faker.helpers.arrayElement(['active', 'inactive']),
                date: {
                    createdAt: faker.date.recent().toISOString(),
                    updatedAt: faker.date.recent().toISOString(),
                    publishedAt: faker.date.recent().toISOString(),
                },
                audio: {
                    time: faker.number.int({ min: 15, max: 60 }),
                    source: faker.helpers.arrayElement(randomSourceSet)
                },
                image: {
                    ratio16x9: {
                        small: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-16x9-small.jpg`,
                        medium: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-16x9-medium.jpg`,
                        large: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-16x9-large.jpg`,
                        xlarge: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-16x9-xlarge.jpg`,
                        xxlarge: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-16x9-xxlarge.jpg`
                    },
                    ratio1x1: {
                        small: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-1x1-small.jpg`,
                        medium: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-1x1-medium.jpg`,
                        large: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-1x1-large.jpg`,
                        xlarge: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-1x1-xlarge.jpg`,
                        xxlarge: `/assets/images/dummy/programlar/${program.slug}/${program.slug}-1x1-xxlarge.jpg`
                    }
                }
            });
        }
    }
    
    podcastIndex++;
}

// Combine guaranteed and additional podcasts
export const podcasts = [...additionalPodcasts];

export const findPodcastById = (id) => podcasts.find(p => p.id === id);

export const findPodcastsByProgramId = (programId) => podcasts.filter(p => p.programId === programId); 