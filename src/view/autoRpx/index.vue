<template>
    <div class="content">
        <div class="left"></div>
        <div class='network-topology'>
            <header>
                <div class="diamond main" style="background-color: #2f75ee;
                color: #ffffff;">低轨卫星
                    <span class="line"></span>
                </div>
                <li class="line-one">
                    <div class="diamond one">常指挥中心
                        <span class="line"></span>
                    </div>
                    <div class="diamond two">通信车2
                        <span class="line"></span>
                    </div>
                    <div class="diamond three">通信车1
                        <span class="line"></span>
                    </div>
                </li>
                <div class="header-line"></div>
                <div class="header-line-two"></div>
                <div class="header-line-three"></div>
                <div class="header-line-four"></div>
                <div class="header-line-five"></div>
            </header>
            <section>
                <div class="left-container">
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListLeft.slice(0, 5)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class="line" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                        <div class="column-line"></div>
                    </div>
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListLeft.slice(5, 11)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class="line line-left" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListLeft.slice(11, 17)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class="line" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                        <div class="column-line column-line-long"></div>
                    </div>
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListLeft.slice(17, 23)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class="line line-left" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListLeft.slice(23, 28)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :class="{ 'line-height': index == 0 }"
                                    :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class="line" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                        <div class="column-line"></div>
                    </div>
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListLeft.slice(28, 32)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class="line line-left" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                    </div>

                </div>
                <div class="right-container">
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListRight.slice(0, 4)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class=" line line-left" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                        <div class="column-line column-line-one"></div>
                    </div>
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListRight.slice(4, 8)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class="line" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                        <div class="column-line column-line-long"></div>
                    </div>
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListRight.slice(8, 12)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class="line line-left" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="item-column">
                        <template v-for="(item, index) in nodeListRight.slice(12, 15)">
                            <div class="column-item" :key="index">
                                <div class="diamond" :class="{ 'line-height': index == 0 }"
                                    :style="{ backgroundColor: item.bgColor }">
                                    <span>{{ item.label }}</span>
                                    <span class="line" :style="{ borderColor: item.color }"></span>
                                </div>
                            </div>
                        </template>
                        <div class="column-line"></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    
</template>

<script>

export default {
    components: {},
    data() {
        return {
            nodeListLeft: [
                { label: '旅指挥所', color: 'green', bgColor: '#f2f6ff' },
                { label: '贮存库', color: 'green', bgColor: '#f2f6ff' },
                { label: '技术阵地', color: 'green', bgColor: '#f2f6ff' },
                { label: '测试设备', color: 'green', bgColor: '#f2f6ff' },
                { label: '维修库', color: 'green', bgColor: '#f2f6ff' },
                { label: '发射车5', color: 'green', bgColor: '#f2f6ff' },
                { label: '发射车6', color: 'green', bgColor: '#f2f6ff' },
                { label: '发射车7', color: 'green', bgColor: '#f2f6ff' },
                { label: '发射车8', color: 'green', bgColor: '#f2f6ff' },
                { label: '发射车9', color: 'green', bgColor: '#f2f6ff' },
                { label: '发射车10', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹9', color: '#ffa800', bgColor: '#f2f6ff' },
                { label: '智能导弹10', color: '#ffa800', bgColor: '#f2f6ff' },
                { label: '智能导弹11', color: '#ffa800', bgColor: '#f2f6ff' },
                { label: '智能导弹12', color: '#ffa800', bgColor: '#f2f6ff' },
                { label: '智能导弹13', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹14', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹15', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹16', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹17', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹18', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹19', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹20', color: 'green', bgColor: '#f2f6ff' },
                { label: '自主贮存输送装在系统2', color: 'green', bgColor: '#f2f6ff' },
                { label: '转载运输车3', color: 'green', bgColor: '#f2f6ff' },
                { label: '转载运输车5', color: '#f40000', bgColor: '#f2f6ff' },
                { label: '转载运输车7', color: '#f40000', bgColor: '#f2f6ff' },
                { label: '转载运输车9', color: '#f40000', bgColor: '#f2f6ff' },
                { label: '转载运输车4', color: '#f40000', bgColor: '#f2f6ff' },
                { label: '转载运输车6', color: '#f40000', bgColor: '#f2f6ff' },
                { label: '转载运输车8', color: 'green', bgColor: '#f2f6ff' },
                { label: '转载运输车10', color: 'green', bgColor: '#f2f6ff' },
            ],
            nodeListRight: [
                { label: '发射车1', color: 'green', bgColor: '#f2f6ff' },
                { label: '发射车2', color: 'green', bgColor: '#f2f6ff' },
                { label: '发射车3', color: 'green', bgColor: '#f2f6ff' },
                { label: '发射车4', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹1', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹3', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹5', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹7', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹2', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹4', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹6', color: 'green', bgColor: '#f2f6ff' },
                { label: '智能导弹8', color: 'green', bgColor: '#f2f6ff' },
                { label: '自动贮存输送装在系统1', color: 'green', bgColor: '#f2f6ff' },
                { label: '装在运输车1', color: 'green', bgColor: '#f2f6ff' },
                { label: '装在运输车2', color: 'green', bgColor: '#f2f6ff' },
            ]
        };
    },
    computed: {

    },
    //监控data中的数据变化
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style lang='scss' scoped>
.content{
    width: 100%;
    display: flex;
}
.left{
   min-width: 328px;
}
.network-topology {
    background: #fff;
    padding: 26px;
    // margin-bottom: 80px;
    min-height: calc(100vh - 170px);
    -webkit-box-shadow: 0 2px 3px #dfe1e6;
    box-shadow: 0 2px 3px #dfe1e6;
    border-radius: 10px;
    font-size: 14px;
    color: #333333;
    flex: 1px;
    div.diamond {
        min-width: 100px;
        max-width: 120px;
        // padding: 0px 20px;
        text-align: center;
        height: 48px;
        line-height: 48px;
        border: 1px solid #2f75ee;
        border-radius: 5px;
        position: relative;

        span.line {
            width: 20px;
            height: 2px;
            border: 2px solid green;
            display: inline-block;
            position: absolute;
            right: -20px;
            top: 23px;
        }

        span.line-left {
            left: -20px;
        }
    }

    .line-height {
        line-height: 20px !important;
    }

    header {
        position: relative;

        .header-line {
            width: 661px;
            height: 2px;
            border: 2px solid green;
            position: absolute;
            top: 24px;
            left: 50px;
        }

        .header-line-two {
            width: 366px;
            height: 2px;
            border: 2px solid green;
            position: absolute;
            top: 73px;
            left: 404px;
        }

        .header-line-three {
            width: 572px;
            height: 2px;
            border: 2px solid green;
            position: absolute;
            top: 192px;
            left: 119px;
        }

        .header-line-four {
            width: 588px;
            height: 2px;
            border: 2px solid green;
            position: absolute;
            right: 81px;
            top: 195px;
        }

        .header-line-five {
            width: 327px;
            height: 2px;
            border: 2px solid green;
            position: absolute;
            right: 384px;
            top: 24px;
        }

        .main {
            .line {
                height: 29px !important;
                width: 2px !important;
                left: 59px !important;
                top: 47px !important;
            }
        }

        li.line-one {
            position: relative;
            margin-top: 70px;
            height: 48px;

            div {
                position: absolute;
                top: 0;
            }

            .one {
                .line {
                    width: 2px;
                    height: 95px;
                    top: -95px;
                    left: 49px;
                }
            }

            .two {
                left: 23%;

                .line {
                    width: 2px;
                    height: 41px;
                    left: 49px;
                    top: -42px;
                }
            }

            .three {
                right: 336px;

                .line {
                    width: 2px;
                    height: 95px;
                    left: 47px;
                    top: -95px;
                }
            }
        }

        .main {
            margin: 0 auto;
        }
    }

    section {
        display: flex;
        margin-top: 80px;

        &>div {
            width: 50%;
            height: 100%;
        }

        .left-container {
            display: flex;

            .item-column {
                margin-right: 42px;
                position: relative;

                &:last-child {
                    margin-top: 98px;
                }

                .column-item {
                    margin-bottom: 50px;

                    .diamond {}
                }
            }

        }

        .right-container {
            display: flex;
            margin-left: 120px;

            .item-column {
                margin-right: 42px;
                position: relative;

                .column-line-one {
                    left: -23px
                }

                .column-item {
                    margin-bottom: 50px;

                    .diamond {}
                }
            }
        }

        .column-line {
            width: 2px;
            height: 611px;
            border: 2px solid green;
            display: inline-block;
            position: absolute;
            right: -23px;
            top: -51px;
        }

        .column-line-long {
            height: 647px;
            top: -81px;
        }
    }
}
</style>