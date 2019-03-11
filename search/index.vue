<template>
    <div class="search-field flex-box">
        <i class="search-icon"></i>
        <div class="search-input">
            <input type="search" @input="$emit('input', $event.target.value)"  :placeholder="placeholder" class="input-field"/>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'VueSearch',
        props: {
            placeholder: {
                default: '请输入查询信息',
                type: String
            },
            value: {}
        }
    };
</script>
<style lang="less" scoped>
    .flex-box {
        display: flex;
    }

    .search-field {
        width: 100%;
        background: rgba(242, 242, 242, 1);
        border-radius: 34px;
        padding: 4px 8px;
        box-sizing: border-box;

        .search-icon {
            display: inline-block;
            width: 24px;
            height: 24px;
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADEUlEQVRoQ+1Yz2sTQRT+JhtMi6gEkZIi/gA9iYIHe1BQKnpQqHqKR6Vl5+Wg+QP0shf9A9JLZkPFqzn5Cz0o6qkHRQqKJwVRxKUHCVqERpI8GUjKuqTpzm5ju7B7XN58833vezPzZgQS/omE80cqYKMdTB1IHYiZgbSEYiYw9vDUgV4KK5VKbmRk5DQzXwRwHMBeAFsB/AbwBcC8EOLB8vLyi3K53Iyd+i5AbAccx8kWCoVpAA6AQghino71PO+O4zitEPEDQ2IJUErtAXAfwNEIRBYAXCKirxHGrgyJLMB13WPM/AjAWAwCi0KIKSnlm6gYkQR0M/+6D/klIcRdAA+Z+UM+n//RaDR2CiEOddfGFQDbAmQXAUxEdcJYQLfmNfl/yoaZ65ZllW3b1oT6frVabazdbleEEMVAwILneRNR1oSxAKWUBKACBG4T0c2wZaCUugXgRiCeiMgNi9GLMxKgt8pcLvfZv9vozJdKpcumE1er1XsBJ7xms7nfdIs1EuC67jlmfuIju5TJZA4OKptB5dTpdD7614QQ4ryU8qlJMowEKKWqAGjFPiFmpZRlkwn9sa7rVpj5uu+fIqKSCZ6pgHcADvsEnJVSPjeZMCDgDDM/8/17T0RHTPBMBfwEsN03wTgR6ZM10qeU0if3d9/gX0S0wwTMVIA++q3eBPl8PlcsFv+YTOiPrdfrWxqNhr8vahNR1gTPVEDiHUj8GljXXUgpNQvg2n/bhRJ/DiT+JNZWJ7oX0gIS3412XdA3MaP7AIALzHy1z30AQogTUsp5k/0/UjcaaAPW40bWg/yUyWQmbdv+ZirC6CALgse8EwfhIomIJcC3JkxfJXT7sK9Pto1FxBbQI2HyLjQ6Orqr0+m8BHCgn4hsNntqZmbG3+StWlnrJsC0dmu12u7VRAghHkspp8JgbpgATW6AiCUi8rftm8+BHqN+Ipj5ValUmtz0DvQIzs3NjbdaLf0icZKZ31qWNW3btn48WPPb0BJak12IgFRAiCQNNSR1YKjpDQGeOhAiSUMNSR0YanpDgP8FcrN1QMzyvSUAAAAASUVORK5CYII=") no-repeat;
            background-size: 100% 100%;
        }
        .search-input{
            flex: 1;
        }

        .input-field {
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            border: 0;
            background: transparent;
            box-sizing: border-box;
        }
    }
</style>
