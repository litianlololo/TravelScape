<template>
      <div class="aspect-[1/1] rounded-2xl" id="container">
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';
const { $generalStore } = useNuxtApp();

let map; // 地图实例

onMounted(async () => {
  if (process.client) {
    window._AMapSecurityConfig = {
      securityJsCode: '17c389ea6936a2d4164f9a8f3d22b18a',
    };

    try {
      const AMap = await AMapLoader.load({
        key: '4a1b6017bf86a5454e5a2db414d42a2e',
        version: '2.0',
        plugins: [''],
      });

      map = new AMap.Map('container', {
        viewMode: '3D',
        zoom: 13,
        center: [113.808299, 34.791787],
      });
      // 在地图初始化后自动执行搜索
      map.on('complete', function () {
        search($generalStore.chosedsite.name, $generalStore.chosedsite.province, $generalStore.chosedsite.city);
      });
    } catch (e) {
      console.error(e);
    }
  }
});

function search(keyword, province, city) {
  AMap.plugin(["AMap.PlaceSearch"], function () {
    // 构造地点查询类
    var placeSearch = new AMap.PlaceSearch({
      pageSize: 1, // 单页显示结果条数
      pageIndex: 1, // 页码
      city: city, // 兴趣点城市
      citylimit: true,  // 是否强制限制在设置的城市内搜索
      map: map, // 展现结果的地图实例
      panel: "panel", // 结果列表将在此容器中进行展示。
      autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
    });
    // 关键字查询
    placeSearch.search(keyword, function (status, result) {
      if (status === 'complete' && result.info === 'OK' && result.poiList && result.poiList.pois && result.poiList.pois.length > 0) {
        // 获取最符合的地点
        const mostRelevantPlace = result.poiList.pois[0];

        // 创建标记并在地图上显示
        const marker = new AMap.Marker({
          position: [mostRelevantPlace.location.lng, mostRelevantPlace.location.lat],
          title: mostRelevantPlace.name,
        });

        marker.setMap(map);

        // 可以根据需要设置地图视野以确保标记可见
        map.setCenter([mostRelevantPlace.location.lng, mostRelevantPlace.location.lat]);
      }
    });
  });
}
</script>
