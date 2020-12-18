// 导出各种接口
import myaxios from "../myaxios/myaxios"
export const login = (params) =>
    myaxios.post("admin/login", params).catch((err) => console.log(err));

// 退出接口
export const exit = () => {
    return myaxios.get("admin/signout").catch(err => { console.log(err) })
}