export interface PokemonResponsive {
    count: number
    next: string
    previous: any
    results: Result[]
  }
  
  export interface Result{
    name: string
    url: string
  }