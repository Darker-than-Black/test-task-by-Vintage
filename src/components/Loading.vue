<template>
    <div class="loader">
        <div class="loader-wrapper">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loading.vue"
    }
</script>

<style lang="scss">
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        &-wrapper {
            margin: 0 auto;
            width: 60px;
            height: 50px;
            text-align: center;
            font-size: 10px;
            > div {
                height: 100%;
                width: 8px;
                display: inline-block;
                float: left;
                margin-left: 2px;
                animation: delay .8s infinite ease-in-out;
            }
        }
        .bar1{
            background-color: #754fa0 ;
        }
        .bar2{
            background-color: #09b7bf;
            animation-delay: -0.7s;
        }
        .bar3{
            background-color: #90d36b;
            animation-delay: -0.6s;
        }
        .bar4{
            background-color: #f2d40d;
            animation-delay: -0.5s;
        }
        .bar5{
            background-color: #fcb12b;
            animation-delay: -0.4s;
        }
        .bar6{
            background-color: #ed1b72;
            animation-delay: -0.3s;
        }
    }

    @keyframes delay {
        0%, 40%, 100% {
            transform: scaleY(0.05);
        }  20% {
           transform: scaleY(1.0);
       }
    }
</style>