<template>
    <GmapMap
            :center="center"
            :zoom="zoom"
            class="google_map"
            :options="options"
    >
        <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                @click="center=m.position"
                :icon="{ path: 'M0,5a5,5 0 1,0 10,0a5,5 0 1,0 -10,0', fillColor: '#3db565', fillOpacity: 1, strokeWeight: 0, scale: 4 }"
        />
    </GmapMap>
</template>

<script>
    import googleMapStyle from '../../assets/json/googleMapStyle.json';
    export default {
        name: "GoogleMap",
        props: [ 'dataLocation' ],
        data() {
            return {
                zoom: 12,
                center: {
                    lat: 50.445,
                    lng: 30.517
                },
                markers: [
                    {
                        position: {
                            lat: 50.445,
                            lng: 30.517
                        }
                    }
                ],
                places: [],
                currentPlace: '43.530610, -76.535242',
                options: {
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: true,
                    disableDefaultUi: true,
                    styles: googleMapStyle,
                },
            }
        },
        watch: {
            dataLocation( loc ) {
                if (loc) {
                    const marker = {
                        lat: parseFloat( loc.lat),
                        lng: parseFloat( loc.lng)
                    };
                    this.markers = [{ position: marker }];
                    this.places = [ this.currentPlace ];
                    this.center = marker;
                    this.currentPlace = null;
                }
            }
        },
    }
</script>

<style lang="scss">
    .gmnoprint {
        display: none !important;
    }
    .google_map {
        width:100%;
        min-height: 70vh;
        @media screen and (max-width: 1200px) {
            min-height: 50vh;
        }
    }
</style>