import Vue from "vue";

export default Vue.component("Profile", {
    data: () => ({
        name: "Camila"
    }),
    template: `
        <div class="profile">
            <img src="./images/link.jpg" alt="" />
            <h1>{{ name }} Journal</h1>
        </div>
    `
})
