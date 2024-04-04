// Write To Locale Storage
export function writeToLocaleStorage(type, store, data) {
  const array = JSON.parse(globalThis?.localStorage?.getItem(type)) || [];
  const x = array?.find((el) => el.id === data.id);
  if (x?.id) {
    store.deleteCart(data.id);
    return false;
  } else {
    store.addCart({
      ...data,
      count: data?.count || 1,
    });
    return true;
  }
}

// Check From Locale Storage
export function checkFromLocaleStorage(type, data) {
  const array = JSON.parse(globalThis?.localStorage?.getItem(type)) || [];
  const x = array?.find((el) => el.id == data.id);
  if (x?.id) {
    return true;
  } else {
    return false;
  }
}
