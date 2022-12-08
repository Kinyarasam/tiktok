<template>
    <div>
        <custom-head />
        <div class="tracking-wide loginBody py-4 flex justify-center mt-16 mb-52">
            <div class="w-[370px] text-sm">
                <div class="text-3xl font-extrabold mb-4">
                    Log In
                </div>
                <div class="font-semibold flex items-center justify-between">
                    <div>
                        Phone
                    </div>
                    <div class="text-[11px] text-[#656565] tracking-wide hover:underline cursor-pointer">
                        Log in with email or username
                    </div>
                </div>
                <form action="" method="post">
                    <input type="text" placeholder="Phone number"
                        class="text-[15px] border mt-2 w-full p-3 bg-[#eeeeee] border-[#cccccc] rounded"
                    >
                    <input type="text" placeholder="Enter 6-digit code"
                        class="text-[15px] border mt-2 w-full p-3 bg-[#eeeeee] border-[#cccccc] rounded"
                    >

                    <div class="text-xs text-left my-2 text-[#656565] font-semibold">
                        Log in with password
                    </div>

                    <button class="bg-[#eeeeee] w-full p-3 tracking-wide font-semibold text-[#909090] my-4">
                        Log in
                    </button>
                </form>
                
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import CustomHead from '../../components/CustomHead.vue'
import Footer from '../../components/footer.vue'
export default {
  components: { CustomHead, Footer },

}
</script>

<style>

</style>