import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

new Vue({
    el:"#vueapp",
    mounted() {
        this._initVueApp();
        this.btnTakePhotoClicked();
    },
    methods: {
        async _initVueApp() {
            navigator.getUserMedia = navigator['webkitGetUserMedia'] || navigator['mozGetUserMedia'] || navigator['getUserMedia'];
            this.$refs.video.srcObject = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
            this._context2d = this.$refs.canvas.getContext("2d");
            this.canvas = this.$refs.canvas;
        },

        btnTakePhotoClicked() {
            this._context2d.drawImage(this.$refs.video,0,0,400,300);
            var img = document.createElement("img");
            img.src = this.canvas.toDataURL("image/png");
            var saveHref = document.getElementById("save_href");
            console.log(img.src);
            var sd = document.getElementById("save_img");
            saveHref.href = img.src;
            sd.src = img.src;
        },
    }
})
