import { markProductAsDiscount, productAdded } from './action';
import store from './store';

store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(
  productAdded({
    name: 'Product 1',
    price: 1500,
  })
);

store.dispatch(
  productAdded({
    name: 'Product 2',
    price: 1000,
  })
);

store.dispatch(
  productAdded({
    name: 'Product 3',
    price: 500,
  })
);

store.dispatch(markProductAsDiscount({ id: 1 }));
