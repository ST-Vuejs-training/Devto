<template>
  <div class="col-3 md-hide">
    <aside class="side-bar right mb-4">
      <div class="crayons">
        <div class="crayons-header">
          <h3 class="crayons-title">#recommends</h3>
          <ul class="crayons-list">
            <!-- {!loading ? recommend?.map((rec) => <Recommend key={rec.id} postRecommend={rec} />) : <></>} -->
          </ul>
        </div>
      </div>
    </aside>
    <aside class="side-bar right">
      <div class="crayons">
        <div class="crayons-header">
          <h3 class="crayons-title">#news</h3>
          <ul class="crayons-list">
            <li class="crayons-item">
              <nuxt-link to="/" class="crayons-link mb-1">
                MoonZoon Dev News (5): Chat example, MoonZoon Cloud
              </nuxt-link>
              <div>
                <span class="btn btn-primary">New</span>
              </div>
            </li>
            <li class="crayons-item">
              <nuxt-link to="/" class="crayons-link mb-1">
                This week in Flutter #10
              </nuxt-link>
              <div>
                <span class="btn btn-primary">New</span>
              </div>
            </li>
            <li class="crayons-item">
              <nuxt-link to="/" class="crayons-link mb-1">
                JS1024 has started!
              </nuxt-link>
              <div>
                <span class="btn btn-primary">New</span>
              </div>
            </li>
            <li class="crayons-item">
              <nuxt-link to="/" class="crayons-link mb-1">
                The Temporal Date API
              </nuxt-link>
              <div>
                <span class="btn btn-primary">New</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>
<script></script>
