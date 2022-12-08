<template>
    <div>
        <CustomHead />        

        <div class="loginBody py-4 flex justify-center mt-28 mb-52">
            <div class="w-[370px] text-sm">
                <div class="text-3xl font-extrabold">
                    Log in to TikTok
                </div>
                <div class="my-5 mb-8 text-[#aaaaaa]">
                    Manage your account, check notifications, comment on videos and more
                </div>
                <div class="border w-full py-2.5 cursor-pointer my-4 font-semibold relative">
                    <svg width="1em" class="text-xl absolute mx-4" data-e2e="" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C6.89543 6 6 6.89543 6 8V21C6 22.1046 6.89543 23 8 23H21C22.1046 23 23 22.1046 23 21V8C23 6.89543 22.1046 6 21 6H8ZM10 19V10H19V19H10ZM28 6C26.8954 6 26 6.89543 26 8V21C26 22.1046 26.8954 23 28 23H41C42.1046 23 43 22.1046 43 21V8C43 6.89543 42.1046 6 41 6H28ZM30 19V10H39V19H30ZM8 26C6.89543 26 6 26.8954 6 28V41C6 42.1046 6.89543 43 8 43H21C22.1046 43 23 42.1046 23 41V28C23 26.8954 22.1046 26 21 26H8ZM10 39V30H19V39H10ZM26 42C26 42.5523 26.4477 43 27 43H29C29.5523 43 30 42.5523 30 42V27C30 26.4477 29.5523 26 29 26H27C26.4477 26 26 26.4477 26 27V42ZM32.5 42C32.5 42.5523 32.9477 43 33.5 43H35.5C36.0523 43 36.5 42.5523 36.5 42V27C36.5 26.4477 36.0523 26 35.5 26H33.5C32.9477 26 32.5 26.4477 32.5 27V42ZM40 43C39.4477 43 39 42.5523 39 42V27C39 26.4477 39.4477 26 40 26H42C42.5523 26 43 26.4477 43 27V42C43 42.5523 42.5523 43 42 43H40Z"></path></svg>
                    Use QR code</div>
                <div
                    @click="EmailLogin"
                    class="border w-full py-2.5 cursor-pointer my-4 font-semibold"
                >
                    <svg class="text-xl absolute mx-4" width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"></path></svg>
                    Use phone / email / username
                </div>
                <div class="border w-full py-2.5 cursor-pointer my-4 font-semibold">
                    <svg class="text-xl absolute mx-4" width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z" fill="white"></path><path d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z" fill="#0075FA"></path></svg>
                    Continue with Facebook
                </div>
                <div class="border w-full py-2.5 cursor-pointer my-4 font-semibold">
                    <svg class="text-xl absolute mx-4" width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M43 24.4313C43 23.084 42.8767 21.7885 42.6475 20.5449H24.3877V27.8945H34.8219C34.3724 30.2695 33.0065 32.2818 30.9532 33.6291V38.3964H37.2189C40.885 35.0886 43 30.2177 43 24.4313Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3872 43.001C29.6219 43.001 34.0107 41.2996 37.2184 38.3978L30.9527 33.6305C29.2165 34.7705 26.9958 35.4441 24.3872 35.4441C19.3375 35.4441 15.0633 32.1018 13.5388 27.6108H7.06152V32.5337C10.2517 38.7433 16.8082 43.001 24.3872 43.001Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5395 27.6094C13.1516 26.4695 12.9313 25.2517 12.9313 23.9994C12.9313 22.7472 13.1516 21.5295 13.5395 20.3894V15.4668H7.06217C5.74911 18.0318 5 20.9336 5 23.9994C5 27.0654 5.74911 29.9673 7.06217 32.5323L13.5395 27.6094Z" fill="#FBBC04"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3872 12.5568C27.2336 12.5568 29.7894 13.5155 31.7987 15.3982L37.3595 9.94866C34.0018 6.88281 29.6131 5 24.3872 5C16.8082 5 10.2517 9.25777 7.06152 15.4674L13.5388 20.39C15.0633 15.8991 19.3375 12.5568 24.3872 12.5568Z" fill="#EA4335"></path></svg>
                    Continue with Google
                </div>
                <div class="border w-full py-2.5 cursor-pointer my-4 font-semibold">
                    <svg class="text-xl absolute mx-4" width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M43.8044 6.79902C42.5841 7.62363 39.7822 8.82191 38.4004 8.82191V8.82437C36.8226 7.08554 34.6013 6 32.1377 6C27.353 6 23.4731 10.093 23.4731 15.1387C23.4731 15.8398 23.5501 16.5236 23.6925 17.1793H23.6911C17.2007 16.9996 10.1022 13.5678 5.82893 7.69403C3.2016 12.4916 5.4752 17.8272 8.45673 19.7713C7.43613 19.8526 5.55733 19.6473 4.673 18.737C4.61373 21.9212 6.06507 26.1403 11.3571 27.6709C10.3379 28.2494 8.53373 28.0834 7.74926 27.9604C8.0246 30.6484 11.5927 34.1625 15.4945 34.1625C14.1039 35.8594 8.8716 38.9374 3 37.9582C6.98767 40.5177 11.6352 42 16.5543 42C30.5333 42 41.3894 30.0482 40.8051 15.3041C40.8028 15.2879 40.8028 15.2716 40.8014 15.2539C40.8028 15.216 40.8051 15.1781 40.8051 15.1387C40.8051 15.0929 40.8014 15.0496 40.8 15.0053C42.0726 14.0871 43.7801 12.463 45 10.3254C44.2925 10.7365 42.1701 11.5596 40.1952 11.7639C41.4627 11.0422 43.3405 8.67865 43.8044 6.79902Z" fill="#1DA1F2"></path></svg>                
                    Continue with Twitter
                </div>
                <div class="border w-full py-2.5 cursor-pointer my-4 font-semibold">
                    <svg class="text-xl absolute mx-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width="1em" height="1em"><path fill-rule="evenodd" d="M32.54 4c.278 2.368-.73 4.699-2.203 6.412-1.537 1.687-3.999 2.978-6.395 2.811-.312-2.276.9-4.697 2.26-6.174C27.739 5.372 30.406 4.09 32.539 4zm7.844 13.647c-.276.153-4.7 2.614-4.65 7.625.055 6.058 5.697 8.059 5.766 8.08-.034.14-.883 2.89-2.999 5.68-1.768 2.458-3.621 4.86-6.56 4.905-1.399.03-2.342-.345-3.326-.734-1.026-.407-2.095-.831-3.77-.831-1.773 0-2.89.437-3.966.86-.932.364-1.833.717-3.104.766-2.801.097-4.94-2.624-6.772-5.06-3.659-4.97-6.51-14.01-2.689-20.159 1.851-3.016 5.23-4.96 8.837-5.011 1.59-.031 3.114.538 4.45 1.038 1.02.381 1.932.722 2.678.722.657 0 1.543-.328 2.576-.709 1.628-.601 3.62-1.336 5.648-1.137 1.387.036 5.338.508 7.887 3.962l-.006.003z" clip-rule="evenodd"></path></svg>
                    Continue with Apple
                </div>
                <div class="border w-full py-2.5 cursor-pointer my-4 font-semibold">
                    <svg class="text-xl absolute mx-4" width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z" fill="url(#InstagramCircleColor_paint0_radial)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z" fill="url(#InstagramCircleColor_paint1_radial)"></path><path d="M12.2689 29.0393L12.2683 29.0257L12.2674 29.0121C12.2581 28.8681 12.2467 28.7257 12.2361 28.5942L12.2357 28.5899C12.2259 28.4679 12.2168 28.3551 12.2093 28.2443V19.8627C12.21 19.8592 12.2108 19.8558 12.2115 19.8523C12.2258 19.7843 12.2503 19.6567 12.2525 19.5033C12.2783 18.5107 12.3298 17.6235 12.5372 16.7855C13.0067 14.9166 14.0499 13.622 15.7951 12.8635C16.7343 12.4582 17.7702 12.3191 18.9552 12.2691C19.2441 12.2596 19.5271 12.2332 19.7741 12.2093H28.1373C28.1408 12.21 28.1442 12.2108 28.1477 12.2115C28.2157 12.2258 28.3433 12.2503 28.4967 12.2525C29.4893 12.2783 30.3765 12.3298 31.2145 12.5372C33.0835 13.0068 34.3781 14.05 35.1366 15.7954C35.5419 16.7345 35.6809 17.7702 35.7309 18.9552C35.7404 19.244 35.7668 19.5271 35.7907 19.7741V28.1373C35.79 28.1408 35.7892 28.1442 35.7885 28.1477C35.7742 28.2157 35.7497 28.3433 35.7475 28.4967C35.7217 29.4894 35.6701 30.3768 35.4627 31.2149C34.9931 33.0836 33.9499 34.3781 32.2048 35.1366C31.2656 35.5418 30.2298 35.6809 29.0448 35.7309C28.756 35.7404 28.4729 35.7668 28.2259 35.7907H19.8627C19.8592 35.79 19.8558 35.7892 19.8523 35.7885C19.7843 35.7742 19.6567 35.7497 19.5033 35.7475C18.5106 35.7217 17.6232 35.6701 16.7851 35.4627C14.9165 34.9931 13.622 33.95 12.8635 32.205C12.4575 31.2643 12.3187 30.2267 12.2689 29.0393Z" stroke="white" stroke-width="2.4186"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24 28.207C26.3015 28.207 28.2068 26.327 28.2068 24.0508C28.2068 21.7071 26.3437 19.8017 24.0421 19.7933C21.69 19.7933 19.7931 21.6649 19.7931 23.9917C19.7931 26.3186 21.6731 28.207 24 28.207ZM30.5 24.0084C30.5 27.6083 27.583 30.5084 23.9831 30.5C20.4001 30.4916 17.5 27.583 17.5 23.9916C17.5 20.3917 20.417 17.4916 24.0169 17.5C27.5999 17.5084 30.5 20.417 30.5 24.0084Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4921 15.3327C31.2981 15.3327 31.9446 15.9712 31.9446 16.7692C31.9446 17.5672 31.2981 18.2216 30.5001 18.2216C29.7101 18.2216 29.0557 17.5672 29.0557 16.7692C29.0636 15.9791 29.7101 15.3327 30.4921 15.3327Z" fill="white"></path><defs><radialGradient id="InstagramCircleColor_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.6876 49.3889) rotate(-90) scale(43.6073 40.5582)"><stop stop-color="#FFDD55"></stop><stop offset="0.1" stop-color="#FFDD55"></stop><stop offset="0.5" stop-color="#FF543E"></stop><stop offset="1" stop-color="#C837AB"></stop></radialGradient><radialGradient id="InstagramCircleColor_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-5.37023 5.16969) rotate(78.6806) scale(19.4926 80.3494)"><stop stop-color="#3771C8"></stop><stop offset="0.128" stop-color="#3771C8"></stop><stop offset="1" stop-color="#6600FF" stop-opacity="0"></stop></radialGradient></defs></svg>
                    Continue with Instagram
                </div>
                
            </div>
        </div>
        <div class="bg-white border-t text-sm p-8 fixed bottom-20 w-full flex justify-center items-center tracking-wide text-[#444444]">
            Don't have an account? <span class="mx-2 text-rose-500 weiFon cursor-pointer hover:underline"><router-link to="/signup"> Sign up</router-link></span>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from '../../components/footer.vue';
import CustomHead from '../../components/CustomHead.vue';

export default {
    name: 'LoginVue',
    components: {
        Footer, CustomHead
    },
    methods : {
        EmailLogin() {
            this.$router.push('/login/phone-or-email');
        }
    }
}
</script>

<style>
* {
    font-family: SofiaPro,Arial,Tahoma,PingFangSC,sans-serif;
}

.loginBody {
    text-align: center;
}

.topN {
    z-index: 50;
}

.weiFon {
    font-weight: 600;
}
</style>