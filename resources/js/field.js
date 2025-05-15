Nova.booting((app, router) => {
    const IndexField = require('./components/IndexField');
    console.log('Nova Order Field booting', IndexField);
    app.component('index-order-field', IndexField);
})
