<template>
    <div class="py-4 p-st" :class="{
        'bg-white': !nightMode,
        'bg-dark': nightMode,
        'text-light': nightMode,
    }">
        <div class="container">
            <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
                <span class="title text-center" :class="{ pgray: !nightMode, 'text-light': nightMode }">about me.</span>
            </div>
            <hr width="50%" :class="{ pgray: !nightMode, 'bg-secondary': nightMode }" />
            <div>
                <Timeline :data="education" :nightMode="nightMode" />
            </div>
            <div>
                <Timeline :data="experience" :nightMode="nightMode" />
            </div>
        </div>
    </div>
</template>

<script>
import Timeline from "./helpers/Timeline.vue";
import info from "../../info";

export default {
    name: "About",
    components: {
        Timeline,
    },
    props: {
        nightMode: {
            type: Boolean,
        },
    },
    data() {
        return {
            education: {
                title: "education",
                data: info.education,
            },
            experience: {
                title: "experiences",
                data: info.experience,
            },
        };
    },
};
</script>

<style scoped>
.title {
    font-size: 30px;
    font-weight: 500;
}
</style>