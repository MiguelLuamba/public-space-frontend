export interface Countries{
  name: {
    common: string
  }
  flags:{ 
    png: string
    svg: string
  }
}

export interface FilteredCountries{
  name: string
  flag: string
}