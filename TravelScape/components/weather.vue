<template>
    <div id="he-plugin-standard"></div>
</template>


<script>
export default {
  mounted() {
    window.WIDGET = {
      CONFIG: {
        layout: "1",
        width: "400",
        height: "150",
        background: "1",
        dataColor: "FFFFFF",
        key: "78d9b31e529f441ea812cf9919008f88"
      }
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
};
</script>






<!-- 7360efc9e85c4819bf96d1b5425cf2a3 -->