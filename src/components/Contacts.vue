<template>
    <a-container-s class="contacts padding_bottom">
        <row-s class="wrapper">
            <col-s>
                <h1 class="fw_300 contacts__title contacts__title--large half_margin">Contacts</h1>
            </col-s>
        </row-s>

        <row-s class="wrapper">
            <col-s>
                <headquarters></headquarters>
            </col-s>

            <col-s>
                <support></support>
            </col-s>
        </row-s>
    </a-container-s>
</template>

<script>
    import Headquarters from './contacts/Headquarters.vue';
    import Support from './contacts/Support.vue';

    export default {
        name: "Contacts",
        components: {
            Headquarters,
            Support,
        }
    }
</script>

<style lang="scss">
$lite_green: #3db565;
$black: #333333;

.contacts {
    &__title {
        color: $black;
        &--large {
            font-size: 3.125em;
        }
        &--medium {
            font-size: 2em;
        }
        &--subcolor {
            color: $lite_green;
        }
    }
    &__text {
        &--wrapper {

        }
        &--content {
            color: $black;
            font-size: 1em;
        }
    }
    &__link {
        color: $lite_green;
        &:hover {
            text-decoration: underline;
        }
        &--phone {
            font-size: 1.75em;
        }
        &--message {
            font-size: .9em;
            font-weight: 600;
            line-height: 1.75em;
            text-transform: uppercase;
            letter-spacing: 0.85px;
        }
    }
}
</style>