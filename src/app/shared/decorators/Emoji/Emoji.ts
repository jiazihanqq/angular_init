export function Emoji() {
    return function (target: object, key: string) {
        let val = target[key];

        const getter = () => {
            return val;
        }

        const setter = (value: string) => {
            val = `123 ${value} 123`;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}