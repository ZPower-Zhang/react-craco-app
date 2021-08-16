export function asyncAwait (promise) {
  return promise.then(res => { return res}).catch(() => null)
}
