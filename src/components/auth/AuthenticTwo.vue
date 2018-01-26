<template>
    <div class="auth-box">
        <div class="photo-title">
            我的身份(vue实现图片手机图片上传功能)
        </div>
        <div class="photo">
            <div class="photo-item" v-for="(item, index) in imgBtnRender">
                <div class="cert-blank" @click="uploadImg(item.id)">
                    <div class="label-text">{{item.label}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'authentic-two',
    data () {
      return {
        _id: null,
        uploadType: '往来内地通行证',
        imgBtnRender: [],
        uploadList: [
          {
            type: '往来内地通行证',
            imgBtn: [
              {
                id: 'identity_pass_front',
                label: '人像页',
                showImg: false
              },
              {
                id: 'identity_pass_rear',
                label: '文字页',
                showImg: false
              }
            ]
          }
        ],
        waitUploadImg: {
          identity_pass_front: null,
          identity_pass_rear: null
        },
        uploadPictures: {}
      }
    },
    mounted () {
      this.uploadList.forEach((item) => {
        if (item.type === this.uploadType) {
          this.imgBtnRender = item.imgBtn
        }
      })
    },
    methods: {
      uploadImg (id) {
        console.log('---------id:' + id)
        this._id = id // 图片

        let _this = this
        this.$wechat.run((wx) => {
          // 选择图片
          wx.chooseImage({
            count: 6, // 默认9
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
              let localIds = res.localIds
              // 上传图片
              _this.syncUpload(wx, localIds)
            },
            fail: function (error) {
              console.log(error)
            }
          })
        })
      },
      syncUpload (wx, localIds) {
        var localId = localIds.pop()
        // 解决IOS无法上传的坑
        if (localId.indexOf('wxlocalresource') !== -1) {
          localId = localId.replace('wxlocalresource', 'wxLocalResource')
        }
        let _this = this
        wx.uploadImage({
          localId: localId.toString(),             // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 1,          // 默认为1，显示进度提示
          success: function (res) {
            let serverId = res.serverId // 返回图片的服务器端ID(serverId)
            // localId本地展示图片
            // ios下需getLocalImgData获取图片
            if (window.__wxjs_is_wkwebview) {
              console.log('------------------ios')
              let __this = _this
              wx.getLocalImgData({
                localId: localId,
                success: function (res) {
                  console.log('-----------------获取图片成功')
                  let localData = res.localData
                  localData = localData.replace('jgp', 'jpeg')
                  __this.showImg(localData, serverId)
                },
                fail: function (res) {
                  console.log('-----------------获取图片失败')
                  __this.$store.commit('showError', {message: res.errMsg})
                }
              })
            } else { // 其他设备localId即为图片路径
              console.log('------------------android')
              _this.showImg(localId, serverId)
            }

            if (localIds.length > 0) {
              _this.syncUpload(wx, localIds)
            }
          },
          fail: function (error) {
            alert(error)
          }
        })
      },
      showImg (localId, serverId) {
        // 根据微信返回的localId渲染图片列表
        console.log('------------------开始----------')

        this.waitUploadImg[this._id] = serverId
        this.uploadPictures[this._id] = serverId

        let url = localId
        this.uploadList.forEach((item) => {
          if (item.type === this.uploadType) {
            item.imgBtn.forEach((value) => {
              if (value.id === this._id) {
                value.src = url
                value.showImg = true
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
