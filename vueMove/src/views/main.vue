<template>
    <v-jumbotron>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">웹사이트에 온 것을 환영하오</h3>

            <span class="subheading">간단한 VUE 간 이동 샘플을 다루고 있으며, router.js 와 views 폴더를 열어보시면 아마 대강 감이 잡히실겁니다</span>

            <v-divider class="my-3"></v-divider>

            <div class="title mb-3">아래 버튼을 눌러 test.vue 로 이동해보세요!</div>

            <v-btn
              class="mx-0"
              color="primary"
              href="test"
              large
            >
              이동하기
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>
