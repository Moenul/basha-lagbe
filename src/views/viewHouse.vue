<template>
    <NavBar></NavBar>
    <div class="fixed top-0 w-full p-9 sm:border-b-4 border-gray-800 bg-gray-800 z-0"></div>
    <div class="container mx-auto mt-24 px-4 py-2">
        <FindHouses></FindHouses>
        <GetHouses></GetHouses>
    </div>
</template>
  
<script setup>
import NavBar from "@/components/Layout/NavBar.vue";
import FindHouses from "@/components/Houses/FindHouses.vue";
import GetHouses from "@/components/Houses/GetHouses.vue";



</script>