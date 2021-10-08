declare namespace API {
  type PageInfo = {
    page: number
    size: number
  }
  type BaseResponse<T> = {
    code: string
    data: T
    msg: string
  }
  type PickColumn = {
    id: string
    text: string
  }
}
