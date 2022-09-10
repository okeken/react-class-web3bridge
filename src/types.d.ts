

export type Count = {
    rate:number
      count:number
  }

export type Data = {
    image:string
    id:number
    title:string
    price:number
    description:string
    rating:Count
  }

 export type InitialData ={
    data:any
    loading:boolean
    hasError:boolean
}