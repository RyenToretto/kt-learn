<script setup lang="ts">
const colorMode = useColorMode()
const isHero = computed(() => colorMode.value === 'hero')

// 打赏模态框
const showPaymentModal = ref(false)
const selectedPayment = ref<'wechat' | 'alipay'>('wechat')

const paymentMethods = [
  {
    id: 'wechat' as const,
    name: '微信支付',
    icon: 'simple-icons:wechat',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    id: 'alipay' as const,
    name: '支付宝',
    icon: 'simple-icons:alipay',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  }
]

const openPayment = (type: 'wechat' | 'alipay') => {
  selectedPayment.value = type
  showPaymentModal.value = true
}

const supportTiers = [
  {
    emoji: '☕',
    title: '请我喝杯咖啡',
    price: '¥10',
    description: '小小的鼓励，大大的动力'
  },
  {
    emoji: '🍜',
    title: '请我吃碗面',
    price: '¥30',
    description: '让我有力气写更多内容'
  },
  {
    emoji: '🎁',
    title: '慷慨打赏',
    price: '¥66',
    description: '你的支持是最大的认可'
  },
  {
    emoji: '💎',
    title: '土豪打赏',
    price: '¥128+',
    description: '壕气冲天，感激不尽'
  }
]
</script>

<template>
  <div class="min-h-screen py-8 md:py-12">
    <div class="max-w-4xl mx-auto px-4 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <div 
          class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
          :class="isHero ? 'bg-hero-gold/20' : 'bg-pink-500/10'"
        >
          <Icon 
            name="heroicons:heart-20-solid" 
            class="w-10 h-10"
            :class="isHero ? 'text-hero-gold animate-pulse' : 'text-pink-500 animate-pulse'"
          />
        </div>
        <h1 
          class="text-3xl md:text-5xl font-bold mb-4"
          :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
        >
          支持作者
        </h1>
        <p class="text-theme-secondary max-w-2xl mx-auto text-lg">
          如果这个项目对你有帮助，欢迎请我喝杯咖啡 ☕️
        </p>
      </div>

      <!-- Support Message -->
      <div 
        class="card p-6 md:p-8 mb-8"
        :class="isHero ? 'hero-corner hero-decoration' : ''"
      >
        <div class="prose prose-lg max-w-none dark:prose-invert text-theme-secondary">
          <p>
            👋 你好！感谢你使用 KT-Learn 学习前端技术。
          </p>
          <p>
            这个项目花费了大量的时间和精力来设计学习路径、编写教程内容、制作代码示例。
            如果你觉得这些内容对你有帮助，不妨考虑支持一下作者，让我能够持续产出更多高质量的学习内容。
          </p>
          <p>
            你的每一份支持，都是我继续创作的动力。不论金额大小，我都会铭记于心。感谢 💖
          </p>
        </div>
      </div>

      <!-- Support Tiers -->
      <div class="grid sm:grid-cols-2 gap-4 mb-8">
        <div
          v-for="tier in supportTiers"
          :key="tier.title"
          class="card p-5 text-center hover:scale-[1.02] transition-all duration-200"
          :class="isHero ? 'hero-border' : ''"
        >
          <div class="text-4xl mb-3">{{ tier.emoji }}</div>
          <h3 class="font-bold text-theme mb-1">{{ tier.title }}</h3>
          <div 
            class="text-2xl font-bold mb-2"
            :class="isHero ? 'text-hero-gold' : 'text-accent'"
          >
            {{ tier.price }}
          </div>
          <p class="text-sm text-theme-muted">{{ tier.description }}</p>
        </div>
      </div>

      <!-- Payment Methods -->
      <div 
        class="card p-6 md:p-8"
        :class="isHero ? 'hero-decoration' : ''"
      >
        <h2 
          class="text-xl font-bold mb-6 text-center"
          :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
        >
          选择支付方式
        </h2>
        
        <div class="grid sm:grid-cols-2 gap-4">
          <button
            v-for="method in paymentMethods"
            :key="method.id"
            @click="openPayment(method.id)"
            class="p-6 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] group"
            :class="[
              isHero 
                ? 'border-hero-gold/30 hover:border-hero-gold hover:shadow-hero-gold/20' 
                : 'border-theme hover:border-accent hover:shadow-lg'
            ]"
          >
            <div 
              class="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
              :class="method.bgColor"
            >
              <Icon :name="method.icon" class="w-8 h-8" :class="method.color" />
            </div>
            <div class="font-semibold text-theme">{{ method.name }}</div>
          </button>
        </div>
      </div>

      <!-- Other Ways to Support -->
      <div class="mt-12">
        <h2 
          class="text-xl font-bold mb-6 text-center"
          :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
        >
          其他支持方式
        </h2>
        
        <div class="grid sm:grid-cols-3 gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="card p-5 text-center group hover:scale-[1.02] transition-all duration-200"
          >
            <Icon 
              name="mdi:github" 
              class="w-8 h-8 mx-auto mb-3 text-theme-secondary group-hover:text-theme transition-colors"
            />
            <div class="font-medium text-theme">给个 Star ⭐</div>
            <p class="text-xs text-theme-muted mt-1">在 GitHub 上支持项目</p>
          </a>
          
          <a
            href="#"
            class="card p-5 text-center group hover:scale-[1.02] transition-all duration-200"
          >
            <Icon 
              name="heroicons:share-20-solid" 
              class="w-8 h-8 mx-auto mb-3 text-theme-secondary group-hover:text-theme transition-colors"
            />
            <div class="font-medium text-theme">分享给朋友</div>
            <p class="text-xs text-theme-muted mt-1">让更多人知道这个项目</p>
          </a>
          
          <a
            href="#"
            class="card p-5 text-center group hover:scale-[1.02] transition-all duration-200"
          >
            <Icon 
              name="heroicons:chat-bubble-left-right-20-solid" 
              class="w-8 h-8 mx-auto mb-3 text-theme-secondary group-hover:text-theme transition-colors"
            />
            <div class="font-medium text-theme">反馈建议</div>
            <p class="text-xs text-theme-muted mt-1">帮助改进内容质量</p>
          </a>
        </div>
      </div>

      <!-- Thanks -->
      <div class="mt-12 text-center">
        <p class="text-theme-muted">
          感谢你的支持！🙏
        </p>
      </div>
    </div>

    <!-- Payment Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="showPaymentModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          @click.self="showPaymentModal = false"
        >
          <Transition name="scale">
            <div 
              v-if="showPaymentModal"
              class="card p-6 md:p-8 w-full max-w-md relative"
              :class="isHero ? 'hero-corner' : ''"
            >
              <!-- Close Button -->
              <button
                @click="showPaymentModal = false"
                class="absolute top-4 right-4 p-2 rounded-lg text-theme-muted hover:text-theme hover:bg-theme-tertiary transition-colors"
              >
                <Icon name="heroicons:x-mark-20-solid" class="w-5 h-5" />
              </button>

              <!-- Header -->
              <div class="text-center mb-6">
                <div 
                  class="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  :class="selectedPayment === 'wechat' ? 'bg-green-500/10' : 'bg-blue-500/10'"
                >
                  <Icon 
                    :name="selectedPayment === 'wechat' ? 'simple-icons:wechat' : 'simple-icons:alipay'"
                    class="w-8 h-8"
                    :class="selectedPayment === 'wechat' ? 'text-green-500' : 'text-blue-500'"
                  />
                </div>
                <h3 
                  class="text-xl font-bold mb-2"
                  :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
                >
                  {{ selectedPayment === 'wechat' ? '微信支付' : '支付宝' }}
                </h3>
                <p class="text-theme-secondary text-sm">
                  扫描下方二维码完成打赏
                </p>
              </div>

              <!-- QR Code Placeholder -->
              <div 
                class="aspect-square w-full max-w-[240px] mx-auto rounded-2xl flex flex-col items-center justify-center"
                :class="isHero ? 'bg-hero-bg-tertiary border border-hero-gold/20' : 'bg-theme-tertiary'"
              >
                <Icon 
                  name="heroicons:qr-code-20-solid" 
                  class="w-20 h-20 text-theme-muted mb-3"
                />
                <p class="text-sm text-theme-muted text-center px-4">
                  付款码图片<br>
                  <span class="text-xs">(请替换为真实二维码)</span>
                </p>
              </div>

              <!-- Switch Payment -->
              <div class="mt-6 text-center">
                <button
                  @click="selectedPayment = selectedPayment === 'wechat' ? 'alipay' : 'wechat'"
                  class="text-sm text-theme-muted hover:text-theme transition-colors"
                >
                  切换到{{ selectedPayment === 'wechat' ? '支付宝' : '微信' }}
                </button>
              </div>

              <!-- Instructions -->
              <div class="mt-6 pt-6 border-t border-theme">
                <h4 class="text-sm font-medium text-theme mb-2">打赏说明</h4>
                <ul class="text-xs text-theme-muted space-y-1">
                  <li>• 打赏金额随意，心意最重要</li>
                  <li>• 打赏后可在备注中留下你的名字</li>
                  <li>• 所有打赏将用于内容创作和服务器维护</li>
                </ul>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
