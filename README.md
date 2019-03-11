# vue-search
用于选择地址的组件
## install
NPM
```
npm install vue-select-address
```
## 用法
```
<template lang="html">
    <div id="project-features">
        <h1 class="title">新增地址</h1>
        <div class="features">
            <address-sec @choosePro="gotPro" @chooseCity="gotCity" @chooseTown="gotTown" > </address-sec>
            <p >{{address}}</p>
        </div>
    </div>
</template>
```
```
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
```
## API
#### props
属性 | 说明 | 类型 | 默认值
---|---|---|---
province | province | Object | 请选择
city | city | Object | 请选择
town | town | Object | 请选择
## 启动
```
npm run dev
```
## 编译
```
npm run build-lib
```
