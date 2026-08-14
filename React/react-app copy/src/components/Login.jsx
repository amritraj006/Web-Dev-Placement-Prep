import { X } from "lucide-react";
import { useAppContext } from "../contexts/AppContext";


const Login = () => {
    const {setOpenLogin} = useAppContext();
    return (
        <div className="fixed inset-0 bg-linear-30 opacity-85 from-slate-100 via-blue-200 to-gray-300">
            <X onClick={() => setOpenLogin(false)} className="absolute top-7 text-black font-bold right-25"/>
        </div>
    )

};

export default Login;