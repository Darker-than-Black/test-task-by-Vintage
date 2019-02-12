<template>
    <div class="send_letter">
        <form
            id="app"
            @submit="checkForm"
            class="send_letter__form padding_right"
        >
            <p class="fw_300 send_letter__row">
                <label for="name" class="send_letter__label">Name</label>
                <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    ref="name"
                    name="name"
                    class="fw_300 send_letter__input"
                    placeholder="enter your name"
                    @focus="repaintField"
                    @blur="goBackColorField"
                >
            </p>
            <p class="fw_300 send_letter__row">
                <label for="phone" class="send_letter__label">Phone</label>
                <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    name="phone"
                    ref="phone"
                    placeholder="enter your phone number"
                    min="9"
                    max="9"
                    class="fw_300 send_letter__input"
                    @focus="repaintField"
                    @blur="goBackColorField"
                >
            </p>
            <p class="fw_300 send_letter__row">
                <label for="mail" class="send_letter__label">E-mail</label>
                <input
                    type="email"
                    id="mail"
                    v-model="form.mail"
                    name="mail"
                    ref="mail"
                    min="5"
                    max="32"
                    placeholder="enter your e-mail address"
                    class="fw_300 send_letter__input"
                    @focus="repaintField"
                    @blur="goBackColorField"
                >
            </p>
            <p class="fw_300">
                <input
                    id="check"
                    v-model="form.check"
                    type="checkbox"
                    name="check"
                    required
                    class="send_letter__checkbox"
                >
                <label for="check" class="send_letter__label--checkbox">
                    <svg viewBox="0,0,50,50">
                        <path d="M5 30 L 20 45 L 45 5"></path>
                    </svg>
                    <span class="padding_left">I agree the processing of personal data</span>
                </label>
            </p>
            <p class="send_letter__row--btn">
                <input
                    type="submit"
                    value="Get in touch"
                    class="send_letter__btn"
                >
            </p>
        </form>

        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut">
            <div v-if="errors.length" class="modal">
                <button class="modal__remove" @click="cleanErrors"></button>
                <div class="modal__content">
                    <div class="modal__header">
                        <h2 class="fw_300">Please correct the indicated <span class="text_red">errors</span>:</h2>
                    </div>
                    <div class="modal__main">
                        <ul>
                            <li v-for="error in errors" :key="error.index">{{ error }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "SendLetter",
        data() {
            return {
                errors: [],
                form: {
                    name: null,
                    phone: null,
                    email: null,
                    check: false,
                },
            }
        },
        methods: {
            checkForm: function (e) {
                this.cleanErrors();
                e.preventDefault();

                if (!this.form.name) {
                    this.errors.push('Enter your name.');
                    this.$refs.name.parentElement.className += ' error';
                } else if( this.form.name.toUpperCase().match(/[0-9][.-_?!@`,"':;{[}}=+)(*&^%$#@~]/i) ) {
                    this.errors.push('Correct name. ');
                    this.$refs.name.parentElement.className += ' error';
                }

                if (!this.form.phone) {
                    this.errors.push('Enter your phone.');
                    this.$refs.phone.parentElement.className += ' error';
                } else if( this.form.phone.match(/[a-z][A-Z][.-_?!@`,"':;{[}}=*&^%$#@~]/g) || this.form.phone.length < 8 || this.form.phone.length > 14 ) {
                    this.errors.push('Correct phone. ');
                    this.$refs.phone.parentElement.className += ' error';
                }

                if (!this.form.mail) {
                    this.errors.push('Enter your e-mail address.');
                    this.$refs.mail.parentElement.className += ' error';
                } else if( this.form.phone.toUpperCase().match(/[-_?!`,"':;{[}}=*&^%$#@~]/g) || this.form.mail.length < 5 || this.form.phone.length > 32 ) {
                    this.errors.push('Correct e-mail address. ');
                    this.$refs.mail.parentElement.className += ' error';
                }

                if (!this.form.check) {
                    this.errors.push('Check checkbox for the processing of personal data.');
                }

                if( !this.errors.length ) {
                    axios.post('http://httpbin.org/post', {
                        name: this.form.name,
                        phone: this.form.phone,
                        email: this.form.mail
                    })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                } else {
                    document.body.style.overflow = 'hidden';
                }
            },
            repaintField(e) {
                e.target.parentElement.classList.remove('error');
                e.target.parentElement.className += ' active';
            },
            goBackColorField(e) {
                e.target.parentElement.classList.remove('active');
            },
            cleanErrors() {
                this.errors = [];
                document.body.style.overflow = 'auto';
            }
        }
    }
</script>

<style lang="scss">
    .send_letter {
        &__row {
            color: #000;
            font-size: 1em;
            line-height: 3.75em;
            border-bottom: 2px solid #000;
            display: grid;
            grid-template-columns: 2fr 10fr;
            @media screen and (max-width: 768px) {
                grid-template-columns: 4fr 8fr;
            }
            &.active {
                color: #fff;
                border-bottom-color: #fff;
                .send_letter__input {
                    color: #fff;
                }
            }
            &.error {
                color: #d65454;
                border-bottom-color: #d65454;
                .send_letter__input {
                    color: #d65454 !important;
                }
            }
        }
        &__label {
            &--checkbox {
                color: #fff;
                font-size: 1em;
                line-height: 2em;
                cursor: pointer;
            }
        }
        &__input {
            background-color: transparent !important;
            border: none;
            outline: none;
            color: #000;
            font-size: 1em;
            line-height: 3.75em;
            &:invalid {
                border-color: red;
            }
            &::placeholder {
                color: #000;
                opacity: .3;
            }
        }
        &__checkbox {
            position: absolute;
            opacity: 0;

            &:checked + label svg path {
                stroke-dashoffset: 0;
            }
            & + .send_letter__label--checkbox {
                display: block;
                border-radius: .05em;
                cursor: pointer;
                transition: all .2s ease;
                &:active {
                    border-radius: .25em;
                }
                svg {
                    pointer-events: none;
                    width: .75em;
                    height: .75em;
                    background-color: #fff;
                    path {
                        fill: none;
                        stroke: #333;
                        stroke-width: 4px;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-dasharray: 100;
                        stroke-dashoffset: 101;
                        transition: all 350ms cubic-bezier(1,0,.37,.91);
                    }
                }
            }
        }
        &__btn {
            margin-top: 5%;
            font-family: 'Suisse Intl', sans-serif;
            color: #fff;
            font-size: .75em;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            border: none;
            background-color: #262626;
            padding: 2.75em 5.5em;
            cursor: pointer;
        }
    }


    .modal {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,.3);
        display: flex;
        justify-content: center;
        align-items: center;
        &__content {
            text-align: center;
            min-width: 30%;
            max-width: 90%;
            background-color: #fff;
            border-radius: .75em;
            padding: .75em 1.25em;
            box-shadow: .5em .5em 2em .2em rgba(0,0,0,0.75);
            @media screen and (max-width: 768px) {
                padding: .75em .5em;
            }
        }
        &__remove {
            background-color: transparent;
            border: none;
            cursor: pointer;
            color: #000;
            width: 2.5em;
            height: 2.5em;
            position: absolute;
            right: 2em;
            top: 1em;
            outline: none;
            &:before,
            &:after {
                content: '';
                position: absolute;
                width: 2.5em;
                height: 2px;
                display: block;
                background-color: #fff;
                box-shadow: 0 2px .25em 0 rgba(0,0,0,.5);
            }
            &:before {
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            }
            &:after {
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
        }
    }
</style>

