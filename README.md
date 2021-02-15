# Account Manager

##### Micro-frontend architecture example with [Angular](https://angular.io/) and [Single-SPA](https://single-spa.js.org/) 

---

### How to run
After `docker-compose up --build` the application will be available on [localhost](http://localhost).

### Architecture
> in a nutshell...
```text
 _______        ______        _________________________________________________
/MongoDB\      |      |      |Root Config                                      |
|-.___.-|<-----|SB API|<-----|  ______     ______________     _______________  |
|-.___.-|      |______|      | |Navbar|   |Account Search|   |Account Details| |
'-.___.-'                    | |______|   |______________|   |_______________| |
                             |_________________________________________________|
```

### Development

##### The hard way
1. In a terminal navigate to `fe/root-config` and execute `npm i` to install the dependencies and `npm start` to deploy the application on the port [80](http://localhost).
2. In another terminal navigate to `fe/navbar` and execute `npm i` to install the dependencies and `npm serve:single-spa:navbar` to deploy the application on the port [4200](http://localhost:4200).
3. In another terminal navigate to `fe/account-search` and execute `npm i` to install the dependencies and `npm serve:single-spa:account-search` to deploy the application on the port [4201](http://localhost:4201).
4. In another terminal navigate to `fe/account-details` and execute `npm i` to install the dependencies and `npm serve:single-spa:account-details` to deploy the application on the port [4202](http://localhost:4202).

If you open your browser, you'll be able to see the application running on [localhost](http://localhost).
> however...

Notice that if you open any of the [localhost:4200](http://localhost:4200), [localhost:4201](http://localhost:4201) or [localhost:4202](http://localhost:4202) you'll see nothing but a blank page.
This is because this is a single page application - the single page is served on the port [80](http://localhost) and all the other applications do nothing but compile and serve a `main.js` file to be imported in the root component. 

##### The easy way

If you have an instance of the whole application with all the micro-frontends up and running, with the help of [import-map-overrides](https://github.com/joeldenning/import-map-overrides) it is possible to override the imported scripts of the single page application.

If you have a development environment up and running, you should enable [import-map-overrides](https://github.com/joeldenning/import-map-overrides):

```html
<import-map-overrides-full show-when-local-storage="devtools"></import-map-overrides-full>
```

Otherwise, you can start with it with docker-compose and just run one of the applications with the following command:

```shell script
ng s --disable-host-check --port ${YOUR_UNUSED_PORT} --deploy-url http://localhost:${YOUR_UNUSED_PORT}
```

> with docker compose you run everything in production mode, but import-map-overrides is enabled all the time...

What this does, when you open up the application on the development environment or on your localhost, you will see a small `{...}` icon on the bottom right corner of the screen.
Open it and override the selected application with your locally running instance on `localhost:{YOUR_UNUSED_PORT}`.

### Goods and bads in this project

##### What did I do well?

* It's working!

##### What could I have done better?

* The angular components are too small, e.g. all the icons you see have their own component instead of a general component.
* I tried to make the `table` component reusable, which in the end was successful. However, it is way over engineered.
* Some dependencies should be updated.
* There might not be a better way, but I believe the routing could be improved.
* Maybe write at least 1 test?

### Why did I choose [Angular](https://angular.io/)?

* Uses [TypeScript](https://www.typescriptlang.org/) by default which is epic for someone who's coming from the strongly typed world of java.
* Separated `html`, `css` and `js` files for a component makes it easy to navigate and read.
* It is a whole framework with awesome utilities so that I can concentrate on the business logic.
* Great CLI helps us creating all the components, services, pipes, etc...

### Why did I choose [Single-SPA](https://single-spa.js.org/)?

* It was the first result on Google...
* Easy to configure, well(ishly) documented.
* The generated files are full of useful comments - what to do if I want to enable/disable/add/remove this or that.
* Open-source and well maintained.
* Any type of front-end application can be mixed in exactly the same way as the others.
* Great CLI helps us creating all the applications with the additional settings that's necessary for the single page setup - the root configuration and any type of front-end applications - making it possible to have a micro-frontent architecture almost completely out-of-the-box.

### What should be considered for production?

* If you have multiple teams working on the same single page application, it's best to have a library with many-many reusable components so that you can give the application a uniform look and pleasant feel.
* Also in the above case, if you are using more than 1 framework/library to compose the single page application, you should be prepared to create the same reusable components for each micro-frontend service.
* For a full delivery process it might be the best to have 3 environments set up:
  * `dev` - where `import-map-overrides` is enabled for developers
  * `tst` - where the application can be tested
  * `prd` - live deployment of the application
