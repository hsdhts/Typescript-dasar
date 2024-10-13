export interface HasName {
    name : string
}

export interface HasId {
    id : number
}

export type Domain =  HasId & HasName;