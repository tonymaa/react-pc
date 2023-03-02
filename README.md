npm换源：npm config set registry http://registry.npmmirror.com

# HOOK

## UseState

UseState 为了使函数组件具有和类组件同样的state功能



## useEffect

对于函数主要做的事情之外，就是副作用

![image-20230302095903176](react.assets/image-20230302095903176.png)

![image-20230302100229645](react.assets/image-20230302100229645.png)

![image-20230302100441754](react.assets/image-20230302100441754.png)

## 自定义

![image-20230302101536863](react.assets/image-20230302101536863.png)

![image-20230302101550940](react.assets/image-20230302101550940.png)

### useLocalmemory

![image-20230302102222979](react.assets/image-20230302102222979.png)

![image-20230302102405819](react.assets/image-20230302102405819.png)

![image-20230302102418832](react.assets/image-20230302102418832.png)

## useEffect清理副作用

![image-20230302102713703](react.assets/image-20230302102713703.png)

## useEffect网络请求

![image-20230302102849073](react.assets/image-20230302102849073.png)

![image-20230302102945459](react.assets/image-20230302102945459.png)

## useRef 获取实例

![image-20230302103404067](react.assets/image-20230302103404067.png)

![image-20230302103449821](react.assets/image-20230302103449821.png)

![image-20230302103502176](react.assets/image-20230302103502176.png)

## useContext 跨级传数据

![image-20230302103709778](react.assets/image-20230302103709778.png)

![image-20230302103748119](react.assets/image-20230302103748119.png)

![image-20230302103736320](react.assets/image-20230302103736320.png)

## Provider位置

![image-20230302104206758](react.assets/image-20230302104206758.png)

放在index.js value改不了，静态的

放在app.js value可以改，动态的

# 路由嵌套

![image-20230302110003812](react.assets/image-20230302110003812.png)

默认渲染的二级路由

![image-20230302110108321](react.assets/image-20230302110108321.png)



# Mobx

![image-20230302131452826](react.assets/image-20230302131452826.png)

![image-20230302131649869](react.assets/image-20230302131649869.png)

![image-20230302131700699](react.assets/image-20230302131700699.png)

## 计算属性

![image-20230302132441149](react.assets/image-20230302132441149.png)

![image-20230302132835267](react.assets/image-20230302132835267.png)

## 模块化，包装Store（mobx）

![image-20230302133956140](react.assets/image-20230302133956140.png)

![image-20230302133557089](react.assets/image-20230302133557089.png)

![image-20230302133723396](react.assets/image-20230302133723396.png)



使用

![image-20230302133830041](react.assets/image-20230302133830041.png)



![image-20230302133818753](react.assets/image-20230302133818753.png)

![image-20230302133936717](react.assets/image-20230302133936717.png)

## 总结

![image-20230302134127333](react.assets/image-20230302134127333.png)





# PC项目

## 介绍

![image-20230302140530168](react.assets/image-20230302140530168.png)

## 搭建

![image-20230302140601018](react.assets/image-20230302140601018.png)



### scss预处理器

![image-20230302142517319](react.assets/image-20230302142517319.png)



### 路由配置

![image-20230302143624731](react.assets/image-20230302143624731.png)

![image-20230302143658700](react.assets/image-20230302143658700.png)

```js
function App() {
  return (
      // 路由配置
      <BrowserRouter>
          <div className="App">
              <Routes>
                  {/*路由对应关系和组件对应关系*/}
                  <Route path="/" element={ <Layout /> }></Route>
                  <Route path="/login" element={ <Login /> }></Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
```



### antd

```
yarn add antd
```

![image-20230302151455022](react.assets/image-20230302151455022.png)

![image-20230302152236900](react.assets/image-20230302152236900.png)

![image-20230302152259108](react.assets/image-20230302152259108.png)

![image-20230302152310142](react.assets/image-20230302152310142.png)

![image-20230302152317046](react.assets/image-20230302152317046.png)

### 配置别名路径

![image-20230302152424985](react.assets/image-20230302152424985.png)

```
yarn add -D @craco/craco
```

craco.config.js

* ```js
  const path = require("path")
  module.exports = {
      // webpack 配置
      webpack: {
          alias: {
              '@': path.resolve(__dirname, "src")
          }
      }
  }
  ```

  

* ![image-20230302152944052](C:/Users/ECQ/Documents/image-20230302152944052.png)
* ![image-20230302153019079](react.assets/image-20230302153019079.png)

效果：

![image-20230302153400944](react.assets/image-20230302153400944.png)

### @路径提示

![image-20230302153513579](react.assets/image-20230302153513579.png)

jsconfig.json

* ```json
  {
    "compilerOptions": {
      "baseUrl": "./",
      "paths": {
        "@/*": ["src/*"]
      }
    }
  }
  ```

  



## 登录模块

#### 结果搭建

![image-20230302153818106](react.assets/image-20230302153818106.png)

#### 封装http

![image-20230302160233733](react.assets/image-20230302160233733.png)

![image-20230302160330665](react.assets/image-20230302160330665.png)

```
yarn add axios
```

http.js

* ```js
  // 封装axios
  import axios from "axios";
  
  const http = axios.create({
      baseURL: "http://geek.itheima.net/v1_0",
      timeout: 5000
  })
  
  // 请求拦截器
  http.interceptors.request.use((config) => {
      return config
  }, (error) => {
      return Promise.reject(error)
  })
  
  // 响应拦截器
  http.interceptors.response.use((response) => {
      return response
  }, (error) => {
      return Promise.reject(error)
  })
  
  export {http}
  ```

#### 配置Mobx

![image-20230302160854839](react.assets/image-20230302160854839.png)



安装

```
yarn add mobx mobx-react-lite 
```



# to be continue: token持久化

