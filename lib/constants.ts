export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    time: string;
    date: string;
};

export const events: EventItem[] = [
    {
        image: '/images/event1.png',
        title: 'Next.js Conf 2025',
        slug: 'nextjs-conf-2025',
        location: 'San Francisco, CA',
        time: '9:00 AM - 5:00 PM',
        date: 'Oct 24, 2025'
    },
    {
        image: '/images/event2.png',
        title: 'React Summit',
        slug: 'react-summit-2025',
        location: 'Amsterdam, NL',
        time: '10:00 AM - 6:00 PM',
        date: 'June 12, 2025'
    },
    {
        image: '/images/event3.png',
        title: "AI Engineer World's Fair",
        slug: 'ai-engineer-2025',
        location: 'San Francisco, CA',
        time: '8:30 AM - 7:00 PM',
        date: 'June 25, 2025'
    },
    {
        image: '/images/event4.png',
        title: 'JSWorld Conference',
        slug: 'jsworld-2025',
        location: 'Amsterdam, NL',
        time: '9:00 AM - 4:00 PM',
        date: 'Feb 12, 2025'
    },
    {
        image: '/images/event5.png',
        title: 'Devoxx UK',
        slug: 'devoxx-uk-2025',
        location: 'London, UK',
        time: '9:30 AM - 5:30 PM',
        date: 'May 14, 2025'
    },
    {
        image: '/images/event6.png',
        title: 'Web Summit 2025',
        slug: 'web-summit-2025',
        location: 'Lisbon, Portugal',
        time: '10:00 AM - 8:00 PM',
        date: 'Nov 10, 2025'
    }
];