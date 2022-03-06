<template>
<select v-model="selectedValue" @change="changeSelect">
   <option value="S">서울</option>
   <option value="B">부산</option>
   <option value="J">제주</option>
 </select>
</template>
<script>
export default {
 data() {
   return {
     selectedValue: 'S'
   };
  },
  methods: {
    changeSelect(){
      alert(this.selectedValue);
    }
  }
}
</script>