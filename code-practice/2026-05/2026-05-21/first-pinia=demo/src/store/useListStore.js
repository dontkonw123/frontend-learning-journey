import { defineStore } from 'pinia';
export const useListStore = defineStore('list', {
  state: () => ({
    list: [
      {
        id: 1,
        name: '打羽毛球',
        completed: true,
      },
      {
        id: 2,
        name: '打乒乓球',
        completed: false,
      },
      {
        id: 3,
        name: '学习vue',
        completed: false,}
      ],
      
    }),
    actions: {
      addList(name) {
        this.list.push({
          id: this.list.length + 1,
          name,
          completed: false,
        });
      },
      deleteList(index) {
        const item = this.list[index];
        if(window.confirm(`是否删除当前项目？\n
        ${item.name}\n
        ${item.completed ? '已完成' : '未完成'}`
        )){

          this.list.splice(index, 1);
        }else{
          return
        }


      },
      updateList(id) {
        const item = this.list.find((item) => item.id === id);
        if (item) {
          item.completed = !item.completed;
      }
    }
  }
})