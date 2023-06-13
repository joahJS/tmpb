//공지사항 스토어

import { defineStore } from 'pinia'

export const useNoticeStore = defineStore('notice', () => {
    const upperPath = '/'

    //리스트
    const noticeList = ref([
        {
            url: '/notice/',
            children: [

                {
                    bindIndex:'0',
                    number: '1',
                    title: 'SNC에 오신것을 환영합니다.',
                    date: '2023.06.12',
                },
            ]
        }
    ])

    //상세페이지
    const noticeGroup = ref([

        {
            number: '0',
            title: 'SNC에 오신것을 환영합니다.',
            date: '2023.04.01',
            thumImg: `public/images/snc_board/notice_01.png`,
            textAll: [
                {texts: '안녕하십니까. SNC 홈페이지에 찾아와주신 모든 분들께 감사드립니다.'},
                {texts: '본사의 다양한 제품을 안내드리고 소통의 창구를 마련하고자 웹사이트를 새롭게 개편하였습니다.'},
                {texts: '많은 관심 부탁드립니다. 감사합니다.'},
            ]
        },

    ])

    return { noticeList, noticeGroup }
    
})



    