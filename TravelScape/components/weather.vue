<template>
  <client-only>
    <div id="he-plugin-standard"></div>
  </client-only>
</template>

<script>
export default {
  mounted() {
    window.WIDGET = {
      'CONFIG': {
        modules: "01234",
        background: "1",
        tmpColor: "FFFFFF",
        tmpSize: "16",
        cityColor: "FFFFFF",
        citySize: "16",
        aqiColor: "FFFFFF",
        aqiSize: "16",
        weatherIconSize: "24",
        alertIconSize: "18",
        padding: "10px 10px 10px 10px",
        shadow: "1",
        language: "auto",
        borderRadius: "5",
        fixed: "false",
        vertical: "top",
        horizontal: "left",
        key: "7360efc9e85c4819bf96d1b5425cf2a3"
      }
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0'
    document.getElementsByTagName('head')[0].appendChild(script)
  }
}
</script>
