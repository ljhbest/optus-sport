module.exports = [
    {
        id: '100001',
        title: 'asset 1',
        description: 'this is asset 1',
        broadcastStartTime: '2020-03-11T02:48:28Z',
        duration: 1000,
        image: 'https://image.domain1.com/cms/assets/100001.jpg',
        match: {
            id: 'matchId200001',
            homeTeam: {
                id: 'teamId00001',
                name: 'team 000001',
                image: 'https://image.domain1.com/cms/teams/100001.jpg',
                /* ..optional fields */
                address: "team 00001 address"
            },
            awayTeam: {
                id: 'teamId00002',
                name: 'team 000002',
                image: 'https://image.domain1.com/cms/teams/100002.jpg'
            }
        },
        /* ..other fields */
        tags: ['tag1', 'tag2'],
        updateAt: '2019-02-16T02:48:28Z',
        type: 'minimatch'
    },
    {
        id: '100002',
        title: 'asset 2',
        description: 'this is asset 2',
        image: 'https://image.domain1.com/cms/assets/100002.jpg',
        broadcastStartTime: '2018-02-10T02:48:28Z',
        duration: 60000,
        /* ..other fields */
        tags: ['tag1', 'tag2'],
        updateAt: '2019-02-16T02:48:28Z',
        type: 'minimatch'
    },
    {
        id: '100003',
        /* missing title and description */
        image: 'https://image.domain1.com/cms/assets/100003.jpg',
        broadcastStartTime: '2018-02-10T02:48:28Z',
        duration: 60000,
        /* ..other fields */
        tags: ['tag1', 'tag2'],
        updateAt: '2019-02-16T02:48:28Z',
        type: 'minimatch'
    },
    {
        id: '100004',
        title: 'asset 4',
        description: 'this is asset 4',
        broadcastStartTime: '2022-02-16T02:48:28Z',
        duration: 81000,
        image: 'https://image.domain1.com/cms/assets/100004.jpg',
        match: {
            homeTeam: {
                id: 'teamId00006',
                /* missing team name */
                image: 'https://image.domain1.com/cms/teams/100006.jpg'
                /* ..other fields */
            },
            awayTeam: {
                id: 'teamId00009',
                name: 'team 000009',
                image: 'https://image.domain1.com/cms/teams/100009.jpg'
                /* ..other fields */
            }
        },
        tags: ['tag1', 'tag2'],
        updateAt: '2019-02-16T02:48:28Z',
        type: 'minimatch'
    }
];

