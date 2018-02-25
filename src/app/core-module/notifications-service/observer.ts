// Cette interface permet de spécifier des objets Observateurs d'un objet  Observable
// Elle permet d'implémenter une méthode update dans laquelle seront spécifiés les 
// traitements qui seront réaliser lorsque l'objet observé change d'état
export interface Observer {

	update(idCard: number);

}
