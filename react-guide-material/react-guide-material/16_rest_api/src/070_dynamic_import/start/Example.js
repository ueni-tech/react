import {add} from './add';
const Example = () => {
  import('./add').then(module => {
    console.log(module);
  })
  console.log(add(1 ,3));
};

export default Example;
