export default {
    createPackage: (myPackage) => fetch("http://localhost:8080/minipackage", {
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(myPackage)
    }),

    getAll: () => fetch("http://localhost:8080/minipackage", 
    {
        headers: new Headers({'Content-Type': 'application/json'}),
        mode: 'cors'
    }),
}