<template>
    <transition
            name="router-anim"
            enter-active-class="router-anim-enter-class "
            leave-active-class="router-anim-leave-class "
    >
        <div v-if="isActive" class="tab"><slot></slot></div>
    </transition>
</template>
<script>
    export default {
        name: "Tab",
        props: {
            name: { required: true },
            selected: { default: false },
            location: {
                lat: null,
                lng: null
            }
        },
        data() {
            return {
                isActive: false
            };

        },
        computed: {
            href() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
        },
        mounted() {
            this.isActive = this.selected;
        }
    }
</script>

<style lang="scss">
    .tab {
        position: absolute;
        /*left: 0;*/
        /*right: 0;*/
        /*top: 0;*/
        /*bottom: 0;*/
    }
    .router-anim-enter-class {
        animation: coming 1s;
        animation-delay: .75s;
        opacity: 0;
    }

    .router-anim-leave-class {
        animation: going .7s;
    }

    @keyframes going {
        from {
            transform: translateX(0);
        }
        to {
           transform: translateX(-50px);
            opacity: 0;
        }
    }
    
    @keyframes coming {
        from {
            transform: translateX(-50px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>