<script setup>
const props = defineProps({ item: Object, total: Number, index: Number });
const weekDay = ['日', '月', '火', '水', '木', '金', '土'];

const date = props.item.date;
const dateObject = new Date(date);
const weekNum = dateObject.getDay();

const week = weekDay[weekNum];
</script>
<template>
    <div class="d-flex justify-between">
        <div class="disabledCell text-center" style="width: 40px">
            {{ index + 1 }}
        </div>
        <div class="borderCell" style="width: 15%">
            {{ item.date }}
            <v-icon icon="mdi-calendar-blank" class="float-right" size="small"></v-icon>
        </div>
        <div class="disabledCell text-center" style="width: 40px">
            {{ week }}
        </div>
        <div class="borderCell pa-0" style="width: 10%">
            <v-combobox v-model="item.destination" :items="['客先', '自社', '自宅']" variant="outlined"></v-combobox>
        </div>
        <div class="borderCell pa-0" style="width: 10%">
            <v-combobox v-model="item.trafficMethod" :items="['電車', 'バス', '他']" variant="outlined"></v-combobox>
        </div>
        <div class="borderCell" style="width: 10%">
            {{ item.from }}
        </div>
        <div class="borderCell" style="width: 10%">{{ item.to }}</div>
        <div class="text-center" style="width: 7%">
            <v-checkbox v-model="item.round" color="primary" label="往復"></v-checkbox>
        </div>
        <div class="borderCell" style="width: 8%">
            {{ item.cost }}
        </div>
        <div style="width: 22%">
            <v-btn color="secondarydisabled" class="float-right mx-1" flat>
                <v-icon icon="mdi-delete-forever" color="lightsecondarydisabled" size="large"></v-icon>
            </v-btn>
            <v-btn color="secondarydisabled" class="float-right mx-1" flat>
                <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondarydisabled" size="large"></v-icon>
                <span class="surface-color">コピー追加</span>
            </v-btn>
        </div>
    </div>
</template>

<style></style>
