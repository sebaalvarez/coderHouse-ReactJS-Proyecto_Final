# Tienda de Bebidas Online

Desarrollo de una tienda online para la venta de bebidas, utilizando todo lo aprendido en las clases del curso.

---

Descripción de la funcionalidad:

✅ Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.

✅ Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito.

✅ Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total.

✅ Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para corroborar que sea correcto), debe poder proseguir con la compra.

✅ Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.

## Componentes principales utilizados:

- NavBar
- CartWidget
- ItemListContainer
- ItemList
- ItemDetailContainer
- ItemDetail
- ItemQuantitySelector
- Description
- AddItemButton
- Checkout
- Brief (detalle de compra)

---

---

# Consignas de entregas anteriores

---

---

# 2º Pre Entrega:

# Consigna

✅ Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom

✅ Deberás desarrollar la navegabilidad básica de la aplicación, demostrando que la app permite ver el catálogo, y navegar a un detalle.

✅ Componentes:

1. Navbar con cart
2. Catálogo
3. Detalle de producto

# Se debe entregar

✅ Rutas a configurar:

- ‘/’ navega a <ItemListContainer />
- ‘/category/:id’ navega a <ItemListContainer />
- ‘/item/:id’ navega a <ItemDetailContainer />

✅ Links a configurar:

- Clickear en el brand debe navegar a ‘/’
- Clickear un Item.js debe navegar a /item/:id
- Clickear en una categoría del navbar debe navegar a /category/:Id

---

# 1º Pre Entrega:

# Consigna

✅ Crea una carpeta dentro de src llamada components que contenga la implementación del componente NavBar dentro del archivo NavBar.js. Su funcionalidad es la de renderizar una barra de menú (Navbar).

✅ Crea un componente CartWidget con un ícono y una notificación mostrando un número hardcodeado (fijo). Este servirá luego para indicar la cantidad de elementos que tenemos en el carrito, pero por ahora, mostrará un número hardcodeado (colocado en el código). Ubica este componente (CartWidget) dentro de Navbar.. Agrega algunos estilos con bootstrap/materialize u otro.

✅ Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.

# Se debe entregar

✅ Crea un componente CartWidget.js que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.

✅ Crea un componente ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js.

crear el contexto
crear un hook para get data firestore y ponerlo el app para poder hacer el carrito visible en toda la app
activar el botón add to cart
crear página para el cart que muestre lo agregado

---
