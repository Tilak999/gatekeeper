export const Store = {
    _store : {} as any,
    put(key:string, value:any) {
        if(!key) return false
        this._store[key] = value
        return true
    },
    get(key:string) {
        if(!key) return false
        if(Object.keys(this._store).indexOf(key) > 0)
            return this._store[key]
        else
            throw new Error("Key not found")
    },
    remove(key: string) {
        if(!key) return false
        if(Object.keys(this._store).indexOf(key) > 0)
            return delete this._store[key]
    }
}