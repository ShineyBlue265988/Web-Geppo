<script setup>
import { ref } from 'vue';
import NoticeAdmin from './components/NoticeAdmin.vue';
import NoticeEmployees from './components/NoticeEmployees.vue';
import MonthyReport from './components/MonthlyReport.vue';
import AttandenceStatus from './components/AttendanceStatus.vue';
import CardButtons from './components/CardButtons.vue';

const nowDate = new Date();
const nowMonth = nowDate.getMonth() + 1;
const lastMonth = nowDate.getMonth();

const panel = ref([0, 1, 2, 3, 4]);
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <v-expansion-panels v-model="panel" variant="accordion" multiple>
                <NoticeAdmin />
                <NoticeEmployees />
                <MonthyReport :item="lastMonth" />
                <MonthyReport :item="nowMonth" />
                <AttandenceStatus :item="nowDate" />
            </v-expansion-panels>
            <CardButtons />
        </v-col>
    </v-row>
</template>
