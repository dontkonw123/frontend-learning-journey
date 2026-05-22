<template>
  <div class="container">
   
    <!-- 添加新的待办事项 -->
    <div class="input-container">
      <input type="text" class="numInput" v-model="newItem" />
      <button class="btn" @click="addHandle">添加</button>
    </div>
    <!-- 待办事项列表 -->
    <div class="list">
      <div v-for="(it, index) in list" :key="index" class="item">
        <!-- 内容 -->
        <div
          :class="it.completed ? 'del' : ''"
          @click="completeHandle(it.id)"
        >
          {{ it.name }}
        </div>
        <!-- 删除 -->
        <div class="close" @click="deleteHandle(index)">X</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useListStore } from '@/store/useListStore.js'
const listStore = useListStore()
const { list } = storeToRefs(listStore)
const {addList,deleteList,updateList} = listStore
const newItem = ref('')
const addHandle = () => {
  if(newItem.value.trim() !== '') {
    addList(newItem.value)
  newItem.value = ''
  }else{
    window.confirm('请填写新增项目')
  }
  
}
const deleteHandle = (id) => {
  deleteList(id)
}
const completeHandle = (id) => {
  updateList(id)
}
</script>
<style scoped>
.container {
  width: 300px;
  /* outline: 1px solid blue; */
  margin: 20px auto;
}
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* outline: 1px solid; */
}
.numInput {
  width: 75%;
  height: 30px;
}
.btn {
  width: 20%;
  cursor: pointer;
}
.list {
  margin-top: 20px;
}
.item {
  /* outline: 1px solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  font-size: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.close {
  width: 20px;
  height: 20px;
  /* border: 1px solid; */
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  background-color: rgb(243, 83, 83);
  color: #fff;
  font-weight: 400;
  cursor: pointer;
}

.del {
  text-decoration: line-through;
}
</style>
