<script setup>
import { shallowRef } from 'vue';
import trafficReportItems from './trafficReportItems.js';
import TrafficReportItem from './TrafficReportItem.vue';

const trafficReportList = shallowRef(trafficReportItems);
</script>
<template lang="">
    <v-expansion-panel>
        <v-expansion-panel-title>交通費報告</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-row>
                <v-col cols="12">
                    <v-icon icon="mdi-help-circle" color="lightsecondary"></v-icon>
                    <v-link class="text-decoration-underline primary-color">交通費の申請ルール</v-link>
                </v-col>
            </v-row>
            <div class="py-2"></div>
            <div class="d-flex justify-between table-header">
                <div class="text-center" style="width: 40px"></div>
                <div style="width: calc(15% + 40px)">利用日</div>
                <div style="width: calc(10% + 0px)">行先</div>
                <div style="width: calc(9% + 0px)">交通手段</div>
                <div style="width: calc(13% + 0px)">発地</div>
                <div style="width: calc(12% + 0px)">着地</div>
                <div>金額</div>
            </div>
            <template v-for="(item, index) in trafficReportList" :key="index">
                <TrafficReportItem :item="item" :index="index" />
            </template>
            <div class="py-2"></div>
            <v-row>
                <v-col cols="12">
                    <v-btn color="secondary">
                        <v-icon icon="mdi-plus-circle" color="lightsecondary" size="large"></v-icon>
                        追加
                    </v-btn>
                    <div class="pa-2 mr-3 float-right disabledCell">16000</div>
                    <div class="float-right align-center pa-2">合計稼働</div>
                </v-col>
                <v-col cols="12">
                    <div>交通費の備考</div>
                    <v-textarea variant="outlined"></v-textarea>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style lang=""></style>
