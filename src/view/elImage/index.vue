<template>
    <div style="width:800px;height:600px;margin:200px auto">
        <el-image
        style="width:200px;height:200px"
            @click.stop.prevent="clickImage"
            :src="fileUrl"
            :preview-src-list="getPreviewList(fileUrl, imageUrlList)"
        >
        </el-image>
       <!-- <img src="../../assets/logo.png" alt=""> -->
    </div>
</template>
 
<script>
//导入下载方法
import downLoadRemoteFile from "@/util/index.js";

export default {
    data() {
        return {
            fileUrl:
                "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
            imageUrlList: [
                {
                    fileName: "test4.jpeg",
                    fileUrl:
                        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
                },
                {
                    fileName: "test5.jpeg",
                    fileUrl:
                        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
                },
            ],
        };
    },

    methods: {
        /**
         * @description: 查看-大图预览, 先看当前大图
         * @param {Number} index 当前下标
         * @param {Array} imgList 所有大图
         * @return {Array} arr 当前图片为第一个的大图
         */
        getPreviewList(index, imgList) {
            index = 0;
            let arr = [];
            let i = 0;
            for (i; i < imgList.length; i++) {
                arr.push(imgList[i + index].fileUrl);
                if (i + index >= imgList.length - 1) {
                    index = 0 - (i + 1);
                }
            }
            return arr;
        },
        /**
         * @description: 预览的图片添加下载按钮
         */
        clickImage() {
            this.$nextTick(() => {
                let wrapper = document.getElementsByClassName(
                    "el-image-viewer__actions__inner"
                );
                let downImg = document.createElement("i");
                downImg.setAttribute("class", "el-icon-download");
                wrapper[0].appendChild(downImg);
                if (wrapper.length > 0) {
                    console.log("xxxx");
                    this.wrapperElem = downImg;
                    this.cusClickHandler();
                }
            });
        },

        /**
         * @description: 预览的图片给下载按钮添加事件
         */
        cusClickHandler() {
            this.wrapperElem.addEventListener("click", () => {
                const imgUrl = document.getElementsByClassName(
                    "el-image-viewer__img"
                )[0].src;
                const ArrCurImg = this.imageUrlList.filter((item) => {
                    return item.fileUrl === imgUrl;
                });
                console.log("22222");
                downLoadRemoteFile(imgUrl, ArrCurImg[0].fileName);
            });
        },
    },
};
</script>