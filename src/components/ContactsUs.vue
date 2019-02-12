<template>
    <a-container-s class="contacts_us padding_bottom padding_top">
        <row-s class="wrapper">
            <col-s>
                <h3 class="fw_300 col__title">
                    Contact Us
                </h3>
            </col-s>
        </row-s>

        <row-s class="wrapper">
            <col-s>
                <send-letter></send-letter>
            </col-s>

            <col-s>
                <sub-info></sub-info>
            </col-s>
        </row-s>
    </a-container-s>
</template>

<script>
    import SendLetter from './contact_us/SendLetter.vue';
    import SubInfo from './contact_us/SubInfo.vue';
    export default {
        name: "ContactsUs",
        components: {
            SendLetter,
            SubInfo,
        }
    }
</script>

<style lang="scss">
    $bg-color: #3db565;
    $dot-color: #5ec280;

    $dot-size: 5px;
    $dot-space: 100px;

    .contacts_us {
        background:
            linear-gradient(90deg, $bg-color ($dot-space - $dot-size), transparent 1%) center,
            linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
            $dot-color;
        background-size: $dot-space $dot-space;
    }
</style>