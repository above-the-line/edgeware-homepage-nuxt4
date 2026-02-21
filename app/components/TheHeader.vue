<template>
  <header>
    <nav class="flex flex-wrap items-center justify-center md:justify-between">
      <NuxtLink to="/">
        <div class="logoBox">
          <h1 class="edgeware">EDGEWARE</h1>
          <h2 class="technologies">TECHNOLOGIES</h2>
        </div>
      </NuxtLink>
      <div class="navLinks">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/solutions">Solutions</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/trials">Trials</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
  
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Edgeware" 
    }
  }
}
</script>
  
<style scoped>
header {
  max-width: 100vw;
  width: 100vw;
}

h1.edgeware {
  padding-top: 2%;
  color: rgb(249 115 22);
  font-size: 2.125rem;
  line-height: 1.1rem;
}

h2.technologies {
  letter-spacing: 0px;
}

div.logoBox {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 3%;
}

div.logoBox {
  padding: 3%;
}

header {
  background-color: #171717;
  color: white;
  padding: 1rem;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

li {
  font-size: 1.2rem;
}

a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

a:hover {
  color: #dd5a23fb;
}

div.navLinks {
  padding-right: 5%;

}

@media (max-width: 400px) {
  div.navLinks {
    display: block;
    padding-right: 7%;
  }
}


@media (min-width: 601px) and (max-width: 1024px) {
  div.navLinks {
    display: block;
  }
}


@media (min-width: 1025px) {
  div.navLinks {
    display: block;
  }
}
</style>
  