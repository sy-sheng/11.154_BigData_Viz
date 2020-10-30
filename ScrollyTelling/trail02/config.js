var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1Ijoic3lzaHNoZW5nIiwiYSI6ImNrOXJiemU1YzA4Z3YzZ3A0ZHJheThjbjMifQ.LxmYxY8zgLI8aRJYopAtXg',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    footer: '',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Question:',
            image: '',
            description:'What is Taobao Villages?',
            location: {
                center: [115, 33],
                zoom: 3,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'question',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'question',
                    opacity: 0
                }
            ]
        },
        {
            id: 'id01',
            title: 'Description',
            image: 'export-map.jpg',
            description:'Taobao Village is a name coined by Alibaba in 2013, it refers to villages that have more than 10% of the total household involved in Taobao e-Commerce, and has sales exceed 10 million RMB.*',
            location: {
                center: [115, 33],
                zoom: 3,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'description',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'description',
                    opacity: 0
                }
            ]
        },
        {
            id: 'id02',
            title: 'Location',
            image: '',
            description:"in 2020, there are total over 5400 Taobao Villages based on Alibaba's survey. Current distribution map of Taobao Villages shows the major cluster of the villages along the coastal east and medium level gathering in the inland area. There are also villages emerging out of the central west.",
            location: {
                center: [400, 45],
                zoom: 5,
                pitch: 90,
                bearing: 30
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
        {
            id: 'id03',
            title: 'Quotation',
            image: '',
            description:"Among the study findings is that participation in e-commerce has a positive association with household welfare improvement, especially in rural China and that beneficiaries include vulnerable populations—women and youth. The development of e-commerce, where it has taken hold, is associated with higher household consumption and reduced inequality, bringing to people in rural areas the convenience, variety, and low prices enjoyed by urban dwellers.",
            location: {
                center: [100, 40],
                zoom: 10,
                pitch: 40,
                bearing: 30
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
}
