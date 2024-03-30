<template>
  <div class="header">
    <div class="header-content">
      <div class="content-left">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content-right">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name || '商品名称' }}</span>
        </div>
        <div class="des">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <div class="support-content">
            <support-ico :size="1" :type="seller.supports[0].type"></support-ico>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
          <div class="support-count">
            <span class="count">
              {{ seller.supports.length}}个
            </span>
            <i class="icon-keyboard_arrow_right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="header-footer">
      <span class="footer-title"></span>
      <span class="footer-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="header-background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SupportIco from '../support-ico/support-ico.vue'
export default {
  name: 'v-header',
  components: {
    SupportIco
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .header {
    position relative;
    color: $color-white;
    background: $color-background-ss;
    .header-content {
      display: flex;
      align-item: center;
      padding: 24px 18px 12px 24px;
      .content-left {
        flex: 0 0 64px;
        width: 64px;
        margin-right: 16px;
        img {
          border-radius: 2px;
        }
      }
      .content-right {
        flex: 1;
        .title {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 8px;
          .brand {
            width: 30px;
            height: 18px;
            bg-image('brand');
            background-size: 30px 18px;
            background-repeat no-repeat;
          }
          .name {
            margin-left: 6px;
            font-size: $fontsize-large;
            font-weight: bold;
          }
        }
        .des {
          margin-bottom: 8px;
          line-height 12px;
          font-size: $fontsize-small;
        }
        .support {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .support-count {
            display: flex;
            align-items: center;
            padding: 0 8px;
            height: 24px;
            text-align: center;
            border-radius: 14px;
            background: $color-background-sss;
            .count {
              font-size: $fontsize-small-s;
              .icon-keyboard_arrow_right {
                margin-left: 2px;
                line-height: 24px;
                font-size: $fontsize-small-s;
              }
            }
          }
        }
      }
    }
    .header-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 28px;
      padding: 0 8px;
      background: $color-background-sss;
      .footer-title {
        flex: 0 0 22px;
        width: 22px;
        height: 12px;
        margin-right 4px;
        bg-image('bulletin');
        background-size: 22px 12px;
        background-repeat no-repeat;
      }
      .footer-text {
        flex: 1
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        font-size: $fontsize-small-s
      }
      .icon-keyboard_arrow_right {
        flex: 0 0 10px
        width: 10px
        font-size: $fontsize-small-s
      }
    }
    .header-background {
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    }
  }
</style>
