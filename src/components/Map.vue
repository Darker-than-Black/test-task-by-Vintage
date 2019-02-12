<template>
    <a-container-s class="map_cart">
        <row-s>
            <col-s class="padding_left padding_top padding_bottom">
                <tabs-info @location="locations"></tabs-info>
            </col-s>

            <col-s class="min_w">
                <google-map :dataLocation="dataLocation"></google-map>
            </col-s>
        </row-s>
    </a-container-s>
</template>

<script>
    import TabsInfo from './map/TabsInfo.vue';
    import GoogleMap from './map/GoogleMap.vue';
    export default {
        name: "MapCart",
        components: {
            TabsInfo,
            GoogleMap,
        },
        data() {
            return {
                dataLocation: null,
            }
        },
        methods: {
            locations(loc) {
                this.dataLocation = loc;
            }
        }
    }
</script>

<style lang="scss">
 .map_cart {
     background-color: #2a2a2a;
     background: url("../assets/images/noise.png");
     background-repeat: repeat;
     color: #fff;
     @media screeen and (min-width: 1300px) {
         animation: noiseAnim .5s infinite linear alternate;
     }
 }
 @keyframes noiseAnim {
     0%   { background-position: 1% 20%; }
     20%  { background-position: -5% 0; }
     40%  { background-position: 10% -1%; }
     60%  { background-position: 0 -15%; }
     80%  { background-position: -10% -3%; }
     100% { background-position: 16% -6%; }
 }
</style>