import IndexField from './components/IndexField.vue';

Nova.booting((app, router) => {
    console.log('Nova Order Field booting', app);
    app.component('index-order-field', IndexField);
})
