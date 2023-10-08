<template>
    <div id="he-plugin-standard"></div>
  </template>
  
  <script>
  export default {
    mounted() {
      WIDGET = {
        "CONFIG": {
          "layout": "2",
          "width": 230,
          "height": 270,
          "background": "1",
          "dataColor": "FFFFFF",
          "borderRadius": "5",
          "key": "78d9b31e529f441ea812cf9919008f88"
        }
      };
      
      // 加载天气插件
      const script = document.createElement("script");
      script.src = "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  };
  </script>
  