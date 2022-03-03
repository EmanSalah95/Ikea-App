import {
  collection,
  where,
  getDocs,
  query,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  orderBy,
  setDoc,
  limit,
  deleteDoc,
} from 'firebase/firestore';
import { fireStore } from '../config/firebaseConfig';
import { changeLoader } from './../store/actions/loader';
import { changeUser } from './../store/actions/auth';
import store from './../store/store';

export const getCollection = async (collName, condition = undefined) => {
  //dispatch loading
  store.dispatch(changeLoader(true));

  const q = condition
    ? query(collection(fireStore, collName), where(...condition))
    : collection(fireStore, collName);

  let results = await getDocs(q);
  store.dispatch(changeLoader(false));

  //dispatch finish loading

  return results.docs;
};

export const addData = data => {
  addDoc(collection(fireStore, 'Products'), data).then(() => {
    console.log('done');
  });
};

export const filterCollection = async (
  collName,
  secondCond,
  condition = undefined
) => {
  //dispatch loading
  store.dispatch(changeLoader(true));

  const mixedQ = query(
    collection(fireStore, collName),
    where(...condition),
    where(...secondCond)
  );
  let results = await getDocs(mixedQ);

  //dispatch finish loading
  store.dispatch(changeLoader(false));

  return results.docs;
};

export const sortCollection = async (condition, sortProp, order) => {
  store.dispatch(changeLoader(true));

  const sortQ = query(
    collection(fireStore, 'Products'),
    where(...condition),
    orderBy(sortProp, order)
  );

  //dispatch loading

  let results = await getDocs(sortQ);

  //dispatch finish loading
  store.dispatch(changeLoader(false));

  return results.docs;
};

export const updateData = async (collName, ID, data) => {
  await updateDoc(doc(fireStore, collName, ID), data).then(() => {
    console.log('done');
  });
};

export const getDocumentByID = async (collName, ID) => {
  return await getDoc(doc(fireStore, collName, ID)).then(res => {
    return res.data();
  });
};

export const updateUserStorageByID = async ID => {
  return getDoc(doc(fireStore, 'users', ID)).then(res => {
    store.dispatch(changeUser({ id: ID, user: res.data() }));
  });
};

export const getCartItemsFromUser = userID => {
  return getDoc(doc(fireStore, 'users', userID)).then(res => {
    return res.data().CartItems;
  });
};

export const addCartItemToUser = async (userID, productID) => {
  let cartItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().CartItems) {
      cartItems.push(...res.data().CartItems);
    }
  });

  updateDoc(doc(fireStore, 'users', userID), {
    CartItems: [productID, ...cartItems],
  })
    .then(() => {
      console.log('cart items added to current user');
    })
    .catch(err => console.log('adding cart items to user ERROR: ' + err));
};

export const getProductDataById = id => {
  return getDoc(doc(fireStore, 'Products', id)).then(product => {
    return product.data();
  });
};

export const removeCartItemFromUser = async (userID, productID) => {
  let cartItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().CartItems) {
      cartItems.push(...res.data().CartItems);
    }
  });

  await updateDoc(doc(fireStore, 'users', userID), {
    CartItems: cartItems.filter(id => id !== productID),
  });
};
export const addDocByID = async (collName, ID, data) => {
  await setDoc(doc(fireStore, collName, ID), data);
};

// Function that use it in fav page
export const addFavItemsToUser = async (userID, productID) => {
  let favItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().FavItems) {
      favItems.push(...res.data().FavItems);
    }
  });

  updateDoc(doc(fireStore, 'users', userID), {
    FavItems: [productID, ...favItems],
  })
    .then(() => {
      console.log('Favourite items added to current user');
    })
    .catch(err => console.log('adding Favourite items to user ERROR: ' + err));
};

export const removeFavItemFromUser = async (userID, productID) => {
  let favItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().FavItems) {
      favItems.push(...res.data().FavItems);
    }
  });

  await updateDoc(doc(fireStore, 'users', userID), {
    FavItems: favItems.filter(id => id !== productID),
  });
};

export const getFavItemsFromUser = userID => {
  return getDoc(doc(fireStore, 'users', userID)).then(res => {
    return res.data().FavItems;
  });
};
// Search

export const getFirst4Categories = async () => {
  const q = await query(collection(fireStore, 'subCategory'), limit(10));

  let results = await getDocs(q);
  // store.dispatch(changeLoader(false));

  let categories = [];

  results.forEach(res => {
    categories.push({ id: res.id, data: res.data() });
  });

  return categories;
};

export const getProductCatById = id => {
  return getDoc(doc(fireStore, 'ProductCategories', id)).then(
    productCategories => {
      return productCategories.data();
    }
  );
};

export const deleteDocument=(id,collName)=>{
  return deleteDoc(doc(fireStore,collName,id));
}