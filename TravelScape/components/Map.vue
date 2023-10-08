<template>
    <div class="w-full h-screen flex justify-center items-center">
      <div id="Map" class="w-96 h-96 border-2 border-gray-300 rounded-lg"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    if (window.AMap) {
      // 高德地图API已加载，可以初始化地图
      initMap();
    } else {
      console.error('高德地图API未加载');
    }
  });
  
  const initMap = () => {
    const map = new AMap.Map('Map', { // 使用 'Map' 作为容器ID
      center: [116.397428, 39.90923], // 地图中心点
      zoom: 13 // 缩放级别
    });
  
    // 在地图初始化完成后绘制地图
    map.on('complete', () => {
      // 绘制地图的操作和功能可以在这里添加
    });
  };
  </script>
  