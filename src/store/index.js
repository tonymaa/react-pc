import LoginStore from "@/store/login.Store";
import React from 'react';

class RootStore {
    constructor() {
        this.loginStore = new LoginStore();
    }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useContext = () => React.useContext(context);

export default useContext