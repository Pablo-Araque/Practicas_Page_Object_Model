import TodoPage from '../PageObjetModel/GestionTareas';

describe('Pruebas Métodos', () => {
  const todoPage = new TodoPage();


  beforeEach(() => {
    todoPage.visitarPagina();
  });


  it('Añadir tarea', () => {
    todoPage.agregarTarea('Comprar un coche')
  })


  it('Borrar tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.borrarTarea('Hacer la compra')
  })


  it('Marcar tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.marcarTarea('Hacer la compra')
  })

  it('Filtrar Tarea Completada', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.marcarTarea('Hacer la compra')
    todoPage.filtrarTareaCompletadas()
  })

  it('Filtrar Tarea Activa', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.filtrarTareaActivas()
  })
})