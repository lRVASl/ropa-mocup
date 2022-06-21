export function delayReturn<A>(data: A, timeout: number): Promise<A> {
  return new Promise<A>((resolve, reject) => {
    setTimeout(() => resolve(data), timeout)
  })
}

export const timeout = 300;
