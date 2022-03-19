<template>
 <child-component @send-message="sendMessage" ref="child_component" />
 <button type="button" @click="changeChildData">Change Child Data</button>


</template>
<script>
    import ChildComponent from './ChildComponent2';
    export default {
        components: {ChildComponent},

        methods: {
            changeChildData() {
                this.$refs.child_component.msg="부모 텀포넌트가 변경한 데이터"
            }
        },

        mounted() {
            this.$refs.child_component.callFromParent();
        } 
}
</script>