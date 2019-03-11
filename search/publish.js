import VueSearch from './index';

// add autoinstall support if the component is attached to the windows object e.g. if added by CDN
VueSearch.install = Vue => Vue.component(VueSearch.name, VueSearch);
if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VueSearch);

export {
    VueSearch
};

export default VueSearch;
