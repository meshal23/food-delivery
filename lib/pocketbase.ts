/* eslint-disable prettier/prettier */
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.REACT_APP_POCKETBASE_URL);
console.log(pb);

export default pb;
