<template>
  <div class="selectArea">
    <ul class="address">
      <li class="province addressList" @click="getProvince()" >
        {{province.text}}
        <i class="icon" :class="{active:status1}" :style="{backgroundImage:'url('+ iconBg +')', backgroundSize: 'contain'}"></i>
        <ul class="list provinceList" :class="{hide:!status1}">
          <li v-for="(item,index) in addressList" :key="index" @click="choosePro(item,index)">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </li>
      <li class="city addressList" @click="getCity()">
        {{city.text}}
        <i class="icon" :class="{active:status2}" :style="{backgroundImage:'url('+ iconBg +')', backgroundSize: 'contain'}"></i>
        <ul class="list cityList" :class="{hide:!status2}">
          <li
            v-for="(item,index) in addressList[province.value].city"
            :key="index"
            @click="chooseCity(item, index)"
          >
            <p>{{item.name}}</p>
          </li>
        </ul>
      </li>
      <li class="town addressList" @click="getTown()">
        {{town.text}}
        <i class="icon" :class="{active:status3}" :style="{backgroundImage:'url('+ iconBg +')', backgroundSize: 'contain'}"></i>
        <ul class="list townList" :class="{hide:!status3}">
          <li
            v-for="(item,index) in addressList[province.value].city[city.value].area"
            :key="index"
            @click="chooseTown(item,index)"
          >
            <p>{{item}}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import selectData from "./selectOption.js";
export default {
  name: "",
  data() {
    return {
      status1: false,
      status2: false,
      status3: false,
      iconBg:require('./images/icon.png')
    };
  },
  props: {
    addressList: {
      type: Array,
      default: function() {
        return selectData;
      }
    },
    province: {
      type: Object,
      default: function() {
        return {
          value: 0,
          text: "请选择"
        };
      }
    },
    city: {
      type: Object,
      default: function() {
        return {
          value: 0,
          text: "请选择"
        };
      }
    },
    town: {
      type: Object,
      default: function() {
        return {
          value: 0,
          text: "请选择"
        };
      }
    }
  },
  methods: {
    getProvince() {
      this.status1 = !this.status1;
      this.status2 = false;
      this.status3 = false;
    },
    getCity() {
      this.status2 = !this.status2;
      this.status1 = false;
      this.status3 = false;
    },
    getTown() {
      this.status3 = !this.status3;
      this.status2 = false;
      this.status1 = false;
    },
    choosePro(item, index) {
      this.province.text = item.name;
      this.province.value = index;
      this.$emit("choosePro", this.province.text, this.province.value);
      this.city.text = "请选择";
      this.city.value = 0;
      this.town.text = "请选择";
      this.town.value = 0;
      //this.$emit("choosePro", this.town.text, this.town.value);
    },
    chooseCity(item, index) {
      this.city.text = item.name;
      this.city.value = index;
      this.$emit("chooseCity", this.city.text, this.city.value);
    },
    chooseTown(item, index) {
      this.town.text = item;
      this.town.value = index;
      this.$emit("chooseTown", this.town.text, this.town.value);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
	user-select: none;
	-webkit-user-select: none;
}
.hide {
  display: none;
}
.selectArea {
  width: 100%;
  height: 32px;
  line-height: 32px;
  margin: 0 auto;
}
.address {
  display: flex;
  width: 100%;
  height: 100%;
}
.address .addressList {
  position: relative;
  flex: 1;
  height: 100%;
  list-style: none;
  border: 1px solid #d6d6d2;
  color:#333;
  font-size:14px;
}
.address .city {
  margin: 0 3px;
}
.icon {
  position: absolute;
  right: 3px;
  top: 50%;
  width: 6px;
  height: 6px;
  margin-top: -3px;
  /* background: url(./images/icon.png) no-repeat; */
  background-size: contain;
}
.active {
  transform: scale(-1);
}
.list {
  position: absolute;
  top: 32px;
  left: -1px;
  width: 100%;
  max-height: 120px;
  border: 1px solid #d6d6d2;
  overflow-y: scroll;
}
.list li {
  height: 30px;
  line-height: 30px;
  list-style: none;
}
.list li:nth-child(even) {
  background: #f5f5f3;
}
.list li:nth-child(odd) {
  background: #ffffff;
}
.list li:hover {
  transform: scale(1, 1.2);
  transition: 0.1s;
}
</style>
