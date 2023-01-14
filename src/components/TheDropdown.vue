<template>
    <section class="drop">
        <select :class="{formControl:locale,select:!locale}"  name="LeaveType" @change="$emit('dropdown-event',$event)">
            <option class="option" v-for="item in items" :key="item.abbr">{{item.key}}</option>
        </select>
    </section>
    
</template>

<script>
export default {
    props:['list','locale'],
    emits:['dropdown-event'],
    data(){
        return {
            items: this.list,
         } 
    }
}
</script>

<style scoped>
.drop{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* margin-top: 2rem; */
    width:fit-content;
}
.formControl{
    text-align: center;
    padding: 3px;
    height: 2rem;
    width: 6rem;
    cursor: pointer;
    border-radius: 4px;
    /* border: ; */
    /* border: 2px outset black; */
    box-shadow: 1px 2px 6px rgba(32, 32, 32, 0.414);
    text-transform: capitalize;
    font-weight: 500;
    display: block;
    margin: 0;
}
.select{
    text-align: left;
    margin-top:2rem ;
    padding: .5rem 1rem;
    height: 3rem;
    width: 20rem;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 1px 2px 6px rgba(32, 32, 32, 0.414);
    color: gray;
    appearance: none;
    text-transform: capitalize;
}
.option{
    height: 2rem;
    text-transform: capitalize;
}
</style>