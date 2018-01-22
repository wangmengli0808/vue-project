<template>
  <div>
    <div class="fl search-name" @click="choiceCity()">
      <span class="choose-name">{{chooseCityName}}</span>
      <span class="arrow-down"></span>
    </div>
    <city
      :is-show.sync='city.isShow'
      :on-choose='city.onChoose'
      :city-data='city.cityData'
      :local-city='city.localCity'
      :star-city='city.starCity'
      :close='close'
    ></city>
  </div>
</template>

<script>
  import City from 'vue-city'

  export default {
    components: {
      City
    },
    data () {
      return {
        chooseCityName: '郑州',
        city: {
          isShow: false,
          cityData: [],
          localCity: {},
          starCity: [],
          onChoose: null
        }
      }
    },
    mounted () {
      this.$nextTick(function () {
        let _this = this
        this.getCityInfo()
        this.city.onChoose = function (res) {
          // ToDo: 选完城市后......
          console.log(res)
          _this.city.isShow = false
          _this.chooseCityName = res.cityName
        }
      })
    },
    methods: {
      getCityInfo: function () {
        this.city.starCity = [
          {
            cityId: 301,
            cityName: '保山',
            citySpell: 'BAOSHAN',
            cityFirstLetter: 'B'
          },
          {
            cityId: 167,
            cityName: '日照',
            citySpell: 'RIZHAO',
            cityFirstLetter: 'R'
          }
        ]
        this.city.cityData = [
          {
            cityId: 290,
            cityName: '阿坝州',
            citySpell: 'ABAZHOU',
            cityFirstLetter: 'A'
          }, {
            cityId: 348,
            cityName: '阿克苏地区',
            citySpell: 'AKESUDIQU',
            cityFirstLetter: 'A'
          }, {
            cityId: 348,
            cityName: '阿克苏地区',
            citySpell: 'AKESUDIQU',
            cityFirstLetter: 'A'
          }, {
            cityId: 356,
            cityName: '阿拉尔',
            citySpell: 'ALAER',
            cityFirstLetter: 'A'
          }, {
            cityId: 170,
            cityName: '宝鸡',
            citySpell: 'BAOJI',
            cityFirstLetter: 'B'
          }, {
            cityId: 301,
            cityName: '保山',
            citySpell: 'BAOSHAN',
            cityFirstLetter: 'B'
          },
          {
            cityId: 59,
            cityName: '沧州',
            citySpell: 'CANGZHOU',
            cityFirstLetter: 'C'
          },
          {
            cityId: 25,
            cityName: '长春',
            citySpell: 'CHANGCHUN',
            cityFirstLetter: 'C'
          },
          {
            cityId: 106,
            cityName: '常德',
            citySpell: 'CHANGDE',
            cityFirstLetter: 'C'
          },
          {
            cityId: 163,
            cityName: '丹东',
            citySpell: 'DANDONG',
            cityFirstLetter: 'D'
          },
          {
            cityId: 270,
            cityName: '儋州',
            citySpell: 'DANZHOU',
            cityFirstLetter: 'D'
          },
          {
            cityId: 43,
            cityName: '鄂尔多斯',
            citySpell: 'EERDUOSI',
            cityFirstLetter: 'E'
          },
          {
            cityId: 235,
            cityName: '恩施州',
            citySpell: 'ENSHIZHOU',
            cityFirstLetter: 'E'
          },
          {
            cityId: 230,
            cityName: '鄂州',
            citySpell: 'EZHOU',
            cityFirstLetter: 'E'
          },
          {
            cityId: 260,
            cityName: '防城港',
            citySpell: 'FANGCHENGGANG',
            cityFirstLetter: 'F'
          },
          {
            cityId: 36,
            cityName: '佛山',
            citySpell: 'FOSHAN',
            cityFirstLetter: 'F'
          },
          {
            cityId: 333,
            cityName: '甘南州',
            citySpell: 'GANNANZHOU',
            cityFirstLetter: 'G'
          },
          {
            cityId: 102,
            cityName: '赣州',
            citySpell: 'GANZHOU',
            cityFirstLetter: 'G'
          },
          {
            cityId: 16,
            cityName: '哈尔滨',
            citySpell: 'HAERBIN',
            cityFirstLetter: 'H'
          },
          {
            cityId: 339,
            cityName: '海北州',
            citySpell: 'HAIBEIZHOU',
            cityFirstLetter: 'H'
          },
          {
            cityId: 338,
            cityName: '海东地区',
            citySpell: 'HAIDONGDIQU',
            cityFirstLetter: 'H'
          },
          {
            cityId: 215,
            cityName: '佳木斯',
            citySpell: 'JIAMUSI',
            cityFirstLetter: 'J'
          },
          {
            cityId: 221,
            cityName: '吉安',
            citySpell: 'JIAN',
            cityFirstLetter: 'J'
          },
          {
            cityId: 110,
            cityName: '开封',
            citySpell: 'KAIFENG',
            cityFirstLetter: 'K'
          },
          {
            cityId: 179,
            cityName: '喀什地区',
            citySpell: 'KASHIDIQU',
            cityFirstLetter: 'K'
          },
          {
            cityId: 180,
            cityName: '克拉玛依',
            citySpell: 'KELAMAYI',
            cityFirstLetter: 'K'
          },
          {
            cityId: 266,
            cityName: '来宾',
            citySpell: 'LAIBIN',
            cityFirstLetter: 'L'
          },
          {
            cityId: 122,
            cityName: '莱芜',
            citySpell: 'LAIWU',
            cityFirstLetter: 'L'
          },
          {
            cityId: 99,
            cityName: '马鞍山',
            citySpell: 'MAANSHAN',
            cityFirstLetter: 'M'
          },
          {
            cityId: 53,
            cityName: '南充',
            citySpell: 'NANCHONG',
            cityFirstLetter: 'N'
          },
          {
            cityId: 11,
            cityName: '南京',
            citySpell: 'NANJING',
            cityFirstLetter: 'N'
          },
          {
            cityId: 165,
            cityName: '盘锦',
            citySpell: 'PANJIN',
            cityFirstLetter: 'P'
          },
          {
            cityId: 298,
            cityName: '黔东南州',
            citySpell: 'QIANDONGNANZHOU',
            cityFirstLetter: 'Q'
          },
          {
            cityId: 167,
            cityName: '日照',
            citySpell: 'RIZHAO',
            cityFirstLetter: 'R'
          },
          {
            cityId: 249,
            cityName: '三门峡',
            citySpell: 'SANMENXIA',
            cityFirstLetter: 'S'
          },
          {
            cityId: 225,
            cityName: '三明',
            citySpell: 'SANMING',
            cityFirstLetter: 'S'
          },
          {
            cityId: 37,
            cityName: '三亚',
            citySpell: 'SANYA',
            cityFirstLetter: 'S'
          },
          {
            cityId: 185,
            cityName: '宿州',
            citySpell: 'SUZHOU',
            cityFirstLetter: 'S'
          },
          {
            cityId: 354,
            cityName: '塔城地区',
            citySpell: 'TACHENGDIQU',
            cityFirstLetter: 'T'
          },
          {
            cityId: 121,
            cityName: '泰安',
            citySpell: 'TAIAN',
            cityFirstLetter: 'T'
          },
          {
            cityId: 81,
            cityName: '潍坊',
            citySpell: 'WEIFANG',
            cityFirstLetter: 'W'
          },
          {
            cityId: 42,
            cityName: '威海',
            citySpell: 'WEIHAI',
            cityFirstLetter: 'W'
          },
          {
            cityId: 32,
            cityName: '厦门',
            citySpell: 'XIAMEN',
            cityFirstLetter: 'X'
          },
          {
            cityId: 49,
            cityName: '银川',
            citySpell: 'YINCHUAN',
            cityFirstLetter: 'Y'
          },
          {
            cityId: 76,
            cityName: '营口',
            citySpell: 'YINGKOU',
            cityFirstLetter: 'Y'
          },
          {
            cityId: 168,
            cityName: '枣庄',
            citySpell: 'ZAOZHUANG',
            cityFirstLetter: 'Z'
          },
          {
            cityId: 241,
            cityName: '张家界',
            citySpell: 'ZHANGJIAJIE',
            cityFirstLetter: 'Z'
          },
          {
            cityId: 78,
            cityName: '张家口',
            citySpell: 'ZHANGJIAKOU',
            cityFirstLetter: 'Z'
          },
          {
            cityId: 326,
            cityName: '张掖',
            citySpell: 'ZHANGYE',
            cityFirstLetter: 'Z'
          },
          {
            cityId: 142,
            cityName: '漳州',
            citySpell: 'ZHANGZHOU',
            cityFirstLetter: 'Z'
          }
        ]
        this.city.localCity = {
          cityId: 301,
          cityName: '保山',
          citySpell: 'BAOSHAN',
          cityFirstLetter: 'B'
        }
      },
      choiceCity: function () {
        this.city.isShow = true
      },
      close: function () {
        this.city.isShow = false
      }
    }
  }
</script>
