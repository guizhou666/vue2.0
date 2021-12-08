/**
 * @description 弹窗组件
 */

import Vue from "vue"
import './dialog.less'

// interface Options {
//     title?: string; // 标题
//     width?: number; // 宽度
//     view?: any; // 内容组件
//     params?: any; // 携带的参数
//     action?: string; // 操作  新增'add' 编辑'edit' 查看详情'detail' 等
//     level?: boolean; // 是否二级弹框
//     showClose?: boolean; // 是否显示关闭按钮
//     closeValidate?: Function; // 关闭验证逻辑
//     showFooter?: false; // 是否显示底部按钮
//     showCloseButton?: boolean; // 是否显示关闭按钮
//     closeButtonText?: string; // 关闭按钮的显示文本
//     showConfirmButton?: boolean; // 是否显示确定按钮
//     confirmButtonText?: string; // 确定按钮的显示文本
// }

let instance = null // 弹窗控件
let level = null // 二级弹窗控件
let zIndex = 2000;
const DialogConstructor = Vue.extend({
    name: 'vc-dialog',
    data() {
        return {
            config: {
                title: '', // 弹窗标题
                width: 800, // 弹窗宽度
                view: null, // 内容组件
                params: {}, // 携带的参数
                flat: true, // 参数拉平
                action: 'add', // 操作
                level: false, // 是否二级弹窗
                visible: true, // 显示隐藏弹窗
                showClose: true, // 是否显示关闭按钮
                closeValidate: () => (true), // 关闭验证逻辑
                showFooter: false, // 是否显示底部按钮
                showCloseButton: true, // 是否显示关闭按钮
                closeButtonText: '关闭', // 关闭按钮的显示文本
                showConfirmButton: true, // 是否显示确定按钮
                confirmButtonText: '确定', // 确定按钮的显示文本
                disabled: false, // 禁用
            }
        }
    },
    render(createElement) {
        const {config} = this;
        return createElement('section', {
                class: 'vc-dialog', // 根 背景
                style: {
                    display: config.visible ? 'flex' : 'none',
                    zIndex
                }
            },
            [
                createElement('div', {
                        class: 'dialog-box', // 白色盒子
                        style: {
                            width: config.width + 'px'
                        },
                    },
                    [
                        createElement('div', {
                                class: 'dialog-header', // 头部
                            },
                            [
                                createElement('p', {
                                    class: 'dialog-title', // 标题
                                    domProps: {
                                        innerHTML: config.title
                                    }
                                }),
                                config.showClose ?
                                    createElement('span', {
                                        class: 'dialog-close', // 关闭
                                        on: {
                                            click: () => {
                                                this.close();
                                            }
                                        }
                                    }) : ''
                            ]
                        ),
                        createElement('div', {
                            class: 'dialog-body'
                        }, [
                            createElement(config.view, {
                                props: {
                                    closeDialog: this.close, // 关闭弹窗
                                    params: config.params, // 参数
                                    action: config.action, // 自定义动作
                                    ...config.params
                                }
                            })
                        ]),
                        config.showFooter ?
                            createElement('div',
                                {
                                    class: 'dialog-footer'
                                },
                                [
                                    config.showCloseButton ?
                                        createElement('el-button', {
                                            props: {
                                                type: 'empty',
                                                size: 'default',
                                                disabled: config.disabled,
                                            },
                                            on: {
                                                click: () => {
                                                    this.close();
                                                }
                                            }
                                        }, [config.closeButtonText]) : '',
                                    config.showConfirmButton ?
                                        createElement('el-button', {
                                            props: {
                                                type: 'primary',
                                                size: 'default',
                                                disabled: config.disabled,
                                            },
                                            on: {
                                                click: () => {
                                                    this.confirm();
                                                }
                                            }
                                        }, [config.confirmButtonText]) : ''
                                ]
                            ) : ''
                    ]
                )
            ]
        )
    },
    methods: {
        create(option) {
            this.config = {
                title: '', // 弹窗标题
                width: 800, // 弹窗宽度
                view: null, // 内容组件
                params: {}, // 携带的参数
                action: 'add', // 操作
                level: false, // 是否二级弹窗
                visible: true, // 显示隐藏弹窗
                showClose: true, // 是否显示关闭按钮
                closeValidate: () => (true), // 关闭验证逻辑
                showFooter: false, // 是否显示底部按钮
                showCloseButton: true, // 是否显示关闭按钮
                closeButtonText: '关闭', // 关闭按钮的显示文本
                showConfirmButton: true, // 是否显示确定按钮
                confirmButtonText: '确定', // 确定按钮的显示文本
                disabled: false,
                ...option
            }
            // 数据拷贝， 断开与原数据的联系
            if (this.config.params) {
                this.config.params = JSON.parse(JSON.stringify(this.config.params));
            }
        },
        /**
         * 关闭弹窗
         * @param args
         */
        $close(args) {
            this.resolve(args)
            this.config.visible = false;
            this.config.view = '';
            if (this.config.level) {
                level.resolve = null
            }
        },
        disabledDisable(disabled = true) {
            this.config.showClose = !disabled;
            this.config.disabled = disabled;
        },
        /**
         * 关闭弹窗
         * @param force true：强制关闭
         * @param args 回调参数
         */
        close(force = false, args) {
            if (force) {
                this.$close(args)
                return
            }
            const findChild = this.$children.find(child => typeof child.validateBeforeCloseDialog !== "undefined")
            // 在关闭弹窗之前验证
            if (findChild?.validateBeforeCloseDialog) {
                findChild.validateBeforeCloseDialog(this.$close, this.disabledDisable)
            } else {
                this.$close(args)
            }
        },
        /**
         * 确定
         */
        confirm() {
            const findChild = this.$children.find(child => typeof child.dialogConfirmButton !== "undefined")
            // 在关闭弹窗之前验证
            if (findChild?.dialogConfirmButton) {
                findChild.dialogConfirmButton(this.$close, this.disabledDisable)
            } else {
                this.$close()
            }
        },
        /**
         * 回调
         */
        resolve(args) {
            if (this.config?.level) {
                level.resolve(args)
            } else {
                instance.resolve(args)
            }
        }
    }
})

const initInstance = () => {
    const dialogBox = new DialogConstructor().$mount()
    document.body.appendChild(dialogBox.$el)
    return dialogBox;
}

const Dialog = function (options={}) {
    const elDialog = document.querySelector('.el-dialog__wrapper');
    if (elDialog?.style?.['z-index']) {
        zIndex = parseInt(elDialog?.style?.['z-index']) + 1;
    }
    if (!instance) {
        instance = initInstance()
    }
    if (options?.level && !level) {
        level = initInstance()
    }
    if (!options) {
        // 如果不传参数 则为关闭
        if (level && level.resolve) {
            level.close();
        } else {
            instance.close();
        }
        return;
    }
    return new Promise((resolve, reject) => {
        if (options?.level) {
            level.create(options);
            level.resolve = resolve
            level.reject = reject
        } else {
            instance.create(options);
            instance.resolve = resolve
            instance.reject = reject
        }
    })
}

export default Dialog

