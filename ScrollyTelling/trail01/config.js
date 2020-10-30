var config = {
    style: 'mapbox://styles/xliuxliu/ckgsplxxr1syn19p6wbfh35pg',
    accessToken: 'pk.eyJ1IjoieGxpdXhsaXUiLCJhIjoiY2tnZ2Zpd3piMHYycTJ5cGl4czZleXZpayJ9.5egPi5UdGMf6Kczfj47ahg',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: 'img/WechatIMG543.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
              center: [104.46299, 37.30725],
              zoom: 3,
              pitch: 0.50,
              bearing:-11.20
            },
            onChapterEnter: [
                {
                    layer: 'layer-name',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer-name',
                    opacity: 0
                }
            ]
        },

    ]
};
