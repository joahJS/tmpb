//상품소개 스토어

import { defineStore } from "pinia";

export const useCatesStore = defineStore('cates', () => {
    const upperPath = '/'

    //리스트

    const cateList = ref([
        {
            url: '/cate01/',
            children: [

                {
                    number: '0',
                    thumImg: `/assets/images/cate/block4.jpg`,
                    title: 'LADDER',
                    subTitle: '간결하면서도 도시적, 세련된 이미지',
                },
                {
                    number: '1',
                    thumImg: `/assets/images/cate/block2.jpg`,
                    title: 'SOLID',
                    subTitle: '강도가 높고, 시공이 간단함',
                },
                {
                    number: '2',
                    thumImg: `/assets/images/cate/block3.jpg`,
                    title: 'PERFORATED',
                    subTitle: '결합식으로 뒤틀림이 없으며, 강도가 높고, 시공이 간단함',
                },
                {
                    number: '3',
                    thumImg: `/assets/images/snc_prod/prod-strut.jpg`,
                    title: 'STRUT',
                    subTitle: 'SNC Product - STRUT',
                },

                
                

            ]
        }
    ])

    //상세페이지

    const cateGroup = ref([

        {
            number: '0',
            title: ' 스팟 워싱블록(인조 화강블록)',
            thumImg: `/assets/images/cate/block4.jpg`,
            floor: `${upperPath}`,
            table: `/assets/images/cate/samhwa1.jpg`,
            textAll: [
                    {texts: '- 다양한 천연골재로 성형한 후 물과 에어로 워싱 처리'},
                    {texts: '- 자연석과 같은 질감으로 시공 시 자연ㅊ핀화적 풍경연출 가능.'},
                    {texts: '- 미끄럼 방지, 투수 기능을 가짐으로 보행자 안전을 도모.'},
                    {texts: '- 공원 산책로, 주차장, 휴게소, 자전거도로, 보도, 차도 등 사용.'},
                ]
        },
        {
            number: '1',
            title: ' l2, l3형 블록',
            thumImg: `/assets/images/cate/block2.jpg`,
            floor: `${upperPath}`,
            table: `/assets/images/cate/samhwa2.jpg`,
            textAll: [
                    {texts: '- 다양한 천연골재로 성형한 후 물과 에어로 워싱 처리'},
                    {texts: '- 자연석과 같은 질감으로 시공 시 자연ㅊ핀화적 풍경연출 가능.'},
                    {texts: '- 미끄럼 방지, 투수 기능을 가짐으로 보행자 안전을 도모.'},
                    {texts: '- 공원 산책로, 주차장, 휴게소, 자전거도로, 보도, 차도 등 사용.'},
                ]
        },
        {
            number: '2',
            title: ' U형블록',
            thumImg: `/assets/images/cate/block3.jpg`,
            floor: `${upperPath}`,
            table: `/assets/images/cate/samhwa2.jpg`,
            textAll: [
                    {texts: '- 다양한 천연골재로 성형한 후 물과 에어로 워싱 처리'},
                    {texts: '- 자연석과 같은 질감으로 시공 시 자연ㅊ핀화적 풍경연출 가능.'},
                    {texts: '- 미끄럼 방지, 투수 기능을 가짐으로 보행자 안전을 도모.'},
                    {texts: '- 공원 산책로, 주차장, 휴게소, 자전거도로, 보도, 차도 등 사용.'},
                ]
        },
        {
            number: '3',
            title: ' Strut',
            thumImg: `/assets/images/snc_prod/prod-strut.jpg`,
            floor: `${upperPath}`,
            table: `/assets/images/snc_prod/prod-strut.jpg`,
            textAll: [
                    {texts: '- Single(CS4030) / Double(CD4030)'},
                    {texts: '- Channel with Slots(CSA(-(*)-(**), CSB(-(*)-(**)'},
                    {texts: '- 3-Hole Flat Plate Conn(F-303), 3-Hole Shelf Frame Conn(F-304), 4-Hole Corner Joint Conn(F-403), 4-Hole Tee Conn(F-404), 5-Hole Cross Plate Conn(F-501)'},
                    {texts: '- Offset Conn(Z-201), 2-Hole Zee Angle(Z-202), 3-Hole Zee Angle(Z-301)'},
                    {texts: '- Single Channel Brackets(B-101, B-102, B-201)'},
                    {texts: '- Welded Brace Shelf Bracket(B-701, B-702)'},
                    {texts: '- Leg Attachment Fitting(P-401), 3-Hole Post Base(P-301), 9-Hole Post Base(P-601)'},
                    {texts: '- 8-Hole Post Base(P-801), 4-Hole Post Base(P-401), 4-Hole Post Base(P-402)'},
                    {texts: '- R&A 5-Hole Clevis Conn(W-502), 6-Hole clevis Conn(W-602), 8-Hole Clevis Conn(W-801)'},
                    {texts: '- 12-Hole Triple Angle Conn(W-1201), 8-Hole Double Corner Angle(W-802), 8-Hole Wing Fitting(W-803)'},
                    {texts: '- 2-Hole Closed 45º Angle(A-103), 2-Hole Closed Angle(A-402), Stair Support(A-501)'},
                    {texts: '- Support Bracket(SB-101), Coupling Fitting(CF-201), Knee Brace(KB-201)'},
                    {texts: '- Angular Beam Clamp(ABC-1), Beam Clamp U-bolt(UBC-1)'},
                    {texts: '- Pipe & Tubing Clamp'},
                ]
        },

    ])

    
    return { cateList, cateGroup }

})