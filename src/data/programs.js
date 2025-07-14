import { faker } from '@faker-js/faker';
import { findPresenterById } from '@/data/presenters';
import { getBroadcastSchedule } from '@/data/broadcastTime';

export const programs = [
    {
        id: 10010,
        title: 'İlk Söz',
        description: faker.lorem.sentences(7),
        slug: 'ilk-soz',
        url: 'programlar/ilk-soz-10010',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10001)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/ilk-soz/ilk-soz-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10020,
        title: 'Sabah Raporu',
        description: faker.lorem.sentences(7),
        slug: 'sabah-raporu',
        url: 'programlar/sabah-raporu-10020',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10002), findPresenterById(10003)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/sabah-raporu/sabah-raporu-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10030,
        title: 'Yatırım Bülteni',
        description: faker.lorem.sentences(7),
        slug: 'yatirim-bulteni',
        url: 'programlar/yatirim-bulteni-10030',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10004)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/yatirim-bulteni/yatirim-bulteni-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10040,
        title: 'Piyasa Masası',
        description: faker.lorem.sentences(7),
        slug: 'piyasa-masasi',
        url: 'programlar/piyasa-masasi-10040',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10001), findPresenterById(10005)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/piyasa-masasi/piyasa-masasi-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10050,
        title: 'Yatırım Kulübü',
        description: faker.lorem.sentences(7),
        slug: 'yatirim-kulubu',
        url: 'programlar/yatirim-kulubu-10050',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10004)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/yatirim-kulubu/yatirim-kulubu-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10060,
        title: 'Grafik Duellosu',
        description: faker.lorem.sentences(7),
        slug: 'grafik-duellosu',
        url: 'programlar/grafik-duellosu-10060',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10004), findPresenterById(10003)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/grafik-duellosu/grafik-duellosu-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10070,
        title: 'Fokus',
        description: faker.lorem.sentences(7),
        slug: 'fokus',
        url: 'programlar/fokus-10070',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10006)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/fokus/fokus-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/fokus/fokus-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/fokus/fokus-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/fokus/fokus-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/fokus/fokus-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/fokus/fokus-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/fokus/fokus-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/fokus/fokus-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/fokus/fokus-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/fokus/fokus-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10080,
        title: 'Seans Notları',
        description: faker.lorem.sentences(7),
        slug: 'seans-notlari',
        url: 'programlar/seans-notlari-10080',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10006)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/seans-notlari/seans-notlari-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10100,
        title: 'Risk Yönetimi',
        description: faker.lorem.sentences(7),
        slug: 'risk-yonetimi',
        url: 'programlar/risk-yonetimi-10100',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10007)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/risk-yonetimi/risk-yonetimi-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10110,
        title: '30 Dakika',
        description: faker.lorem.sentences(7),
        slug: '30-dakika',
        url: 'programlar/30-dakika-10110',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10008)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/30-dakika/30-dakika-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/30-dakika/30-dakika-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/30-dakika/30-dakika-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/30-dakika/30-dakika-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/30-dakika/30-dakika-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/30-dakika/30-dakika-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/30-dakika/30-dakika-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/30-dakika/30-dakika-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/30-dakika/30-dakika-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/30-dakika/30-dakika-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10120,
        title: 'Finansal Teknoloji',
        description: faker.lorem.sentences(7),
        slug: 'finansal-teknoloji',
        url: 'programlar/finansal-teknoloji-10120',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10009)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/finansal-teknoloji/finansal-teknoloji-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10130,
        title: 'Piyasa Hatti',
        description: faker.lorem.sentences(7),
        slug: 'piyasa-hatti',
        url: 'programlar/piyasa-hatti-10130',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10005)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/piyasa-hatti/piyasa-hatti-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10140,
        title: 'Akıllı Para',
        description: faker.lorem.sentences(7),
        slug: 'akilli-para',
        url: 'programlar/akilli-para-10140',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10010)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/akilli-para/akilli-para-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/akilli-para/akilli-para-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/akilli-para/akilli-para-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/akilli-para/akilli-para-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/akilli-para/akilli-para-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/akilli-para/akilli-para-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/akilli-para/akilli-para-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/akilli-para/akilli-para-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/akilli-para/akilli-para-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/akilli-para/akilli-para-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10150,
        title: 'Finans Merkezi',
        description: faker.lorem.sentences(7),
        slug: 'finans-merkezi',
        url: 'programlar/finans-merkezi-10150',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10002)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/finans-merkezi/finans-merkezi-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10160,
        title: 'Akilli Tarim',
        description: faker.lorem.sentences(7),
        slug: 'akilli-tarim',
        url: 'programlar/akilli-tarim-10160',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10007)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/akilli-tarim/akilli-tarim-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10170,
        title: '60 Dakika',
        description: faker.lorem.sentences(7),
        slug: '60-dakika',
        url: 'programlar/60-dakika-10170',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10011)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/60-dakika/60-dakika-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/60-dakika/60-dakika-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/60-dakika/60-dakika-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/60-dakika/60-dakika-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/60-dakika/60-dakika-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/60-dakika/60-dakika-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/60-dakika/60-dakika-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/60-dakika/60-dakika-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/60-dakika/60-dakika-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/60-dakika/60-dakika-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10180,
        title: 'Günden Kalanlar',
        description: faker.lorem.sentences(7),
        slug: 'gunden-kalanlar',
        url: 'programlar/gunden-kalanlar-10180',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10011)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/gunden-kalanlar/gunden-kalanlar-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10190,
        title: 'Aile Ekonomisi',
        description: faker.lorem.sentences(7),
        slug: 'aile-ekonomisi',
        url: 'programlar/aile-ekonomisi-10190',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10006), findPresenterById(10012)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/aile-ekonomisi/aile-ekonomisi-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10200,
        title: 'Girişimcilik Dünyası',
        description: faker.lorem.sentences(7),
        slug: 'girisimcilik-dunyasi',
        url: 'programlar/girisimcilik-dunyasi-10200',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10006)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/girisimcilik-dunyasi/girisimcilik-dunyasi-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10210,
        title: 'Tarım Analiz',
        description: faker.lorem.sentences(7),
        slug: 'tarim-analiz',
        url: 'programlar/tarim-analiz-10210',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10007)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/tarim-analiz/tarim-analiz-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10220,
        title: 'Yapay Zeka Merkezi',
        description: faker.lorem.sentences(7),
        slug: 'yapay-zeka-merkezi',
        url: 'programlar/yapay-zeka-merkezi-10220',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10006)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/yapay-zeka-merkezi/yapay-zeka-merkezi-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/yapay-zeka-merkezi/yapay-zeka-merkezi-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/yapay-zeka-merkezi/ilk-soz-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/yapay-zeka-merkezi/yapay-zeka-merkezi-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/yapay-zeka-merkezi/yapay-zeka-merkezi-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/yapay-zeka-merkezi/yapay-zeka-merkezi-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/yapay-zeka-merkezi/yapay-zeka-merkezi-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/yapay-zeka-merkezi/yapay-zeka-merkezi-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/yapay-zeka-merkezi/yapay-zeka-merkezi-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/yapay-zeka-merkezi/yapay-zeka-merkezi-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10230,
        title: 'Üst Düzey',
        description: faker.lorem.sentences(7),
        slug: 'ust-duzey',
        url: 'programlar/ust-duzey-10230',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10013)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/ust-duzey/ust-duzey-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10240,
        title: 'Aslı Şafakla İşin Aslı',
        description: faker.lorem.sentences(7),
        slug: 'asli-safakla-isin-asli',
        url: 'programlar/asli-safakla-isin-asli-10240',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10014)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/asli-safakla-isin-asli/asli-safakla-isin-asli-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10250,
        title: 'Parasal Gevşeme',
        description: faker.lorem.sentences(7),
        slug: 'parasal-gevseme',
        url: 'programlar/parasal-gevseme-10250',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10002)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/parasal-gevseme/parasal-gevseme-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10260,
        title: 'Küresel Piyasalar',
        description: faker.lorem.sentences(7),
        slug: 'kuresel-piyasalar',
        url: 'programlar/kuresel-piyasalar-10260',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10015)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/kuresel-piyasalar/kuresel-piyasalar-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10270,
        title: 'Ekonomik Görünüm',
        description: faker.lorem.sentences(7),
        slug: 'ekonomik-gorunum',
        url: 'programlar/ekonomik-gorunum-10270',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10015)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/ekonomik-gorunum/ekonomik-gorunum-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10300,
        title: 'Kapanışa Doğru',
        description: faker.lorem.sentences(7),
        slug: 'kapanisa-dogru',
        url: 'programlar/kapanisa-dogru-10300',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10016), findPresenterById(10003)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/kapanisa-dogru/kapanisa-dogru-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10310,
        title: 'Reklamarkası',
        description: faker.lorem.sentences(7),
        slug: 'reklamarkasi',
        url: 'programlar/reklamarkasi-10310',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10016), findPresenterById(10003)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/reklamarkasi/reklamarkasi-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10320,
        title: 'Otomotiv Zirvesi',
        description: faker.lorem.sentences(7),
        slug: 'otomotiv-zirvesi',
        url: 'programlar/otomotiv-zirvesi-10320',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10016), findPresenterById(10003)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/otomotiv-zirvesi/otomotiv-zirvesi-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10330,
        title: 'Yatırım Vizyonu',
        description: faker.lorem.sentences(7),
        slug: 'yatirim-vizyonu',
        url: 'programlar/yatirim-vizyonu-10330',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10016), findPresenterById(10003)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/yatirim-vizyonu/yatirim-vizyonu-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10340,
        title: 'Gündem Teknoloji',
        description: faker.lorem.sentences(7),
        slug: 'gundem-teknoloji',
        url: 'programlar/gundem-teknoloji-10340',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10016), findPresenterById(10003)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/gundem-teknoloji/gundem-teknoloji-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10350,
        title: 'Sermaye Pusulası',
        description: faker.lorem.sentences(7),
        slug: 'sermaye-pusulasi',
        url: 'programlar/sermaye-pusulasi-10350',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10016), findPresenterById(10003)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/sermaye-pusulasi/sermaye-pusulasi-1x1-xxlarge.jpg`
            }
        }
    },
    {
        id: 10360,
        title: 'Kripto Para',
        description: faker.lorem.sentences(7),
        slug: 'kripto-para',
        url: 'programlar/kripto-para-10360',
        status: faker.helpers.arrayElement(['active', 'inactive']),
        presenters: [findPresenterById(10016), findPresenterById(10003)],
        broadcast: getBroadcastSchedule(),
        date: {
            createdAt: faker.date.recent().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            publishedAt: faker.date.recent().toISOString(),
        },
        image: {
            ratio16x9: {
                small: `/assets/images/dummy/programlar/kripto-para/kripto-para-16x9-small.jpg`,
                medium: `/assets/images/dummy/programlar/kripto-para/kripto-para-16x9-medium.jpg`,
                large: `/assets/images/dummy/programlar/kripto-para/kripto-para-16x9-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/kripto-para/kripto-para-16x9-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/kripto-para/kripto-para-16x9-xxlarge.jpg`
            },
            ratio1x1: {
                small: `/assets/images/dummy/programlar/kripto-para/kripto-para-1x1-small.jpg`,
                medium: `/assets/images/dummy/programlar/kripto-para/kripto-para-1x1-medium.jpg`,
                large: `/assets/images/dummy/programlar/kripto-para/kripto-para-1x1-large.jpg`,
                xlarge: `/assets/images/dummy/programlar/kripto-para/kripto-para-1x1-xlarge.jpg`,
                xxlarge: `/assets/images/dummy/programlar/kripto-para/kripto-para-1x1-xxlarge.jpg`
            }
        }
    }
];

export const findProgramById = (id) => programs.find(p => p.id === id); 