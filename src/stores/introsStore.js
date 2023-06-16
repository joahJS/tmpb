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
                        { texts: '안녕하십니까. 본사를 찾아주셔서 감사합니다. ' },
                        { texts: '소나무정보기술은 2006년 한국의 주식회사 신광과 일본의 케이블트레이 전문업체 네구로스전공 주식회사의 한일 합작회사입니다.' },
                        { texts: '본사는 설립이래 발전된 기술로 고품질의 케이블 타레이 시스템을 제조하고 있습니다.' },
                        { texts: '설계 및 제작부터 도금/포장/출하까지 전 공정의 Non-stop 시스템을 갖추고 있으며, 세계 각국의 발전소, 제철소, 화학공장을 비롯하여 조선 해양 분야에 Cable Management System을 제공하고 있습니다.' },
                        { texts: '고객과의 신뢰를 바탕으로 고객 만족을 위해 노력하며, 해옵ㄱ을 담은 가족같은 회사로 희망의 메신저가 되도록 노력하겠습니다.' },
                        { texts: '감사합니다.' },
                    ], 
                    outCEO: '대표이사 김미경',
                    outSign: ``
                }
            ],

            ideoChildren: [
                {
                    ideoTitle: '혁신을 통하여 지속 가능한 미래를 만들어갑니다',
                    // ideoTitle: '"현실에 만족하지 않고 앞서가는 기술력으로 세상에 기여한다"',
                    ideoSubT: '서로 존중하고 협력하며 지속적인 성장과 발전을 이루어나갑니다.',
                    ideoFirst: [
                        { ideoNameEng: '和以能就', ideoName: '화이능취', ideoTexts: 'Work together to achieve a goal' },
                    ],
                    ideoSecond: [
                        { ideoNameEng: '三現主義', ideoName: '삼현주의', ideoTexts: 'The actual place, The actual part, The actual situation' },
                    ],
                    ideoThird: [
                        { ideoNameEng: '心淸事達', ideoName: '심청사달', ideoTexts: 'If mind is lucid, all goes well' },
                    ]
                }
            ]
        }

    ])

    //연혁

    const hsGroup = ref([
        {
            hsIndex: 0,
            hsYear: 2017,
            childrens: [
                { hsItem: '' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2015,
            childrens: [
                { hsItem: '15.03 Exxon Mobil 품질 승인' },
                { hsItem: '15.03 자랑스런 김해시 CEO상 수상' },
                { hsItem: '15.06 고성장 수출 기업 지정' },
                { hsItem: '15.12 김해시 체육회 감사패 수여' },
                { hsItem: '16.02 스리랑카 68주년 독립 기념 감사패 수여' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2010,
            childrens: [
                { hsItem: '10.04 ABS WPS 인증' },
                { hsItem: '10.12 김해 시장 표창' },
                { hsItem: '10.12 EATON B-LINE 공급 계약 체결' },
                { hsItem: '11.06 연구개발센터 설립' },
                { hsItem: '12.12 49회 무역의 날 천만불 수출탑 수상' },
                { hsItem: '13.11 TOSHIBA PLANT SYSTEMS & SERVICES "품질상" 수상' },
                { hsItem: '14.02 MITSUBISHI ELEC. 감사장 수상' },
                { hsItem: '14.12 삼성중공업 안전관리 우수상 수상' },
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2006,
            childrens: [
                { hsItem: '06.04 주식회사 소나무정보기술 창립' },
                { hsItem: '07.05 ISO 9001-2000 인증' },
                { hsItem: '08.04 MITSUBISHI ELECTRIC 감사장 수상' },
                { hsItem: 'KS 인증' },
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2002,
            childrens: [
                { hsItem: '02.08 (주)신광 창립' },
                { hsItem: '02.11 ABS WPS 획득' },
                { hsItem: '04.01 사할린 LNG Project Cable Tray 공급' }                
            ]
        },


    ]);

    // 특허/인증

    const certGroup = ref([
        {
            certIndex: 0,
            cate: '인증서',
            certTtitle: '제품인증서',
            imgUrl: `/assets/images/snc_cert/cert_standard.png`,
            certNumber: '...',
            certDate: '2010-07-01',
            isView: false
        },
        {
            certIndex: 1,
            cate: '인증서',
            certTtitle: 'KSA certificate of approval',
            imgUrl: `/assets/images/images/snc_cert/cert_ksa.png`,
            certNumber: '...',
            certDate: '2006-03-16',
            isView: false
        },
        {
            certIndex: 2,
            cate: '기타',
            certTtitle: 'ABS',
            imgUrl: `/assets/images/images/snc_cert/cert_abs.png`,
            certNumber: '11-55',
            certDate: '2011-06-01',
            isView: false
        },
        {
            certIndex: 3,
            cate: '기타',
            certTtitle: '...',
            imgUrl: `/assets/images/images/snc_cert/cert_bt01.png`,
            certNumber: '10-0750565',
            certDate: '2007-05-13',
            isView: false
        },
        {
            certIndex: 4,
            cate: '기타',
            certTtitle: '...',
            imgUrl: `/assets/images/images/snc_cert/cert_bt02.png`,
            certNumber: '10-0694841',
            certDate: '2007-04-07',
            isView: false
        },
        {
            certIndex: 5,
            cate: '기타',
            certTtitle: '...',
            imgUrl: `/assets/images/images/snc_cert/cert_bt03.png`,
            certNumber: '30-0442843',
            certDate: '2007-03-05',
            isView: false
        }
    ])

    //오시는 길

    const pathGroup = ref([
        {
            indexs: 0,
            compName: [
                {compFirst: 'S', compLast: 'NC'}
            ],
            sectionTitle: '본사',
            tel: '+82-55-327-6023',
            fax: '+82-55-327-3033',
            mail: '-',
            locate: '경상남도 김해시 유하로 201',
            publicTr: [
                { 
                    subway: [
                        { subwItem: '-' }
                    ], 
                    bus: [
                        { busItem: '대한가스 하차 / 도보 약 4분 ' },
                        { busItem: '남명더라우 하차 / 도보 약 36분' }
                    ]  
                }
            ],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5487607409304!2d127.5431871763837!3d34.99296587281716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356e11fd80d0dbc9%3A0x7c83115ce2a28e76!2z7IK87ZmU6riw7JeF!5e0!3m2!1sko!2skr!4v1681198673035!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
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