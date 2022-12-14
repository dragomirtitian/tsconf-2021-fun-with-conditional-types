export {};

export class FormData<T extends object> {
  constructor(private data: T) {}

  private isValidByField: any;

  // Should be a bool for every field
  // or might not exist if validation was not performed
  // Should not be chnaged readonly!
  getValidity(): any { this.isValidByField; }

  // Should be readonly, don't change the object!
  getData(): T { return this.data; }

  /// Set some fields
  setSome(someFields: T) { Object.assign(this.data, someFields); }

  // Must provide values for all fields even the optional ones
  setAll(allFields: T) { this.data = allFields;}
}
