<template>
    <div>
        <ul class="tabs">
            <li v-for="tab in tabs" :key="tab.id" class="tabs__item">
                <a :href="tab.href" @click="selectTab(tab, tab.location)" :class="{ 'tabs__link--active': tab.isActive }" class="td_none tabs__link">{{ tab.name }}</a>
            </li>
        </ul>

        <div class="tabs__details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        data() {
            return {
                tabs: []
            }
        },
        created() {
            this.tabs = this.$children;
        },
        methods: {
            selectTab(selectedTab, loc) {
                this.$emit('location', loc );
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                });
            }
        }
    }
</script>

<style lang="scss">
    .tabs {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
        &__details {
            position: relative;
            @media screen and (max-width: 599px) {
                min-height: 40vh;
            }
            @media screen and (max-width: 767px) {
                min-height: 30vh;
            }
            @media screen and (max-width: 992px) {
                min-height: 25vh;
            }
        }
        &__link {
            color: #fff;
            font-size: .75em;
            font-weight: 600;
            text-transform: uppercase;
            margin-right: 5vw;
            letter-spacing: 1.5px;
            &--active {
                color: #3db565;
            }
            &:hover {
                text-decoration: underline;
            }

        }
    }
</style>