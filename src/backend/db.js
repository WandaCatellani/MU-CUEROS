import { getFirestore } from "./firebase/Firebase";

/* PRODUCTS
-------------------------------------------------- */
export function getProducts() {
  return new Promise((resolve, reject) => {
    const query = getFirestore().collection("item").limit(10);
    // Pedimos los datos
    query.get().then((response) => {
      if (response.size === 0) reject("Empty");
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      resolve(data);
    });
  });
}

export function getProductsById(id) {
  return new Promise((resolve, reject) => {
    const query = getFirestore().collection("item").doc(id);
    // Pedimos los datos
    query.get().then((response) => {
      if (response.size === 0) reject("Empty");
      const data = { ...response.data(), id: response.id };
      resolve(data);
    });
  });
}

/* CATEGORIES
-------------------------------------------------- */
export function getCategory() {
  return new Promise((resolve, reject) => {
    const query = getFirestore().collection("categories");

    query.get().then((response) => {
      if (response.size === 0) reject("Empty");
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      resolve(data);
    });
  });
}

export function getCategoryById(categoryId) {
  return new Promise((resolve, reject) => {
    const query = getFirestore()
      .collection("item")
      .where("categoryId", "==", `${categoryId}`);

    query.get().then((response) => {
      if (response.size === 0) reject("Empty");
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      resolve(data);
    });
  });
}

/* const productsDetails = [
  {
    id: 10,
    categoryId: 1,
    title: "Samsung",
    model: "Note 20 Ultra",
    description:
      "Pantalla: 6.9 Procesador: Snapdragon 865+ 3.09GHz RAM: 8GB/12GB Almacenamiento: 512GB Cámara: Triple, 108MP+12MP+12MP Batería: 4500 mAh OS: Android 10 Peso: 208 g",
    picture:
      "https://www.muycomputer.com/wp-content/uploads/2020/07/Galaxy-Note-20-Ultra-portada.jpg",
    price: 95900,
    stock: 12,
    warranty: "Garantía de fábrica: 30 días",
  },
  {
    id: 20,
    categoryId: 2,
    title: "Apple",
    model: "iPhone 12 Pro 128 GB",
    description:
      "Pantalla OLED de 6,1 Procesador: Apple A14 Ram: 6 GB iOS: 14 Cámara: 12 MP f/1.6 26mm OIS Batería: Carga rápida hasta 20W MagSafe 15W Carga Qi de 7,5W Peso: 189 gramos",
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_609847-MLA43976066289_112020-O.webp",
    price: 94999,
    stock: 15,
    warranty: "Garantía de fábrica: 30 días",
  },
  {
    id: 30,
    categoryId: 3,
    title: "Xiaomi",
    model: "Redmi Note 9 64GB",
    description:
      "Pantalla: 6.53 RAM: 3GB/4GB Almacenamiento: 64GB/128GB Cámara: Cuádruple, 48MP+8MP +2MP+2MP Batería: 5020 mAh OS: Android 10 Peso: 199 g",
    picture:
      "https://maxihogar.vteximg.com.br/arquivos/ids/162465-1000-1000/19003431-Celular-Xiaomi-Redmi-Note-9-64GB.png?v=637341287082270000",
    price: 80500,
    stock: 10,
    warranty: "Garantía de fábrica: 30 días",
  },
]; */

/* export const getProducts = () => {
  return new Promise((resolve) => {
    resolve(productsDetails);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    resolve(productsDetails.find((product) => product.id === id));
  });
}; */
