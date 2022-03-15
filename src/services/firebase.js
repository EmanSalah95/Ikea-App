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
import { setCartItemAmount } from '../store/actions/cartProducts';

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
  addDoc(collection(fireStore, 'Products'), data)
    .then(() => {
      console.log('done');
    })
    .catch(err => console.log(err));
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
  await updateDoc(doc(fireStore, collName, ID), data)
    .then(() => {
      console.log('done');
    })
    .catch(err => console.log(err));
};

export const getDocumentByID = async (collName, ID) => {
  return await getDoc(doc(fireStore, collName, ID))
    .then(res => {
      return res.data();
    })
    .catch(err => console.log(err));
};

export const updateUserStorageByID = async ID => {
  return getDoc(doc(fireStore, 'users', ID))
    .then(res => {
      store.dispatch(changeUser({ id: ID, user: res.data() }));
    })
    .catch(err => console.log(err));
};

export const getCartItemsFromUser = async userID => {
  const res = await getDoc(doc(fireStore, 'users', userID));
  return res.data().CartItems;
};

export const addCartItemToUser = async (userID, productID) => {
  let cartItems = [];
  await getDoc(doc(fireStore, 'users', userID))
    .then(res => {
      if (res.data().CartItems) {
        cartItems.push(...res.data().CartItems);
      }
    })
    .catch(err => console.log(err));

  if (!cartItems.includes(productID))
    updateDoc(doc(fireStore, 'users', userID), {
      CartItems: [productID, ...cartItems],
    })
      .then(() => {
        console.log('cart items added to current user');
      })
      .catch(err => console.log('adding cart items to user ERROR: ' + err));
};

export const getProductDataById = async id => {
  const product = await getDoc(doc(fireStore, 'Products', id));
  return product.data();
};

export const removeCartItemFromUser = async (userID, productID) => {
  let cartItems = [];
  await getDoc(doc(fireStore, 'users', userID))
    .then(res => {
      if (res.data().CartItems) {
        cartItems.push(...res.data().CartItems);
      }
    })
    .catch(err => console.log(err));

  await updateDoc(doc(fireStore, 'users', userID), {
    CartItems: cartItems.filter(id => id !== productID),
  });
};

export const removeAllCartItemFromUser = async userID => {
  await updateDoc(doc(fireStore, 'users', userID), {
    CartItems: [],
  });
};

export const addDocByID = async (collName, ID, data) => {
  await setDoc(doc(fireStore, collName, ID), data);
};

// Function that use it in fav page
export const addFavItemsToUser = async (userID, productID) => {
  let favItems = [];
  await getDoc(doc(fireStore, 'users', userID))
    .then(res => {
      if (res.data().FavItems) {
        favItems.push(...res.data().FavItems);
      }
    })
    .catch(err => console.log(err));

  if (!favItems.includes(productID))
    updateDoc(doc(fireStore, 'users', userID), {
      FavItems: [productID, ...favItems],
    })
      .then(() => {
        console.log('Favourite items added to current user');
      })
      .catch(err =>
        console.log('adding Favourite items to user ERROR: ' + err)
      );
};

export const addAllFavItemsToCart = async userID => {
  const favItems = [];
  const cartItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    favItems.push(...res.data().FavItems);
    cartItems.push(...res.data().CartItems);
  });

  const allItems = [...favItems, ...cartItems];

  const uniqueItems = [...new Set(allItems)];

  updateDoc(doc(fireStore, 'users', userID), {
    CartItems: uniqueItems,
  });
};

export const removeFavItemFromUser = async (userID, productID) => {
  let favItems = [];
  await getDoc(doc(fireStore, 'users', userID))
    .then(res => {
      if (res.data().FavItems) {
        favItems.push(...res.data().FavItems);
      }
    })
    .catch(err => console.log(err));

  await updateDoc(doc(fireStore, 'users', userID), {
    FavItems: favItems.filter(id => id !== productID),
  });
};

export const removeAllFavItemsFromUser = async userID => {
  await updateDoc(doc(fireStore, 'users', userID), {
    FavItems: [],
  });
};

export const getFavItemsFromUser = userID => {
  return getDoc(doc(fireStore, 'users', userID))
    .then(res => {
      return res.data().FavItems;
    })
    .catch(err => console.log(err));
};

// Search

export const getFirst4Categories = async () => {
  const q = await query(collection(fireStore, 'subCategory'), limit(10));

  let results = await getDocs(q);
  // store.dispatch(changeLoader(false));
  let categories = [];
  results.forEach(res => {
    categories.push({ id: res.id, data: res.data() });
    console.log(categories);
    console.log(res);
  });

  return categories;
};

export const getProductCatById = id => {
  return getDoc(doc(fireStore, 'ProductCategories', id))
    .then(productCategories => {
      return productCategories.data();
    })
    .catch(err => console.log(err));
};

export const setUserLocation = async (userID, locationData) => {
  const locations = [];

  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().Locations) {
      locations.push(...res.data().Locations);
    }
  });

  updateDoc(doc(fireStore, 'users', userID), {
    Locations: [locationData, ...locations],
  })
    .then(() => {
      console.log('Location added to current user');
    })
    .catch(err => console.log('adding location to user ERROR: ' + err));
};

export const createNewOrder = async data => {
  await addDoc(collection(fireStore, 'Orders'), {
    CreatedAt: data.createdAt,
    Items: data.items,
    Status: data.status,
    TotalPrice: data.totalPrice,
    UserID: data.userId,
    CheckedAddress: data.checkedAddress,
  })
    .then(async newDoc => {
      let purchased = [];
      await getDoc(doc(fireStore, 'users', data.userId)).then(res => {
        if (res.data().Purchased) {
          purchased.push(...res.data().Purchased);
        }
      });
      updateDoc(doc(fireStore, 'users', data.userId), {
        Purchased: [newDoc.id, ...purchased],
      });
      updateUserStorageByID(data.userId);
    })
    .then(() => {
      data.items.map(async item => {
        const res = await getDocumentByID('Products', item.ProductID);
        updateData('Products', item.ProductID, {
          Quantity: item.Amount > res.Quantity ? 0 : res.Quantity - item.Amount,
        });

        store.dispatch(setCartItemAmount(item.ProductID, 0));
      });
    });
};

export const deleteDocument = (id, collName) => {
  return deleteDoc(doc(fireStore, collName, id));
};

export const genericFilter = async filterObj => {
  let keys = Object.keys(filterObj);
  let mixedQ = null;
  let sort = null;

  keys.forEach((item, index, object) => {
    if (item == 'Sort') {
      sort = filterObj[item];
      object.splice(index, 1);
    }
  });

  let length = keys.length;

  let results = [];
  let err = null;

  try {
    if (sort) {
      switch (length) {
        case 0:
          mixedQ = query(collection(fireStore, 'Products'), orderBy(...sort));
          break;

        case 1:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            orderBy(...sort)
          );
          break;

        case 2:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            orderBy(...sort)
          );
          break;

        case 3:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]]),
            orderBy(...sort)
          );
          break;

        case 4:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]]),
            where(...filterObj[keys[3]]),
            orderBy(...sort)
          );
          break;

        default:
          break;
      }
    } else {
      switch (length) {
        case 1:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]])
          );
          break;

        case 2:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]])
          );
          break;

        case 3:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]])
          );
          break;

        case 4:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]]),
            where(...filterObj[keys[3]]),
            orderBy(...sort)
          );
        default:
          break;
      }
    }
    results = await getDocs(mixedQ);
  } catch (error) {
    err = error;
  }

  return err ? err : results.docs;
};
