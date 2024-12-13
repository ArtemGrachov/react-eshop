export const timeoutPromise = (timeout: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout);
  })
}
