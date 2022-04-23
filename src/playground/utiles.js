// export --> default exporting , named exporting


console.log('utiles is running !!!');

export const squer =(x) => x*x ;
export const add =(a,b) => a+b ;
// use export

// export { squer,add };  this is a sample of default exporting
// all though you can do it one more way: export const,function,... ;

// so what should i do if i want to use named export for the others? it will crash the defalt.
// this is what we do:

// const subtract = (a,b) => a-b ;
// export default subtract;

// we can make it even shorter: 
export default (a,b) => a-b ;
// it still work