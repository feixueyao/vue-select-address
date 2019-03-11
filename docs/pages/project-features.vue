<template lang="html">
    <div id="project-features">
        <h1 class="title">新增地址</h1>
        <div class="features">
            <address-sec @choosePro="gotPro" @chooseCity="gotCity" @chooseTown="gotTown" > </address-sec>
            <p >{{address}}</p>
        </div>
    </div>
</template>

<script>
    import addressSec from '../../search/address'

    export default {
        name: 'ProjectFeatures',
        components: {
            addressSec
        },
        data() {
            return {
                address:''
            }
        },
        methods:{
            gotPro(path){
                this.address=''
                console.log(path)
               this.address+=path
            },
            gotCity(path){
                console.log(path)
               this.address+=path
            },
            gotTown(path){
                console.log(path)
               this.address+=path
            }
        }
    };
</script>

<style lang="scss">
    @import '~colors';

    #app #project-features .tags-input {
        width: 100%;
        max-width: none;

        .ti-input {
            border: none;
            border-bottom: 1px solid $lightGrey;
            padding: 4px 12px;
        }

        .ti-tag input {
            color: $darker;
        }

        .ti-tag, .ti-item.ti-selected-item {
            background-color: $primary;
            color: $darker;
        }

        .ti-tags li {
            padding: 5px 8px;
            margin: 2px;
        }

        .ti-tag.dark-font {
            color: #333;
        }

        .ti-item {
            padding: 2px 3px;
        }

        .ti-tag.ti-deletion-mark {
            background-color: $error !important;
            color: #fff;
        }
    }

    #project-features .browser-support .icon {
        width: 100%;
        height: auto;
        padding: 16px;

        > * {
            fill: #b7c4c9;
        }
    }
    .features p{
        margin-top: 10px;
        font-size: 13px;
    }
</style>

<style lang="scss" scoped>
    @import 'colors';

    .title {
        line-height: 28px;
        font-size: 23px;
        font-weight: bold;
        font-family: 'Raleway', sans-serif;
        color: #333;
        margin-bottom: 20px
    }

    .features {
        display: flex;
        margin-bottom: 40px;
        flex-direction: column;
    }

    .browser-support {
        display: flex;
        flex-wrap: wrap;

        > div {
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            font-size: 14px;
            min-width: 85px;
            margin: 8px;
            max-width: 94px;
        }

        span {
            display: flex;
            margin-top: 0px;
            font-weight: 500;

            i {
                margin-left: 3px;
                font-size: 20px;
            }
        }
    }

    .license {
        margin-top: 40px;
        font-size: 0.85em;
    }

    .date {
        font-size: 0.85em;
    }
</style>
