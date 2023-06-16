<template>
    <footer id="footPrimary">
        <div class="web-common-inner inner-box">
            <div class="text-center">
                <img src="/assets/images/snc_main/logo_ft.png" class="w-16 mx-auto mb-1">
                <span class="font-bold"></span>
            </div>
            <div data-footer-texts class="self-center leading-4">
                <p>
                    <span class="font-bold">회사명</span>
                    <span>소나무정보기술</span>
                </p>
                <p>
                    <span class="font-bold">대표자</span>
                    <span>김미경</span>
                </p>
                <p>
                    <span class="font-bold">주소</span>
                    <span>경상남도 김해시 유하로 201</span>
                </p>
                <p>
                    <span class="font-bold">TEL</span>
                    <span>055 - 327 - 6023</span>
                </p>
                <p>
                    <span class="font-bold">FAX</span>
                    <span>055 - 327 - 3033</span>
                </p>
                <br>
                <p class="copyright">© {{ copyYear }} by 소나무정보기술, All rights reverved. </p>
            </div>
        </div>
    </footer>
</template> <!-- Template Ends -->

<script setup>
    const copyYear = ref(new Date().getFullYear())
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #footPrimary {
        @apply mt-auto py-5 px-10;

        background-color: rgba(var(--black), .15);
        font-size: var(--font14);
        color: rgb(var(--font));
    }

    .inner-box {
        @apply mx-auto flex gap-10 items-center;
    }

    .copyright {
        color: rgba(var(--font), .75);
    }

    [data-footer-texts] {
        .font-bold {
            @apply inline-block;

            width: 2rem;
        }

        p {
            line-height: 1.75;
            color: rgba(var(--black), .5);

            span:last-child {
                &:before {
                    @apply inline-block pl-1 pr-2;

                    content: ':';
                }
            }
        }
    }

    //media 반응형

    @media screen and (max-width: 1279px) { }

    @media screen and (max-width: 767px) {
        #footPrimary {
            @apply p-3;

            font-size: var(--font13);
        }

        .inner-box {
            @apply flex-col gap-4;

            img {
                @apply w-12 text-center;
            }
        }
    }

    @media screen and (max-width: 500px) { }

</style> <!-- Stylesheet Ends -->