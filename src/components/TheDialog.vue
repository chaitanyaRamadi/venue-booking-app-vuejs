<template>
        <v-dialog v-model="dialog">
            <v-card>
                <v-card-text>
                    One or More than one of your inputs are Inavalid
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default/*#__PURE__*/defineComponent({
    props:['dialog1'],
    data(){
        return {
            dialog:false
        }
    }
})
</script>