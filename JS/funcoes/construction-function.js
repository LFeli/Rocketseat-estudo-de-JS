function Person(name){
    this.name = name
    this.walk = () => {
        return 'andando'
    }
}
const mayk = new Person('Mayk')
console.log(mayk.name);