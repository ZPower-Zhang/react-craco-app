import { useEffect } from 'react'
export function asyncAwait (promise) {
  return promise.then(res => { return res}).catch(() => null)
}

export const useAsyncEffect = (func, deps = []) => { 
  useEffect(()=> {
    (async () => {
      await func()
    })()
  }, deps)
}
