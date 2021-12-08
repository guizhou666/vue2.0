// import Layout from './layout';
// import Header from './header';
// import Nav from './nav';
// import Breadcrumb from './breadcrumb';
// import OperationPanel from './operation-panel';
// import EmptyPanel from './empty-panel';
// import Scrollbar from './scrollbar';
// import Tree from './tree';
// import Pagination from './pagination';
// import Datepicker from './date-picker';
// import Tooltip from './tooltip';
import Dialog from './dialog/dialog';
// import UploadFiles from './upload-files';


// const components = {
//     Layout,
//     Header,
//     Nav,
//     Breadcrumb,
//     OperationPanel,
//     EmptyPanel,
//     Scrollbar,
//     Tree,
//     Pagination,
//     Datepicker,
//     Tooltip
// };
const install = function (Vue) {
    // for (const component of Object.values(components)) {
    //     Vue.component(component.name, component);
    // }
    Vue.prototype.$dialog = Dialog;
    // Vue.prototype.$uploadFiles = UploadFiles;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '1.0.0',
    install,
    // ...components,
};
