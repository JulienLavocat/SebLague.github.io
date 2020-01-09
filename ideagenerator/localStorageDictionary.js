class LocalStorageDictionary {

	constructor(name) {

		this.prefix = name;
		this.length = localStorage.getItem(this.prefix + ".length");

	}

}