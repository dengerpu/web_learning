import { customNew } from './04.new'

describe('自定义 new',() => {
    it('new', () => {
        class Foo {
            // 属性
            name: string
            city: string
            n: number

            constructor(name: string, n: number) {
                this.name = name
                this.city = '北京'
                this.n = n
            }

            getName() {
                return this.name
            }
        }
        const f = customNew<Foo>(Foo, '张三', 100)
        expect(f.name).toBe('张三')
        expect(f.city).toBe('北京')
        expect(f.n).toBe(100)
        expect(f.getName()).toBe('张三')
    })
})