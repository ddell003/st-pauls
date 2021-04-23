export interface Event {
  name:string,
  description:string,
  picture:string,
  date:string,
  time?:string,
  raindate?:string
  embeded?:string
}

export interface RawEvent {
  name:string,
  description:string,
  pictureUrl:string,
  date:string,
  time?:string,
  raindate?:string
  embeded?:string
}
