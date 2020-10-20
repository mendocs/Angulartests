export class Cidade {
	public id: number;
	public idPais: number;
	public Nome: string;

	/**
	 *
	 */
	constructor(_id:number, _idPais:number, _nome: string) {
		this.id = _id;
		this.idPais = _idPais;
		this.Nome = _nome;
	}

}
