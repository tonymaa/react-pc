import React from 'react';
import App from './App';
import "./index.scss";
import { createRoot } from 'react-dom/client';
// 导入antd样式文件
import 'antd/dist/reset.css';
// 导入index.scss文件
import './index.scss'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
