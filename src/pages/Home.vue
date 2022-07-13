<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <div class="error" v-if="error">
          <p>{{error}}</p>
        </div>

        <Search
          :value="search"
          placeholder="Type username..."
          @search="search = $event"/>
        <button v-if="!repos" class="btn btnPrimary" @click="getRepos">Search</button>
        <button v-else class="btn btnPrimary" @click="getRepos">Search again</button>
        <div class="repos_wrapper" v-if="repos">
          <div class="repo-item" v-for="repo in repos" :key="repo.id">
            <div class="repo-info">
              <a class="link" target="_blank" :href="repo.html_url">{{repo.name}}</a>
              <span> ⭐ {{repo.stargazers_count}} </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Search from "@/components/Search";
import axios from 'axios'

export default {
  name: "Home",
  components: {
    Search
  },
  data () {
    return {
      search: '',
      error: null,
      repos: null
    }
  },
  methods: {
    getRepos () {
      axios
          .get(`https://api.github.com/users/${this.search}/repos`)
          .then(res => {
            this.repos = res.data
            this.error = null
          })
          .catch(err => {
            this.repos = null
            this.error = 'Can`t find this user'
          })
    }
  }

}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
button {
  margin-top: 40px;
}
.repos_wrapper {
  width: 400px;
  margin: 30px 0;
}
.repo-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
</style>