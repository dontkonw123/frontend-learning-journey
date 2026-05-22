<template>
  <div>
   
      <h1>pinia计数器演示</h1>
      <div id="center">
        <div>Count is {{ count }}</div>
        <button type="button" class="counter" @click="increment()">+ 1</button>
      </div>

      <div class="ticks">
        <div>Count is {{ doubleCount }}</div>
      </div>
      <div>
        <p>store.$reset()方法</p>
        <button type="button" class="counter" @click="countStore.$reset()">重置</button>
      </div>
      <div>
        <p>store.$patch()方法</p>
        <input type="text" v-model="newCount" placeholder="请设置新值" />
        <button type="button" class="counter" @click="setNewCount()">确定</button>
      </div>
    
    
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useCountStore } from '@/store/useCountStore.js'
import { ref } from 'vue'
const countStore = useCountStore()
const { count, doubleCount } = storeToRefs(countStore)
const { increment } = countStore
let newCount = ref('0')
const setNewCount = () => {
  countStore.$patch({ count: ~~newCount.value })
}
</script>
