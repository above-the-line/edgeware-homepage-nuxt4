<template>
  <footer>
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Edgeware Technologies Pty Ltd</p>
      Level 2, 11 York St, Sydney, NSW 2000
      <br>
      https://www.edgewaretech.com.au/
    </div>
  </footer>
</template>
  
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
  
<style scoped>
footer {
  background-color: #151515;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

.footer-content {
  max-width: 100vw;
  margin: 0 auto;
}

p {
  margin: 0;
}
</style>
  