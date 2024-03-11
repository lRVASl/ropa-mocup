type ILocation = {
  replace: (targetPage: string) => void,
  search: string
}

export type IWindowLocation = {
  redirect: (targetPage: string) => void,
}

export const WindowLocation = (location: ILocation): IWindowLocation => ({
  redirect: (targetPage: string) => location.replace(targetPage)
})