<script setup>
import { RouterView } from 'vue-router';
import LoaderWrapper from '../admin/LoaderWrapper.vue';
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue';
import VerticalHeaderVue from '../admin/vertical-header/VerticalHeader.vue';
import FooterPanel from '../admin/footer/FooterPanel.vue';
</script>

<template>
    <v-locale-provider>
        <v-app :class="[]">
            <VerticalSidebarVue />
            <VerticalHeaderVue />

            <v-main class="page-wrapper">
                <v-container>
                    <div>
                        <!-- Loader start -->
                        <LoaderWrapper />
                        <!-- Loader end -->
                        <RouterView />
                    </div>
                </v-container>
                <v-container class="pt-0 hide">
                    <div>
                        <FooterPanel />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
