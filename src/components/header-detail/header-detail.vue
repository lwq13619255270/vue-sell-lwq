<template>
  <div>
    <transition name="fade">
      <div v-show="visible" class="header-detail">
        <div class="detail-wrapper">
          <div class="detail-main">
            <h1 class="name">{{ seller.name }}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports">
              <li class="support-item" v-for="item in seller.supports" :key="item.id">
                <support-ico :size="2" :type="item.type"></support-ico>
                <span class="text">{{ item.description }}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
          <div class="detail-close" @click="hide">
            <i class="icon-close close-btn"></i>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import SupportIco from '../support-ico/support-ico.vue'
  import Star from '../star/star.vue'
  export default {
    name: 'header-detail',
    components: {
      Star,
      SupportIco
    },
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .header-detail
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    backdrop-filter: blur(5px)
    opacity: 1
    color: $color-white
    background: $color-background-s
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: $color-background
    .detail-wrapper
      display: inline-block
      width: 100%
      min-height: 100%
      text-align: text
      .detail-main
        margin: 64px 0
        .name
          line-height: 16px
          text-align: center
          font-size: $fontsize-large
        .star-wrapper
          margin-top: 18px
          padding: 2px 0
          text-align: center
        .title
          display: flex
          width: 80%
          margin: 28px  auto 24px auto
          .line
            flex: 1
            position: relative
            top: -6px
            border-bottom 1px solid rgba(255, 255, 255, 0.2)
          .text
            padding: 1 12px
            font-weight: 700
            font-size $fontsize-medium
        .supports
          width: 80%
          margin 0 auto
          .support-item
            display: flex
            align-item: center
            padding-bottom: 12px
            &:last-child
              margin-bottom: 0
            .support-ico
              margin-right: 6px
            .text
              line-height: 16px
              font-size: $fontsize-small
        .bulletin
          width: 80%
          margin: 0 auto
          .content
            padding: 0 12px
            line-height: 24px
            font-size: $fontsize-small
    .detail-close
      display: flex
      justify-content: center
      font-size: $fontsize-large-xxxx
</style>
