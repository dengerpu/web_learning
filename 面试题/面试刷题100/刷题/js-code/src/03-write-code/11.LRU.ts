
class LRUCache {
  private length: number = 0
  private cache: Map<any, any> = new Map()
  constructor(length: number) {
    if(length < 1) throw new Error('length must be greater than 0')
    this.length = length
  }

  set(key: any, value: any) {
    if(this.cache.has(key)) {
      this.cache.delete(key)
    }
    this.cache.set(key, value)
    if(this.cache.size > this.length) {
      // 删除最久未使用的
      this.cache.delete(this.cache.keys().next().value)
    }
  }

  get(key: any) {
    if(this.cache.has(key)) {
      const value = this.cache.get(key)
      // 删除后重新插入
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
    }
    return null
  }
}

const lruCache = new LRUCache(2)
lruCache.set(1, 1) // {1=1}
lruCache.set(2, 2) // {1=1, 2=2}
console.info(lruCache.get(1)) // 1 {2=2, 1=1}
lruCache.set(3, 3) // {1=1, 3=3}
console.info(lruCache.get(2)) // null
lruCache.set(4, 4) // {3=3, 4=4}
console.info(lruCache.get(1)) // null
console.info(lruCache.get(3)) // 3 {4=4, 3=3}
console.info(lruCache.get(4)) // 4 {3=3, 4=4}