export function Dialog(value: string){
    return (target: object , key: string, descriptor :PropertyDescriptor) => {
        // 存储原来的函数
        const original = descriptor.value;
        descriptor.value = function(...args: any){
            const allow = window.confirm(value);
            if(allow){
                const result = original.apply(this, args)
                return result;
            }
            return null;
        }
        return descriptor;
    }
}