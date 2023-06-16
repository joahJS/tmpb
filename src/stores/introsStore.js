// 회사소개 전체

import { defineStore } from 'pinia'

export const useIntrosStore = defineStore('intros', () => {
    const upperPath = '/'

    //개요

    const outlineGroup = ref([
        {
            outlineChildren: [
                {
                    outTitle: '"정직한 마음, 올바른 행동, 성실한 삶"',
                    outTexts: [
                        { texts: '안녕하십니까. 주식회사 소나무정보기술을 찾아주셔서 감사합니다. ' },
                        { texts: '소나무정보기술은 혁신적인 디지털 솔루션과 서비스를 제공하는 SI업체입니다.' },
                        { texts: '우리는 항상 최신 기술 동향을 주시하고 꾸준한 학습과 개발을 통하여 역량을 강화하여 가장 현대적이고 효과적인 솔루션을 제공할 수 있도록 노력하고 있습니다.' },
                        { texts: '소나무정보기술의 목표는 고객과의 긴밀한 협력으로 최적의 결과물을 제공함으로써 고객들이 디지털 환경에서 경쟁력을 유지하고 성장할 수 있도록 돕는 것입니다.' },
                        { texts: '신뢰를 바탕으로 고객 만족을 위해 노력하며, 행복을 담은 가족같은 회사로 희망의 메신저가 되도록 노력하겠습니다.' },
                        { texts: '감사합니다.' },
                    ], 
                    outCEO: '대표이사 최재영',
                    outSign: ``
                }
            ],

            ideoChildren: [
                {
                    ideoTitle: '혁신을 통하여 지속 가능한 미래를 만들어갑니다',
                    ideoSubT: '서로 존중하고 협력하며 지속적인 성장과 발전을 이루어나갑니다.',
                    ideoFirst: [
                        { ideoNameEng: 'Innovation', ideoName: '혁신', ideoTexts: '혁신을 추구하여 문제를 해결하고 비즈니스를 성장시키는데 기여한다.' },
                    ],
                    ideoSecond: [
                        { ideoNameEng: 'Quality', ideoName: '품질', ideoTexts: '높은 수준의 품질과 우수성을 추구하여 고객에게 가치를 제공한다.' },
                    ],
                    ideoThird: [
                        { ideoNameEng: 'Continuous Growth', ideoName: '지속적인 성장', ideoTexts: '항상 발전하고 개선하기 위해 노력하며 개인과 조직의 능력 향상에 주력한다.' },
                    ]
                }
            ]
        }

    ])

    //연혁

    const hsGroup = ref([
        {
            hsIndex: 0,
            hsYear: 2022,
            childrens: [
                { hsItem: '메뉴판 주문앱 WEB/APP 구축' },
                { hsItem: '한국도로공사 경남본부 현장관리시스템 WEB 구축' },
                { hsItem: '울산광역시 교육연구정보원 스쿨넷 교육망 전산관리시스템 구축' },
                { hsItem: '조선통신사 디지털 아카이브 WEB / VR 구축' },                
                { hsItem: '통합예약 커뮤니티 다이브채널 시즌 2 개편' },
                { hsItem: '와인모임 플랫폼 와인투게더 구축' },
                { hsItem: '현대중공업 표준폼관리 시스템 WEB 구축' },
                { hsItem: 'ERP 모바일 APP 구축 6개사' },
                
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2021,
            childrens: [
                { hsItem: '통합예약 커뮤니티 다이브채널 구축' },
                { hsItem: '주) 큐에스 PRMS 구축' },
                { hsItem: 'ISO 9001:2015 인증 획득' },
                { hsItem: '스마트팩토리 지원사업 MES 구축 11개사' },
                { hsItem: '스마트 세이프 가드레일 시스템 구축' },
                { hsItem: 'DRONOUS 드론관제시스템 개발 참여' },
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2020,
            childrens: [
                { hsItem: 'SPSYSTEM 5G AR기반 스마트갠트리로더 개발 (부산경제진흥원)' },
                { hsItem: 'AR기반 양식장 수중모니터링 증강현실 (부산테크노파크)' },
                { hsItem: '주) 부산철강 MES 구축' },
                { hsItem: '주) THE SAFETY PMS시스템 구축' },
                { hsItem: '주) 코넥 테슬라 LMS시스템 구축' },
            ]
        },

    ]);

    // 특허/인증

    const certGroup = ref([
        {
            certIndex: 0,
            cate: '기타',
            certTtitle: '기업부설연구소 인정서',
            imgUrl: `/assets/images/cert/rsch.png`,
            certNumber: '-',
            certDate: '2023-01-26',
            isView: false
        },
        {
            certIndex: 1,
            cate: '인증서',
            certTtitle: '소프트웨어 품질인증서',
            imgUrl: `/assets/images/cert/gs.png`,
            certNumber: '22-0014',
            certDate: '2022-10-20',
            isView: false
        },
        {
            certIndex: 2,
            cate: '인증서',
            certTtitle: 'ISO 9001:2015 품질경영인증',
            imgUrl: `/assets/images/cert/iso.png`,
            certNumber: 'Q386521',
            certDate: '2021-11-19',
            isView: false
        },
        {
            certIndex: 3,
            cate: '인증서',
            certTtitle: '직접생산확인증명서',
            imgUrl: `/assets/images/cert/sw.png`,
            certNumber: '2022-0507-04547',
            certDate: '2022-09-22',
            isView: false
        },
        {
            certIndex: 4,
            cate: '기타',
            certTtitle: '프로그램 등록증',
            imgUrl: `/assets/images/cert/program.png`,
            certNumber: '2010-01-189-005397',
            certDate: '2010-09-20',
            isView: false
        },
        {
            certIndex: 5,
            cate: '인증서',
            certTtitle: 'KC인증',
            imgUrl: `/assets/images/cert/kc.png`,
            certNumber: 'R-R-pi0-PN-SGR-SB01',
            certDate: '2023-01-05',
            isView: false
        }
    ])

    //오시는 길

    const pathGroup = ref([
        {
            indexs: 0,
            compName: [
                {compFirst: '주)', compLast: '소나무 정보기술'}
            ],
            sectionTitle: '본사',
            tel: '+82-51-714-0034',
            fax: '+82-51-714-0034',
            mail: '-',
            locate: '부산광역시 부산진구 엄광로 176 331호',
            publicTr: [
                { 
                    subway: [
                        { subwItem: '-' }
                    ], 
                    bus: [
                        { busItem: '새벽시장 하차 / 도보 약 5분 ' },
                        { busItem: '학장입구 하차 / 도보 약 10분' }
                    ]  
                }
            ],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5487607409304!2d127.5431871763837!3d34.99296587281716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356e11fd80d0dbc9%3A0x7c83115ce2a28e76!2z7IK87ZmU6riw7JeF!5e0!3m2!1sko!2skr!4v1681198673035!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
            mapUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.6097521447805!2d129.0309592762115!3d35.141410972766344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebb40a6cf031%3A0xf255b7423a881690!2zKOyjvCnshozrgpjrrLTsoJXrs7TquLDsiKA!5e0!3m2!1sko!2skr!4v1686890240019!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        // {
        //     indexs: 1,
        //     compName: [
        //         {compFirst: '주식회사', compLast: '소나무정보기술'}
        //     ],
        //     sectionTitle: '개발센터',
        //     tel: '+82-51-714-0034',
        //     fax: '+82-31-920-6609',
        //     mail: 'support@pineit.co.kr',
        //     locate: '부산광역시 사상구 대동로 303 부산디지털밸리 1203호 (동의대학교 산학협력단)',
        //     publicTr: [
        //         { 
        //             subway: [
        //                 { subwItem: '신평 방면 승차 / 서면역에서 2호선(호포방면)으로 환승 / 동의대역 하차 / 동의대 순환버스' }
        //             ], 
        //             bus: [
        //                 { busItem: '가야로,서면 방면 승차 / 가야파출소 앞 하차 / 동의대 순환버스' },
        //                 { busItem: '59,61번(가야로방면)승차 / 가야파출소 앞 하차 / 동의대순환버스' }
        //             ]  
        //         }
        //     ],
        //     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.609751841863!2d129.03134551610918!3d35.1414109803238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebb40a6cf031%3A0xf255b7423a881690!2zKOyjvCnshozrgpjrrLTsoJXrs7TquLDsiKA!5e0!3m2!1sko!2skr!4v1679979882979!5m2!1sko!2skr',
        // },
    ])


    return { outlineGroup, hsGroup, certGroup, pathGroup }

})