<template>
    <container-s class="map">
        <row-s>
            <col-s>
                <h3 class="fw_300 col__title">
                    Our Offices
                </h3>
            </col-s>
        </row-s>
        <!--:selected="true"-->
        <row-s>
            <col-s>
                <tabs @location="locations">
                    <tab v-for="(item, index) in tabs_content" :key="index" :name="item.name" :location="item.location" v-bind:selected="index === 0 ? 'selected' : false">
                        <h2 class="fw_300 tab__title">{{ item.title }}</h2>
                        <div class="tab__contact" v-for="(el, i) in item.text" :key="i">
                            <p class="half_margin tab__contact--text">{{ el }}</p>
                        </div>
                    </tab>
                </tabs>

            </col-s>
        </row-s>
    </container-s>
</template>

<script>
    import Tabs from './Tabs.vue';
    import Tab from './Tab.vue';
    import tabs_info from '../../assets/json/tabs_info.json';

    export default {
        name: "TabsInfo",
        components: {
            Tabs,
            Tab,
        },
        data() {
            return {
                tabs_content: tabs_info,
            }
        },
        methods: {
            locations(loc) {
                this.$emit('location', loc)
            }
        }
    }
</script>

<style lang="scss">
    .tab {
        &__title {
            font-size: 1.625em;
            line-height: 2em;
            letter-spacing: 1.2px;
        }
        &__contact {
            &--text {
                font-weight: 300;
                font-size: .75em;
                letter-spacing: 0.5px;
            }
        }
    }
</style>