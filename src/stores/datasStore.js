//자료실 스토어

import { defineStore } from 'pinia'

export const useDatasStore = defineStore('datas', () => {
    const upperPath = '/'

    //리스트
    const dataList = ref([
        {
            url: '/datas/',
            children: [
                {
                    bindIndex:'0',
                    number: '1',
                    title: '소나무정보기술 Catalog 다운로드',
                    date: '2023.06.12',
                },

            ]
        }
    ])

    //상세페이지

    const dataGroup = ref([
        {
            bindIndex:'0',
            number: '1',
            title: '소나무정보기술 Catalog 다운로드',
            date: '2023.06.12',
            thumImg: '',
            texts: `
                <p>소나무정보기술 제품 Catalog를 통하여 다양한 제품을 한눈에 확인하세요.</p>
                <p>Catalog를 다운로드하시려면 아래 링크를 클릭해주세요.</p>

            `,
            uploaded: [
                {fileName:`/public/catalog/Catalog_SNC.txt`, name:'카탈로그 예시.txt'}
            ]
        },
        

    ])
    

    return { dataList, dataGroup }
    
})


    