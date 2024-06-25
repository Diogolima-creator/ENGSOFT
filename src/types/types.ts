export interface Screen {
  page?: number
  setBike?: React.Dispatch<React.SetStateAction<Bike>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export interface BikeProps {
  bike: Bike
  setBike?: React.Dispatch<React.SetStateAction<Bike>>
  setPage?: React.Dispatch<React.SetStateAction<number>>
}

export interface Bike{
    name: string 
    img: string 
    energy: number 
    autonomy: number
    doca: number
}